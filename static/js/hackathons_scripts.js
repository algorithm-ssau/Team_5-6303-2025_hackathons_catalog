document.addEventListener('DOMContentLoaded', () => {
    // Массив с данными хакатонов
     const ALL_HACKATHONS_DATA = [
        {
            title: "Летний Код 2024", organizer: "Яндекс", date: "15-17 Июля 2024",
            startDate: "2024-07-15", endDate: "2024-07-17",
            specs: ["Веб-разработка", "AI/ML"], imgSrc: "static/images/images_hackathons/Yandex.png",
            level: "Средний", location: "Онлайн",
            shortDescription: "Ежегодный летний марафон от Яндекс для веб-разработчиков и AI-специалистов. Создайте инновационные проекты и получите шанс на стажировку!",
            fullDescription: "«Летний Код 2024» от Яндекса – это ваш шанс погрузиться в мир передовых технологий и создать что-то действительно значимое! В течение трех дней интенсивной работы вы будете разрабатывать веб-сервисы с применением искусственного интеллекта для решения актуальных задач в различных сферах, от электронной коммерции до образования.\n\nМы ждем как индивидуальных участников, так и команды до 5 человек. Вам будут предложены несколько треков на выбор, каждый со своим набором данных и менторской поддержкой от ведущих экспертов Яндекса. Основные технологии: Python, JavaScript, React, Node.js, а также фреймворки для машинного обучения, такие как TensorFlow и PyTorch.\n\nПомимо соревновательной части, вас ждут лекции, мастер-классы и нетворкинг-сессии. Лучшие команды будут награждены ценными призами, а наиболее талантливые участники получат приглашение на стажировку в Яндекс. Не упустите возможность показать себя и поработать над проектами, которые могут изменить мир! (Мероприятие завершено)"
        },
        {
            title: "Mobile Challenge 2024", organizer: "VK", date: "5-7 Августа 2024",
            startDate: "2024-08-05", endDate: "2024-08-07",
            specs: ["Мобильная разработка"], imgSrc: "static/images/images_hackathons/Vk.png",
            level: "Профессиональный", location: "Очно, г. Санкт-Петербург",
            shortDescription: "VK приглашает талантливых мобильных разработчиков на Mobile Challenge! Создайте приложение мечты для iOS или Android и выиграйте крутые призы.",
            fullDescription: "Mobile Challenge 2024 от VK – это интенсивный хакатон для разработчиков мобильных приложений под iOS и Android. Если вы горите идеей создать новое полезное, развлекательное или социальное приложение, это ваш шанс! Тема хакатона будет объявлена на открытии, что добавит элемент неожиданности и потребует быстрой адаптации.\n\nМы ожидаем от участников не только технического мастерства, но и внимания к UI/UX, а также производительности приложений. В вашем распоряжении будут менторы из команды VK, готовые помочь с техническими вопросами и дать советы по развитию продукта. Победители получат не только ценные гаджеты, но и возможность представить свой проект широкой аудитории, а также потенциальное сотрудничество с VK.\n\nК участию приглашаются команды от 2 до 4 человек. Используйте Swift, Kotlin, React Native, Flutter или любые другие инструменты для мобильной разработки. Главное – создать работающий прототип, который впечатлит жюри! (Мероприятие завершено)"
        },
        {
            title: "Data Science Cup '24", organizer: "Сбер", date: "20 Сентября 2024",
            startDate: "2024-09-20", endDate: "2024-09-20",
            specs: ["Data Science", "AI/ML"], imgSrc: "static/images/images_hackathons/Sber.png",
            level: "Профессиональный", location: "Онлайн",
            shortDescription: "Однодневное соревнование от Сбера для специалистов по данным. Решайте реальные задачи на больших данных и стройте предсказательные модели.",
            fullDescription: "Data Science Cup '24 от Сбера – это уникальная возможность для специалистов по анализу данных и машинному обучению проверить свои силы на реальных задачах от крупнейшего банка страны. В течение одного дня вам предстоит работать с анонимизированными наборами данных, строить предсказательные модели и соревноваться за звание лучшего дата-сайентиста.\n\nМы предлагаем несколько треков, включая задачи по кредитному скорингу, прогнозированию клиентского оттока, обнаружению фрода и персонализации предложений. Вы можете использовать любые привычные вам инструменты и библиотеки (Python, R, Spark, etc.). Важны не только точность моделей, но и скорость их разработки, а также понятность представления результатов.\n\nЭксперты Сбера будут выступать в роли жюри и менторов. Победители получат денежные призы, а также возможность трудоустройства в команду Sber AI. Это отличный шанс заявить о себе и внести вклад в развитие финансовых технологий. (Мероприятие завершено)"
        },
        {
            title: "Tinkoff FinTech '24", organizer: "Tinkoff", date: "10-12 Октября 2024",
            startDate: "2024-10-10", endDate: "2024-10-12",
            specs: ["Веб-разработка", "FinTech"], imgSrc: "static/images/images_hackathons/Tinkoff.png",
            level: "Средний", location: "Очно, г. Москва",
            shortDescription: "Хакатон от Tinkoff для тех, кто готов менять мир финансов. Разработайте прототип финтех-продукта и получите шанс на реализацию своей идеи.",
            fullDescription: "Tinkoff FinTech '24 – это хакатон для разработчиков, дизайнеров и продакт-менеджеров, увлеченных финансовыми технологиями. Мы ищем свежие идеи и смелые решения, которые могут изменить то, как люди управляют своими финансами, инвестируют или получают кредиты. Предложите свой прототип нового банковского продукта, инвестиционного инструмента, сервиса для малого бизнеса или решения на основе блокчейна.\n\nВ течение 48 часов вы будете работать в команде, получая поддержку от менторов из Tinkoff. Мы предоставим доступ к нашим API (в песочнице) и необходимую инфраструктуру. Основной фокус – на создании работающего MVP и его убедительной презентации. Лучшие проекты получат не только денежные призы, но и возможность доработать свой продукт в акселераторе Tinkoff, а также офферы на работу.\n\nПрисоединяйтесь, если вы хотите создавать будущее финтеха вместе с нами! (Мероприятие завершено)"
        },
        {
            title: "CyberSec Arena 2024", organizer: "MTS", date: "1-3 Ноября 2024",
            startDate: "2024-11-01", endDate: "2024-11-03",
            specs: ["CyberSecurity"], imgSrc: "static/images/images_hackathons/Mts.png",
            level: "Профессиональный", location: "Онлайн",
            shortDescription: "MTS CyberSec Arena – соревнование по кибербезопасности. Защитите свои системы и проверьте на прочность чужие в рамках этичного хакинга.",
            fullDescription: "MTS CyberSec Arena 2024 – это трехдневное соревнование для специалистов по информационной безопасности, как начинающих, так и опытных. Вам предстоит столкнуться с задачами в формате CTF (Capture The Flag) по различным направлениям: веб-уязвимости, реверс-инжиниринг, криптография, форензика и OSINT.\n\nПомимо классического CTF, будет организован специальный трек по защите и атаке на виртуальную инфраструктуру. Участникам будут предоставлены виртуальные машины с предустановленными сервисами, которые нужно будет защитить от атак других команд и, в свою очередь, найти уязвимости у соперников. Мы ценим не только технические навыки, но и умение работать в команде и быстро принимать решения в стрессовых ситуациях.\n\nМенторы из MTS Cybersecurity помогут разобраться в сложных моментах. Победителей ждут ценные призы, сертификаты и возможность присоединиться к команде кибербезопасности МТС. (Мероприятие завершено)"
        },
        {
            title: "Зимний Кодфест 2025", organizer: "Mail.ru Group", date: "15-17 Января 2025",
            startDate: "2025-01-15", endDate: "2025-01-17",
            specs: ["GameDev", "AI/ML"], imgSrc: "static/images/images_hackathons/MailRu.png",
            level: "Средний", location: "Онлайн",
            shortDescription: "Создай свою игру на Зимнем Кодфесте! Призы и менторы от лидеров индустрии. Полное погружение в разработку игр за 48 часов.",
            fullDescription: "Зимний Кодфест 2025 от Mail.ru Group (VK Play) – это ваш билет в мир разработки игр! Мы приглашаем геймдизайнеров, программистов, художников и звукорежиссеров объединиться в команды и за 48 часов создать прототип собственной игры. Тема будет объявлена на открытии, чтобы все были в равных условиях.\n\nВ вашем распоряжении будут популярные игровые движки (Unity, Unreal Engine), а также возможность использовать AI для генерации контента или создания умных NPC. Наши менторы – опытные разработчики из игровых студий VK Play – помогут вам советом и поделятся экспертизой. Мы ищем оригинальные идеи, увлекательный геймплей и качественную реализацию.\n\nПомимо хакатона, вас ждут лекции от профессионалов индустрии, возможность протестировать игры других команд и, конечно же, нетворкинг. Лучшие проекты получат финансирование на дальнейшую разработку, публикацию на платформе VK Play и другие ценные призы."
        },
        {
            title: "IoT Revolution 2025", organizer: "RosAtom", date: "20-22 Февраля 2025",
            startDate: "2025-02-20", endDate: "2025-02-22",
            specs: ["IoT", "Веб-разработка"], imgSrc: "static/images/images_hackathons/Rosatom.png",
            level: "Начальный", location: "Очно, г. Самара",
            shortDescription: "Разработай решение для умного города или промышленности на основе IoT технологий. Оборудование и платформа для разработки предоставляются.",
            fullDescription: "IoT Revolution 2025, организуемый Росатомом, ставит своей целью поиск инновационных решений в области Интернета вещей для применения в умных городах и цифровой промышленности. Участникам будет предложено несколько кейсов от предприятий Росатома и городских администраций, связанных с мониторингом окружающей среды, оптимизацией энергопотребления, управлением городской инфраструктурой и автоматизацией производственных процессов.\n\nМы предоставим командам доступ к современным IoT-платформам, наборам датчиков и микроконтроллеров (Arduino, Raspberry Pi, ESP32), а также облачным сервисам для сбора и анализа данных. Технические специалисты Росатома окажут менторскую поддержку. Особое внимание будет уделено решениям, использующим технологии беспроводной связи LoRaWAN, NB-IoT, а также элементам веб-разработки для создания дашбордов и интерфейсов управления.\n\nПобедители получат гранты на развитие своих проектов, возможность пилотного внедрения на объектах Росатома и ценные призы. Присоединяйтесь к революции Интернета вещей!"
        },
        {
            title: "AI Future Hack 2025", organizer: "ИТМО", date: "5-7 Марта 2025",
            startDate: "2025-03-05", endDate: "2025-03-07",
            specs: ["AI/ML", "Data Science"], imgSrc: "static/images/images_hackathons/Itmo.png",
            level: "Средний", location: "Онлайн",
            shortDescription: "Хакатон по искусственному интеллекту от ИТМО. Решай задачи будущего в области машинного обучения, нейронных сетей и компьютерного зрения.",
            fullDescription: "AI Future Hack 2025 от Университета ИТМО – это площадка для талантливых студентов, аспирантов и молодых специалистов, увлеченных искусственным интеллектом. Мы предлагаем вам поработать над амбициозными задачами, которые определят будущее технологий. Треки хакатона включают: компьютерное зрение для беспилотного транспорта, обработку естественного языка для создания умных ассистентов, применение ИИ в медицине для диагностики заболеваний, а также генеративные модели для создания контента.\n\nВам будут предоставлены мощные вычислительные ресурсы, большие наборы данных и менторская поддержка от ведущих ученых и преподавателей ИТМО, а также представителей IT-компаний-партнеров. Мы ожидаем от команд не только создания работающих моделей, но и научного подхода, а также глубокого понимания решаемой проблемы.\n\nЛучшие проекты будут отмечены дипломами, призами и получат возможность продолжить исследования в лабораториях ИТМО или пройти стажировку у наших партнеров. Бросьте вызов будущему вместе с нами!"
        },
        {
            title: "Весенний спринт разработчиков", organizer: "Яндекс", date: "10-12 Апреля 2025",
            startDate: "2025-04-10", endDate: "2025-04-12",
            specs: ["Мобильная разработка", "Веб-разработка"], imgSrc: "static/images/images_hackathons/Yandex.png",
            level: "Начальный", location: "Очно, г. Москва",
            shortDescription: "Яндекс приглашает на весенний спринт! Создайте полезное приложение для улучшения городской среды или образовательных процессов.",
            fullDescription: "«Весенний спринт разработчиков» от Яндекса – это ваш шанс создать приложение, которое сделает жизнь лучше! Мы предлагаем два основных направления: «Умный город» и «Образование будущего». В рамках первого трека вы можете разработать сервисы для навигации, эко-мониторинга, управления коммунальными услугами или улучшения доступной среды. Во втором треке мы ждем идей для интерактивных учебных платформ, инструментов для персонализированного обучения или геймификации образовательного процесса.\n\nКоманды получат доступ к API сервисов Яндекса (Карты, Погода, Алиса и др.) и менторскую поддержку. Важно не только придумать идею, но и реализовать качественный прототип с продуманным интерфейсом. Мы ищем решения, которые могут быть масштабированы и принести реальную пользу обществу.\n\nПобедители получат гранты на развитие своих проектов, техническую поддержку от Яндекса и возможность запустить пилотный проект в одном из городов или образовательных учреждений."
        },
        {
            title: "FinTech Innovations 2025", organizer: "Сбер", date: "15-17 Мая 2025",
            startDate: "2025-05-15", endDate: "2025-05-17",
            specs: ["FinTech", "Data Science"], imgSrc: "static/images/images_hackathons/Sber.png",
            level: "Профессиональный", location: "Онлайн",
            shortDescription: "Разработай инновационный финансовый сервис на хакатоне от Сбера. Новые подходы к кредитованию, инвестициям и клиентскому сервису.",
            fullDescription: "Хакатон FinTech Innovations 2025 от Сбера – это ваш вклад в революцию финансовых технологий! Мы ищем команды, готовые предложить прорывные решения в таких областях, как персонализированные финансовые советники на базе ИИ, новые модели P2P-кредитования, платформы для микроинвестиций, решения для повышения финансовой грамотности, а также применение блокчейна для безопасных и прозрачных транзакций.\n\nУчастникам будут предоставлены обезличенные датасеты и доступ к API Сбера в тестовой среде. Менторы из числа топ-менеджеров и ведущих экспертов банка помогут вам отточить идею и проверить гипотезы. Мы ценим не только технологическую составляющую, но и бизнес-потенциал вашего решения, его масштабируемость и соответствие потребностям рынка.\n\nЛучшие команды получат возможность запустить пилотный проект совместно со Сбером, инвестиции от SberUnity, а также ценные призы. Создавайте будущее финансов вместе с нами!"
        },
        {
            title: "GameDev Weekend 2025", organizer: "VK", date: "1-2 Июня 2025",
            startDate: "2025-06-01", endDate: "2025-06-02",
            specs: ["GameDev"], imgSrc: "static/images/images_hackathons/Vk.png",
            level: "Начальный", location: "Очно, г. Санкт-Петербург",
            shortDescription: "Уикенд для разработчиков игр! Создай прототип за 48 часов. Тема будет объявлена на старте.",
            fullDescription: "GameDev Weekend от VK – это марафон для настоящих энтузиастов разработки игр. Забудьте о сне на 48 часов и погрузитесь в творческий процесс создания игрового прототипа! Тема будет объявлена внезапно, чтобы стимулировать вашу креативность и способность быстро генерировать идеи. Мы предоставляем комфортные условия для работы, питание и менторскую поддержку от опытных геймдевелоперов.\n\nВы можете использовать любой движок и инструменты, которые вам нравятся. Главное – это увлекательный геймплей, интересная механика и оригинальная идея. В конце хакатона каждая команда представит свой проект жюри, состоящему из представителей игровых студий и издателей. Победителей ждут не только призы, но и возможность получить фидбэк от профессионалов, а также потенциальное сотрудничество.\n\nЭто ваш шанс создать хит или просто отлично провести время в компании единомышленников. Собирайте команду и регистрируйтесь!"
        },
        {
            title: "Cyber Challenge 2025", organizer: "MTS", date: "10-12 Июля 2025",
            startDate: "2025-07-10", endDate: "2025-07-12",
            specs: ["CyberSecurity", "Веб-разработка"], imgSrc: "static/images/images_hackathons/Mts.png",
            level: "Средний", location: "Онлайн",
            shortDescription: "Проверь свои навыки в кибербезопасности на MTS Cyber Challenge. Задания по CTF, анализу уязвимостей и разработке защищенных систем.",
            fullDescription: "MTS Cyber Challenge 2025 – это серьезное испытание для специалистов по информационной безопасности. Мы подготовили для вас комплексные задания, охватывающие широкий спектр областей: от классических CTF-задач (веб, реверс, крипто, форензика) до практических кейсов по анализу защищенности реальных систем и разработке безопасного кода. \n\nУчастникам предстоит работать как индивидуально, так и в командах, соревнуясь в скорости и качестве решения задач. Мы моделируем реальные сценарии атак и защиты, чтобы вы могли применить свои знания на практике. Эксперты по кибербезопасности из МТС будут следить за ходом соревнования и давать оценку вашим действиям. \n\nПобедители получат не только признание в профессиональном сообществе, но и ценные призы, а также возможность пройти стажировку или получить предложение о работе в одном из ведущих телеком-операторов страны. Докажите, что вы – лучший в кибербезе!"
        },
        {
            title: "Open Source Contributhon 2025", organizer: "Mail.ru Group", date: "20-21 Августа 2025",
            startDate: "2025-08-20", endDate: "2025-08-21",
            specs: ["Веб-разработка", "AI/ML"], imgSrc: "static/images/images_hackathons/MailRu.png",
            level: "Средний", location: "Онлайн",
            shortDescription: "Внеси свой вклад в Open Source проекты на двухдневном марафоне. Работа в командах под руководством опытных менторов.",
            fullDescription: "Open Source Contributhon от Mail.ru Group (VK Tech) – это уникальная возможность для разработчиков внести свой вклад в развитие популярных открытых проектов или начать свой собственный. Мы верим в силу сообщества и хотим поддержать тех, кто готов делиться своим кодом и знаниями. В течение двух дней вы будете работать над задачами из бэклогов известных Open Source проектов (например, Tarantool, MyRocks, ClickHouse) или предлагать свои идеи для улучшения существующих инструментов.\n\nОпытные разработчики и мейнтейнеры из VK Tech выступят в роли менторов, помогут вам разобраться в кодовой базе, настроить окружение и сделать ваш первый коммит. Мы приветствуем участников с разным уровнем подготовки, главное – желание учиться и контрибьютить. Это отличный способ прокачать свои навыки, пополнить портфолио и стать частью глобального Open Source движения.\n\nЛучшие контрибьюторы получат памятные призы и мерч, а также возможность продолжить работу над проектами в рамках стажировок или грантовых программ."
        },
        {
            title: "Smart City Hack 2025", organizer: "RosAtom", date: "5-7 Сентября 2025",
            startDate: "2025-09-05", endDate: "2025-09-07",
            specs: ["IoT", "Мобильная разработка"], imgSrc: "static/images/images_hackathons/Rosatom.png",
            level: "Начальный", location: "Очно, г. Самара",
            shortDescription: "Создай решение для умного города и выиграй призы от RosAtom. Темы: экология, транспорт, ЖКХ, безопасность.",
            fullDescription: "Smart City Hack от Росатома – это хакатон, посвященный разработке технологических решений для современных городов. Мы ищем инновационные проекты, способные улучшить качество жизни горожан, повысить эффективность управления городской инфраструктурой и обеспечить устойчивое развитие. Основные направления: «Умный транспорт» (оптимизация трафика, парковки, общественный транспорт), «Экология и ЖКХ» (мониторинг загрязнений, управление отходами, энергоэффективность), «Безопасный город» (системы видеонаблюдения, экстренного оповещения) и «Цифровые сервисы для граждан».\n\nУчастникам будут предоставлены наборы данных от городских служб, доступ к IoT-платформам и облачным ресурсам. Менторы из Росатома и представители городских администраций помогут командам с экспертизой и проверкой гипотез. Мы ожидаем увидеть работающие прототипы, демонстрирующие потенциал для реального внедрения.\n\nПобедители получат финансовую поддержку для развития своих проектов, возможность пилотного внедрения в одном из «умных городов» Росатома и ценные призы. Сделайте наши города умнее вместе с нами!"
        },
        {
            title: "Machine Learning Battle 2025", organizer: "ИТМО", date: "15-17 Октября 2025",
            startDate: "2025-10-15", endDate: "2025-10-17",
            specs: ["AI/ML", "Data Science"], imgSrc: "static/images/images_hackathons/Itmo.png",
            level: "Профессиональный", location: "Онлайн",
            shortDescription: "Соревнование по машинному обучению для студентов и профессионалов. Решайте задачи на реальных датасетах и соревнуйтесь за звание лучшего!",
            fullDescription: "Machine Learning Battle от Университета ИТМО – это интенсивное соревнование для всех, кто увлекается машинным обучением и анализом данных. Вам предстоит решать сложные задачи на реальных датасетах из различных областей: от биоинформатики и медицины до финансов и ритейла. Продемонстрируйте свое умение выбирать правильные модели, настраивать гиперпараметры, работать с несбалансированными данными и интерпретировать результаты.\n\nСоревнование пройдет в несколько этапов, включая онлайн-квалификацию и очный финал. Участникам будут доступны вычислительные мощности и менторская поддержка от профессоров ИТМО и экспертов из индустрии. Мы ценим не только точность предсказаний, но и инновационность подхода, а также умение объяснить логику работы вашей модели.\n\nПобедителей ждут денежные призы, публикации в научных журналах (для лучших студенческих работ), а также приглашения на стажировки и вакансии от компаний-партнеров. Примите участие в битве умов и докажите свое превосходство в ML!"
        },
        {
            title: "Yandex Web Masters 2025", organizer: "Яндекс", date: "1-3 Ноября 2025",
            startDate: "2025-11-01", endDate: "2025-11-03",
            specs: ["Веб-разработка"], imgSrc: "static/images/images_hackathons/Yandex.png",
            level: "Профессиональный", location: "Очно, г. Москва",
            shortDescription: "Покажи свое мастерство в веб-разработке на хакатоне от Яндекс. Разработка высоконагруженных сервисов и применение современных фреймворков.",
            fullDescription: "Yandex Web Masters – это хакатон для опытных веб-разработчиков, готовых принять вызов и создать высокопроизводительные и масштабируемые веб-сервисы. Мы предложим вам задачи, связанные с разработкой бэкенда на Node.js, Python или Go, созданием сложных фронтенд-интерфейсов на React или Vue, а также интеграцией с различными API и базами данных. Особое внимание будет уделено вопросам оптимизации производительности, безопасности и отказоустойчивости.\n\nКоманды будут работать над проектами под руководством ведущих архитекторов и тимлидов Яндекса. Мы ожидаем от вас глубоких знаний в выбранном стеке технологий и умения быстро разбираться в новых инструментах. Это отличная возможность поработать над задачами, аналогичными тем, что решают в Яндексе каждый день, и получить ценный опыт.\n\nЛучшие команды получат не только признание коллег и призы, но и шанс присоединиться к команде Яндекса. Если вы считаете себя мастером веб-разработки, этот хакатон для вас!"
        },
        {
            title: "VK Mobile Apps Conf 2025", organizer: "VK", date: "10-11 Декабря 2025",
            startDate: "2025-12-10", endDate: "2025-12-11",
            specs: ["Мобильная разработка"], imgSrc: "static/images/images_hackathons/Vk.png",
            level: "Средний", location: "Очно, г. Санкт-Петербург",
            shortDescription: "Конференция и хакатон по мобильной разработке от VK. Новейшие тренды, лучшие практики и возможность создать приложение, которое увидят миллионы.",
            fullDescription: "VK Mobile Apps Conf & Hackathon – это двухдневное мероприятие, сочетающее в себе доклады от ведущих мобильных разработчиков VK и других компаний, а также интенсивный хакатон. В первый день вы сможете узнать о последних трендах в iOS и Android разработке, новых фреймворках, инструментах и подходах к созданию качественных мобильных приложений. Во второй день начнется хакатон, где вам предстоит применить полученные знания на практике и создать прототип мобильного приложения на заданную тему.\n\nМы ждем как опытных разработчиков, так и тех, кто только начинает свой путь в мобильной разработке. Менторы из VK помогут вам с любыми вопросами. Основные направления хакатона: социальные сервисы, утилиты, игры, приложения с использованием AR/VR. Главное – создать что-то полезное, интересное и технически грамотное.\n\nПобедители хакатона получат возможность представить свой проект на главной сцене конференции, ценные призы и внимание потенциальных инвесторов или работодателей. Это ваш шанс заявить о себе в мире мобильной разработки!"
        },
        {
            title: "Sber Data Challenge 2025", organizer: "Сбер", date: "15-17 Декабря 2025",
            startDate: "2025-12-15", endDate: "2025-12-17",
            specs: ["Data Science"], imgSrc: "static/images/images_hackathons/Sber.png",
            level: "Профессиональный", location: "Онлайн",
            shortDescription: "Решай сложные задачи по анализу данных на Sber Data Challenge. Работа с большими данными, построение предсказательных моделей и визуализация.",
            fullDescription: "Sber Data Challenge – это масштабное соревнование для специалистов по Data Science, организованное Сбером. Мы предлагаем вам поработать с уникальными наборами обезличенных данных, охватывающими различные аспекты банковской деятельности и клиентского поведения. Задачи будут включать прогнозирование временных рядов, кластеризацию клиентов, разработку систем рекомендаций, анализ текстовых данных и многое другое.\n\nУчастники смогут использовать любые инструменты и языки программирования (Python, R, Scala и др.), а также облачные платформы Сбера для вычислений. Важно не только достичь высокой точности моделей, но и предложить эффективные алгоритмы, способные работать с большими объемами данных. Эксперты из Sber AI и других подразделений банка выступят в роли жюри и менторов.\n\nПобедители получат крупные денежные призы, возможность реализовать свои решения в продуктах Сбера и предложения о сотрудничестве. Если вы готовы к серьезным вызовам в области Data Science, это соревнование для вас!"
        },
        {
            title: "Tinkoff Junior Dev 2025", organizer: "Tinkoff", date: "20-22 Декабря 2025",
            startDate: "2025-12-20", endDate: "2025-12-22",
            specs: ["Веб-разработка", "Мобильная разработка"], imgSrc: "static/images/images_hackathons/Tinkoff.png",
            level: "Начальный", location: "Онлайн",
            shortDescription: "Хакатон для начинающих разработчиков от Tinkoff. Отличная возможность получить опыт, поработать в команде и заявить о себе.",
            fullDescription: "Tinkoff Junior Dev Hackathon – это специальное мероприятие для студентов и начинающих разработчиков, которые хотят попробовать свои силы в решении реальных задач и получить первый опыт командной работы. Мы понимаем, что у джуниоров может быть не так много опыта, поэтому наши менторы из Tinkoff будут оказывать активную поддержку на всех этапах: от формирования идеи до разработки прототипа и подготовки презентации.\n\nЗадачи хакатона будут адаптированы для начинающих, но при этом достаточно интересны и потребуют применения знаний в веб- или мобильной разработке. Вы сможете поработать с популярными технологиями и фреймворками, научиться пользоваться системами контроля версий и инструментами для совместной работы. Главное – это ваше желание учиться, энтузиазм и готовность работать в команде.\n\nВсе участники получат ценный опыт и обратную связь от профессионалов. Лучшие команды будут награждены призами, а самые активные и талантливые участники – приглашены на стажировку в Tinkoff. Это ваш лучший старт в IT!"
        },
         {
            title: "MTS StartUp Hack 2025", organizer: "MTS", date: "25-27 Декабря 2025",
            startDate: "2025-12-25", endDate: "2025-12-27",
            specs: ["FinTech", "IoT"], imgSrc: "static/images/images_hackathons/Mts.png",
            level: "Средний", location: "Очно, г. Самара",
            shortDescription: "Представь свой стартап на MTS StartUp Hack и получи инвестиции. Разработка MVP, питчинг перед экспертами и инвесторами.",
            fullDescription: "MTS StartUp Hack – это хакатон для тех, у кого есть своя бизнес-идея и желание превратить ее в успешный стартап. Мы ищем проекты на стыке телекома, IT, FinTech, IoT, медиа и других перспективных направлений. Если у вас есть команда и прототип (или хотя бы четкое видение MVP), этот хакатон для вас. В течение трех дней вы будете дорабатывать свой продукт, готовить бизнес-модель и оттачивать питч под руководством опытных менторов из MTS StartUp Hub и приглашенных экспертов.\n\nКлючевая часть хакатона – это финальный питчинг перед представителями венчурных фондов, бизнес-ангелами и топ-менеджерами МТС. Лучшие проекты получат возможность пройти в акселератор MTS StartUp Hub, получить инвестиции, доступ к ресурсам и экспертизе МТС, а также пилотные проекты с компанией.\n\nНе упустите шанс превратить свою мечту в реальность! Мы поможем вам сделать первые шаги в мире большого бизнеса."
        }
    ];

    // DOM Элементы
    const detailsModal = document.getElementById('details-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeDetailsBtn = document.getElementById('close-details-modal');
    const closeSignupBtn = document.getElementById('close-signup-modal');
    const openSignupFormBtn = document.getElementById('open-signup-form-btn');
    const signupForm = document.getElementById('signup-form');
    const signupMessage = document.getElementById('signup-message');
    const signupHackathonTitle = document.getElementById('signup-hackathon-title');

    const activeHackathonsGrid = document.getElementById('active-hackathons-grid');
    const pastHackathonsGrid = document.getElementById('past-hackathons-grid');
    const hackathonCardTemplate = document.getElementById('hackathon-card-template');

    // Фильтры
    const filterDateFromInput = document.getElementById('filter-date-from');
    const filterDateToInput = document.getElementById('filter-date-to');
    const filterSpecSelect = document.getElementById('filter-spec');
    const filterOrganizerSelect = document.getElementById('filter-organizer');
    const filterLevelSelect = document.getElementById('filter-level');
    const filterLocationSelect = document.getElementById('filter-location');
    const applyFiltersBtn = document.getElementById('apply-filters-btn');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');

    // Анкета
    const openQuizBtn = document.getElementById('open-quiz-btn');
    const quizModal = document.getElementById('quiz-modal');
    const closeQuizModalBtn = document.getElementById('close-quiz-modal');
    const quizForm = document.getElementById('quiz-form');
    const quizQuestionsContainer = document.getElementById('quiz-questions-container');
    const quizRecommendationDiv = document.getElementById('quiz-recommendation');

    // Данные для анкеты
    const QUIZ_QUESTIONS = [
        {
            id: "q_spec",
            text: "Какая область IT вам наиболее интересна?",
            options: [
                { text: "Не важно / Любая", value: "all" },
                { text: "Создание сайтов и веб-приложений", value: "Веб-разработка" },
                { text: "Разработка мобильных приложений", value: "Мобильная разработка" },
                { text: "Анализ данных, машинное обучение", value: "Data Science" },
                { text: "Разработка компьютерных игр", value: "GameDev" },
                { text: "Искусственный интеллект и нейросети", value: "AI/ML" },
                { text: "Кибербезопасность", value: "CyberSecurity" },
                { text: "Финансовые технологии", value: "FinTech" },
                { text: "Интернет вещей", value: "IoT" }
            ],
            filterTarget: filterSpecSelect
        },
        {
            id: "q_level",
            text: "Какой у вас текущий уровень подготовки?",
            options: [
                { text: "Любой", value: "all" },
                { text: "Начальный (хочу научиться, первые шаги)", value: "Начальный" },
                { text: "Средний (есть опыт, пет-проекты)", value: "Средний" },
                { text: "Профессиональный (уверенно владею технологиями)", value: "Профессиональный" }
            ],
            filterTarget: filterLevelSelect
        },
        {
            id: "q_location",
            text: "Какой формат участия вам предпочтительнее?",
            options: [
                { text: "Любой", value: "all" },
                { text: "Онлайн (удаленно)", value: "Онлайн" },
                { text: "Очно в г. Самара", value: "Очно, г. Самара" },
                { text: "Очно в г. Москва", value: "Очно, г. Москва" },
                { text: "Очно в г. Санкт-Петербург", value: "Очно, г. Санкт-Петербург" }
            ],
            filterTarget: filterLocationSelect
        }
    ];

    // --- ФУНКЦИИ ---
    function createHackathonCardElement(hackathonData) {
        const cardClone = hackathonCardTemplate.content.cloneNode(true);
        const cardElement = cardClone.querySelector('.hackathon-card');

        cardElement.dataset.title = hackathonData.title;
        cardElement.dataset.organizer = hackathonData.organizer;
        cardElement.dataset.date = hackathonData.date;
        cardElement.dataset.startDate = hackathonData.startDate;
        cardElement.dataset.endDate = hackathonData.endDate;
        cardElement.dataset.specs = JSON.stringify(hackathonData.specs);
        cardElement.dataset.imgSrc = hackathonData.imgSrc;
        cardElement.dataset.fullDescription = hackathonData.fullDescription;
        cardElement.dataset.shortDescription = hackathonData.shortDescription;
        cardElement.dataset.level = hackathonData.level;
        cardElement.dataset.location = hackathonData.location;

        cardElement.querySelector('img').src = hackathonData.imgSrc;
        cardElement.querySelector('img').alt = hackathonData.title;
        cardElement.querySelector('h3').textContent = hackathonData.title;
        cardElement.querySelector('.organizer').textContent = hackathonData.organizer;
        cardElement.querySelector('.date-display').textContent = hackathonData.date;
        cardElement.querySelector('.level').textContent = hackathonData.level;
        cardElement.querySelector('.location').textContent = hackathonData.location;
        cardElement.querySelector('.short-description').textContent = hackathonData.shortDescription;

        const specializationsDiv = cardElement.querySelector('.specializations');
        const strongTag = document.createElement('strong');
        strongTag.textContent = 'Спецификации:';
        specializationsDiv.innerHTML = '';
        specializationsDiv.appendChild(strongTag);
        hackathonData.specs.forEach(spec => {
            const span = document.createElement('span');
            span.className = 'spec-tag';
            span.textContent = spec;
            specializationsDiv.appendChild(span);
        });

        const openBtn = cardElement.querySelector('.open-modal-btn');
        openBtn.addEventListener('click', () => openDetailsModal(cardElement, hackathonData.isPast));
        return cardElement;
    }

    function displayHackathons(hackathonsToDisplay) {
        activeHackathonsGrid.innerHTML = '';
        pastHackathonsGrid.innerHTML = '';
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        hackathonsToDisplay.forEach(hackData => {
            const cardElement = createHackathonCardElement(hackData);
            const endDate = new Date(hackData.endDate + "T23:59:59");
            hackData.isPast = endDate < today;

            if (hackData.isPast) {
                cardElement.classList.add('past-event');
                const statusBadge = cardElement.querySelector('.status-badge');
                if (statusBadge) {
                    statusBadge.textContent = 'Завершен';
                    statusBadge.style.display = 'inline-block';
                }
                pastHackathonsGrid.appendChild(cardElement);
            } else {
                activeHackathonsGrid.appendChild(cardElement);
            }
        });
        document.getElementById('hackathon-list-past').style.display = pastHackathonsGrid.children.length > 0 ? 'block' : 'none';
    }

    function openDetailsModal(cardElement, isPastEvent) {
        document.getElementById('modal-title').textContent = cardElement.dataset.title;
        document.getElementById('modal-organizer').textContent = cardElement.dataset.organizer;
        document.getElementById('modal-date').textContent = cardElement.dataset.date;
        document.getElementById('modal-level').textContent = cardElement.dataset.level;
        document.getElementById('modal-location').textContent = cardElement.dataset.location;
        document.getElementById('modal-img').src = cardElement.dataset.imgSrc;
        document.getElementById('modal-img').alt = cardElement.dataset.title;
        document.getElementById('modal-description').textContent = cardElement.dataset.fullDescription;

        const specsContainer = document.getElementById('modal-specs');
        const strongSpecsTag = document.createElement('strong');
        strongSpecsTag.textContent = 'Спецификации:';
        specsContainer.innerHTML = '';
        specsContainer.appendChild(strongSpecsTag);
        JSON.parse(cardElement.dataset.specs || '[]').forEach(spec => {
            const span = document.createElement('span');
            span.className = 'spec-tag';
            span.textContent = spec;
            specsContainer.appendChild(span);
        });

        openSignupFormBtn.dataset.hackathonTitle = cardElement.dataset.title;
        detailsModal.classList.toggle('past-event-modal', !!isPastEvent);
        detailsModal.style.display = 'block';
    }

    // Обработчики для Модальных Окон Деталей и Записи
    if(closeDetailsBtn) {
        closeDetailsBtn.addEventListener('click', () => {
            detailsModal.style.display = 'none';
        });
    }

    if(openSignupFormBtn) {
        openSignupFormBtn.addEventListener('click', () => {
            const title = openSignupFormBtn.dataset.hackathonTitle || 'Выбранный хакатон';
            signupHackathonTitle.textContent = title;
            signupForm.reset();
            signupMessage.textContent = '';
            signupMessage.className = 'message-area';
            signupMessage.style.display = 'none';
            detailsModal.style.display = 'none';
            signupModal.style.display = 'block';
        });
    }

    if(closeSignupBtn) {
        closeSignupBtn.addEventListener('click', () => {
            signupModal.style.display = 'none';
        });
    }

    if(signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const telegram = document.getElementById('signup-telegram').value.trim();
            const hackathonTitle = signupHackathonTitle.textContent;

            console.log('--- Попытка записи ---');
            console.log('Хакатон:', hackathonTitle);
            console.log('ФИО:', name);
            console.log('Email:', email);
            console.log('Telegram:', telegram);

            const SIMULATED_EXISTING_EMAILS = ['test@example.com', 'duplicate@mail.ru'];
            if (SIMULATED_EXISTING_EMAILS.includes(email)) {
                showMessage('Ошибка: Этот email уже зарегистрирован на данный хакатон.', 'error');
            } else {
                const dataToSave = `${name} - ${email} - ${telegram} (Хакатон: ${hackathonTitle})\n`;
                console.log('СИМУЛЯЦИЯ СОХРАНЕНИЯ В ФАЙЛ:', dataToSave);
                showMessage('Вы успешно записаны на хакатон!', 'success');
                signupForm.reset();
            }
        });
    }

    function showMessage(message, type) {
        signupMessage.textContent = message;
        signupMessage.className = `message-area ${type}`;
        signupMessage.style.display = 'block';
    }

    // --- ЛОГИКА АНКЕТЫ ---
    function renderQuiz() {
        quizQuestionsContainer.innerHTML = '';
        QUIZ_QUESTIONS.forEach((questionData) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            
            const questionText = document.createElement('p');
            questionText.className = 'question-title';
            questionText.textContent = questionData.text;
            questionDiv.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';

            questionData.options.forEach((option, optIndex) => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question-${questionData.id}`;
                radio.value = option.value; 
                radio.id = `${questionData.id}_opt${optIndex}`;
                if (optIndex === 0) {
                    radio.checked = true;
                }
                
                label.htmlFor = radio.id;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(option.text));
                optionsDiv.appendChild(label);
            });
            questionDiv.appendChild(optionsDiv);
            quizQuestionsContainer.appendChild(questionDiv);
        });
    }

    if (openQuizBtn) {
        openQuizBtn.addEventListener('click', () => {
            quizRecommendationDiv.textContent = '';
            quizForm.reset(); 
            renderQuiz(); 
            quizModal.style.display = 'block';
        });
    }

    if (closeQuizModalBtn) {
        closeQuizModalBtn.addEventListener('click', () => {
            quizModal.style.display = 'none';
        });
    }

    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(quizForm);
            
            // Сбрасываем все фильтры перед применением анкеты
            filterSpecSelect.value = 'all';
            filterLevelSelect.value = 'all';
            filterLocationSelect.value = 'all';
            filterDateFromInput.value = ''; 
            filterDateToInput.value = '';   

            let recommendationsMade = false;
            QUIZ_QUESTIONS.forEach(question => {
                const answer = formData.get(`question-${question.id}`);
                if (answer && question.filterTarget) { 
                    question.filterTarget.value = answer;
                    if (answer !== 'all') { 
                        recommendationsMade = true;
                    }
                }
            });
            
            if (recommendationsMade) {
                quizRecommendationDiv.textContent = 'Фильтры применены! Вы можете их уточнить или сбросить.';
            } else {
                 quizRecommendationDiv.textContent = 'Вы не выбрали конкретных критериев, показаны все актуальные хакатоны.';
            }
            applyFiltersBtn.click(); 
            setTimeout(() => {
                quizModal.style.display = 'none';
            }, 2000);
        });
    }

    // --- ЛОГИКА ФИЛЬТРОВ ---
    applyFiltersBtn.addEventListener('click', () => {
        const dateFromFilterStr = filterDateFromInput.value;
        const dateToFilterStr = filterDateToInput.value;
        const dateFromFilter = dateFromFilterStr ? new Date(dateFromFilterStr + "T00:00:00") : null;
        const dateToFilter = dateToFilterStr ? new Date(dateToFilterStr + "T23:59:59") : null;
        
        const specFilter = filterSpecSelect.value;
        const organizerFilter = filterOrganizerSelect.value;
        const levelFilter = filterLevelSelect.value;
        const locationFilter = filterLocationSelect.value;

        const filteredData = ALL_HACKATHONS_DATA.filter(hackData => {
            const cardStartDate = new Date(hackData.startDate + "T00:00:00");
            const cardEndDate = new Date(hackData.endDate + "T23:59:59");

            let dateMatch = true;
            if (dateFromFilter && cardEndDate < dateFromFilter) dateMatch = false;
            if (dateToFilter && cardStartDate > dateToFilter) dateMatch = false;

            const organizerMatch = organizerFilter === 'all' || hackData.organizer === organizerFilter;
            const specMatch = specFilter === 'all' || hackData.specs.includes(specFilter);
            const levelMatch = levelFilter === 'all' || hackData.level === levelFilter;
            const locationMatch = locationFilter === 'all' || hackData.location === locationFilter;

            return dateMatch && organizerMatch && specMatch && levelMatch && locationMatch;
        });
        displayHackathons(filteredData); 
    });

    resetFiltersBtn.addEventListener('click', () => {
        filterDateFromInput.value = '';
        filterDateToInput.value = '';
        filterSpecSelect.value = 'all';
        filterOrganizerSelect.value = 'all';
        filterLevelSelect.value = 'all';
        filterLocationSelect.value = 'all';
        displayHackathons(ALL_HACKATHONS_DATA); 
        quizRecommendationDiv.textContent = '';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) detailsModal.style.display = 'none';
        if (event.target === signupModal) signupModal.style.display = 'none';
        if (event.target === quizModal) quizModal.style.display = 'none';
    });

    // Первоначальное отображение
    displayHackathons(ALL_HACKATHONS_DATA);
});