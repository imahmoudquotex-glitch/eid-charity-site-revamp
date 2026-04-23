export type Language = "ar" | "en";

export interface Translation {
  baseTitle: string;
  nav: {
    home: string;
    about: string;
    goals: string;
    services: string;
    programs: string;
    contact: string;
    donations: string;
    book: string;
  };
  home: {
    metaTitle: string;
    metaDesc: string;
    ticker: Array<{ icon: string; text: string }>;
  };
  stats: {
    title: string;
    sub: string;
    beneficiaries: string;
    services: string;
    education: string;
    health: string;
    solidarity: string;
  };
  fields: {
    title: string;
    sub: string;
    btn: string;
    items: Array<{ label: string; icon: string; desc: string }>;
  };
  foundation: {
    title: string;
    sub: string;
    badge: string;
    name: string;
    desc1: string;
    desc2: string;
    book: string;
    items: Array<{ title: string; desc: string; icon: string }>;
  };
  partners: {
    title: string;
    sub: string;
  };
  faq: {
    title: string;
    sub: string;
    items: Array<{ q: string; a: string }>;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    desc: string;
    book: string;
    explore: string;
  };
  whatsapp: {
    tooltip: string;
    msg: string;
    ariaLabel: string;
  };
  footer: {
    subscribe: string;
    subscribeDesc: string;
    emailPlaceholder: string;
    send: string;
    about: string;
    aboutItems: string[];
    programs: string;
    programItems: string[];
    donations: string;
    donationItems: string[];
    join: string;
    joinItems: string[];
    desc: string;
    address: string;
    privacy: string;
    terms: string;
    cookies: string;
    contactUs: string;
    copyright: string;
    phone: string;
  };
  cta: {
    title: string;
    sub: string;
    sub2: string;
    book: string;
    contact: string;
  };
  donation: {
    title: string;
    sub: string;
    quote: string;
    btn: string;
    desc: string;
    impact: Array<{ label: string; value: string }>;
    methods: Array<{ name: string; detail: string; icon: string }>;
    productsTitle: string;
    productsSub: string;
    productsBtn: string;
    products: Array<{ title: string; price: string; desc: string; icon: string }>;
    casesTitle: string;
    casesSub: string;
    cases: Array<{ title: string; desc: string; collected: number; goal: number; img: string }>;
    donateAmountLabel: string;
    quantityLabel: string;
    instantImpact: string;
    totalSupport: string;
    monthlyGoal: string;
    helpGoal: string;
    ongoingCharity: string;
    contributeTitle: string;
    methodsTitle: string;
    methodsDesc: string;
    methodNotice: string;
    accountDetails: string;
    transparencyTitle: string;
    whereGoTitle: string;
    transparencyDesc: string;
    trustTitle: string;
    trustSub: string;
    officialNGO: string;
    regNo: string;
    foundationName: string;
    waitingTitle: string;
    haveQuestion: string;
    waitingDesc: string;
    directWhatsapp: string;
    donorTrust: string;
    totalSupportVal: string;
    transparencyPercent: string;
    regNoVal: string;
    copySuccessTitle: string;
    copySuccessDesc: string;
    copyBtn: string;
    copiedBtn: string;
  };
  branches: {
    title: string;
    sub: string;
    btn: string;
    items: Array<{ name: string; address: string; hours: string }>;
  };
  services: {
    heroBadge: string;
    title: string;
    titleGlow: string;
    slogan: string;
    sectionTitle: string;
    sectionSub: string;
    items: Array<{ title: string; desc: string; icon: string }>;
    bookingTitle: string;
    bookingSub: string;
    quickContact: string;
    quickBtn: string;
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      serviceOptions: string[];
      branch: string;
      branchOptions: Array<{ label: string; value: string }>;
      date: string;
      notes: string;
      notesPlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      errorFull: string;
      errorPhone: string;
    };
    metaTitle: string;
    metaDesc: string;
  };
  about: {
    title: string;
    sub: string;
    heroBadge: string;
    slogan: string;
    storyTitle: string;
    storyParts: string[];
    vision: string;
    visionDesc: string;
    mission: string;
    missionDesc: string;
    values: string;
    valuesDesc: string;
    achievementsTitle: string;
    statVolunteer: string;
    statSpecialist: string;
    statFields: string;
    statExperience: string;
  };
  programs: {
    title: string;
    titleGlow: string;
    heroBadge: string;
    slogan: string;
    sectionTitle: string;
    sectionSub: string;
    impact: {
      beneficiary: string;
      volunteer: string;
      programs: string;
      fields: string;
    };
    items: Array<{ title: string; desc: string; img: string; stats: Array<{ label: string; value: string }> }>;
    storiesTitle: string;
    storiesSub: string;
    stories: Array<{ name: string; role: string; quote: string; emoji: string }>;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn1: string;
    ctaBtn2: string;
    metaTitle: string;
    metaDesc: string;
  };
  goals: {
    title: string;
    titleGlow: string;
    heroBadge: string;
    slogan: string;
    sectionTitle: string;
    sectionSub: string;
    items: Array<{ title: string; desc: string; icon: string; label: string; objectives: string[] }>;
    metaTitle: string;
    metaDesc: string;
    filterAll: string;
  };
  contact: {
    title: string;
    titleGlow: string;
    heroBadge: string;
    slogan: string;
    sectionTitle: string;
    sectionSub: string;
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      topic: string;
      topicOptions: string[];
      amount: string;
      amountPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
    info: {
      title: string;
      booking: string;
      complaints: string;
      hours: string;
      hoursVal: string;
      address: string;
      addressVal: string;
      email: string;
      emailVal: string;
      follow: string;
      fb1: string;
      fb2: string;
    };
    metaTitle: string;
    metaDesc: string;
  };
  notFound: {
    code: string;
    title: string;
    sub: string;
    backHome: string;
  };
  errorBoundary: {
    title: string;
    sub: string;
    retry: string;
  };
}

export const translations: Record<Language, Translation> = {
  ar: {
    baseTitle: "قلب الحياة للتنمية",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      goals: "أهدافنا",
      services: "خدماتنا",
      programs: "برامجنا",
      donations: "التبرعات",
      contact: "اتصل بنا",
      book: "احجز موعد",
    },
    home: {
      metaTitle: "الرئيسية",
      metaDesc: "مؤسسة قلب الحياة للتنمية - رعاية متكاملة وخدمات تأهيلية متخصصة للأطفال.",
      ticker: [
        { icon: "✨", text: "أحدث أساليب التأهيل" },
        { icon: "🤝", text: "شراكات مجتمعية قوية" },
        { icon: "📍", text: "٣ فروع لخدمتكم" },
        { icon: "🏆", text: "خبرة تزيد عن ١٠ سنوات" },
      ],
    },
    stats: {
      title: "تأثيرنا الملموس",
      sub: "أرقام تعكس التزامنا تجاه المجتمع وأطفالنا",
      beneficiaries: "إجمالي المستفيدين",
      services: "خدمة تأهيلية شهرياً",
      education: "ساعة تدريبية",
      health: "فحص طبي دوري",
      solidarity: "حالة تأهيل ناجحة",
    },
    fields: {
      title: "مجالات التنمية",
      sub: "نعمل في عدة محاور لضمان نهضة شاملة للطفل والمجتمع",
      btn: "عرض جميع الأهداف",
      items: [
        { label: "التأهيل الطبي", icon: "🏥", desc: "خدمات علاجية متطورة" },
        { label: "التعليم والتأهيل", icon: "🎓", desc: "فرص عادلة للجميع" },
        { label: "الدعم النفسي", icon: "🧠", desc: "بناء الثقة والمرونة" },
        { label: "التدريب المهني", icon: "🔨", desc: "مهارات للمستقبل" },
      ],
    },
    foundation: {
      title: "مركز التأهيل المتكامل",
      sub: "أحدث التجهيزات لتقديم رعاية تليق بأطفالنا",
      badge: "رعاية مميزة",
      name: "مؤسسة قلب الحياة للتنمية",
      desc1: "نقدم فحوصات دورية وشاملة تحت إشراف نخبة من المتخصصين في مختلف المجالات.",
      desc2: "المعامل وغرف التقييم مجهزة بأعلى التقنيات لضمان دقة التشخيص.",
      book: "احجز تقييماً",
      items: [
        { title: "تقييم أولي", desc: "فحص شامل لتحديد احتياجات الطفل.", icon: "📋" },
        { title: "متابعة دورية", desc: "برامج مستمرة لمراقبة التطور.", icon: "🔄" },
        { title: "أحدث الأجهزة", icon: "🔬", desc: "تجهيزات طبية عالمية" },
      ],
    },
    donation: {
      title: "التبرعات",
      sub: "ساهم في تغيير حياة طفل",
      quote: "باب واحد يفتح ابواب خير كتير",
      btn: "تبرع الآن",
      desc: "تبرعاتكم هي المحرك الأساسي لخدماتنا ومشاريعنا التنموية لضمان مستقبل أفضل لكل طفل.",
      impact: [
        { label: "طفل تم تأهيله", value: "١٥٠+" },
        { label: "أجهزة طبية", value: "٥٠+" },
        { label: "دعم مباشر", value: "٣٠٠+" },
      ],
      methods: [
        { name: "حساب بنكي", detail: "بنك مصر: 123456789", icon: "🏦" },
        { name: "فودافون كاش", detail: "01080036532", icon: "📱" },
        { name: "فوري", detail: "كود الخدمة: 12345", icon: "⚡" },
      ],
      productsTitle: "أوجه الخير",
      productsSub: "منتجات التبرع المتاحة",
      productsBtn: "تبرع الآن",
      products: [
        { title: "صك الأضحية", price: "11900 جنيه", desc: "الخير فرحة، شارك بصك أضحية لحم بلدي صافي من مؤسسة مصر الخير بـ 11900جنيه", icon: "🐄" },
        { title: "أضحية قرية", price: "85000 جنيه", desc: "خليك سبب في فرحة قرية بحالها، تقدر تتبرع برأس قرية وتوصل الفرحة لأسر كتير في مكان واحد بـ 85000 جنيه.", icon: "🏘️" },
        { title: "لحوم صدقة", price: "480 جنيه", desc: "مساهمة بسيطة هتكون سبب في إطعام أسرة من أهالينا المستحقين في أبعد محافظات مصر، اتبرع بلحوم صدقة بسعر 480 جنيه.", icon: "🥩" },
        { title: "باندل العيد", price: "550 جنيه", desc: "أتبرع بباندل العيد ( كيلو لحوم صدقة + كيلو أرز + لتر زيت ) بـ 550 جنيه علشان توصَل لملايين المستحقين في كل محافظات مصر وتشاركهم فرحتهم.", icon: "🎁" },
        { title: "وجبة إفطار يوم عرفة", price: "100 جنيه", desc: "وجبة إفطار يوم عرفة بـ 100 جنيه توصَل لآلاف الصائمين في أبعد محافظات مصر.", icon: "🍲" },
        { title: "كارت الخير", price: "500 جنيه", desc: "أفتح باب خير يدوم طوال السنة وشارك في مشروع الإطعام من مؤسسة مصر الخير", icon: "💳" },
        { title: "كارت الصحة ٥٠٠ ج", price: "500 جنيه", desc: "خطوة إنسانية جديدة بتقرّب الدواء من كل مريض بسهولة وسرعة.", icon: "🩺" },
        { title: "كارت الصحة ١٠٠٠ ج", price: "1000 جنيه", desc: "خطوة إنسانية جديدة بتقرّب الدواء من كل مريض بسهولة وسرعة.", icon: "🩺" },
        { title: "نظارة طبية للطلاب", price: "300 جنيه", desc: "مبادرة \" ضىّ \" - كشف ونظارة طبية لأطفال كتير", icon: "👓" },
        { title: "كرتونة الخير", price: "500 جنيه", desc: "من أجل توفير واحدة من أساسيات حياة الانسان وهي (الطعام)، اتبرع بـ \" كرتونة الخير \"", icon: "📦" },
        { title: "شنطة مدرسية لطلاب غزة", price: "500 جنيه", desc: "خيرك لأبعد مكان، شارك بشنطة مدرسية بمستلزماتها لأطفالنا في غزة بـ 500 جنيه.", icon: "🎒" },
        { title: "كرتونة أهل غزة", price: "870 جنيه", desc: "مواد إغاثية وغذائية مخصصة لدعم أهلنا في غزة.", icon: "🕊️" },
      ],
      casesTitle: "الحالات الإنسانية",
      casesSub: "كن سبباً في تغيير حياتهم للأفضل",
      donateAmountLabel: "مبلغ التبرع",
      quantityLabel: "العدد",
      cases: [
        { title: "ساند أهل غزة", desc: "في ظل دعمنا الكامل لأهالينا في فلسطين، اتبرع لدعم غزة لتقديم المساعدات الإنسانية العاجلة والطبية والغذائية تبرعك مهما كان بسيط هيفرق في حياه انسان", collected: 381450, goal: 4600000, img: "/src/assets/cases/gaza.png" },
        { title: "إنشاء محطة لتحلية مياه الشرب – بئر سبع", desc: "ساهم الآن وكن سببًا في توفير مياه شرب آمنة لأهالينا في شمال سيناء.", collected: 6088483, goal: 8500000, img: "/src/assets/cases/water.png" },
        { title: "حالة إنسانية عاجلة", desc: "أصيبت مريم (18 سنة) بمرض مناعي نادر سبّب التهاب في المخ والعصب البصري والنخاع الشوكي. فقدت أغلب بصرها وقدرتها على الحركة", collected: 594784, goal: 950000, img: "/src/assets/cases/medical.png" },
        { title: "دعم 50 حالة بأجهزة تعويضية", desc: "ساهم الآن وكن سببًا في تحسين حياة 50 شخصًا بحاجة لأطراف صناعية.", collected: 619155, goal: 843666, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
        { title: "دعم علاج 18 مريض أورام سرطانية", desc: "ساهم الآن وكن سببًا في دعم 18 مريض في رحلتهم مع العلاج.", collected: 143532, goal: 480000, img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" },
        { title: "توفير إقامة لـ 65 طالبة مغتربة", desc: "ساهم الآن وكن سببًا في دعم 65 طالبة مغتربة.", collected: 151297, goal: 400000, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" },
        { title: "حالة إنسانية عاجلة (تيسير زواج)", desc: "ساهم الآن وكن سبب في إسعاد 10 فتيات وبداية حياة كريمة لهن.", collected: 541372, goal: 750000, img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" },
        { title: "قوافل طبية لمكافحة العمى المؤقت", desc: "ساهم الآن وكن سببًا في إعادة النور إلى حياة أهالينا في صعيد مصر.", collected: 196910, goal: 835000, img: "/src/assets/cases/eye.png" },
        { title: "دعم 25 طفل يتيم في الصعيد", desc: "ساهم الآن وكن سببًا في تغيير حياة 25 طفل يتيم", collected: 100000, goal: 500000, img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" },
      ],
      instantImpact: "تأثير فوري",
      totalSupport: "إجمالي الدعم هذا الشهر",
      monthlyGoal: "الهدف الشهري",
      helpGoal: "شارك في تحقيق الهدف",
      ongoingCharity: "صدقة جارية",
      contributeTitle: "ساهم معنا",
      methodsTitle: "طرق التبرع المتاحة",
      methodsDesc: "نوفر لك خيارات آمنة وسهلة لتصل تبرعاتك إلى مستحقيها بأسرع وقت ممكن.",
      methodNotice: "وسيلة آمنة ومعتمدة رسمياً للتحويل المباشر.",
      accountDetails: "رقم الحساب / التفاصيل",
      transparencyTitle: "شفافية مطلقة",
      whereGoTitle: "أين تذهب تبرعاتك؟",
      transparencyDesc: "نحن نؤمن بالشفافية الكاملة كأحد أركان عملنا. كل مساهمة تقوم بها يتم توثيقها وتوجيهها بدقة للمسار الصحيح.",
      trustTitle: "أمانة ومسؤولية",
      trustSub: "من التبرعات تذهب مباشرة للمستحقين",
      officialNGO: "مؤسسة رسمية",
      regNo: "رقم الإشهار الرسمي",
      foundationName: "مؤسسة قلب الحياة للتنمية",
      waitingTitle: "نحن بانتظارك",
      haveQuestion: "هل لديك استفسار آخر؟",
      waitingDesc: "فريقنا المتخصص متاح دائماً للرد على كافة تساؤلاتكم حول آلية التبرع أو الحالات التي تحتاج لدعم عاجل.",
      directWhatsapp: "دردشة واتساب مباشرة",
      donorTrust: "متبرع وضعوا ثقتهم بنا",
      totalSupportVal: "٤٥,٢٨٠.٠٠ $",
      transparencyPercent: "١٠٠%",
      regNoVal: "١٢٣٤٥٦",
      copySuccessTitle: "تم النسخ!",
      copySuccessDesc: "تم نسخ التفاصيل إلى الحافظة.",
      copyBtn: "نسخ التفاصيل",
      copiedBtn: "تم النسخ"
    },
    partners: {
      title: "شركاء النجاح",
      sub: "نفخر بالتعاون مع كبرى المؤسسات لتحقيق رؤيتنا",
    },
    faq: {
      title: "الأسئلة الشائعة",
      sub: "إجابات على أكثر الاستفسارات التي تصلنا",
      items: [
        { q: "كيف يمكنني حجز موعد لتقييم طفلي؟", a: "يمكنك الحجز بسهولة عبر نموذج 'احجز الآن' في صفحة الخدمات أو الاتصال بنا مباشرة عبر واتساب." },
        { q: "ما هي الفئات العمرية التي تستقبلها المؤسسة؟", a: "نستقبل الأطفال من سن التدخل المبكر وحتى سن المراهقة حسب التخصص المطلوب." },
        { q: "هل تقدم المؤسسة خدمات منزلية؟", a: "نعم، لدينا برنامج مخصص للتأهيل المنزلي في بعض المناطق لتسهيل الخدمة على الأسر." },
      ],
    },
    hero: {
      badge: "نحو مستقبل أفضل لأبنائنا",
      title1: "مؤسسة قلب الحياة",
      title2: "للتنمية",
      subtitle: "معاً نبني مستقبلاً أكثر إشراقاً لأطفالنا",
      desc: "نقدم رعاية متكاملة وخدمات تأهيلية متخصصة لدعم نمو وتطور الأطفال، مع التزام تام بأعلى معايير الجودة والاحترافية.",
      book: "احجز موعد",
      explore: "اكتشف خدماتنا",
    },
    whatsapp: {
      tooltip: "تواصل معنا عبر واتساب 💬",
      msg: "السلام عليكم، أريد الاستفسار عن خدمات مؤسسة قلب الحياة للتنمية",
      ariaLabel: "تواصل عبر واتساب",
    },
    footer: {
      subscribe: "اشترك في نشرتنا الإخبارية",
      subscribeDesc: "كن أول من يعرف أخبارنا، فعالياتنا، وكيف يمكنك المساهمة في تطوير المجتمع.",
      emailPlaceholder: "البريد الإلكتروني",
      send: "إرسال",
      about: "عن المؤسسة",
      aboutItems: ["رؤيتنا", "رسالتنا", "قيمنا", "إنجازاتنا"],
      programs: "برامجنا",
      programItems: ["التنمية المجتمعية", "الرعاية الصحية", "التمكين الاقتصادي", "التطوع"],
      donations: "التبرعات",
      donationItems: ["تبرع الآن", "أوجه الصرف", "تقاريرنا الماليّة", "الحالات العاجلة"],
      join: "انضم إلينا",
      joinItems: ["فرص التطوع", "الوظائف المتاحة", "شركاء النجاح", "قصص النجاح"],
      desc: "نحن في مؤسسة قلب الحياة للتنمية، نؤمن بأن كل طفل يستحق فرصة لينمو في بيئة داعمة ومحفزة. نقدم برامج متخصصة في التأهيل والرعاية الصحية والتمكين المجتمعي.",
      address: "٦٤ شارع البستان - ميدان محمد فريد - عابدين - القاهرة",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      cookies: "ملفات التعريف",
      contactUs: "اتصل بنا",
      copyright: "مؤسسة قلب الحياة للتنمية. جميع الحقوق محفوظة.",
      phone: "01080036532",
    },
    cta: {
      title: "دعنا نساعد طفلك للوصول لأقصى إمكانياته",
      sub: "فريقنا من المتخصصين جاهز لتقديم الدعم اللازم بكل حب واحترافية.",
      sub2: "مراكزنا مجهزة بأحدث الوسائل لضمان أفضل النتائج.",
      book: "احجز تقييماً أولياً",
      contact: "اتصل بنا لاستشارة",
    },
    branches: {
      title: "فروعنا",
      sub: "زورونا في أي من فروعنا — نحن هنا لخدمتكم",
      btn: "الذهاب إلى الموقع",
      items: [
        { name: "فرع وسط البلد", address: "٦٤ شارع البستان - ميدان محمد فريد - عابدين - القاهرة", hours: "السبت - الخميس: ٩ ص - ٥ م" },
        { name: "فرع ضياء", address: "٢٤ شارع محمد إبراهيم المطبعه - متفرع من شارع ضياء - بين فيصل والهرم", hours: "السبت - الخميس: ٩ ص - ٥ م" },
        { name: "فرع الوفاء والأمل", address: "١ شارع عبد العزيز المغربي - من مصطفى المصري - الجيزة", hours: "السبت - الخميس: ٩ ص - ٥ م" },
      ]
    },
    services: {
      heroBadge: "خدماتنا المتميزة",
      title: "رعاية متكاملة",
      titleGlow: "متخصصة",
      slogan: "نقدم مجموعة شاملة من الخدمات التأهيلية لتمكين الأطفال ودعم تطورهم بشكل علمي ومدروس.",
      sectionTitle: "ماذا نقدم؟",
      sectionSub: "خدمات علاجية وتأهيلية بإشراف نخبة من المتخصصين",
      items: [
        { title: "علاج طبيعي", desc: "برامج متخصصة لتقوية العضلات وتحسين الحركة الوظيفية.", icon: "🧘" },
        { title: "تخاطب ولغة", desc: "علاج اضطرابات النطق والكلام وتعزيز مهارات التواصل.", icon: "🗣️" },
        { title: "تنمية مهارات", desc: "تطوير القدرات العقلية والاجتماعية من خلال أنشطة تعليمية.", icon: "🧠" },
        { title: "تعديل سلوك", desc: "برامج علمية للتعامل مع السلوكيات وتوجيهها بشكل إيجابي.", icon: "🤝" },
        { title: "إرشاد أسري", desc: "دعم وتدريب أولياء الأمور للتعامل الأمثل مع أبنائهم.", icon: "👨‍👩‍👧‍👦" },
        { title: "تكامل حسي", desc: "تحسين معالجة المدخلات الحسية لزيادة التركيز والانتباه.", icon: "🌈" },
      ],
      bookingTitle: "احجز موعدك الآن",
      bookingSub: "املأ البيانات وسيقوم فريقنا بالتواصل معك لتأكيد الموعد",
      quickContact: "أو تواصل معنا مباشرة",
      quickBtn: "دردشة واتساب لرد سريع",
      form: {
        name: "الاسم الكامل",
        namePlaceholder: "أدخل اسمك بالكامل",
        phone: "رقم الهاتف (واتساب)",
        phonePlaceholder: "مثلاً: 01012345678",
        service: "الخدمة المطلوبة",
        serviceOptions: ["لم يتم التحديد", "علاج طبيعي", "تخاطب", "تنمية مهارات", "تعديل سلوك", "تكامل حسي", "تقييم شامل"],
        branch: "الفرع المفضل",
        branchOptions: [
          { label: "وسط البلد (عابدين)", value: "وسط البلد" },
          { label: "فرع ضياء", value: "ضياء" },
          { label: "فرع الوفاء والأمل", value: "الوفاء والأمل" },
        ],
        date: "تاريخ الموعد المقترح",
        notes: "ملاحظات إضافية (اختياري)",
        notesPlaceholder: "أي معلومات إضافية تود إخبارنا بها...",
        submit: "إرسال الطلب عبر واتساب",
        submitting: "جاري الإرسال...",
        success: "تم تجهيز طلبك، سيتم فتح واتساب للإرسال",
        errorFull: "يرجى ملء جميع الحقول المطلوبة",
        errorPhone: "يرجى إدخال رقم هاتف صحيح (11 رقم)",
      },
      metaTitle: "خدماتنا | مؤسسة قلب الحياة للتنمية",
      metaDesc: "اكتشف مجموعة خدماتنا التأهيلية: علاج طبيعي، تخاطب، تنمية مهارات، وتعديل سلوك.",
    },
    about: {
      title: "عن المؤسسة",
      sub: "تعرف على رحلتنا، رؤيتنا، والقيم التي تحركنا نحو التغيير.",
      heroBadge: "رحلتنا وقيمنا",
      slogan: "مؤسسة قلب الحياة للتنمية — حيث ينمو الأمل وتتحقق الإنجازات.",
      storyTitle: "قصتنا",
      storyParts: [
        "بدأت مؤسسة قلب الحياة للتنمية برؤية بسيطة ولكنها عميقة: أن كل طفل يستحق فرصة ليحيا حياة كريمة ومفعمة بالأمل.",
        "نحن نؤمن بأن الإعاقة ليست عائقاً أمام النجاح، بل هي تحدٍ يمكننا تجاوزه معاً من خلال العلم والتدريب والحب.",
        "على مدار سنوات، استطعنا في قلب الحياة للتنمية أن نكون البيت الثاني لآلاف الأطفال، وملاذاً للأسر التي تبحث عن الأمان والدعم لأبنائها.",
      ],
      vision: "رؤيتنا",
      visionDesc: "أن نكون المركز الرائد في الشرق الأوسط لتقديم خدمات التأهيل المتكاملة للأطفال، بمعايير عالمية ولمسات إنسانية.",
      mission: "رسالتنا",
      missionDesc: "تقديم رعاية متميزة وشاملة تجمع بين العلاج الطبي وتنمية المهارات، لتمكين الأطفال من التفاعل الإيجابي مع المجتمع.",
      values: "قيمنا",
      valuesDesc: "الاحترام، الاحترافية، التعاطف، والابتكار المستمر في طرق العلاج والتأهيل.",
      achievementsTitle: "إنجازاتنا بالأرقام",
      statVolunteer: "متطوع مخلص",
      statSpecialist: "أخصائي وخبير",
      statFields: "مجالات تنمية",
      statExperience: "سنوات خبرة",
    },
    programs: {
      title: "برامجنا",
      titleGlow: "التنموية",
      heroBadge: "نصنع الفرق معاً",
      slogan: "برامج مبتكرة مصممة لتلبية احتياجات المجتمع ودعم الفئات الأكثر احتياجاً.",
      sectionTitle: "برامج رائدة",
      sectionSub: "مبادرات مستدامة لتحقيق تأثير حقيقي وملموس",
      impact: {
        beneficiary: "مستفيد سنوياً",
        volunteer: "ساعة تطوع",
        programs: "برامج رئيسية",
        fields: "تخصصات دقيقة",
      },
      items: [
        {
          title: "برنامج التأهيل المنزلي",
          desc: "نصل بخدماتنا للأطفال في منازلهم لضمان الاستمرارية وتدريب الأهل في بيئتهم الطبيعية.",
          img: "/assets/programs/home-rehab.jpg",
          stats: [{ label: "زيارة منزلية", value: "٥٠٠+" }]
        },
        { 
          title: "مبادرة 'أنا أستطيع' للتأهيل", 
          desc: "برنامج متخصص لتجهيز الأطفال للالتحاق بالمدارس العادية والتعامل الفعال مع أقرانهم.", 
          img: "/assets/programs/i-can.jpg",
          stats: [{ label: "طفل مؤهل", value: "١٢٠+" }]
        },
        { 
          title: "مشغل الوفاء والأمل", 
          desc: "توفير فرص تدريب مهني وفرص عمل لذوي الهمم في مجالات الحرف اليدوية والبسيطة.", 
          img: "/assets/programs/workshop.jpg",
          stats: [{ label: "فرصة عمل", value: "٨٠+" }]
        },
      ],
      storiesTitle: "قصص نجاح",
      storiesSub: "لحظات من الفخر والأمل تعطينا الدافع للاستمرار",
      stories: [
        { name: "علي محمد", role: "ولي أمر", quote: "لم أصدق التطور الذي حققه ابني في ستة أشهر فقط من التدريب المكثف.", emoji: "👨‍👦" },
        { name: "سارة أحمد", role: "أخصائية تخاطب", quote: "رؤية طفل يتحدث للمرة الأولى هي أعظم مكافأة لعملنا في المؤسسة.", emoji: "👩‍⚕️" },
        { name: "ياسين إبراهيم", role: "مستفيد من برنامج التأهيل", quote: "أنا الآن في المدرسة ولدي الكثير من الأصدقاء، شكراً قلب الحياة للتنمية.", emoji: "👦" },
      ],
      ctaTitle: "كن جزءاً من التغيير",
      ctaSub: "سواء كنت متطوعاً أو داعماً، مساهمتك تصنع فرقاً حقيقياً في حياة هؤلاء الأطفال.",
      ctaBtn1: "احجز موعد",
      ctaBtn2: "تواصل معنا",
      metaTitle: "برامجنا | مؤسسة قلب الحياة للتنمية",
      metaDesc: "تعرف على برامجنا التنموية والتدريبية ومبادراتنا لتمكين ذوي الهمم.",
    },
    goals: {
      title: "أهدافنا",
      titleGlow: "الاستراتيجية",
      heroBadge: "بوصلة عملنا",
      slogan: "نعمل بخطط مدروسة لتحقيق تغيير جذري في جودة حياة الأطفال ذوي الهمم.",
      sectionTitle: "رؤية طموحة",
      sectionSub: "الأهداف التي نسعى لتحقيقها كل يوم",
      items: [
        { title: "تمكين الطفل", desc: "رفع كفاءة الأطفال في المهارات الاستقلالية والاجتماعية.", icon: "💪", label: "هدف ذاتي", objectives: ["تنمية الاستقلالية", "تحسين السلوك", "الاعتماد على الذات"] },
        { title: "دعم الأسر", desc: "توعية وتدريب الأسر وتوفير الدعم النفسي والتقني لهم.", icon: "🤝", label: "هدف أسري", objectives: ["الدعم النفسي", "الإرشاد المهني", "التمكين الأسري"] },
        { title: "نشر الوعي", desc: "تصحيح المفاهيم المجتمعية حول الإعاقة وتعزيز ثقافة التقبل.", icon: "📢", label: "هدف مجتمعي", objectives: ["حملات التوعية", "تغيير المفاهيم", "الوعي المجتمعي"] },
        { title: "تطوير الكوادر", desc: "تدريب مستمر للأخصائيين على أحدث الأساليب العلمية.", icon: "🎓", label: "هدف مهني", objectives: ["التدريب العلمي", "الأساليب الحديثة", "رفع الكفاءة"] },
        { title: "توفير الأمان", desc: "خلق بيئة آمنة وصديقة للطفل في جميع فروعنا.", icon: "🛡️", label: "هدف أمني", objectives: ["بيئة آمنة", "معايير الجودة", "الحماية والوقاية"] },
        { title: "الاستدامة", desc: "بناء نموذج عمل مؤسسي يضمن استمرارية الخدمات وتطويرها.", icon: "🌱", label: "هدف مؤسسي", objectives: ["استمرارية الخدمة", "تطوير الموارد", "التوسع المدروس"] },
      ],
      metaTitle: "أهدافنا | مؤسسة قلب الحياة للتنمية",
      metaDesc: "تعرف على أهداف مؤسسة قلب الحياة للتنمية الاستراتيجية لدعم وتمكين ذوي الهمم.",
      filterAll: "الكل",
    },
    contact: {
      title: "اتصل",
      titleGlow: "بنا",
      heroBadge: "نحن هنا من أجلك",
      slogan: "لا تتردد في طرح أي استفسار، فريقنا دائماً في انتظار مكالمتك أو رسالتك.",
      sectionTitle: "تواصل معنا",
      sectionSub: "اختر الوسيلة الأنسب لك وسنرد عليك في أقرب وقت",
      form: {
        name: "اسمك",
        namePlaceholder: "أدخل اسمك",
        phone: "رقم الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        topic: "موضوع الرسالة",
        topicOptions: ["استفسار عام", "حجز موعد", "شكوى أو اقتراح", "تطوع", "تبرع"],
        amount: "مبلغ التبرع",
        amountPlaceholder: "أدخل المبلغ (اختياري)",
        message: "رسالتك",
        messagePlaceholder: "اكتب رسالتك بالتفصيل هنا...",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال...",
        success: "تم الإرسال بنجاح!",
        error: "حدث خطأ ما، يرجى المحاولة لاحقاً.",
      },
      info: {
        title: "معلومات التواصل",
        booking: "رقم الحجز والاستعلام",
        complaints: "رقم الشكاوى والاقتراحات",
        hours: "مواعيد العمل",
        hoursVal: "السبت - الخميس: ٩ ص - ٥ م",
        address: "العنوان",
        addressVal: "٦٤ شارع البستان - ميدان محمد فريد - عابدين - القاهرة",
        email: "البريد الإلكتروني",
        emailVal: "info@qalbelhayah.org",
        follow: "تابعنا على فيسبوك",
        fb1: "الصفحة الرسمية 1",
        fb2: "الصفحة الرسمية 2",
      },
      metaTitle: "اتصل بنا | مؤسسة قلب الحياة للتنمية",
      metaDesc: "تواصل مع مؤسسة قلب الحياة للتنمية عبر الهاتف، البريد الإلكتروني، أو زيارة فروعنا.",
    },
    notFound: {
      code: "٤٠٤",
      title: "الصفحة غير موجودة",
      sub: "عذرًا، الصفحة التي تبحث عنها غير متاحة.",
      backHome: "العودة للرئيسية",
    },
    errorBoundary: {
      title: "حدث خطأ غير متوقع",
      sub: "نأسف للإزعاج. يرجى إعادة تحميل الصفحة أو التواصل معنا إذا استمرت المشكلة.",
      retry: "إعادة تحميل الصفحة",
    },
  },
  en: {
    baseTitle: "Qalb El Hayah Foundation",
    nav: {
      home: "Home",
      about: "About Us",
      goals: "Our Goals",
      services: "Services",
      programs: "Programs",
      donations: "Donations",
      contact: "Contact",
      book: "Book Now",
    },
    home: {
      metaTitle: "Home",
      metaDesc: "Qalb El Hayah Foundation - Integrated care and specialized rehabilitation services for children.",
      ticker: [
        { icon: "✨", text: "Latest Rehab Methods" },
        { icon: "🤝", text: "Strong Community Partnerships" },
        { icon: "📍", text: "3 Branches to Serve You" },
        { icon: "🏆", text: "10+ Years Experience" },
      ],
    },
    stats: {
      title: "Our Tangible Impact",
      sub: "Numbers reflecting our commitment to the community.",
      beneficiaries: "Total Beneficiaries",
      services: "Rehab Sessions / Month",
      education: "Training Hours",
      health: "Periodic Screenings",
      solidarity: "Successful Integrations",
    },
    fields: {
      title: "Fields of Development",
      sub: "Working across multiple axes for comprehensive growth.",
      btn: "View All Goals",
      items: [
        { label: "Medical Rehab", icon: "🏥", desc: "Advanced Medical Care" },
        { label: "Education & Inclusion", icon: "🎓", desc: "Fair Opportunities for All" },
        { label: "Psych Support", icon: "🧠", desc: "Building Confidence" },
        { label: "Vocational Training", icon: "🔨", desc: "Skills for the Future" },
      ],
    },
    foundation: {
      title: "Integrated Rehab Center",
      sub: "Latest equipment for world-class care.",
      badge: "Premium Care",
      name: "Qalb El Hayah Foundation",
      desc1: "We provide comprehensive periodic assessments supervised by highly qualified specialists.",
      desc2: "Our evaluation rooms are equipped with cutting-edge technology for accurate diagnosis.",
      book: "Book Assessment",
      items: [
        { title: "Initial Assessment", desc: "Comprehensive exam for child's needs.", icon: "📋" },
        { title: "Periodic Follow-up", desc: "Continuous mapping of progress.", icon: "🔄" },
        { title: "Modern Equipment", icon: "🔬", desc: "Global Medical Standards" },
      ],
    },
    partners: {
      title: "Success Partners",
      sub: "Proud to collaborate with major institutions.",
    },
    faq: {
      title: "FAQ",
      sub: "Answers to your most frequent questions.",
      items: [
        { q: "How can I book an assessment?", a: "Book easily via 'Book Now' on Services page or WhatsApp us." },
        { q: "What age groups are accepted?", a: "Early intervention up to adolescence depending on specialty." },
        { q: "Do you offer home services?", a: "Yes, we have a home rehab program in specific areas." },
      ],
    },
    hero: {
      badge: "Towards a better future for our children",
      title1: "Qalb El Hayah",
      title2: "Foundation",
      subtitle: "Together we build a brighter future for our children",
      desc: "We provide integrated care and specialized rehabilitation services to support children's growth and development, with full commitment to the highest standards of quality and professionalism.",
      book: "Book Now",
      explore: "Explore Services",
    },
    whatsapp: {
      tooltip: "Contact us via WhatsApp 💬",
      msg: "Hello, I would like to inquire about the services of Qalb El Hayah Foundation",
      ariaLabel: "Contact on WhatsApp",
    },
    footer: {
      subscribe: "Subscribe to our Newsletter",
      subscribeDesc: "Be the first to know our news, events, and how you can contribute to community development.",
      emailPlaceholder: "Email address",
      send: "Send",
      about: "About us",
      aboutItems: ["Vision", "Mission", "Values", "Achievements"],
      programs: "Programs",
      programItems: ["Community Dev", "Healthcare", "Economic Empowerment", "Volunteering"],
      donations: "Donations",
      donationItems: ["Donate Now", "Spending Areas", "Financial Reports", "Urgent Cases"],
      join: "Join Us",
      joinItems: ["Volunteer Opportunities", "Available Jobs", "Success Partners", "Stories"],
      desc: "At Qalb El Hayah Foundation, we believe every child deserves a chance to grow in a supportive and stimulating environment. We offer specialized programs in rehabilitation, healthcare, and community empowerment.",
      address: "64 El Bostan St - Mohamed Farid Sq - Abdeen - Cairo",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      cookies: "Cookies Policy",
      contactUs: "Contact Us",
      copyright: "Qalb El Hayah Foundation. All Rights Reserved.",
      phone: "01080036532",
    },
    cta: {
      title: "Let us help your child reach their full potential",
      sub: "Our team of specialists is ready to provide the necessary support with love and professionalism.",
      sub2: "Our centers are equipped with state-of-the-art facilities to ensure the best results.",
      book: "Book Initial Assessment",
      contact: "Call for Consultation",
    },
    branches: {
      title: "Our Branches",
      sub: "Visit us at any of our branches — we are here to serve you.",
      btn: "Get Directions",
      items: [
        { name: "Downtown Branch", address: "64 El Bostan St - Mohamed Farid Sq - Abdeen - Cairo", hours: "Sat - Thu: 9 AM - 5 PM" },
        { name: "Dieaa Branch", address: "24 Mohamed Ibrahim Matbaa St - Off Dieaa St - Between Faisal & Haram", hours: "Sat - Thu: 9 AM - 5 PM" },
        { name: "Wafaa & Amal Branch", address: "1 Abdel Aziz El Maghrebi St - Off Mostafa El Masry - Giza", hours: "Sat - Thu: 9 AM - 5 PM" },
      ]
    },
    services: {
      heroBadge: "Our Outstanding Services",
      title: "Integrated",
      titleGlow: "Care",
      slogan: "We offer a comprehensive range of rehabilitation services to empower children and support their development scientifically and thoughtfully.",
      sectionTitle: "What do we offer?",
      sectionSub: "Therapeutic and rehabilitation services supervised by elite specialists",
      items: [
        { title: "Physical Therapy", desc: "Specialized programs to strengthen muscles and improve functional movement.", icon: "🧘" },
        { title: "Speech & Language", desc: "Treatment of speech and language disorders and enhancing communication skills.", icon: "🗣️" },
        { title: "Skills Development", desc: "Developing mental and social abilities through educational activities.", icon: "🧠" },
        { title: "Behavior Modification", desc: "Scientific programs to handle behavior and direct it positively.", icon: "🤝" },
        { title: "Family Counseling", desc: "Support and training for parents to optimally deal with their children.", icon: "👨‍👩‍👧‍👦" },
        { title: "Sensory Integration", desc: "Improving processing of sensory inputs to increase focus and attention.", icon: "🌈" },
      ],
      bookingTitle: "Book Your Appointment Now",
      bookingSub: "Fill in the details and our team will contact you to confirm.",
      quickContact: "Or contact us directly",
      quickBtn: "WhatsApp Chat for Quick Response",
      form: {
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        phone: "Phone Number (WhatsApp)",
        phonePlaceholder: "e.g., 01012345678",
        service: "Requested Service",
        serviceOptions: ["Not Specified", "Physical Therapy", "Speech", "Skills Development", "Behavior Mod", "Sensory Integration", "Full Assessment"],
        branch: "Preferred Branch",
        branchOptions: [
          { label: "Downtown (Abdeen)", value: "Downtown" },
          { label: "Dieaa Branch", value: "Dieaa" },
          { label: "Wafaa & Amal Branch", value: "Wafaa" },
        ],
        date: "Suggested Date",
        notes: "Additional Notes (Optional)",
        notesPlaceholder: "Any additional info you'd like us to know...",
        submit: "Send via WhatsApp",
        submitting: "Sending...",
        success: "Request ready, WhatsApp will open to send.",
        errorFull: "Please fill in all required fields",
        errorPhone: "Please enter a valid phone number (11 digits)",
      },
      metaTitle: "Our Services | Qalb El Hayah",
      metaDesc: "Discover our range of rehabilitation services: PT, Speech, Skills, and Behavior modification.",
    },
    about: {
      title: "About Us",
      sub: "Learn about our journey, vision, and values that drive us towards change.",
      heroBadge: "Our Journey & Values",
      slogan: "Qalb El Hayah Foundation — where hope grows and achievements happen.",
      storyTitle: "Our Story",
      storyParts: [
        "Qalb El Hayah Foundation started with a simple but profound vision: every child deserves a chance at a dignified and hopeful life.",
        "We believe disability is not a success barrier, but a challenge we can overcome together through science, training, and love.",
        "Over the years, we've managed to be a second home for thousands of children, and a sanctuary for families seeking safety and support.",
      ],
      vision: "Our Vision",
      visionDesc: "To be the leading center in the Middle East for integrated child rehabilitation services, with global standards and human touches.",
      mission: "Our Mission",
      missionDesc: "Providing outstanding comprehensive care integrating medical treatment and skill development, to empower children for full social integration.",
      values: "Our Values",
      valuesDesc: "Respect, professionalism, empathy, and continuous innovation in treatment and rehabilitation methods.",
      achievementsTitle: "Achievements in Numbers",
      statVolunteer: "Loyal Volunteer",
      statSpecialist: "Expert Specialist",
      statFields: "Dev Fields",
      statExperience: "Years Experience",
    },
    programs: {
      title: "Our",
      titleGlow: "Programs",
      heroBadge: "Making a difference together",
      slogan: "Innovative programs designed to meet community needs and support the most vulnerable groups.",
      sectionTitle: "Leading Programs",
      sectionSub: "Sustainable initiatives for real and tangible impact",
      impact: {
        beneficiary: "Annual Beneficiary",
        volunteer: "Volunteer Hours",
        programs: "Main Programs",
        fields: "Specialties",
      },
      items: [
        {
          title: "Home Rehab Program",
          desc: "We reach children at home to ensure continuity and train parents in their natural environment.",
          img: "/assets/programs/home-rehab.jpg",
          stats: [{ label: "Home Visits", value: "500+" }]
        },
        { 
          title: "I Can Initiative", 
          desc: "A specialized program to prepare children for school inclusion and effective peer interaction.", 
          img: "/assets/programs/i-can.jpg",
          stats: [{ label: "Kids Integrated", value: "120+" }]
        },
        { 
          title: "Wafaa Workshop", 
          desc: "Providing vocational training and jobs for people with special needs in handicrafts.", 
          img: "/assets/programs/workshop.jpg",
          stats: [{ label: "Job Opps", value: "80+" }]
        },
      ],
      storiesTitle: "Success Stories",
      storiesSub: "Moments of pride and hope that motivate us to continue",
      stories: [
        { name: "Ali Mohamed", role: "Parent", quote: "I didn't believe the progress my son made in just six months of intensive training.", emoji: "👨‍👦" },
        { name: "Sarah Ahmed", role: "Speech Pathologist", quote: "Seeing a child speak for the first time is the greatest reward for our work.", emoji: "👩‍⚕️" },
        { name: "Yasin Ibrahim", role: "Beneficiary", quote: "I am now in school and have many friends, thank you Qalb El Hayah.", emoji: "👦" },
      ],
      ctaTitle: "Be Part of the Change",
      ctaSub: "Whether a volunteer or supporter, your contribution makes a real difference in these children's lives.",
      ctaBtn1: "Book Appointment",
      ctaBtn2: "Contact Us",
      metaTitle: "Our Programs | Qalb El Hayah",
      metaDesc: "Discover our developmental and training programs and initiatives for people with special needs.",
    },
    donation: {
      title: "Donation",
      sub: "Change a Child's Life",
      quote: "One door opens many doors of good",
      btn: "Donate Now",
      desc: "Your contributions are the core engine of our rehabilitation services and developmental projects.",
      impact: [
        { label: "Kids Rehabilitated", value: "150+" },
        { label: "Medical Devices", value: "50+" },
        { label: "Direct Support", value: "300+" },
      ],
      methods: [
        { name: "Bank Account", detail: "Banque Misr: 123456789", icon: "🏦" },
        { name: "Vodafone Cash", detail: "01080036532", icon: "📱" },
        { name: "Fawry", detail: "Service Code: 12345", icon: "⚡" },
      ],
      productsTitle: "Donation Products",
      productsSub: "Available Donation Products",
      productsBtn: "Donate Now",
      products: [
        { title: "Qurbani Meat", price: "11,900 EGP", desc: "Share the joy with a pure local meat Qurbani from Misr El Kheir.", icon: "🐄" },
        { title: "Village Qurbani", price: "85,000 EGP", desc: "Be the reason for a whole village's joy. Donate a village sacrifice and spread happiness.", icon: "🏘️" },
        { title: "Sadaqah Meat", price: "480 EGP", desc: "A simple contribution can feed a family in need in the farthest governorates of Egypt.", icon: "🥩" },
        { title: "Eid Bundle", price: "550 EGP", desc: "Donate an Eid Bundle (1kg Sadaqah meat + 1kg rice + 1L oil) for 550 EGP to reach millions in need.", icon: "🎁" },
        { title: "Arafah Iftar Meal", price: "100 EGP", desc: "Arafah Iftar Meal for 100 EGP to reach thousands of fasting people.", icon: "🍲" },
        { title: "Charity Card", price: "500 EGP", desc: "Open a door of lasting charity and share in the feeding project.", icon: "💳" },
        { title: "Health Card 500 EGP", price: "500 EGP", desc: "A new humanitarian step bringing medicine closer to every patient.", icon: "🩺" },
        { title: "Health Card 1000 EGP", price: "1000 EGP", desc: "A new humanitarian step bringing medicine closer to every patient.", icon: "🩺" },
        { title: "Medical Glasses", price: "300 EGP", desc: "\"Dhay\" Initiative - Eye checkup and medical glasses for many children.", icon: "👓" },
        { title: "Charity Box", price: "500 EGP", desc: "To provide a basic life necessity (food), donate a \"Charity Box\".", icon: "📦" },
        { title: "Gaza School Bag", price: "500 EGP", desc: "Share a school bag with supplies for our children in Gaza for 500 EGP.", icon: "🎒" },
        { title: "Gaza People Box", price: "870 EGP", desc: "Relief and food items dedicated to supporting our people in Gaza.", icon: "🕊️" },
      ],
      casesTitle: "Humanitarian Cases",
      casesSub: "Be the reason for changing their lives",
      donateAmountLabel: "Amount",
      quantityLabel: "Quantity",
      cases: [
        { title: "Support Gaza People", desc: "In light of our full support for our people in Palestine, donate to support Gaza to provide urgent humanitarian, medical and food aid.", collected: 381450, goal: 4600000, img: "/src/assets/cases/gaza.png" },
        { title: "Establish Water Desalination Station", desc: "Contribute now and be a reason to provide safe drinking water to our people in North Sinai.", collected: 6088483, goal: 8500000, img: "/src/assets/cases/water.png" },
        { title: "Urgent Humanitarian Case", desc: "Maryam (18 years) was afflicted with a rare immune disease causing brain, optic nerve, and spinal cord inflammation.", collected: 594784, goal: 950000, img: "/src/assets/cases/medical.png" },
        { title: "Support 50 Prosthetics Cases", desc: "Contribute now and be the reason for improving the lives of 50 people needing prosthetics.", collected: 619155, goal: 843666, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
        { title: "Support 18 Cancer Patients", desc: "Contribute now and be a reason to support 18 patients in their treatment journey.", collected: 143532, goal: 480000, img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" },
        { title: "Provide Housing for 65 Students", desc: "Contribute now and be a reason to support 65 expat students.", collected: 151297, goal: 400000, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" },
        { title: "Urgent Case (Marriage Facilitation)", desc: "Contribute now and be the reason for making 10 girls happy.", collected: 541372, goal: 750000, img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" },
        { title: "Medical Convoys for Blindness", desc: "Contribute now and be the reason to bring light back to our people in Upper Egypt.", collected: 196910, goal: 835000, img: "/src/assets/cases/eye.png" },
        { title: "Support 25 Orphans", desc: "Contribute now and be the reason for changing the lives of 25 orphans", collected: 100000, goal: 500000, img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" },
      ],
      instantImpact: "Instant Impact",
      totalSupport: "Total Support This Month",
      monthlyGoal: "Monthly Goal",
      helpGoal: "Help reach the goal",
      ongoingCharity: "Ongoing Charity",
      contributeTitle: "Contribute With Us",
      methodsTitle: "Available Donation Methods",
      methodsDesc: "We provide secure and easy options to ensure your donations reach those in need as quickly as possible.",
      methodNotice: "A secure and officially approved method for direct transfer.",
      accountDetails: "Account No. / Details",
      transparencyTitle: "Absolute Transparency",
      whereGoTitle: "Where do your donations go?",
      transparencyDesc: "We believe in full transparency as a cornerstone of our work. Every contribution you make is documented and directed precisely to the right path.",
      trustTitle: "Trust & Responsibility",
      trustSub: "Of donations go directly to those in need",
      officialNGO: "Official NGO",
      regNo: "Official Registration No.",
      foundationName: "Qalb El Hayah Foundation for Development",
      waitingTitle: "We Are Waiting",
      haveQuestion: "Have another question?",
      waitingDesc: "Our specialized team is always available to answer all your questions about the donation process or cases needing urgent support.",
      directWhatsapp: "Direct WhatsApp Chat",
      donorTrust: "Donors trust us",
      totalSupportVal: "$45,280.00",
      transparencyPercent: "100%",
      regNoVal: "123456",
      copySuccessTitle: "Copied!",
      copySuccessDesc: "Details copied to clipboard.",
      copyBtn: "Copy Details",
      copiedBtn: "Copied"
    },
    goals: {
      title: "Our",
      titleGlow: "Goals",
      heroBadge: "Our Compass",
      slogan: "We work with studied plans to achieve radical change in the quality of life for children with special needs.",
      sectionTitle: "Ambitious Vision",
      sectionSub: "The goals we strive to achieve every day",
      items: [
        { title: "Empowerment", desc: "Raising children's competence in independence and social skills.", icon: "💪", label: "Self Goal", objectives: ["Develop Independence", "Improve Behavior", "Self Integration"] },
        { title: "Family Support", desc: "Awareness, training, and providing psychological and technical support.", icon: "🤝", label: "Family Goal", objectives: ["Psychological Support", "Vocational Counseling", "Family Empowerment"] },
        { title: "Awareness", desc: "Correcting societal concepts about disability and promoting inclusion.", icon: "📢", label: "Societal Goal", objectives: ["Awareness Campaigns", "Change Concepts", "Promote Inclusion"] },
        { title: "Staff Dev", desc: "Continuous training for specialists on latest scientific methods.", icon: "🎓", label: "Professional Goal", objectives: ["Scientific Training", "Modern Methods", "Efficiency Raise"] },
        { title: "Providing Safety", desc: "Creating a safe, child-friendly environment in all our branches.", icon: "🛡️", label: "Safety Goal", objectives: ["Safe Environment", "Quality Standards", "Protection & Prevention"] },
        { title: "Sustainability", desc: "Building an institutional model ensuring service continuity and development.", icon: "🌱", label: "Institutional Goal", objectives: ["Service Continuity", "Resource Dev", "Planned Expansion"] },
      ],
      metaTitle: "Our Goals | Qalb El Hayah",
      metaDesc: "Learn about Qalb El Hayah Foundation's strategic goals to support and empower people with special needs.",
      filterAll: "All",
    },
    contact: {
      title: "Contact",
      titleGlow: "Us",
      heroBadge: "We're here for you",
      slogan: "Don't hesitate to ask anything, our team is always waiting for your call or message.",
      sectionTitle: "Get in Touch",
      sectionSub: "Choose the best way for you and we'll respond as soon as possible.",
      form: {
        name: "Your Name",
        namePlaceholder: "Enter your name",
        phone: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        topic: "Subject",
        topicOptions: ["General Inquiry", "Book Appointment", "Complaint or Suggestion", "Volunteer", "Donation"],
        amount: "Donation Amount",
        amountPlaceholder: "Enter amount (optional)",
        message: "Message",
        messagePlaceholder: "Write your message in detail here...",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Sent successfully!",
        error: "Something went wrong, please try again later.",
      },
      info: {
        title: "Contact Info",
        booking: "Booking & Inquiries",
        complaints: "Complaints & Suggestions",
        hours: "Working Hours",
        hoursVal: "Sat - Thu: 9 AM - 5 PM",
        address: "Address",
        addressVal: "64 El Bostan St - Mohamed Farid Sq - Abdeen - Cairo",
        email: "Email Address",
        emailVal: "info@qalbelhayah.org",
        follow: "Follow us on Facebook",
        fb1: "Official Page 1",
        fb2: "Official Page 2",
      },
      metaTitle: "Contact Us | Qalb El Hayah",
      metaDesc: "Contact Qalb El Hayah Foundation via phone, email, or visit our branches.",
    },
    notFound: {
      code: "404",
      title: "Page Not Found",
      sub: "Sorry, the page you are looking for is unavailable.",
      backHome: "Back to Home",
    },
    errorBoundary: {
      title: "Unexpected Error Occurred",
      sub: "We apologize for the inconvenience. Please reload the page or contact us if the problem persists.",
      retry: "Reload Page",
    },
  },
};
