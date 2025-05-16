from flask import Flask, render_template, session, redirect, url_for, request, jsonify
import os
from datetime import datetime
import requests
import translators as ts

app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'YOUR_VERY_SECRET_FLASK_KEY_REPLACE_ME_!@#$%^') 

@app.context_processor
def inject_current_year():
    return {'current_year': datetime.utcnow().year}

def get_cat_fact_from_api():
    try:
        response = requests.get("https://catfact.ninja/fact", timeout=5)
        response.raise_for_status()
        data = response.json()
        english_fact = data.get("fact")

        if english_fact:
            try:

                russian_fact = ts.translate_text(english_fact, translator='google', to_language='ru')
                return russian_fact
            except Exception as e:
                app.logger.error(f"Ошибка перевода факта о коте: {e}")
                return english_fact # В случае ошибки перевода, возвращаем оригинал на английском
        else:
            return "Котики сегодня решили помолчать... Попробуйте позже!"

    except requests.exceptions.Timeout:
        app.logger.warning("Тайм-аут при запросе к Cat Facts API.")
        return "Не удалось загрузить факт: сервер API долго не отвечал."
    except requests.exceptions.HTTPError as http_err:
        app.logger.error(f"HTTP ошибка при запросе к Cat Facts API: {http_err}")
        return "Не удалось загрузить факт: ошибка на стороне сервера API."
    except requests.exceptions.RequestException as e:
        app.logger.error(f"Общая ошибка при запросе Cat Facts API: {e}")
        return "Не удалось загрузить факт о котиках. Проверьте ваше интернет-соединение."
    except ValueError: 
        app.logger.error(f"Ошибка парсинга JSON от Cat Facts API")
        return "Не удалось загрузить факт о котиках (ошибка формата данных от API)."

# --- МАРШРУТЫ ---
@app.route('/')
def index():
    initial_cat_fact = get_cat_fact_from_api() 
    return render_template('Main/main.html', active_page='main', initial_cat_fact=initial_cat_fact)

@app.route('/hackathons')
def list_hackathons():
    return render_template('Listhackathons/hackathons.html', active_page='hackathons')

@app.route('/organizers')
def organizers_page():
    return render_template('Organizers/organizers.html', active_page='organizers')

@app.route('/about')
def about_page():
    return render_template('about/about.html', active_page='about')

@app.route('/for-company')
def for_company_page():
    return render_template('Podval/ForCompany.html', title="Для компаний", active_page='for_company') 

@app.route('/participants')
def participants_page():
    return render_template('Podval/Participants.html', title="Для участников", active_page='participants')

@app.route('/privacy-policy')
def privacy_policy_page():
    return render_template('Podval/Politica.html', title="Политика обработки персональных данных", active_page='privacy_policy')

@app.route('/get-new-cat-fact')
def get_new_cat_fact_route():
    fact = get_cat_fact_from_api()
    return jsonify(fact=fact)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)