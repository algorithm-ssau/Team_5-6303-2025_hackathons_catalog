from flask import Flask, render_template, session, redirect, url_for, request
import os
import hashlib
import hmac
# import json # json не используется напрямую в этом варианте, но может понадобиться
import time
from urllib.parse import unquote
from datetime import datetime

app = Flask(__name__)

# ВАЖНО: Установи свой собственный секретный ключ! 
# Для продакшена лучше брать из переменных окружения.
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'ЗАМЕНИ_МЕНЯ_НА_СУПЕР_СЕКРЕТНЫЙ_КЛЮЧ_!@#$%^') 

# ЗАМЕНИ НА СВОЙ ТОКЕН БОТА ИЗ @BotFather
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', "YOUR_ACTUAL_TELEGRAM_BOT_TOKEN")

# Для {% now %} в Jinja2
@app.context_processor
def inject_now():
    return {'now': datetime.utcnow}

# --- Маршруты для основных страниц ---
@app.route('/')
def index():
    user = session.get('telegram_user')
    return render_template('Main/main.html', user=user, active_page='main')

@app.route('/hackathons')
def list_hackathons():
    user = session.get('telegram_user')
    return render_template('Listhackathons/hackathons.html', user=user, active_page='hackathons')

@app.route('/organizers')
def organizers_page():
    user = session.get('telegram_user')
    return render_template('Organizers/organizers.html', user=user, active_page='organizers')

@app.route('/about')
def about_page():
    user = session.get('telegram_user')
    return render_template('about/about.html', user=user, active_page='about')

# --- Маршруты для страниц из подвала ---
@app.route('/for-company')
def for_company_page():
    user = session.get('telegram_user')
    # Создай templates/Podval/ForCompany.html с базовым содержимым
    return render_template('Podval/ForCompany.html', title="Для компаний", user=user, active_page='for_company') 

@app.route('/participants')
def participants_page():
    user = session.get('telegram_user')
    return render_template('Podval/Participants.html', title="Для участников", user=user, active_page='participants')

@app.route('/privacy-policy')
def privacy_policy_page():
    user = session.get('telegram_user')
    return render_template('Podval/Politica.html', title="Политика обработки персональных данных", user=user, active_page='privacy_policy')

# --- Логика Telegram Login ---
def check_telegram_authorization(auth_data):
    # Копируем данные, чтобы не изменять оригинал, если он понадобится
    data_to_check = auth_data.copy()
    received_hash = data_to_check.pop('hash', None)

    if received_hash is None:
        return False

    data_check_arr = []
    for key, value in sorted(data_to_check.items()):
        data_check_arr.append(f"{key}={value}")
    
    data_check_string = "\n".join(data_check_arr)
    
    secret_key = hashlib.sha256(TELEGRAM_BOT_TOKEN.encode()).digest()
    calculated_hash = hmac.new(secret_key, msg=data_check_string.encode(), digestmod=hashlib.sha256).hexdigest()
    
    return calculated_hash == received_hash

@app.route('/telegram_auth')
def telegram_auth():
    auth_data = {}
    for key, value in request.args.items():
        auth_data[key] = unquote(value)

    if not auth_data or 'hash' not in auth_data:
        app.logger.error("Telegram auth failed: Not enough data or no hash.")
        return "Ошибка: Недостаточно данных для авторизации.", 400

    # Проверка давности авторизации (например, не старше 24 часов)
    # auth_date = int(auth_data.get('auth_date', 0))
    # current_time = int(time.time())
    # if current_time - auth_date > 86400: # 24 часа
    #     app.logger.warning("Telegram auth failed: Auth data is too old.")
    #     return "Ошибка: Данные авторизации устарели.", 403

    if check_telegram_authorization(auth_data):
        user_data = {
            'id': auth_data.get('id'),
            'first_name': auth_data.get('first_name'),
            'last_name': auth_data.get('last_name', ''),
            'username': auth_data.get('username', ''),
            'photo_url': auth_data.get('photo_url', '')
        }
        session['telegram_user'] = user_data
        app.logger.info(f"User {user_data.get('id')} logged in via Telegram.")
        return redirect(url_for('index'))
    else:
        app.logger.warning("Telegram auth failed: Invalid hash.")
        return "Ошибка: Авторизация не удалась. Неверный хеш.", 403

@app.route('/logout')
def logout():
    user_id = session.get('telegram_user', {}).get('id', 'Unknown')
    session.pop('telegram_user', None)
    app.logger.info(f"User {user_id} logged out.")
    return redirect(url_for('index'))

if __name__ == '__main__':
    # Для локальной разработки удобно использовать debug=True
    # Для продакшена debug должен быть False
    # host='0.0.0.0' делает сервер доступным по IP адресу машины в локальной сети
    app.run(host='0.0.0.0', port=5000, debug=True)