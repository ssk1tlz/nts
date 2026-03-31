// js/script.js

// Scroll reveal анимации
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ===== i18n (RU/EN) =====
const I18N = {
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О Нас',
    'nav.services': 'Услуги',
    'nav.products': 'Продукты',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакт'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.products': 'Materials',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact'
  }
};

const PAGE_TRANSLATIONS = {
  'newtech.html': [
    { selector: '.hero-tag', ru: 'Профессиональное покрытие дорог', en: 'Professional road surfacing' },
    { selector: '.hero-title', html: true, ru: 'Асфальт &amp;<br><em>Брусчатка</em>высшего класса', en: 'Asphalt &amp;<br><em>Paving stone</em>premium quality' },
    { selector: '.hero-sub', ru: 'Укладка асфальта, тротуарной плитки и брусчатки с гарантией качества. Дороги, парковки, дворы и пешеходные зоны.', en: 'Asphalt, paving slabs and paving stone installation with a quality guarantee. Roads, parking lots, courtyards and pedestrian zones.' },
    { selector: '.hero-btns .btn-primary', ru: 'Получить расчёт →', en: 'Get an estimate →' },
    { selector: '.hero-btns .btn-outline', ru: 'Наши работы', en: 'Our projects' },
    { selector: '.hero-stats .stat-item:nth-child(1) .stat-label', ru: 'Объектов завершено', en: 'Completed projects' },
    { selector: '.hero-stats .stat-item:nth-child(2) .stat-label', ru: 'Лет на рынке', en: 'Years in market' },
    { selector: '.hero-stats .stat-item:nth-child(3) .stat-label', ru: 'Лабораторный контроль', en: 'Lab quality control' },
    { selector: '.hero-stats .stat-item:nth-child(4) .stat-label', ru: 'Гарантия на работы', en: 'Work warranty' },
    { selector: '.hero-stats .stat-item:nth-child(4) .stat-number', ru: '3 года', en: '3 years' },
    { selector: '#about .section-tag', ru: 'О Компании', en: 'About Company' },
    { selector: '#about .section-title', html: true, ru: 'Надёжный партнёр<br>в строительстве дорог', en: 'Reliable partner<br>in road construction' },
    { selector: '#about .section-body', ru: 'Наша компания работает на строительном рынке Узбекистана с 2011 года. Мы специализируемся на укладке асфальтового покрытия, тротуарной плитки и брусчатки для жилых, коммерческих и муниципальных объектов.', en: 'Our company has been operating in Uzbekistan since 2011. We specialize in asphalt paving, sidewalk slabs and paving stone for residential, commercial and municipal projects.' },
    { selector: '#about .about-years span', ru: 'лет опыта', en: 'years of experience' },
    { selector: '#about .feature-item:nth-child(1) .feature-text', ru: 'Собственный автопарк техники', en: 'Own fleet of machinery' },
    { selector: '#about .feature-item:nth-child(2) .feature-text', ru: 'Лабораторный контроль смесей', en: 'Laboratory mix control' },
    { selector: '#about .feature-item:nth-child(3) .feature-text', ru: 'Соблюдение ГОСТ и СНиП', en: 'Compliance with standards' },
    { selector: '#about .feature-item:nth-child(4) .feature-text', ru: 'Работы в срок и в бюджет', en: 'On-time and on-budget' },
    { selector: '#about .feature-item:nth-child(5) .feature-text', ru: 'Гарантия 3 года на все работы', en: '3-year warranty on all works' },
    { selector: '#about .feature-item:nth-child(6) .feature-text', ru: 'Опытные инженеры в штате', en: 'Experienced in-house engineers' },
    { selector: '#services .section-tag', ru: 'Наши Услуги', en: 'Our Services' },
    { selector: '#services .section-title', ru: 'Полный спектр дорожных работ', en: 'Full range of road works' },
    { selector: '#services .services-carousel__btn--prev', attr: 'aria-label', ru: 'Предыдущие услуги', en: 'Previous services' },
    { selector: '#services .services-carousel__btn--next', attr: 'aria-label', ru: 'Следующие услуги', en: 'Next services' },
    { selector: '#services .service-card--carousel:nth-child(1) .service-name', ru: 'Асфальтирование', en: 'Asphalt paving' },
    { selector: '#services .service-card--carousel:nth-child(1) .service-desc', ru: 'Укладка горячего и холодного асфальта. Дороги, парковки, дворы, территории предприятий.', en: 'Hot and cold asphalt paving. Roads, parking lots, courtyards and industrial areas.' },
    { selector: '#services .service-card--carousel:nth-child(2) .service-name', ru: 'Брусчатка и плитка', en: 'Paving stone and slabs' },
    { selector: '#services .service-card--carousel:nth-child(2) .service-desc', ru: 'Тротуарная плитка, брусчатка и бордюрный камень для пешеходных зон и площадей.', en: 'Sidewalk slabs, paving stone and curbstone for pedestrian zones and squares.' },
    { selector: '#services .service-card--carousel:nth-child(3) .service-name', ru: 'Ремонт дорог', en: 'Road repair' },
    { selector: '#services .service-card--carousel:nth-child(3) .service-desc', ru: 'Ямочный ремонт, фрезерование, восстановление покрытия и сопутствующие работы.', en: 'Pothole repair, milling, surface restoration and related works.' },
    { selector: '#services .service-card--carousel:nth-child(4) .service-name', ru: 'Строительство мостов', en: 'Bridge construction' },
    { selector: '#services .service-card--carousel:nth-child(4) .service-desc', ru: 'Проектирование и возведение мостовых сооружений, подходы и инженерная подготовка.', en: 'Design and construction of bridge structures, approaches and engineering preparation.' },
    { selector: '#services .service-card--carousel:nth-child(5) .service-name', ru: 'Бетонные работы', en: 'Concrete works' },
    { selector: '#services .service-card--carousel:nth-child(5) .service-desc', ru: 'Фундаменты, монолит, железобетонные конструкции для дорожной и гражданской инфраструктуры.', en: 'Foundations, cast-in-place and reinforced concrete structures for road and civil infrastructure.' },
    { selector: '#services .service-card--carousel:nth-child(6) .service-name', ru: 'Облагораживание территории', en: 'Site landscaping' },
    { selector: '#services .service-card--carousel:nth-child(6) .service-desc', ru: 'Благоустройство, озеленение, пешеходные зоны и организация прилегающих территорий.', en: 'Landscaping, greenery, pedestrian zones and adjacent area planning.' },
    { selector: '#services .service-card--carousel:nth-child(7) .service-name', ru: 'Лаборатория качества', en: 'Quality laboratory' },
    { selector: '#services .service-card--carousel:nth-child(7) .service-desc', ru: 'Испытания асфальтобетона и щебня, подтверждение соответствия ГОСТ на объекте.', en: 'Asphalt concrete and aggregate testing, on-site compliance confirmation.' },
    { selector: '#services .service-card--carousel:nth-child(8) .service-name', ru: 'Строительство дорог', en: 'Road construction' },
    { selector: '#services .service-card--carousel:nth-child(8) .service-desc', ru: 'Полный цикл: земляные работы, основание, покрытие, водоотвод и разметка.', en: 'Full cycle: earthworks, base, surfacing, drainage and road marking.' },
    { selector: '#why .section-tag', ru: 'Наши Преимущества', en: 'Our Advantages' },
    { selector: '#why .section-title', ru: 'Почему выбирают нас', en: 'Why choose us' },
    { selector: '#why .why-card:nth-child(1) .why-title', ru: 'Лабораторный контроль', en: 'Laboratory control' },
    { selector: '#why .why-card:nth-child(1) .why-text', ru: 'Каждая партия асфальтовой смеси проходит строгий лабораторный контроль состава и качества.', en: 'Each batch of asphalt mix goes through strict laboratory composition and quality control.' },
    { selector: '#why .why-card:nth-child(2) .why-title', ru: 'Своя техника', en: 'Own machinery' },
    { selector: '#why .why-card:nth-child(2) .why-text', ru: 'Собственный парк катков, асфальтоукладчиков и вспомогательной техники — без простоев.', en: 'Own fleet of rollers, pavers and support machinery - no downtime.' },
    { selector: '#why .why-card:nth-child(3) .why-title', ru: 'Точность и ГОСТ', en: 'Accuracy and standards' },
    { selector: '#why .why-card:nth-child(3) .why-text', ru: 'Строгое соблюдение нормативов СНиП и ГОСТ. Проектная документация на каждый объект.', en: 'Strict compliance with construction standards. Project documentation for every site.' },
    { selector: '#why .why-card:nth-child(4) .why-title', ru: 'Гарантия 3 года', en: '3-year warranty' },
    { selector: '#why .why-card:nth-child(4) .why-text', ru: 'Даём официальную гарантию 3 года на все виды укладочных работ. Договор на каждый объект.', en: 'We provide an official 3-year warranty for all paving works. Contract for each project.' },
    { selector: '#products .section-tag', ru: 'Продукция', en: 'Materials' },
    { selector: '#products .section-title', ru: 'Наши материалы', en: 'Our materials' },
    { selector: '#products .btn-outline', ru: 'Запросить прайс', en: 'Request price list' },
    { selector: '#products .product-card:nth-child(1) .product-type', ru: 'Покрытие', en: 'Surfacing' },
    { selector: '#products .product-card:nth-child(1) .product-name', ru: 'Асфальтобетон горячий', en: 'Hot asphalt concrete' },
    { selector: '#products .product-card:nth-child(1) .product-detail', ru: 'Марки А, Б, В. Для дорог I–III категории. Фракция 5–20 мм.', en: 'Grades A, B, C. For category I-III roads. Fraction 5-20 mm.' },
    { selector: '#products .product-card:nth-child(2) .product-type', ru: 'Мощение', en: 'Paving' },
    { selector: '#products .product-card:nth-child(2) .product-name', ru: 'Тротуарная плитка', en: 'Sidewalk paving slabs' },
    { selector: '#products .product-card:nth-child(2) .product-detail', ru: 'Вибропрессованная, 60–80 мм. Формы: кирпич, волна, шестигранник.', en: 'Vibro-pressed, 60-80 mm. Shapes: brick, wave, hexagon.' },
    { selector: '#products .product-card:nth-child(3) .product-type', ru: 'Мощение', en: 'Paving' },
    { selector: '#products .product-card:nth-child(3) .product-name', ru: 'Гранитная брусчатка', en: 'Granite paving stone' },
    { selector: '#products .product-card:nth-child(3) .product-detail', ru: 'Природный гранит, пиленый и колотый. Долговечность 100+ лет.', en: 'Natural granite, sawn and split. Durability 100+ years.' },
    { selector: '#products .product-card:nth-child(4) .product-type', ru: 'Ограждение', en: 'Bordering' },
    { selector: '#products .product-card:nth-child(4) .product-name', ru: 'Бордюрный камень', en: 'Curbstone' },
    { selector: '#products .product-card:nth-child(4) .product-detail', ru: 'Стандарт и фигурный бордюр. Бетон М400. Длина 1000 мм.', en: 'Standard and shaped curb. Concrete M400. Length 1000 mm.' },
    { selector: '#portfolio .section-tag', ru: 'Портфолио', en: 'Portfolio' },
    { selector: '#portfolio .section-title', ru: 'Реализованные объекты', en: 'Completed projects' },
    { selector: '#portfolio .portfolio-item:nth-child(1) .portfolio-sub', ru: 'Дорожные работы • 2023', en: 'Road works • 2023' },
    { selector: '#portfolio .portfolio-item:nth-child(1) .portfolio-title', ru: 'Реконструкция городской магистрали', en: 'Urban highway reconstruction' },
    { selector: '#portfolio .portfolio-item:nth-child(1) .portfolio-btn', ru: 'Перейти', en: 'Open' },
    { selector: '#portfolio .portfolio-item:nth-child(2) .portfolio-sub', ru: 'Брусчатка • 2023', en: 'Paving stone • 2023' },
    { selector: '#portfolio .portfolio-item:nth-child(2) .portfolio-title', ru: 'Пешеходная площадь в центре города', en: 'Pedestrian square in city center' },
    { selector: '#portfolio .portfolio-item:nth-child(3) .portfolio-sub', ru: 'Асфальт • 2024', en: 'Asphalt • 2024' },
    { selector: '#portfolio .portfolio-item:nth-child(3) .portfolio-title', ru: 'Парковочный комплекс ТЦ', en: 'Shopping mall parking complex' },
    { selector: '#portfolio .portfolio-item:nth-child(4) .portfolio-sub', ru: 'Плитка • 2024', en: 'Tiles • 2024' },
    { selector: '#portfolio .portfolio-item:nth-child(4) .portfolio-title', ru: 'Благоустройство жилого квартала', en: 'Residential quarter improvement' },
    { selector: '#portfolio .portfolio-item:nth-child(5) .portfolio-sub', ru: 'Ремонт • 2024', en: 'Repair • 2024' },
    { selector: '#portfolio .portfolio-item:nth-child(5) .portfolio-title', ru: 'Ремонт дорог промзоны', en: 'Industrial area road repair' },
    { selector: '#cta .section-tag', ru: 'Связаться с нами', en: 'Contact us' },
    { selector: '#cta .section-title', html: true, ru: 'Готовы обсудить<br>ваш проект?', en: 'Ready to discuss<br>your project?' },
    { selector: '#cta .cta-lead', html: true, ru: 'Оставьте заявку — менеджер перезвонит в течение 30 минут и подготовит расчёт <strong>бесплатно</strong>.', en: 'Leave a request - our manager will call you within 30 minutes and prepare an estimate <strong>for free</strong>.' },
    { selector: '#cta .cta-contact-row:nth-child(1) .cta-contact-label', ru: 'Телефон', en: 'Phone' },
    { selector: '#cta .cta-contact-row:nth-child(2) .cta-contact-label', ru: 'Email', en: 'Email' },
    { selector: '#cta .cta-contact-row:nth-child(3) .cta-contact-label', ru: 'Режим работы', en: 'Working hours' },
    { selector: '#cta .cta-hours-text', ru: 'Пн–Сб: 8:00 — 19:00', en: 'Mon-Sat: 8:00 - 19:00' },
    { selector: '#contactForm .form-title', ru: '📋 Оставить заявку', en: '📋 Leave a request' },
    { selector: '#contactForm .form-group:nth-of-type(1) label', ru: 'Ваше имя *', en: 'Your name *' },
    { selector: '#contactForm .form-group:nth-of-type(2) label', ru: 'Телефон *', en: 'Phone *' },
    { selector: '#contactForm .form-group:nth-of-type(3) label', ru: 'Тип услуги', en: 'Service type' },
    { selector: '#contactForm .form-group:nth-of-type(4) label', ru: 'Площадь объекта (м²)', en: 'Site area (m²)' },
    { selector: '#contactForm .form-group:nth-of-type(5) label', ru: 'Комментарий', en: 'Comment' },
    { selector: '#contactForm input[name="name"]', attr: 'placeholder', ru: 'Имя Фамилия', en: 'Full name' },
    { selector: '#contactForm input[name="phone"]', attr: 'placeholder', ru: '+998 __ ___ __ __', en: '+998 __ ___ __ __' },
    { selector: '#contactForm input[name="area"]', attr: 'placeholder', ru: 'Например: 500 м²', en: 'For example: 500 m²' },
    { selector: '#contactForm textarea[name="message"]', attr: 'placeholder', ru: 'Опишите объект, адрес, пожелания...', en: 'Describe the site, address, and requirements...' },
    { selector: '#contactForm option[value=""]', ru: '— Выберите услугу —', en: '- Select service -' },
    { selector: '#contactForm option:nth-of-type(2)', ru: 'Асфальтирование дорог и парковок', en: 'Road and parking asphalt paving' },
    { selector: '#contactForm option:nth-of-type(3)', ru: 'Укладка тротуарной плитки', en: 'Sidewalk slab laying' },
    { selector: '#contactForm option:nth-of-type(4)', ru: 'Укладка брусчатки', en: 'Paving stone laying' },
    { selector: '#contactForm option:nth-of-type(5)', ru: 'Ремонт дорожного покрытия', en: 'Road surface repair' },
    { selector: '#contactForm option:nth-of-type(6)', ru: 'Бордюрный камень', en: 'Curbstone' },
    { selector: '#contactForm option:nth-of-type(7)', ru: 'Другое', en: 'Other' },
    { selector: '#btnText', ru: 'Отправить заявку', en: 'Send request' },
    { selector: '#btnLoader', ru: '⏳ Отправка...', en: '⏳ Sending...' },
    { selector: '#formError', ru: 'Ошибка отправки. Пожалуйста, позвоните нам напрямую.', en: 'Submission error. Please call us directly.' },
    { selector: '#contactForm .form-notice', ru: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных', en: 'By clicking the button, you agree to personal data processing.' },
    { selector: '#formSuccess h3', ru: 'Заявка принята!', en: 'Request received!' },
    { selector: '#formSuccess p', ru: 'Мы уже получили ваше сообщение и свяжемся с вами в течение 30 минут.', en: 'We have received your message and will contact you within 30 minutes.' },
    { selector: 'footer .footer-desc', ru: 'Профессиональное асфальтирование и укладка брусчатки в Узбекистане. Работаем с 2011 года.', en: 'Professional asphalt paving and paving stone installation in Uzbekistan. Operating since 2011.' },
    { selector: 'footer .footer-col:nth-child(2) h4', ru: 'Услуги', en: 'Services' },
    { selector: 'footer .footer-col:nth-child(2) li:nth-child(1) a', ru: 'Асфальтирование', en: 'Asphalt paving' },
    { selector: 'footer .footer-col:nth-child(2) li:nth-child(2) a', ru: 'Брусчатка', en: 'Paving stone' },
    { selector: 'footer .footer-col:nth-child(2) li:nth-child(3) a', ru: 'Тротуарная плитка', en: 'Sidewalk slabs' },
    { selector: 'footer .footer-col:nth-child(2) li:nth-child(4) a', ru: 'Ремонт дорог', en: 'Road repair' },
    { selector: 'footer .footer-col:nth-child(2) li:nth-child(5) a', ru: 'Бордюрный камень', en: 'Curbstone' },
    { selector: 'footer .footer-col:nth-child(3) h4', ru: 'Компания', en: 'Company' },
    { selector: 'footer .footer-col:nth-child(3) li:nth-child(1) a', ru: 'О нас', en: 'About us' },
    { selector: 'footer .footer-col:nth-child(3) li:nth-child(2) a', ru: 'Продукция', en: 'Materials' },
    { selector: 'footer .footer-col:nth-child(3) li:nth-child(3) a', ru: 'Портфолио', en: 'Portfolio' },
    { selector: 'footer .footer-col:nth-child(3) li:nth-child(4) a', ru: 'Сертификаты', en: 'Certificates' },
    { selector: 'footer .footer-col:nth-child(3) li:nth-child(5) a', ru: 'Вакансии', en: 'Careers' },
    { selector: 'footer .footer-col:nth-child(4) h4', ru: 'Контакты', en: 'Contacts' },
    { selector: 'footer .footer-col:nth-child(4) li:nth-child(3) a', ru: 'Ташкент, Узбекистан', en: 'Tashkent, Uzbekistan' },
    { selector: 'footer .footer-bottom span:nth-child(1)', ru: '© 2024 New Tech Samarkand. Все права защищены.', en: '© 2024 New Tech Samarkand. All rights reserved.' },
    { selector: 'footer .footer-bottom span:nth-child(2)', ru: 'Асфальтирование и брусчатка в Узбекистане', en: 'Asphalt paving and paving stone in Uzbekistan' }
  ],
  'products.html': [
    { selector: '.products-section .section-tag', ru: 'Наша Продукция', en: 'Our Materials' },
    { selector: '.products-section .section-title', html: true, ru: 'Высококачественные материалы<br>для дорожного строительства', en: 'High-quality materials<br>for road construction' },
    { selector: '.products-lead', ru: 'Мы используем только сертифицированные материалы, соответствующие ГОСТ и СНиП.', en: 'We use only certified materials that comply with construction standards.' },
    { selector: '.products-grid .product-card:nth-child(1) .product-type', ru: 'Покрытие', en: 'Surfacing' },
    { selector: '.products-grid .product-card:nth-child(1) .product-name', ru: 'Асфальтобетон горячий', en: 'Hot asphalt concrete' },
    { selector: '.products-grid .product-card:nth-child(1) .product-detail', ru: 'Марки А, Б, В. Фракция 5–20 мм. Для дорог I–III категории.', en: 'Grades A, B, C. Fraction 5-20 mm. For category I-III roads.' },
    { selector: '.products-grid .product-card:nth-child(2) .product-type', ru: 'Мощение', en: 'Paving' },
    { selector: '.products-grid .product-card:nth-child(2) .product-name', ru: 'Тротуарная плитка', en: 'Sidewalk paving slabs' },
    { selector: '.products-grid .product-card:nth-child(2) .product-detail', ru: 'Вибропрессованная, толщина 60–80 мм. Различные формы и цвета.', en: 'Vibro-pressed, 60-80 mm thickness. Various shapes and colors.' },
    { selector: '.products-grid .product-card:nth-child(3) .product-type', ru: 'Мощение', en: 'Paving' },
    { selector: '.products-grid .product-card:nth-child(3) .product-name', ru: 'Гранитная брусчатка', en: 'Granite paving stone' },
    { selector: '.products-grid .product-card:nth-child(3) .product-detail', ru: 'Природный гранит. Пиленая и колотая. Срок службы более 100 лет.', en: 'Natural granite. Sawn and split. Service life over 100 years.' },
    { selector: '.products-grid .product-card:nth-child(4) .product-type', ru: 'Ограждение', en: 'Bordering' },
    { selector: '.products-grid .product-card:nth-child(4) .product-name', ru: 'Бордюрный камень', en: 'Curbstone' },
    { selector: '.products-grid .product-card:nth-child(4) .product-detail', ru: 'Бетон М400. Стандартный и фигурный бордюр. Длина 1000 мм.', en: 'Concrete M400. Standard and shaped curb. Length 1000 mm.' },
    { selector: '.footer-simple', html: true, ru: '© 2024 AsphaltPro. Все права защищены.<br>Профессиональное асфальтирование и брусчатка в Узбекистане', en: '© 2024 AsphaltPro. All rights reserved.<br>Professional asphalt paving and paving stone in Uzbekistan' }
  ],
  'service-asphalt.html': [
    { selector: '.portfolio-back-link', ru: '← К услугам', en: '← Back to services' },
    { selector: '.portfolio-article-title', ru: 'Асфальтирование', en: 'Asphalt paving' },
    { selector: '.portfolio-article-meta', ru: 'Горячий и холодный асфальтобетон • Узбекистан', en: 'Hot and cold asphalt concrete • Uzbekistan' },
    { selector: '.portfolio-article-grid > div:nth-child(1) h3', ru: 'О услуге', en: 'About service' },
    { selector: '.portfolio-article-grid > div:nth-child(2) h3', ru: 'Что входит', en: 'What is included' },
    { selector: '.service-detail-cta .btn-primary', ru: 'Получить расчёт →', en: 'Get an estimate →' }
  ],
  'portfolio.html': [
    { selector: '.portfolio-back-link', ru: '← Вернуться в портфолио', en: '← Back to portfolio' },
    { selector: '.portfolio-article-title', ru: 'Реконструкция городской магистрали', en: 'Urban highway reconstruction' },
    { selector: '.portfolio-article-meta', ru: 'Дорожные работы • Самарканд • 2023', en: 'Road works • Samarkand • 2023' },
    { selector: '.portfolio-article-grid > div:nth-child(1) h3', ru: 'О проекте', en: 'About project' },
    { selector: '.portfolio-article-grid > div:nth-child(2) h3', ru: 'Характеристики', en: 'Specifications' }
  ],
  'project-magistral.html': [
    { selector: '.project-tag', ru: 'Дорожные работы', en: 'Road works' },
    { selector: '.project-hero-content h1', ru: 'Реконструкция городской магистрали', en: 'Urban highway reconstruction' },
    { selector: '.stats-bar .stats-bar-item:nth-child(1) span', ru: 'м² площадь', en: 'm² area' },
    { selector: '.stats-bar .stats-bar-item:nth-child(2) span', ru: 'длина трассы', en: 'route length' },
    { selector: '.stats-bar .stats-bar-item:nth-child(3) span', ru: 'срок работ', en: 'work duration' },
    { selector: '.stats-bar .stats-bar-item:nth-child(4) span', ru: 'гарантия', en: 'warranty' },
    { selector: '.project-section-label', ru: 'О проекте', en: 'About project' },
    { selector: '.project-desc-title', html: true, ru: 'Полная реконструкция<br>городской магистрали', en: 'Complete reconstruction<br>of an urban highway' },
    { selector: '.gallery-label', ru: 'Фотогалерея объекта', en: 'Project photo gallery' },
    { selector: '.related-heading', ru: 'Смотрите также', en: 'See also' },
    { selector: '.related-section .project-section-label', ru: 'Другие проекты', en: 'Other projects' }
  ],
  'material-asfaltobeton-goryachiy.html': [
    { selector: '.portfolio-back-link', ru: '← К материалам', en: '← Back to materials' },
    { selector: '.portfolio-article-title', ru: 'Асфальтобетон горячий', en: 'Hot asphalt concrete' },
    { selector: '.portfolio-article-meta', ru: 'Марки А, Б, В • Для дорог I–III категории', en: 'Grades A, B, C • For category I-III roads' },
    { selector: '.portfolio-article-grid > div:nth-child(1) h3', ru: 'О материале', en: 'About material' },
    { selector: '.portfolio-article-grid > div:nth-child(2) h3', ru: 'Что входит в работу', en: 'What is included' },
    { selector: '.service-detail-cta .btn-primary', ru: 'Запросить расчет →', en: 'Request estimate →' }
  ],
  'material-trotuarnaya-plitka.html': [
    { selector: '.portfolio-back-link', ru: '← К материалам', en: '← Back to materials' },
    { selector: '.portfolio-article-title', ru: 'Тротуарная плитка', en: 'Sidewalk paving slabs' },
    { selector: '.portfolio-article-meta', ru: 'Широкий выбор • Применение для пешеходных зон', en: 'Wide selection • For pedestrian zones' },
    { selector: '.portfolio-article-grid > div:nth-child(1) h3', ru: 'О материале', en: 'About material' },
    { selector: '.portfolio-article-grid > div:nth-child(2) h3', ru: 'Что входит в поставку/работу', en: 'What is included in supply/work' },
    { selector: '.service-detail-cta .btn-primary', ru: 'Запросить расчет →', en: 'Request estimate →' }
  ],
  'material-granitnaya-bruschatka.html': [
    { selector: '.portfolio-back-link', ru: '← К материалам', en: '← Back to materials' },
    { selector: '.portfolio-article-title', ru: 'Гранитная брусчатка', en: 'Granite paving stone' },
    { selector: '.portfolio-article-meta', ru: 'Природный камень • Долговечность и прочность', en: 'Natural stone • Durability and strength' },
    { selector: '.portfolio-article-grid > div:nth-child(1) h3', ru: 'О материале', en: 'About material' },
    { selector: '.portfolio-article-grid > div:nth-child(2) h3', ru: 'Что входит в поставку/работу', en: 'What is included in supply/work' },
    { selector: '.service-detail-cta .btn-primary', ru: 'Запросить расчет →', en: 'Request estimate →' }
  ],
  'material-bordyurnyi-kamen.html': [
    { selector: '.portfolio-back-link', ru: '← К материалам', en: '← Back to materials' },
    { selector: '.portfolio-article-title', ru: 'Бордюрный камень', en: 'Curbstone' },
    { selector: '.portfolio-article-meta', ru: 'Ограждение • Формы и исполнение под проект', en: 'Bordering • Shapes and project implementation' },
    { selector: '.portfolio-article-grid > div:nth-child(1) h3', ru: 'О материале', en: 'About material' },
    { selector: '.portfolio-article-grid > div:nth-child(2) h3', ru: 'Что входит в поставку/работу', en: 'What is included in supply/work' },
    { selector: '.service-detail-cta .btn-primary', ru: 'Запросить расчет →', en: 'Request estimate →' }
  ]
};

function applyPageTranslations(lang) {
  const filename = window.location.pathname.split('/').pop() || 'newtech.html';
  const items = PAGE_TRANSLATIONS[filename];
  if (!items || items.length === 0) return;

  items.forEach((item) => {
    const el = document.querySelector(item.selector);
    if (!el) return;
    const text = lang === 'en' ? item.en : item.ru;
    if (text == null) return;

    if (item.attr) el.setAttribute(item.attr, text);
    else if (item.html) el.innerHTML = text;
    else el.textContent = text;
  });
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.ru;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = key ? dict[key] : null;
    if (val) el.textContent = val;
  });

  document.documentElement.lang = lang === 'en' ? 'en' : 'ru';

  document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
  });

  applyPageTranslations(lang);
}

function initLanguageSwitcher() {
  const saved = localStorage.getItem('site_lang');
  const initial = saved && I18N[saved] ? saved : 'ru';
  applyLanguage(initial);

  document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (!lang || !I18N[lang]) return;
      localStorage.setItem('site_lang', lang);
      applyLanguage(lang);
    });
  });
}

initLanguageSwitcher();

// Плавный скролл при переходе с другой страницы (index.html#section)
function handlePageLoadScroll() {
  if (window.location.hash) {
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    
    if (target) {
      window.scrollTo(0, 0); // сначала в начало

      setTimeout(() => {
        // На products.html при переходе к материалам через #mat-... не скроллим вниз,
        // чтобы пользователь успел прочитать текст сверху.
        const onProducts = window.location.pathname.endsWith('products.html');
        const isMaterialAnchor = hash.startsWith('#mat-');
        if (onProducts && isMaterialAnchor) return;

        const navHeight = document.querySelector('nav')?.offsetHeight ?? 85;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
      }, 450);
    }
  }
}

// Запускаем при загрузке страницы
window.addEventListener('load', handlePageLoadScroll);
window.addEventListener('hashchange', handlePageLoadScroll);

// Плавный скролл для внутренних ссылок (#about и т.д.) с учетом фиксированной навигации
const getNavHeight = () => (document.querySelector('nav')?.offsetHeight ?? 85);
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    // Обновляем hash для корректной работы back/forward.
    if (window.location.hash !== href) window.history.pushState(null, '', href);

    const navHeight = getNavHeight();
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
  });
});

// Изменение навбара при прокрутке
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 50 
      ? 'rgba(232,76,30,0.4)' 
      : 'rgba(232,76,30,0.2)';
  });
}

// Полностью запрещаем любые переходы по ссылкам на products.html
// (кроме программного редиректа при клике по карточкам материалов на newtech.html).
const onNewTechPage = window.location.pathname.endsWith('newtech.html');
const onProductsPage = window.location.pathname.endsWith('products.html');
document.querySelectorAll('a[href="products.html"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    // На самой products.html переходы можно не блокировать.
    if (onProductsPage) return;

    // На newtech.html превращаем "Продукты" в прокрутку к материалам.
    if (onNewTechPage) {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        e.preventDefault();
        const navHeight = getNavHeight();
        const elementPosition = productsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
      } else {
        e.preventDefault();
      }
      return;
    }

    // На других страницах полностью блокируем переход.
    e.preventDefault();
  });
});

// Карточки "Наши материалы" (на newtech.html)
// При наведении показываем подсказку, но переход делаем только по клику.
const productCards = document.querySelectorAll('#products .product-card[data-target]');
if (productCards.length > 0) {
  productCards.forEach((card) => {
    card.addEventListener('click', () => {
      const href = card.getAttribute('data-target');
      if (!href) return;
      if (href.startsWith('#')) window.location.href = `products.html${href}`;
      else window.location.href = href;
    });

    // Enter/Space для людей, использующих клавиатуру
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// Карусель услуг (главная)
function initServicesCarousel() {
  const root = document.querySelector('.services-carousel');
  if (!root) return;

  const viewport = root.querySelector('.services-carousel__viewport');
  const track = root.querySelector('.services-carousel__track');
  const slides = track ? Array.from(track.querySelectorAll('.service-card--carousel')) : [];
  const prevBtn = root.querySelector('.services-carousel__btn--prev');
  const nextBtn = root.querySelector('.services-carousel__btn--next');
  if (!viewport || !track || slides.length === 0 || !prevBtn || !nextBtn) return;

  const gap = 2;
  let index = 0;

  function perView() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function slideOuterWidth() {
    const pv = perView();
    const gaps = Math.max(0, pv - 1) * gap;
    return (viewport.clientWidth - gaps) / pv;
  }

  function maxIndex() {
    return Math.max(0, slides.length - perView());
  }

  function layout() {
    const w = slideOuterWidth();
    slides.forEach((s) => {
      s.style.flex = `0 0 ${w}px`;
      s.style.width = `${w}px`;
    });
    index = Math.min(index, maxIndex());
    updateTransform();
    updateButtons();
  }

  function updateTransform() {
    const step = slideOuterWidth() + gap;
    track.style.transform = `translateX(-${index * step}px)`;
  }

  function updateButtons() {
    const max = maxIndex();
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= max;
  }

  nextBtn.addEventListener('click', () => {
    if (index < maxIndex()) {
      index += 1;
      updateTransform();
      updateButtons();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index -= 1;
      updateTransform();
      updateButtons();
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 120);
  });

  layout();
}

initServicesCarousel();

// Contact form (работает только если форма есть на странице)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const formError = document.getElementById('formError');

    btn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoader) btnLoader.style.display = 'inline';
    if (formError) formError.classList.remove('show');

    const formData = new FormData(this);

    try {
      const response = await fetch('send.php', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();

      if (result.ok) {
        document.getElementById('formWrap').style.display = 'none';
        document.getElementById('formSuccess').classList.add('show');
      } else {
        throw new Error(result.message || 'error');
      }
    } catch (err) {
      if (formError) formError.classList.add('show');
      btn.disabled = false;
      if (btnText) btnText.style.display = 'inline';
      if (btnLoader) btnLoader.style.display = 'none';
    }
  });
}

// Lightbox (project page)
window.openLightbox = function openLightbox(src) {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!box || !img) return;
  img.src = src;
  box.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function closeLightbox() {
  const box = document.getElementById('lightbox');
  if (!box) return;
  box.classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeLightbox?.();
});