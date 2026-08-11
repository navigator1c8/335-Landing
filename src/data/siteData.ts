export const siteData = {
  company: {
    name: "ГеоМеридиан",
    tagline: "Геодезия и кадастровые работы",
    phone: "+7 (495) 123-45-67",
    phoneHref: "tel:+74951234567",
    email: "info@geo-meridian.ru",
    emailHref: "mailto:info@geo-meridian.ru",
    address: "г. Москва, ул. Топографическая, 15, офис 302",
    workHours: "Пн–Пт: 9:00–19:00, Сб: 10:00–16:00",
    inn: "ИНН 7701234567",
    license: "Лицензия Росреестра № 77-ГР-01234",
  },

  images: {
    hero: "https://images.pexels.com/photos/30379883/pexels-photo-30379883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    heroSecondary: "https://images.pexels.com/photos/24245275/pexels-photo-24245275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    about: "https://images.pexels.com/photos/5802821/pexels-photo-5802821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    aboutSecondary: "https://images.pexels.com/photos/6285158/pexels-photo-6285158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    services: [
      "https://images.pexels.com/photos/30379883/pexels-photo-30379883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/5802821/pexels-photo-5802821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/24245275/pexels-photo-24245275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7499043/pexels-photo-7499043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    projects: [
      "https://images.pexels.com/photos/2514002/pexels-photo-2514002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7937302/pexels-photo-7937302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6377334/pexels-photo-6377334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/4036301/pexels-photo-4036301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    team: [
      { name: "Иван Петров", role: "Главный геодезист", photo: "https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" },
      { name: "Сергей Соколов", role: "Кадастровый инженер", photo: "https://images.pexels.com/photos/37605831/pexels-photo-37605831.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" },
      { name: "Дмитрий Волков", role: "Инженер-топограф", photo: "https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" },
      { name: "Анна Смирнова", role: "Менеджер проектов", photo: "https://images.pexels.com/photos/29852852/pexels-photo-29852852.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" },
    ],
    cta: "https://images.pexels.com/photos/29560007/pexels-photo-29560007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    map: "https://images.pexels.com/photos/29806465/pexels-photo-29806465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    equipment: "https://images.pexels.com/photos/36930873/pexels-photo-36930873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    process: "https://images.pexels.com/photos/8470779/pexels-photo-8470779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    faq: "https://images.pexels.com/photos/6285146/pexels-photo-6285146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    testimonialsBg: "https://images.pexels.com/photos/6285147/pexels-photo-6285147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    booking: "https://images.pexels.com/photos/15360464/pexels-photo-15360464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    contact: "https://images.pexels.com/photos/7009483/pexels-photo-7009483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    blueprint: "https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gpsSurveyor: "https://images.pexels.com/photos/5802822/pexels-photo-5802822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    droneAerial: "https://images.pexels.com/photos/12815289/pexels-photo-12815289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    compassMap: "https://images.pexels.com/photos/7009484/pexels-photo-7009484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },

  stats: [
    { value: "15+", label: "лет на рынке" },
    { value: "2500+", label: "выполненных проектов" },
    { value: "98%", label: "довольных клиентов" },
    { value: "24", label: "квалифицированных специалиста" },
  ],

  services: [
    { id: 1, title: "Топографическая съёмка", description: "Создание топографических планов местности в масштабах 1:500, 1:1000 и 1:2000 для проектирования и строительства.", price: "от 8 000 ₽/га", icon: "Map", features: ["Съёмка рельефа", "Нанесение коммуникаций", "Координатная привязка"] },
    { id: 2, title: "Межевание земельных участков", description: "Определение и закрепление границ земельного участка на местности с постановкой межевых знаков.", price: "от 12 000 ₽", icon: "Ruler", features: ["Установление границ", "Межевые знаки", "Формирование межевого плана"] },
    { id: 3, title: "Кадастровые работы", description: "Подготовка межевых и технических планов для постановки объектов на кадастровый учёт.", price: "от 10 000 ₽", icon: "FileText", features: ["Межевой план", "Технический план", "Акт обследования"] },
    { id: 4, title: "Вынос границ в натуру", description: "Перенос координат земельного участка с кадастрового плана на местность с установкой межевых знаков.", price: "от 5 000 ₽", icon: "Crosshair", features: ["Установка знаков", "Акт выноса", "Фотофиксация"] },
    { id: 5, title: "Аэрофотосъёмка с БПЛА", description: "Беспилотная аэрофотосъёмка местности с созданием ортофотопланов и цифровых моделей рельефа.", price: "от 15 000 ₽", icon: "Plane", features: ["Ортофотоплан", "3D-модель рельефа", "Объёмные расчёты"] },
    { id: 6, title: "Строительная геодезия", description: "Геодезическое обеспечение строительных работ: разбивка осей, контроль превышений, исполнительные съёмки.", price: "от 6 000 ₽/выезд", icon: "Building2", features: ["Разбивка осей", "Исполнительная съёмка", "Контроль деформаций"] },
  ],

  processSteps: [
    { step: 1, title: "Заявка и консультация", description: "Обсуждаем задачу, объём работ и согласовываем сроки." },
    { step: 2, title: "Предметный договор", description: "Готовим смету и подписываем договор с фиксированной стоимостью." },
    { step: 3, title: "Полевые работы", description: "Наши инженеры выезжают на объект и выполняют измерения." },
    { step: 4, title: "Камеральная обработка", description: "Обрабатываем данные и формируем техническую документацию." },
    { step: 5, title: "Сдача результатов", description: "Передаём готовые планы, при необходимости сопровождаем в Росреестре." },
  ],

  projects: [
    { title: "Топосъёмка жилого комплекса", location: "Москва, Новая Рига", area: "35 га", period: "2024", image: "https://images.pexels.com/photos/2514002/pexels-photo-2514002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", tags: ["Топосъёмка", "Строительство"] },
    { title: "Межевание сельхозземель", location: "Тульская область", area: "120 га", period: "2024", image: "https://images.pexels.com/photos/6377334/pexels-photo-6377334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", tags: ["Межевание", "Сельское хозяйство"] },
    { title: "Аэрофотосъёмка промзоны", location: "Подмосковье", area: "80 га", period: "2023", image: "https://images.pexels.com/photos/7937302/pexels-photo-7937302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", tags: ["Аэрофотосъёмка", "БПЛА"] },
    { title: "Кадастровые работы коттеджного посёлка", location: "Ленинградская область", area: "45 участков", period: "2023", image: "https://images.pexels.com/photos/4036301/pexels-photo-4036301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", tags: ["Кадастр", "ИЖС"] },
  ],

  testimonials: [
    { name: "Алексей Морозов", company: "СтройИнвест-Девелопмент", text: "Работаем с ГеоМеридиан более трёх лет. Точность съёмок и сроки — на высшем уровне. Рекомендуем как надёжного партнёра.", rating: 5 },
    { name: "Елена Кузнецова", company: "Частный заказчик", text: "Делала межевание участка. Ребята всё объяснили, быстро приехали, оформили документы. Осталась очень довольна!", rating: 5 },
    { name: "Дмитрий Васильев", company: "АгроХолдинг ЮГ", text: "Заказывали аэрофотосъёмку больших площадей. Качество ортофотопланов отличное, объёмы земляных работ посчитаны точно.", rating: 5 },
    { name: "Марина Соколова", company: "Юридическая фирма «Правозем»", text: "Обращались за выносом границ в натуру по судебному делу. Работа выполнена безупречно, акт принят судом.", rating: 5 },
  ],

  pricing: [
    { name: "Топосъёмка", unit: "га", price: "8 000 ₽", note: "Масштаб 1:500" },
    { name: "Межевание участка", unit: "участок", price: "12 000 ₽", note: "До 15 соток" },
    { name: "Технический план", unit: "объект", price: "10 000 ₽", note: "Жилое здание" },
    { name: "Вынос границ", unit: "точка", price: "1 200 ₽", note: "С установкой знаков" },
    { name: "Аэрофотосъёмка", unit: "га", price: "3 500 ₽", note: "От 5 га" },
    { name: "Строительная разбивка", unit: "выезд", price: "6 000 ₽", note: "В пределах МКАД" },
  ],

  faqItems: [
    { question: "Сколько времени занимает топографическая съёмка?", answer: "Сроки зависят от площади и сложности рельефа. Для участка площадью 1 га полевые работы занимают 1–2 дня, камеральная обработка — ещё 2–3 дня. Итоговый документ обычно готов через 5–7 рабочих дней." },
    { question: "Нужна ли лицензия для проведения геодезических работ?", answer: "Да, компания должна иметь лицензию Росреестра на выполнение геодезических и картографических работ. У нас есть все необходимые разрешительные документы, копию которых мы предоставляем по первому запросу." },
    { question: "Что нужно для межевания земельного участка?", answer: "Для межевания потребуется: паспорт собственника, выписка из ЕГРН, правоустанавливающие документы на участок. После согласования границ с соседями мы формируем межевой план и подаём его в Росреестр." },
    { question: "Выезжаете ли вы в другие регионы?", answer: "Да, мы работаем по всей Московской области и соседним регионам. Для удалённых объектов стоимость выезда рассчитывается индивидуально — обычно это компенсация транспортных расходов." },
    { question: "Какие гарантии вы предоставляете?", answer: "Мы гарантируем точность измерений, соответствие всем нормативам и срок выполнения работ, зафиксированный в договоре. Все результаты могут быть согласованы в надзорных органах без доработок." },
    { question: "Возможно ли срочное выполнение работ?", answer: "Да, мы предоставляем услугу срочного выезда — в течение 24 часов с момента заявки. Стоимость срочного заказа увеличивается на 30–50% в зависимости от объёма и удалённости объекта." },
  ],

  bookingSlots: {
    morning: ["09:00", "10:00", "11:00", "12:00"],
    afternoon: ["13:00", "14:00", "15:00", "16:00", "17:00"],
    evening: ["18:00", "19:00"],
  },

  bookingServices: [
    "Топографическая съёмка",
    "Межевание участка",
    "Кадастровые работы",
    "Вынос границ в натуру",
    "Аэрофотосъёмка БПЛА",
    "Строительная геодезия",
    "Консультация специалиста",
  ],

  contactMethods: [
    { label: "Телефон", value: "+7 (495) 123-45-67", icon: "Phone", href: "tel:+74951234567" },
    { label: "Email", value: "info@geo-meridian.ru", icon: "Mail", href: "mailto:info@geo-meridian.ru" },
    { label: "Адрес", value: "г. Москва, ул. Топографическая, 15", icon: "MapPin", href: "#" },
    { label: "Режим работы", value: "Пн–Пт: 9:00–19:00", icon: "Clock", href: "#" },
  ],

  navLinks: [
    { label: "Услуги", href: "#services" },
    { label: "О компании", href: "#about" },
    { label: "Проекты", href: "#projects" },
    { label: "Цены", href: "#pricing" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contact" },
  ],
};
