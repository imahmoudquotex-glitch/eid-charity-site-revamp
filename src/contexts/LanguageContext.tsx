import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface Translation {
  baseTitle: string;
  nav: {
    home: string;
    about: string;
    goals: string;
    services: string;
    programs: string;
    contact: string;
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
  clinic: {
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
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
    info: {
      title: string;
      phone: string;
      email: string;
      address: string;
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

const translations: Record<Language, Translation> = {
  ar: {
    baseTitle: "قلب الحياة للتنمية",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      goals: "أهدافنا",
      services: "خدماتنا",
      programs: "برامجنا",
      contact: "اتصل بنا",
      book: "احجز موعداً",
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
      solidarity: "حالة دمج ناجحة",
    },
    fields: {
      title: "مجالات التنمية",
      sub: "نعمل في عدة محاور لضمان نهضة شاملة للطفل والمجتمع",
      btn: "عرض جميع الأهداف",
      items: [
        { label: "التأهيل الطبي", icon: "🏥", desc: "خدمات علاجية متطورة" },
        { label: "التعليم والدمج", icon: "🎓", desc: "فرص عادلة للجميع" },
        { label: "الدعم النفسي", icon: "🧠", desc: "بناء الثقة والمرونة" },
        { label: "التدريب المهني", icon: "🔨", desc: "مهارات للمستقبل" },
      ],
    },
    clinic: {
      title: "المركز الطبي",
      sub: "أحدث التجهيزات لتقديم رعاية تليق بأطفالنا",
      badge: "رعاية مميزة",
      name: "عيادة قلب الحياة التخصصية",
      desc1: "نقدم فحوصات دورية وشاملة تحت إشراف نخبة من الأطباء في مختلف التخصصات.",
      desc2: "المعامل وغرف الفحص مجهزة بأعلى التقنيات لضمان دقة التشخيص.",
      book: "احجز كشفاً طبياً",
      items: [
        { title: "تقييم أولي", desc: "فحص شامل لتحديد احتياجات الطفل.", icon: "📋" },
        { title: "متابعة دورية", desc: "برامج مستمرة لمراقبة التطور.", icon: "🔄" },
        { title: "أحدث الأجهزة", icon: "🔬", desc: "تجهيزات طبية عالمية" },
      ],
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
      book: "احجز موعداً",
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
      metaTitle: "خدماتنا | مؤسسة قلب الحياة",
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
        "على مدار سنوات، استطعنا في قلب الحياة أن نكون البيت الثاني لآلاف الأطفال، وملاذاً للأسر التي تبحث عن الأمان والدعم لأبنائها.",
      ],
      vision: "رؤيتنا",
      visionDesc: "أن نكون المركز الرائد في الشرق الأوسط لتقديم خدمات التأهيل المتكاملة للأطفال، بمعايير عالمية ولمسات إنسانية.",
      mission: "رسالتنا",
      missionDesc: "تقديم رعاية متميزة وشاملة تدمج بين العلاج الطبي وتنمية المهارات، لتمكين الأطفال من الاندماج الكامل في المجتمع.",
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
          img: "/assets/children-education.jpg",
          stats: [{ label: "زيارة منزلية", value: "٥٠٠+" }]
        },
        { 
          title: "مبادرة 'أنا أستطيع' للدمج", 
          desc: "برنامج متخصص لتجهيز الأطفال للالتحاق بالمدارس العادية والتعامل الفعال مع أقرانهم.", 
          img: "/assets/inclusion.jpg",
          stats: [{ label: "طفل مدمج", value: "١٢٠+" }]
        },
        { 
          title: "مشغل الوفاء والأمل", 
          desc: "توفير فرص تدريب مهني وفرص عمل لذوي الهمم في مجالات الحرف اليدوية والبسيطة.", 
          img: "/assets/volunteers.jpg",
          stats: [{ label: "فرصة عمل", value: "٨٠+" }]
        },
      ],
      storiesTitle: "قصص نجاح",
      storiesSub: "لحظات من الفخر والأمل تعطينا الدافع للاستمرار",
      stories: [
        { name: "علي محمد", role: "ولي أمر", quote: "لم أصدق التطور الذي حققه ابني في ستة أشهر فقط من التدريب المكثف.", emoji: "👨‍👦" },
        { name: "سارة أحمد", role: "أخصائية تخاطب", quote: "رؤية طفل يتحدث للمرة الأولى هي أعظم مكافأة لعملنا في المؤسسة.", emoji: "👩‍⚕️" },
        { name: "ياسين إبراهيم", role: "مستفيد من برنامج الدمج", quote: "أنا الآن في المدرسة ولدي الكثير من الأصدقاء، شكراً قلب الحياة.", emoji: "👦" },
      ],
      ctaTitle: "كن جزءاً من التغيير",
      ctaSub: "سواء كنت متطوعاً أو داعماً، مساهمتك تصنع فرقاً حقيقياً في حياة هؤلاء الأطفال.",
      ctaBtn1: "احجز موعداً",
      ctaBtn2: "تواصل معنا",
      metaTitle: "برامجنا | مؤسسة قلب الحياة",
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
        { title: "تمكين الطفل", desc: "رفع كفاءة الأطفال في المهارات الاستقلالية والاجتماعية.", icon: "💪", label: "هدف ذاتي", objectives: ["تنمية الاستقلالية", "تحسين السلوك", "الدمج الذاتي"] },
        { title: "دعم الأسر", desc: "توعية وتدريب الأسر وتوفير الدعم النفسي والتقني لهم.", icon: "🤝", label: "هدف أسري", objectives: ["الدعم النفسي", "الإرشاد المهني", "التمكين الأسري"] },
        { title: "نشر الوعي", desc: "تصحيح المفاهيم المجتمعية حول الإعاقة وتعزيز ثقافة الدمج.", icon: "📢", label: "هدف مجتمعي", objectives: ["حملات التوعية", "تغيير المفاهيم", "تعزيز الدمج"] },
        { title: "تطوير الكوادر", desc: "تدريب مستمر للأخصائيين على أحدث الأساليب العلمية.", icon: "🎓", label: "هدف مهني", objectives: ["التدريب العلمي", "الأساليب الحديثة", "رفع الكفاءة"] },
        { title: "توفير الأمان", desc: "خلق بيئة آمنة وصديقة للطفل في جميع فروعنا.", icon: "🛡️", label: "هدف أمني", objectives: ["بيئة آمنة", "معايير الجودة", "الحماية والوقاية"] },
        { title: "الاستدامة", desc: "بناء نموذج عمل مؤسسي يضمن استمرارية الخدمات وتطويرها.", icon: "🌱", label: "هدف مؤسسي", objectives: ["استمرارية الخدمة", "تطوير الموارد", "التوسع المدروس"] },
      ],
      metaTitle: "أهدافنا | مؤسسة قلب الحياة",
      metaDesc: "تعرف على أهداف مؤسسة قلب الحياة الاستراتيجية لدعم وتمكين ذوي الهمم.",
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
        topicOptions: ["استفسار عام", "حجز موعد", "شكوى أو اقتراح", "تطوع"],
        message: "رسالتك",
        messagePlaceholder: "اكتب رسالتك بالتفصيل هنا...",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال...",
        success: "تم الإرسال بنجاح!",
        error: "حدث خطأ ما، يرجى المحاولة لاحقاً.",
      },
      info: {
        title: "معلومات التواصل",
        phone: "الهاتف وواتساب",
        email: "البريد الإلكتروني",
        address: "المقر الرئيسي",
      },
      metaTitle: "اتصل بنا | مؤسسة قلب الحياة",
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
    clinic: {
      title: "Medical Center",
      sub: "Latest equipment for world-class care.",
      badge: "Premium Care",
      name: "Qalb El Hayah Specialized Clinic",
      desc1: "We provide comprehensive periodic checkups supervised by elite doctors.",
      desc2: "Our labs and exam rooms are equipped with highest tech for accurate diagnosis.",
      book: "Book Medical Appt",
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
      sub2: "Our centers are equipped with the latest means to ensure the best results.",
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
          img: "/assets/children-education.jpg",
          stats: [{ label: "Home Visits", value: "500+" }]
        },
        { 
          title: "I Can Initiative", 
          desc: "A specialized program to prepare children for school inclusion and effective peer interaction.", 
          img: "/assets/inclusion.jpg",
          stats: [{ label: "Kids Integrated", value: "120+" }]
        },
        { 
          title: "Wafaa Workshop", 
          desc: "Providing vocational training and jobs for people with special needs in handicrafts.", 
          img: "/assets/volunteers.jpg",
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
        topicOptions: ["General Inquiry", "Book Appointment", "Complaint or Suggestion", "Volunteer"],
        message: "Message",
        messagePlaceholder: "Write your message in detail here...",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Sent successfully!",
        error: "Something went wrong, please try again later.",
      },
      info: {
        title: "Contact Info",
        phone: "Phone & WhatsApp",
        email: "Email Address",
        address: "Headquarters",
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

const LanguageContext = createContext<{
  lang: Language;
  t: Translation;
  toggleLang: () => void;
  setLangAr: () => void;
  setLangEn: () => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("app_lang");
    if (saved === "ar" || saved === "en") return saved;
    return "ar";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("app_lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  const setLangAr = () => setLang("ar");
  const setLangEn = () => setLang("en");

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang, setLangAr, setLangEn }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
}
