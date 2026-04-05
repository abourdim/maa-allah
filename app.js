/* مع الله — WITH GOD: STUDIES IN DAWAH — app.js v1.0 */
/* Based on "Maa Allah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'مع الله',
    splashSub: 'دراسات في الدعوة والداعية',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة فصلت ٤١: ٣٣',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabWisdom: 'الحكمة',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الدعوة',
    cardsDesc: '٢٠ بطاقة من كتاب مع الله — دروس في فن الدعوة إلى الله',
    wisdomTitle: 'حكمة الداعية',
    wisdomDesc: 'صفات الداعية الناجح وأساليب الدعوة الحكيمة',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات الداعية المؤثر — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر نفسك',
    quizDesc: 'هل أنت داعية حكيم؟ أجب بصدق',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الداعية',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ درس اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    splashFeatures: [
      '٢٠ بطاقة في فن الدعوة إلى الله',
      'صفات الداعية الناجح وأساليبه',
      'عادات يومية مع تتبع مستمر',
      'اختبار ذاتي + أدعية الداعية'
    ],
    principle: 'المبدأ',
    application: '💡 طبّق الآن',
    quranRef: 'المرجع القرآني',
  },
  en: {
    appTitle: 'With God',
    splashSub: 'Studies in Dawah and the Caller',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Fussilat 41:33',
    tabHome: 'Home', tabCards: 'Cards', tabWisdom: 'Wisdom',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Dawah Cards',
    cardsDesc: '20 cards from With God — lessons in the art of calling to God',
    wisdomTitle: 'Wisdom of the Caller',
    wisdomDesc: 'Qualities of a successful caller and methods of wise dawah',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits of an effective caller — track your daily progress',
    quizTitle: 'Test Yourself',
    quizDesc: 'Are you a wise caller? Answer honestly',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas of the Caller',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Lesson',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    splashFeatures: [
      '20 cards on the art of calling to God',
      'Qualities and methods of a successful caller',
      'Daily habits with streak tracking',
      'Self-quiz + caller\'s duas'
    ],
    principle: 'Principle',
    application: '💡 Apply Now',
    quranRef: 'Quranic Reference',
  },
  fr: {
    appTitle: 'Avec Dieu',
    splashSub: 'Etudes sur la Dawah et le Predicateur',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Fussilat 41:33',
    tabHome: 'Accueil', tabCards: 'Cartes', tabWisdom: 'Sagesse',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Dawah',
    cardsDesc: '20 cartes du livre Avec Dieu — lecons sur l\'art d\'appeler a Dieu',
    wisdomTitle: 'Sagesse du Predicateur',
    wisdomDesc: 'Qualites d\'un predicateur accompli et methodes de dawah sage',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes d\'un predicateur efficace — suivez vos progres',
    quizTitle: 'Testez-Vous',
    quizDesc: 'Etes-vous un predicateur sage ? Repondez honnetement',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Predicateur',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Lecon du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    splashFeatures: [
      '20 cartes sur l\'art d\'appeler a Dieu',
      'Qualites et methodes du predicateur',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas du predicateur'
    ],
    principle: 'Principe',
    application: '💡 Appliquez Maintenant',
    quranRef: 'Reference coranique',
  }
};

// ═══════════════ CARDS DATA (20 dawah cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'🕌',
    ar:{title:'الإخلاص في الدعوة',desc:'دراسات الغزالي في الدعوة في كتاب "مع الله": الإخلاص أولاً، ثم العلم، ثم الصبر. يحذر من الداعية بلا علم ومن العالم بلا إخلاص. الدعوة ليست مهنة بل رسالة — ومن لم يكن مخلصاً لله فهو يدعو إلى نفسه.',quran:'وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا',quranRef:'فصلت ٤١: ٣٣',action:'راجع نيتك اليوم: هل تدعو لله أم لنفسك؟'},
    en:{title:'Sincerity in Dawah',desc:'Al-Ghazali writes in "With God": Calling to God begins with sincerity. One who is not sincere to God in their calling is actually calling to themselves, not to their Lord. The truthful caller seeks neither fame nor wealth.',quran:'And who is better in speech than one who calls to God and does righteous deeds',quranRef:'Fussilat 41:33',action:'Check your intention today: are you calling for God or for yourself?'},
    fr:{title:'La Sincerite dans la Dawah',desc:'Al-Ghazali écrit dans "Avec Dieu": L\'appel a Dieu commence par la sincerite. Celui qui n\'est pas sincere envers Dieu dans son appel appelle en realite a lui-meme. Le predicateur veridique ne cherche ni la gloire ni la richesse.',quran:'Et qui profere plus belle parole que celui qui appelle a Dieu et fait le bien',quranRef:'Fussilat 41:33',action:'Verifiez votre intention aujourd\'hui : appelez-vous pour Dieu ou pour vous-meme ?'}
  },
  {
    id:2, emoji:'📚',
    ar:{title:'العلم قبل الدعوة',desc:'يكتب الغزالي في "مع الله": لا يصح أن تدعو إلى ما تجهل. الداعية بلا علم كالطبيب بلا شهادة — يضر أكثر مما ينفع. طلب العلم فريضة على كل داعية.',quran:'قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ عَلَىٰ بَصِيرَةٍ',quranRef:'يوسف ١٢: ١٠٨',action:'اقرأ اليوم صفحة واحدة من كتاب علمي موثوق'},
    en:{title:'Knowledge Before Dawah',desc:'Al-Ghazali writes in "With God": You cannot call to what you do not know. A caller without knowledge is like a doctor without a degree — causing more harm than good. Seeking knowledge is an obligation for every caller.',quran:'Say: This is my way — I call to God with insight',quranRef:'Yusuf 12:108',action:'Read one page from a reliable scholarly book today'},
    fr:{title:'Le Savoir Avant la Dawah',desc:'Al-Ghazali écrit dans "Avec Dieu": On ne peut appeler a ce que l\'on ignore. Un predicateur sans savoir est comme un medecin sans diplome — il nuit plus qu\'il ne profite. La quete du savoir est une obligation pour tout predicateur.',quran:'Dis : Voici ma voie — j\'appelle a Dieu avec clairvoyance',quranRef:'Youssouf 12:108',action:'Lisez une page d\'un livre de savoir fiable aujourd\'hui'}
  },
  {
    id:3, emoji:'💪',
    ar:{title:'الصبر على الأذى',desc:'يكتب الغزالي في "مع الله": طريق الدعوة مليء بالعقبات. كل الأنبياء أُوذوا في سبيل الله. الصبر على الأذى ليس ضعفاً بل قوة إيمانية عظيمة.',quran:'وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ',quranRef:'النحل ١٦: ١٢٧',action:'إذا أساء إليك أحد اليوم، قابله بالصبر والدعاء'},
    en:{title:'Patience with Hardship',desc:'Al-Ghazali writes in "With God": The path of dawah is full of obstacles. All prophets were harmed in God\'s cause. Patience with harm is not weakness but a great strength of faith.',quran:'And be patient, for your patience is only through God',quranRef:'An-Nahl 16:127',action:'If someone wrongs you today, respond with patience and prayer'},
    fr:{title:'La Patience Face a l\'Adversite',desc:'Le chemin de la dawah est plein d\'obstacles. Tous les prophetes ont ete maltraites dans la voie de Dieu. La patience face au mal n\'est pas faiblesse mais une grande force de foi.',quran:'Et sois patient, car ta patience n\'est que par Dieu',quranRef:'An-Nahl 16:127',action:'Si quelqu\'un vous fait du tort aujourd\'hui, repondez par la patience et la priere'}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'فهم المخاطب',desc:'يكتب الغزالي في "مع الله": الداعية الحكيم يعرف من يخاطب. لكل إنسان مفتاح. خاطب الناس على قدر عقولهم ولا تكلمهم بما لا يفهمون.',quran:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',quranRef:'النحل ١٦: ١٢٥',action:'قبل أن تنصح أحداً اليوم، فكر: ما أفضل طريقة يفهمها؟'},
    en:{title:'Understanding Your Audience',desc:'Al-Ghazali writes in "With God": The wise caller knows who they are addressing. Every person has a key. Speak to people according to their understanding and don\'t burden them with what they cannot comprehend.',quran:'Call to the way of your Lord with wisdom and good counsel',quranRef:'An-Nahl 16:125',action:'Before advising someone today, think: what is the best way they will understand?'},
    fr:{title:'Comprendre Son Auditoire',desc:'Al-Ghazali écrit dans "Avec Dieu": Le predicateur sage connait son interlocuteur. Chaque personne a une cle. Parlez aux gens selon leur comprehension et ne les chargez pas de ce qu\'ils ne peuvent comprendre.',quran:'Appelle au chemin de ton Seigneur par la sagesse et la bonne exhortation',quranRef:'An-Nahl 16:125',action:'Avant de conseiller quelqu\'un, reflechissez : quelle est la meilleure facon de l\'atteindre ?'}
  },
  {
    id:5, emoji:'🌟',
    ar:{title:'القدوة قبل الكلمة',desc:'يكتب الغزالي في "مع الله": الداعية الذي لا يطبق ما يقول يفقد مصداقيته. الناس يتأثرون بالسلوك أكثر من الكلام. كن قدوة حسنة قبل أن تكون خطيباً.',quran:'أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ وَتَنسَوْنَ أَنفُسَكُمْ',quranRef:'البقرة ٢: ٤٤',action:'اختر خُلقاً واحداً تدعو إليه وطبّقه أنت أولاً'},
    en:{title:'Be a Role Model First',desc:'Al-Ghazali writes in "With God": A caller who does not practice what they preach loses credibility. People are influenced more by behavior than words. Be a good example before being a preacher.',quran:'Do you command people to righteousness while you forget yourselves?',quranRef:'Al-Baqarah 2:44',action:'Choose one virtue you preach and practice it yourself first'},
    fr:{title:'L\'Exemple Avant la Parole',desc:'Un predicateur qui ne pratique pas ce qu\'il preche perd sa credibilite. Les gens sont influences par le comportement plus que par les mots. Soyez un bon exemple avant d\'etre un orateur.',quran:'Commanderez-vous la piete aux gens en vous oubliant vous-memes ?',quranRef:'Al-Baqarah 2:44',action:'Choisissez une vertu que vous prechez et pratiquez-la d\'abord'}
  },
  {
    id:6, emoji:'💖',
    ar:{title:'الرحمة في الدعوة',desc:'يكتب الغزالي في "مع الله": الغلظة تنفّر والرحمة تجذب. لو كان النبي صلى الله عليه وسلم فظاً غليظ القلب لانفضوا من حوله. الدعوة بالرحمة أقوى من الدعوة بالتخويف.',quran:'فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ',quranRef:'آل عمران ٣: ١٥٩',action:'عامل اليوم كل من تقابله بلطف ورحمة'},
    en:{title:'Mercy in Dawah',desc:'Al-Ghazali writes in "With God": Harshness repels while mercy attracts. Had the Prophet been harsh and hard-hearted, people would have dispersed from around him. Dawah with mercy is stronger than dawah with intimidation.',quran:'It was by the mercy of God that you were gentle with them',quranRef:'Aal Imran 3:159',action:'Treat everyone you meet today with kindness and mercy'},
    fr:{title:'La Misericorde dans la Dawah',desc:'Al-Ghazali écrit dans "Avec Dieu": La durete repousse tandis que la misericorde attire. Si le Prophete avait ete dur et au coeur endurci, les gens se seraient disperses. La dawah par la misericorde est plus forte que la dawah par l\'intimidation.',quran:'C\'est par la misericorde de Dieu que tu as ete doux envers eux',quranRef:'Aal Imran 3:159',action:'Traitez chaque personne que vous rencontrez avec bonte et misericorde'}
  },
  {
    id:7, emoji:'🎯',
    ar:{title:'الحكمة في الأسلوب',desc:'لكل مقام مقال. الداعية الحكيم يختار الوقت والمكان والطريقة المناسبة. لا تفرض الدين على الناس بل اعرضه بأسلوب جذاب.',quran:'وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ',quranRef:'النحل ١٦: ١٢٥',action:'تعلم اليوم أسلوباً جديداً في الحوار البناء'},
    en:{title:'Wisdom in Approach',desc:'Every situation has its appropriate method. The wise caller chooses the right time, place, and approach. Don\'t force religion on people — present it attractively.',quran:'And argue with them in the way that is best',quranRef:'An-Nahl 16:125',action:'Learn a new constructive dialogue technique today'},
    fr:{title:'La Sagesse dans l\'Approche',desc:'Chaque situation a sa methode appropriee. Le predicateur sage choisit le bon moment, le bon lieu et la bonne approche. Ne forcez pas la religion — presentez-la de maniere attrayante.',quran:'Et discute avec eux de la meilleure facon',quranRef:'An-Nahl 16:125',action:'Apprenez une nouvelle technique de dialogue constructif aujourd\'hui'}
  },
  {
    id:8, emoji:'🔥',
    ar:{title:'الحماس بلا تطرف',desc:'الحماس في الدعوة مطلوب لكن بلا غلو. التطرف يشوه صورة الإسلام. الاعتدال هو منهج القرآن والسنة.',quran:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',quranRef:'البقرة ٢: ١٤٣',action:'راجع أسلوبك في النقاش: هل أنت معتدل أم متطرف؟'},
    en:{title:'Enthusiasm Without Extremism',desc:'Enthusiasm in dawah is required but without excess. Extremism distorts the image of Islam. Moderation is the methodology of the Quran and Sunnah.',quran:'And thus We have made you a balanced nation',quranRef:'Al-Baqarah 2:143',action:'Review your discussion style: are you moderate or extreme?'},
    fr:{title:'L\'Enthousiasme Sans Extremisme',desc:'L\'enthousiasme dans la dawah est requis mais sans exces. L\'extremisme defigure l\'image de l\'Islam. La moderation est la methodologie du Coran et de la Sunnah.',quran:'Et ainsi Nous avons fait de vous une communaute du juste milieu',quranRef:'Al-Baqarah 2:143',action:'Revoyez votre style de discussion : etes-vous modere ou extreme ?'}
  },
  {
    id:9, emoji:'🧠',
    ar:{title:'العقل والنقل',desc:'الإسلام دين العقل والوحي معاً. لا تعارض بينهما. الداعية يجمع بين البراهين العقلية والنصوص الشرعية.',quran:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',quranRef:'محمد ٤٧: ٢٤',action:'ادرس اليوم دليلاً عقلياً على حقيقة إيمانية'},
    en:{title:'Reason and Revelation',desc:'Islam is the religion of both reason and revelation. There is no contradiction between them. The caller combines rational proofs with scriptural texts.',quran:'Do they not reflect upon the Quran?',quranRef:'Muhammad 47:24',action:'Study a rational proof for a truth of faith today'},
    fr:{title:'Raison et Revelation',desc:'Al-Ghazali écrit dans "Avec Dieu": L\'Islam est la religion de la raison et de la revelation. Il n\'y a pas de contradiction entre elles. Le predicateur combine les preuves rationnelles et les textes scripturaires.',quran:'Ne meditent-ils donc pas sur le Coran ?',quranRef:'Muhammad 47:24',action:'Etudiez une preuve rationnelle d\'une verite de foi aujourd\'hui'}
  },
  {
    id:10, emoji:'🌍',
    ar:{title:'الدعوة العالمية',desc:'رسالة الإسلام للعالم كله لا لقوم بعينهم. الداعية يحمل هم البشرية جمعاء ولا يقتصر على جماعته.',quran:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',quranRef:'الأنبياء ٢١: ١٠٧',action:'تعرف اليوم على ثقافة مختلفة وفكر كيف تخاطبها'},
    en:{title:'Universal Dawah',desc:'Islam\'s message is for the entire world, not for a specific people. The caller carries concern for all humanity, not just their own community.',quran:'And We have not sent you except as a mercy to all worlds',quranRef:'Al-Anbiya 21:107',action:'Learn about a different culture today and think how to address it'},
    fr:{title:'La Dawah Universelle',desc:'Al-Ghazali écrit dans "Avec Dieu": Le message de l\'Islam est pour le monde entier, pas pour un peuple specifique. Le predicateur porte le souci de toute l\'humanite, pas seulement de sa communaute.',quran:'Et Nous ne t\'avons envoye qu\'en misericorde pour tous les mondes',quranRef:'Al-Anbiya 21:107',action:'Decouvrez une culture differente et reflechissez a comment l\'aborder'}
  },
  {
    id:11, emoji:'💬',
    ar:{title:'الحوار لا الجدال',desc:'الجدال العقيم يفرّق بينما الحوار البناء يقرّب. لا تسعَ لإسكات الآخر بل لإقناعه. الهدف هو الحق لا الانتصار.',quran:'وَلَا تُجَادِلُوا أَهْلَ الْكِتَابِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ',quranRef:'العنكبوت ٢٩: ٤٦',action:'في نقاشك القادم، استمع أكثر مما تتكلم'},
    en:{title:'Dialogue, Not Argument',desc:'Sterile argument divides while constructive dialogue brings together. Don\'t seek to silence the other but to convince them. The goal is truth, not victory.',quran:'And do not argue with the People of the Book except in the best way',quranRef:'Al-Ankabut 29:46',action:'In your next discussion, listen more than you speak'},
    fr:{title:'Le Dialogue, Pas la Dispute',desc:'La dispute sterile divise tandis que le dialogue constructif rapproche. Ne cherchez pas a faire taire l\'autre mais a le convaincre. L\'objectif est la verite, pas la victoire.',quran:'Et ne discutez avec les Gens du Livre que de la meilleure facon',quranRef:'Al-Ankabut 29:46',action:'Dans votre prochaine discussion, ecoutez plus que vous ne parlez'}
  },
  {
    id:12, emoji:'🌱',
    ar:{title:'التدرج في الدعوة',desc:'لا تطلب من الناس كل شيء دفعة واحدة. النبي دعا للتوحيد سنوات قبل فرض الصلاة. ابدأ بالأهم ثم الأقل أهمية.',quran:'وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ',quranRef:'الإسراء ١٧: ١٠٦',action:'اختر نصيحة واحدة فقط لمن تنصحه اليوم — لا تكثر'},
    en:{title:'Gradual Approach',desc:'Don\'t demand everything from people at once. The Prophet called to monotheism for years before prayer was prescribed. Start with what\'s most important, then progress.',quran:'And a Quran We have divided so you may recite it to people gradually',quranRef:'Al-Isra 17:106',action:'Choose only one piece of advice for someone today — don\'t overwhelm them'},
    fr:{title:'L\'Approche Graduelle',desc:'Ne demandez pas tout aux gens en une seule fois. Le Prophete a appele au monotheisme pendant des annees avant que la priere ne soit prescrite. Commencez par le plus important.',quran:'Et un Coran que Nous avons fragmente pour que tu le recites aux gens graduellement',quranRef:'Al-Isra 17:106',action:'Choisissez un seul conseil pour quelqu\'un aujourd\'hui — ne le submergez pas'}
  },
  {
    id:13, emoji:'❤️',
    ar:{title:'حب الخير للناس',desc:'الداعية يحب للناس ما يحب لنفسه. الدعوة نابعة من حب الخير للبشر لا من الشعور بالتفوق عليهم.',quran:'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',quranRef:'آل عمران ٣: ١١٠',action:'ادعُ اليوم لشخص لا يعرفك بالهداية والخير'},
    en:{title:'Wishing Good for Others',desc:'The caller wishes for people what they wish for themselves. Dawah springs from loving good for humanity, not from feeling superior to them.',quran:'You are the best nation raised for the people',quranRef:'Aal Imran 3:110',action:'Pray today for the guidance and wellbeing of someone who doesn\'t know you'},
    fr:{title:'Souhaiter le Bien aux Autres',desc:'Le predicateur souhaite aux gens ce qu\'il se souhaite a lui-meme. La dawah nait de l\'amour du bien pour l\'humanite, pas du sentiment de superiorite.',quran:'Vous etes la meilleure communaute suscitee pour les gens',quranRef:'Aal Imran 3:110',action:'Priez aujourd\'hui pour la guidance d\'une personne qui ne vous connait pas'}
  },
  {
    id:14, emoji:'🛡️',
    ar:{title:'الثبات على الحق',desc:'الداعية لا يساوم على الحق ولا يتلون مع الناس. الثبات على المبدأ مع لين الأسلوب هو منهج الأنبياء.',quran:'فَاسْتَقِمْ كَمَا أُمِرْتَ',quranRef:'هود ١١: ١١٢',action:'حدد مبدأً واحداً لن تتنازل عنه مهما كان الضغط'},
    en:{title:'Steadfastness on Truth',desc:'The caller does not compromise on truth nor change colors with people. Firmness in principle with gentleness in approach is the methodology of the prophets.',quran:'So be steadfast as you have been commanded',quranRef:'Hud 11:112',action:'Identify one principle you will never compromise on, regardless of pressure'},
    fr:{title:'La Fermete sur la Verite',desc:'Le predicateur ne fait pas de compromis sur la verite. La fermete dans les principes avec la douceur dans l\'approche est la methodologie des prophetes.',quran:'Reste droit comme il t\'a ete commande',quranRef:'Hud 11:112',action:'Identifiez un principe sur lequel vous ne transigerez jamais'}
  },
  {
    id:15, emoji:'🔄',
    ar:{title:'تجديد الخطاب',desc:'الدعوة ليست تكرار كلام قديم بطريقة قديمة. لا بد من تجديد الأسلوب مع الحفاظ على الجوهر. فهم العصر ضرورة.',quran:'لِكُلٍّ جَعَلْنَا مِنكُمْ شِرْعَةً وَمِنْهَاجًا',quranRef:'المائدة ٥: ٤٨',action:'فكر في طريقة جديدة لإيصال رسالة إسلامية مألوفة'},
    en:{title:'Renewing the Message',desc:'Dawah is not repeating old words in old ways. The style must be renewed while preserving the essence. Understanding the times is a necessity.',quran:'For each of you We have made a law and a method',quranRef:'Al-Maidah 5:48',action:'Think of a new way to deliver a familiar Islamic message'},
    fr:{title:'Renouveler le Discours',desc:'La dawah n\'est pas la repetition de vieux mots de vieille facon. Le style doit etre renouvele tout en preservant l\'essence. Comprendre l\'epoque est une necessite.',quran:'A chacun de vous Nous avons assigne une loi et une methode',quranRef:'Al-Maidah 5:48',action:'Pensez a une nouvelle facon de transmettre un message islamique familier'}
  },
  {
    id:16, emoji:'🤲',
    ar:{title:'التوكل على الله',desc:'الداعية يبذل جهده ثم يتوكل على الله. النتائج بيد الله لا بيدك. لا تيأس إن لم ترَ ثمرة فوراً.',quran:'وَمَا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ',quranRef:'المائدة ٥: ٩٩',action:'بعد كل جهد في الدعوة، قل: "اللهم إني بلّغت، اللهم فاشهد"'},
    en:{title:'Trust in God',desc:'The caller does their best then trusts in God. Results are in God\'s hands, not yours. Don\'t despair if you don\'t see fruit immediately.',quran:'The duty of the Messenger is only to convey',quranRef:'Al-Maidah 5:99',action:'After every dawah effort, say: "O God, I have conveyed, so be my witness"'},
    fr:{title:'La Confiance en Dieu',desc:'Le predicateur fait de son mieux puis s\'en remet a Dieu. Les resultats sont entre les mains de Dieu, pas les votres. Ne desesperez pas si vous ne voyez pas de fruits immediatement.',quran:'Le devoir du Messager n\'est que la transmission',quranRef:'Al-Maidah 5:99',action:'Apres chaque effort de dawah, dites : "O Dieu, j\'ai transmis, sois-en temoin"'}
  },
  {
    id:17, emoji:'⚖️',
    ar:{title:'العدل مع المخالف',desc:'الاختلاف مع الآخر لا يبرر الظلم. كن عادلاً حتى مع من يخالفك. العدل أقرب للتقوى من التعصب.',quran:'وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا',quranRef:'المائدة ٥: ٨',action:'في خلافك القادم، ابحث عن نقطة حق في كلام خصمك'},
    en:{title:'Justice with Opponents',desc:'Disagreeing with others does not justify injustice. Be fair even with those who oppose you. Justice is closer to piety than bigotry.',quran:'And let not the hatred of a people prevent you from being just',quranRef:'Al-Maidah 5:8',action:'In your next disagreement, look for a point of truth in your opponent\'s words'},
    fr:{title:'La Justice Envers les Opposants',desc:'Le desaccord avec l\'autre ne justifie pas l\'injustice. Soyez juste meme avec ceux qui vous opposent. La justice est plus proche de la piete que le fanatisme.',quran:'Et que la haine d\'un peuple ne vous incite pas a etre injustes',quranRef:'Al-Maidah 5:8',action:'Dans votre prochain desaccord, cherchez un point de verite dans les paroles de votre opposant'}
  },
  {
    id:18, emoji:'🌙',
    ar:{title:'العبادة زاد الداعية',desc:'الداعية الذي لا يتغذى من العبادة ينضب معينه. قيام الليل والذكر والدعاء هي وقود الدعوة.',quran:'يَا أَيُّهَا الْمُزَّمِّلُ قُمِ اللَّيْلَ إِلَّا قَلِيلًا',quranRef:'المزمل ٧٣: ١-٢',action:'صلِّ ركعتين إضافيتين الليلة واطلب من الله القبول'},
    en:{title:'Worship Fuels the Caller',desc:'A caller who does not nourish themselves through worship will dry up. Night prayer, remembrance, and supplication are the fuel of dawah.',quran:'O you wrapped in garments, stand in prayer at night, except a little',quranRef:'Al-Muzzammil 73:1-2',action:'Pray two extra units of prayer tonight and ask God for acceptance'},
    fr:{title:'L\'Adoration Nourrit le Predicateur',desc:'Un predicateur qui ne se nourrit pas par l\'adoration tarira. La priere nocturne, le rappel et l\'invocation sont le carburant de la dawah.',quran:'O toi l\'enveloppe, leve-toi la nuit sauf un peu',quranRef:'Al-Muzzammil 73:1-2',action:'Priez deux unites supplementaires ce soir et demandez a Dieu l\'acceptation'}
  },
  {
    id:19, emoji:'🏗️',
    ar:{title:'بناء المؤسسات',desc:'الدعوة الفردية لا تكفي. لا بد من بناء مؤسسات تعليمية وخيرية ودعوية. العمل الجماعي المنظم أقوى من الجهد الفردي.',quran:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',quranRef:'المائدة ٥: ٢',action:'شارك اليوم في مبادرة جماعية تخدم مجتمعك'},
    en:{title:'Building Institutions',desc:'Individual dawah is not enough. Educational, charitable, and dawah institutions must be built. Organized collective work is stronger than individual effort.',quran:'And cooperate in righteousness and piety',quranRef:'Al-Maidah 5:2',action:'Participate in a community initiative today'},
    fr:{title:'Batir des Institutions',desc:'La dawah individuelle ne suffit pas. Il faut batir des institutions educatives, caritatives et de dawah. Le travail collectif organise est plus fort que l\'effort individuel.',quran:'Et cooperez dans la piete et la bienfaisance',quranRef:'Al-Maidah 5:2',action:'Participez a une initiative communautaire aujourd\'hui'}
  },
  {
    id:20, emoji:'🕊️',
    ar:{title:'الدعوة رسالة سلام',desc:'الإسلام جاء رحمة لا نقمة. الدعوة رسالة سلام ومحبة وبناء لا هدم وتفريق. الداعية سفير خير في الأرض.',quran:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',quranRef:'الأنبياء ٢١: ١٠٧',action:'انشر اليوم رسالة سلام ومحبة لمن حولك'},
    en:{title:'Dawah: A Message of Peace',desc:'Islam came as mercy, not as wrath. Dawah is a message of peace, love, and building — not destruction and division. The caller is an ambassador of good on earth.',quran:'And We have not sent you except as a mercy to all worlds',quranRef:'Al-Anbiya 21:107',action:'Spread a message of peace and love to those around you today'},
    fr:{title:'La Dawah : Un Message de Paix',desc:'L\'Islam est venu comme misericorde, pas comme colere. La dawah est un message de paix, d\'amour et de construction — pas de destruction. Le predicateur est un ambassadeur du bien sur terre.',quran:'Et Nous ne t\'avons envoye qu\'en misericorde pour tous les mondes',quranRef:'Al-Anbiya 21:107',action:'Repandez un message de paix et d\'amour autour de vous aujourd\'hui'}
  },
  {
    id:21, emoji:'🌧️',
    ar:{title:'الدعوة في الشدائد',desc:'الشدائد محك الداعية الحقيقي. كثير من الدعاة ينسحبون عند أول ابتلاء. الأنبياء دعوا تحت التعذيب والتشريد ولم يتوقفوا.',quran:'أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم',quranRef:'البقرة ٢: ٢١٤',action:'تذكر داعية واجه ابتلاءً واستلهم من صبره'},
    en:{title:'Dawah in Adversity',desc:'Adversity is the test of the true caller. Many callers withdraw at the first trial. The prophets called to God under torture and exile and never stopped.',quran:'Or do you think that you will enter Paradise while such trial has not yet come to you as came to those who passed before you',quranRef:'Al-Baqarah 2:214',action:'Remember a caller who faced trials and draw inspiration from their patience'},
    fr:{title:'La Dawah dans l\'Adversite',desc:'L\'adversite est l\'epreuve du vrai predicateur. Beaucoup de predicateurs se retirent au premier test. Les prophetes ont appele a Dieu sous la torture et l\'exil sans jamais s\'arreter.',quran:'Ou pensez-vous entrer au Paradis sans qu\'il vous arrive pareil a ce qui est arrive a ceux qui vous ont precedes',quranRef:'Al-Baqarah 2:214',action:'Souvenez-vous d\'un predicateur eprouve et inspirez-vous de sa patience'}
  },
  {
    id:22, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'الدعوة والأسرة',desc:'أول ميدان للدعوة هو الأسرة. من أهمل أهله وانشغل بدعوة الآخرين فقد أخطأ الأولويات. بيتك أولى الناس بدعوتك.',quran:'وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ',quranRef:'الشعراء ٢٦: ٢١٤',action:'خصص وقتاً اليوم لحوار ديني مع أهلك بأسلوب لطيف'},
    en:{title:'Dawah and Family',desc:'The first field of dawah is the family. Whoever neglects their family while preaching to others has confused priorities. Your home is most deserving of your calling.',quran:'And warn your closest kindred',quranRef:'Ash-Shu\'ara 26:214',action:'Dedicate time today for a gentle religious conversation with your family'},
    fr:{title:'La Dawah et la Famille',desc:'Le premier terrain de la dawah est la famille. Celui qui neglige sa famille en prechant aux autres a confondu les priorites. Votre foyer merite le plus votre appel.',quran:'Et avertis les gens qui te sont les plus proches',quranRef:'Ash-Shu\'ara 26:214',action:'Consacrez du temps aujourd\'hui a une conversation religieuse douce avec votre famille'}
  },
  {
    id:23, emoji:'⏳',
    ar:{title:'الدعوة والصبر',desc:'الدعوة تحتاج صبراً طويلاً. نوح دعا قومه ألف سنة إلا خمسين عاماً. لا تستعجل النتائج فالهداية بيد الله.',quran:'فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ وَلَا يَسْتَخِفَّنَّكَ الَّذِينَ لَا يُوقِنُونَ',quranRef:'الروم ٣٠: ٦٠',action:'عندما تشعر بالإحباط اليوم، تذكر صبر نوح وأكمل طريقك'},
    en:{title:'Dawah and Patience',desc:'Dawah requires long patience. Noah called his people for a thousand years minus fifty. Do not rush results, for guidance is in God\'s hands.',quran:'So be patient. Indeed, the promise of God is truth. And let not those who have no certainty make you impatient',quranRef:'Ar-Rum 30:60',action:'When you feel discouraged today, remember Noah\'s patience and continue on your path'},
    fr:{title:'La Dawah et la Patience',desc:'La dawah necessite une longue patience. Noe a appele son peuple pendant mille ans moins cinquante. Ne precipitez pas les resultats, car la guidance est entre les mains de Dieu.',quran:'Sois patient, la promesse de Dieu est verite. Et que ceux qui n\'ont pas de certitude ne t\'ebranlent pas',quranRef:'Ar-Rum 30:60',action:'Quand vous vous sentez decourage aujourd\'hui, souvenez-vous de la patience de Noe et continuez'}
  },
  {
    id:24, emoji:'📚',
    ar:{title:'الدعوة والعلم',desc:'الداعية بلا علم كالجندي بلا سلاح. العلم الشرعي والعلم بالواقع كلاهما ضروري. الجهل في الدعوة يفسد أكثر مما يصلح.',quran:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',quranRef:'الزمر ٣٩: ٩',action:'اقرأ فصلاً من كتاب شرعي اليوم لتزيد علمك بما تدعو إليه'},
    en:{title:'Dawah and Knowledge',desc:'A caller without knowledge is like a soldier without a weapon. Both religious knowledge and knowledge of reality are essential. Ignorance in dawah corrupts more than it reforms.',quran:'Say: Are those who know equal to those who do not know',quranRef:'Az-Zumar 39:9',action:'Read a chapter from a religious book today to increase your knowledge of what you call to'},
    fr:{title:'La Dawah et le Savoir',desc:'Un predicateur sans savoir est comme un soldat sans arme. Le savoir religieux et le savoir de la realite sont tous deux essentiels. L\'ignorance dans la dawah corrompt plus qu\'elle ne reforme.',quran:'Dis : Sont-ils egaux ceux qui savent et ceux qui ne savent pas',quranRef:'Az-Zumar 39:9',action:'Lisez un chapitre d\'un livre religieux aujourd\'hui pour approfondir votre savoir'}
  },
  {
    id:25, emoji:'💎',
    ar:{title:'الدعوة والإخلاص',desc:'الإخلاص روح الدعوة. حين يفقد الداعية إخلاصه تتحول دعوته إلى رياء وحب للظهور. راجع نيتك في كل عمل دعوي.',quran:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',quranRef:'البينة ٩٨: ٥',action:'قبل أي عمل دعوي اليوم، توقف وصحح نيتك لله وحده'},
    en:{title:'Dawah and Sincerity',desc:'Sincerity is the soul of dawah. When a caller loses sincerity, their calling becomes showing off and love of appearance. Review your intention in every act of dawah.',quran:'And they were not commanded except to worship God, being sincere to Him in religion',quranRef:'Al-Bayyinah 98:5',action:'Before any dawah activity today, pause and correct your intention for God alone'},
    fr:{title:'La Dawah et la Sincerite',desc:'La sincerite est l\'ame de la dawah. Quand un predicateur perd sa sincerite, son appel devient ostentation et amour de l\'apparence. Revisez votre intention dans chaque acte de dawah.',quran:'Et il ne leur a ete commande que d\'adorer Dieu, Lui vouant un culte exclusif',quranRef:'Al-Bayyinah 98:5',action:'Avant toute activite de dawah aujourd\'hui, arretez-vous et corrigez votre intention pour Dieu seul'}
  },
  {
    id:26, emoji:'🌍',
    ar:{title:'الدعوة بالقدوة',desc:'أعظم دعوة هي الدعوة بالقدوة الحسنة. الناس يتأثرون بما يرون أكثر مما يسمعون. كن أنت الإسلام الذي يراه الناس.',quran:'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',quranRef:'الأحزاب ٣٣: ٢١',action:'راقب سلوكك اليوم — هل يعكس ما تدعو إليه؟'},
    en:{title:'Dawah by Example',desc:'The greatest dawah is through good example. People are influenced by what they see more than what they hear. Be the Islam that people witness.',quran:'There has certainly been for you in the Messenger of God an excellent example',quranRef:'Al-Ahzab 33:21',action:'Watch your behavior today — does it reflect what you call people to?'},
    fr:{title:'La Dawah par l\'Exemple',desc:'La plus grande dawah est par le bon exemple. Les gens sont influences par ce qu\'ils voient plus que par ce qu\'ils entendent. Soyez l\'Islam que les gens voient.',quran:'Vous avez certes dans le Messager de Dieu un excellent exemple',quranRef:'Al-Ahzab 33:21',action:'Observez votre comportement aujourd\'hui — reflete-t-il ce a quoi vous appelez ?'}
  },
  {
    id:27, emoji:'💡',
    ar:{title:'وسائل الدعوة الحديثة',desc:'الإنترنت ووسائل التواصل فتحت آفاقاً جديدة للدعوة. يمكن لرسالة واحدة أن تصل لملايين. استخدم وسائل العصر في نشر الخير.',quran:'وَجَاهِدْهُم بِهِ جِهَادًا كَبِيرًا',quranRef:'الفرقان ٢٥: ٥٢',action:'انشر اليوم محتوى دعوياً مفيداً على إحدى منصات التواصل'},
    en:{title:'Modern Dawah Tools',desc:'The internet and social media have opened new horizons for dawah. A single message can reach millions. Use modern tools to spread goodness.',quran:'And strive against them a great striving with it',quranRef:'Al-Furqan 25:52',action:'Share beneficial dawah content on a social media platform today'},
    fr:{title:'Les Outils Modernes de la Dawah',desc:'Internet et les reseaux sociaux ont ouvert de nouveaux horizons pour la dawah. Un seul message peut atteindre des millions. Utilisez les outils modernes pour repandre le bien.',quran:'Et lutte contre eux avec ceci d\'un grand effort',quranRef:'Al-Furqan 25:52',action:'Partagez du contenu de dawah benefique sur une plateforme de reseaux sociaux aujourd\'hui'}
  },
  {
    id:28, emoji:'🧒',
    ar:{title:'الدعوة والشباب',desc:'الشباب هم مستقبل الدعوة. الداعية الحكيم يفهم لغة الشباب واهتماماتهم ويقدم الإسلام بأسلوب يناسبهم.',quran:'إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى',quranRef:'الكهف ١٨: ١٣',action:'تحدث مع شاب اليوم عن الإسلام بأسلوب يناسب اهتماماته'},
    en:{title:'Dawah and Youth',desc:'Youth are the future of dawah. A wise caller understands the language and interests of young people and presents Islam in a style that suits them.',quran:'Indeed, they were youths who believed in their Lord, and We increased them in guidance',quranRef:'Al-Kahf 18:13',action:'Talk to a young person today about Islam in a way that suits their interests'},
    fr:{title:'La Dawah et la Jeunesse',desc:'Les jeunes sont l\'avenir de la dawah. Un predicateur sage comprend le langage et les interets des jeunes et presente l\'Islam d\'une maniere qui leur convient.',quran:'Ce sont des jeunes qui ont cru en leur Seigneur, et Nous les avons guides davantage',quranRef:'Al-Kahf 18:13',action:'Parlez a un jeune aujourd\'hui de l\'Islam d\'une maniere qui correspond a ses interets'}
  },
  {
    id:29, emoji:'🤲',
    ar:{title:'الدعوة والدعاء',desc:'الدعاء سلاح الداعية الأول. قبل أن تنصح أحداً ادعُ له بالهداية. موسى دعا لأخيه فقال: "رب اشرح لي صدري."',quran:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',quranRef:'طه ٢٠: ٢٥-٢٦',action:'ادعُ اليوم لثلاثة أشخاص بالهداية والتوفيق'},
    en:{title:'Dawah and Supplication',desc:'Dua is the caller\'s first weapon. Before advising anyone, pray for their guidance. Moses prayed for his brother saying: "My Lord, expand for me my chest."',quran:'My Lord, expand for me my breast, and ease for me my task',quranRef:'Taha 20:25-26',action:'Pray today for three people\'s guidance and success'},
    fr:{title:'La Dawah et l\'Invocation',desc:'Le dua est la premiere arme du predicateur. Avant de conseiller quelqu\'un, priez pour sa guidance. Moise a prie pour son frere en disant : « Mon Seigneur, ouvre-moi ma poitrine. »',quran:'Mon Seigneur, ouvre-moi ma poitrine et facilite-moi ma tache',quranRef:'Taha 20:25-26',action:'Priez aujourd\'hui pour la guidance et le succes de trois personnes'}
  },
  {
    id:30, emoji:'🌙',
    ar:{title:'الدعوة والتزكية',desc:'الداعية الذي لا يزكي نفسه يفسد دعوته. تزكية النفس أساس كل عمل دعوي ناجح. ابدأ بنفسك قبل أن تدعو غيرك.',quran:'قَدْ أَفْلَحَ مَن زَكَّاهَا وَقَدْ خَابَ مَن دَسَّاهَا',quranRef:'الشمس ٩١: ٩-١٠',action:'خصص وقتاً اليوم للعبادة والتأمل في إصلاح نفسك'},
    en:{title:'Dawah and Self-Purification',desc:'A caller who does not purify themselves corrupts their dawah. Self-purification is the foundation of every successful dawah effort. Start with yourself before calling others.',quran:'He has succeeded who purifies it, and he has failed who instills it with corruption',quranRef:'Ash-Shams 91:9-10',action:'Dedicate time today for worship and reflection on self-improvement'},
    fr:{title:'La Dawah et la Purification de Soi',desc:'Un predicateur qui ne se purifie pas corrompt sa dawah. La purification de soi est le fondement de tout effort de dawah reussi. Commencez par vous-meme avant d\'appeler les autres.',quran:'Reussit celui qui la purifie, et echoue celui qui la corrompt',quranRef:'Ash-Shams 91:9-10',action:'Consacrez du temps aujourd\'hui a l\'adoration et a la reflexion sur l\'amelioration de soi'}
  },
  {
    id:31, emoji:'🌍',
    ar:{title:'الدعوة العالمية',desc:'الإسلام رسالة عالمية لا تحدها جغرافيا ولا عرق. الداعية يحمل هذه الرسالة لكل البشر بلا استثناء.',quran:'وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِّلنَّاسِ بَشِيرًا وَنَذِيرًا',quranRef:'سبأ ٣٤: ٢٨',action:'فكّر في طريقة لإيصال رسالة الإسلام لشخص من ثقافة مختلفة'},
    en:{title:'Global Dawah',desc:'Islam is a universal message not limited by geography or ethnicity. The caller carries this message to all humans without exception.',quran:'And We have not sent you except comprehensively to mankind as a bringer of good tidings and a warner',quranRef:'Saba 34:28',action:'Think of a way to convey the message of Islam to someone from a different culture'},
    fr:{title:'La Dawah Mondiale',desc:'L\'Islam est un message universel non limite par la geographie ou l\'ethnie. Le predicateur porte ce message a tous les humains sans exception.',quran:'Et Nous ne t\'avons envoye qu\'a l\'ensemble de l\'humanite comme annonciateur et avertisseur',quranRef:'Saba 34:28',action:'Pensez a une facon de transmettre le message de l\'Islam a quelqu\'un d\'une culture differente'}
  },
  {
    id:32, emoji:'🏠',
    ar:{title:'الدعوة في البيت',desc:'أقرب الناس إليك أولاهم بدعوتك. البيت المسلم الذي يقوم على الذكر والعلم والأخلاق هو أعظم مشروع دعوي.',quran:'وَأْمُرْ أَهْلَكَ بِالصَّلَاةِ وَاصْطَبِرْ عَلَيْهَا',quranRef:'طه ٢٠: ١٣٢',action:'اجلس مع أهل بيتك اليوم وتحدثوا عن قيمة إسلامية واحدة'},
    en:{title:'Dawah at Home',desc:'The closest people to you are the most deserving of your dawah. A Muslim home built on remembrance, knowledge, and ethics is the greatest dawah project.',quran:'And enjoin prayer upon your family and be steadfast therein',quranRef:'Taha 20:132',action:'Sit with your household today and discuss one Islamic value together'},
    fr:{title:'La Dawah a la Maison',desc:'Les personnes les plus proches de vous meritent le plus votre dawah. Un foyer musulman bati sur le rappel, le savoir et l\'ethique est le plus grand projet de dawah.',quran:'Et ordonne la priere a ta famille et persevere',quranRef:'Taha 20:132',action:'Asseyez-vous avec votre famille aujourd\'hui et discutez ensemble d\'une valeur islamique'}
  },
  {
    id:33, emoji:'💬',
    ar:{title:'الحوار لا الجدال',desc:'الدعوة بالحوار الهادئ أنجح بكثير من الجدال والصراخ. الجدال يغلق العقول والحوار يفتحها.',quran:'وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ',quranRef:'النحل ١٦: ١٢٥',action:'حاور شخصاً اليوم بهدوء واحترام في مسألة تهمكما'},
    en:{title:'Dialogue, Not Argument',desc:'Dawah through calm dialogue is far more successful than arguing and shouting. Arguments close minds while dialogue opens them.',quran:'And argue with them in a way that is best',quranRef:'An-Nahl 16:125',action:'Have a calm and respectful dialogue with someone today about a matter of mutual concern'},
    fr:{title:'Le Dialogue, Pas la Dispute',desc:'La dawah par le dialogue calme est bien plus reussie que la dispute et les cris. La dispute ferme les esprits tandis que le dialogue les ouvre.',quran:'Et discute avec eux de la meilleure facon',quranRef:'An-Nahl 16:125',action:'Ayez un dialogue calme et respectueux avec quelqu\'un aujourd\'hui sur un sujet d\'interet commun'}
  },
  {
    id:34, emoji:'🎭',
    ar:{title:'الدعوة بالفن والإبداع',desc:'الفن الراقي والإبداع من أقوى وسائل الدعوة. الشعر والأدب والخط والعمارة الإسلامية كلها أدوات دعوية عبر التاريخ.',quran:'وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا',quranRef:'فصلت ٤١: ٣٣',action:'استخدم موهبتك الإبداعية اليوم في خدمة الدعوة'},
    en:{title:'Dawah Through Art and Creativity',desc:'Refined art and creativity are among the strongest tools of dawah. Poetry, literature, calligraphy, and Islamic architecture are all dawah tools throughout history.',quran:'And who is better in speech than one who calls to God and does righteous deeds',quranRef:'Fussilat 41:33',action:'Use your creative talent today in service of dawah'},
    fr:{title:'La Dawah par l\'Art et la Creativite',desc:'L\'art raffine et la creativite sont parmi les outils de dawah les plus puissants. La poesie, la litterature, la calligraphie et l\'architecture islamique sont tous des outils de dawah a travers l\'histoire.',quran:'Et qui profere plus belle parole que celui qui appelle a Dieu et fait le bien',quranRef:'Fussilat 41:33',action:'Utilisez votre talent creatif aujourd\'hui au service de la dawah'}
  },
  {
    id:35, emoji:'🔄',
    ar:{title:'الدعوة المستمرة',desc:'الدعوة لا تتوقف عند سن معين ولا تقتصر على مكان محدد. ما دمت حياً فأنت داعية بسلوكك وكلمتك وعملك.',quran:'وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ',quranRef:'الحجر ١٥: ٩٩',action:'جدد نيتك الدعوية اليوم — أنت داعية في كل لحظة من حياتك'},
    en:{title:'Continuous Dawah',desc:'Dawah does not stop at a certain age nor is it limited to a specific place. As long as you are alive, you are a caller through your behavior, words, and deeds.',quran:'And worship your Lord until there comes to you the certainty',quranRef:'Al-Hijr 15:99',action:'Renew your dawah intention today — you are a caller in every moment of your life'},
    fr:{title:'La Dawah Continue',desc:'La dawah ne s\'arrete pas a un certain age ni ne se limite a un lieu precis. Tant que vous etes vivant, vous etes un predicateur par votre comportement, vos paroles et vos actes.',quran:'Et adore ton Seigneur jusqu\'a ce que te vienne la certitude',quranRef:'Al-Hijr 15:99',action:'Renouvelez votre intention de dawah aujourd\'hui — vous etes un predicateur a chaque instant de votre vie'}
  },
  {
    id:36, emoji:'🌿',
    ar:{title:'الدعوة والأخلاق',desc:'أعظم وسيلة للدعوة هي الأخلاق الحسنة. النبي ﷺ فتح قلوب الناس بأخلاقه قبل كلامه. خلقك هو دعوتك الأولى.',quran:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',quranRef:'القلم ٦٨: ٤',action:'تعامل اليوم مع كل شخص بأخلاق تعكس جمال الإسلام'},
    en:{title:'Dawah and Ethics',desc:'The greatest tool of dawah is good character. The Prophet opened people\'s hearts with his character before his words. Your character is your first dawah.',quran:'And indeed, you are of a great moral character',quranRef:'Al-Qalam 68:4',action:'Treat everyone today with manners that reflect the beauty of Islam'},
    fr:{title:'La Dawah et l\'Ethique',desc:'Le plus grand outil de la dawah est le bon caractere. Le Prophete a ouvert les coeurs des gens par son caractere avant ses paroles. Votre caractere est votre premiere dawah.',quran:'Et tu es certes d\'un caractere eminent',quranRef:'Al-Qalam 68:4',action:'Traitez chaque personne aujourd\'hui avec des manieres qui refletent la beaute de l\'Islam'}
  },
  {
    id:37, emoji:'📖',
    ar:{title:'الدعوة بالقرآن',desc:'القرآن هو أعظم أداة دعوية. كلام الله يؤثر في القلوب كما لا يؤثر كلام البشر. اجعل القرآن محور دعوتك.',quran:'فَذَكِّرْ بِالْقُرْآنِ مَن يَخَافُ وَعِيدِ',quranRef:'ق ٥٠: ٤٥',action:'شارك آية من القرآن مع شخص اليوم وتحدث عن معناها'},
    en:{title:'Dawah Through the Quran',desc:'The Quran is the greatest tool of dawah. God\'s words affect hearts in ways human words cannot. Make the Quran the center of your calling.',quran:'So remind with the Quran whoever fears My threat',quranRef:'Qaf 50:45',action:'Share a verse from the Quran with someone today and discuss its meaning'},
    fr:{title:'La Dawah par le Coran',desc:'Le Coran est le plus grand outil de dawah. Les paroles de Dieu affectent les coeurs comme les paroles humaines ne le peuvent. Faites du Coran le centre de votre appel.',quran:'Rappelle donc par le Coran quiconque craint Ma menace',quranRef:'Qaf 50:45',action:'Partagez un verset du Coran avec quelqu\'un aujourd\'hui et discutez de son sens'}
  },
  {
    id:38, emoji:'⚡',
    ar:{title:'الدعوة والتحديات المعاصرة',desc:'الدعوة في العصر الحديث تواجه تحديات جديدة: الإلحاد والمادية والتشكيك. الداعية المعاصر يحتاج أدوات جديدة للرد على هذه التحديات.',quran:'بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ',quranRef:'الأنبياء ٢١: ١٨',action:'تعلم اليوم رداً واحداً على شبهة معاصرة من مصدر موثوق'},
    en:{title:'Dawah and Contemporary Challenges',desc:'Dawah in the modern era faces new challenges: atheism, materialism, and skepticism. The contemporary caller needs new tools to respond to these challenges.',quran:'Rather, We dash the truth upon falsehood, and it destroys it',quranRef:'Al-Anbiya 21:18',action:'Learn one response to a contemporary doubt from a reliable source today'},
    fr:{title:'La Dawah et les Defis Contemporains',desc:'La dawah a l\'ere moderne fait face a de nouveaux defis : l\'atheisme, le materialisme et le scepticisme. Le predicateur contemporain a besoin de nouveaux outils pour repondre a ces defis.',quran:'Nous lancons plutot la verite contre le faux et elle le detruit',quranRef:'Al-Anbiya 21:18',action:'Apprenez une reponse a un doute contemporain d\'une source fiable aujourd\'hui'}
  },
  {
    id:39, emoji:'🕌',
    ar:{title:'الدعوة والمسجد',desc:'المسجد هو المركز الطبيعي للدعوة. لكن الدعوة لا تنتهي عند باب المسجد. المسجد منطلق لا محطة نهائية.',quran:'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ',quranRef:'التوبة ٩: ١٨',action:'شارك في نشاط دعوي في مسجدك هذا الأسبوع'},
    en:{title:'Dawah and the Mosque',desc:'The mosque is the natural center for dawah. But dawah does not end at the mosque door. The mosque is a launching point, not a final destination.',quran:'The mosques of God are only to be maintained by those who believe in God and the Last Day',quranRef:'At-Tawbah 9:18',action:'Participate in a dawah activity at your mosque this week'},
    fr:{title:'La Dawah et la Mosquee',desc:'La mosquee est le centre naturel de la dawah. Mais la dawah ne se termine pas a la porte de la mosquee. La mosquee est un point de depart, pas une destination finale.',quran:'Les mosquees de Dieu ne sont peuplees que par ceux qui croient en Dieu et au Jour dernier',quranRef:'At-Tawbah 9:18',action:'Participez a une activite de dawah dans votre mosquee cette semaine'}
  },
  {
    id:40, emoji:'🌟',
    ar:{title:'الداعية المتميز',desc:'الداعية المتميز يجمع بين العلم والعمل، بين الحكمة والشجاعة، بين اللين والحزم. هذا هو النموذج الذي يصنع الأثر.',quran:'وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ',quranRef:'فصلت ٤١: ٣٣',action:'حدد صفة واحدة تريد تطويرها كداعية واعمل على تحسينها اليوم'},
    en:{title:'The Distinguished Caller',desc:'The distinguished caller combines knowledge with action, wisdom with courage, gentleness with firmness. This is the model that creates lasting impact.',quran:'And who is better in speech than one who calls to God and does righteous deeds and says: I am of the Muslims',quranRef:'Fussilat 41:33',action:'Identify one quality you want to develop as a caller and work on improving it today'},
    fr:{title:'Le Predicateur Distingue',desc:'Le predicateur distingue combine le savoir avec l\'action, la sagesse avec le courage, la douceur avec la fermete. C\'est le modele qui cree un impact durable.',quran:'Et qui profere plus belle parole que celui qui appelle a Dieu et fait le bien et dit : Je suis des musulmans',quranRef:'Fussilat 41:33',action:'Identifiez une qualite que vous voulez developper en tant que predicateur et travaillez a l\'ameliorer aujourd\'hui'}
  },
  {
    id:41, emoji:'🌹',
    ar:{title:'الدعوة والرحمة',desc:'الرحمة أساس الدعوة. النبي ﷺ أُرسل رحمة للعالمين لا عذاباً. الداعية الرحيم يفتح القلوب المغلقة.',quran:'فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ',quranRef:'آل عمران ٣: ١٥٩',action:'عامل كل شخص تقابله اليوم بالرحمة واللين حتى من يخالفك'},
    en:{title:'Dawah and Mercy',desc:'Mercy is the foundation of dawah. The Prophet was sent as a mercy to all worlds, not as punishment. A merciful caller opens closed hearts.',quran:'So by mercy from God you were lenient with them. And if you had been rude and harsh in heart, they would have disbanded from around you',quranRef:'Aal Imran 3:159',action:'Treat every person you meet today with mercy and gentleness, even those who disagree with you'},
    fr:{title:'La Dawah et la Misericorde',desc:'La misericorde est le fondement de la dawah. Le Prophete a ete envoye comme misericorde pour tous les mondes. Un predicateur misericordieux ouvre les coeurs fermes.',quran:'C\'est par la misericorde de Dieu que tu as ete doux envers eux. Si tu avais ete rude et dur de coeur, ils se seraient disperses',quranRef:'Aal Imran 3:159',action:'Traitez chaque personne que vous rencontrez aujourd\'hui avec misericorde et douceur'}
  },
  {
    id:42, emoji:'🏆',
    ar:{title:'ثمار الدعوة',desc:'ثمار الدعوة قد لا تظهر فوراً. النبي ﷺ دعا في مكة ١٣ سنة ولم يؤمن إلا القليل. النتائج بيد الله وعليك البذل.',quran:'إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ وَلَٰكِنَّ اللَّهَ يَهْدِي مَن يَشَاءُ',quranRef:'القصص ٢٨: ٥٦',action:'اعمل لله ولا تنتظر النتائج — الهداية بيد الله وحده'},
    en:{title:'Fruits of Dawah',desc:'The fruits of dawah may not appear immediately. The Prophet called in Makkah for 13 years and only a few believed. Results are in God\'s hands; your duty is to strive.',quran:'Indeed, you do not guide whom you like, but God guides whom He wills',quranRef:'Al-Qasas 28:56',action:'Work for God and do not wait for results — guidance is in God\'s hands alone'},
    fr:{title:'Les Fruits de la Dawah',desc:'Les fruits de la dawah peuvent ne pas apparaitre immediatement. Le Prophete a appele a La Mecque pendant 13 ans et seuls quelques-uns ont cru. Les resultats sont entre les mains de Dieu.',quran:'Tu ne guides pas qui tu aimes, mais Dieu guide qui Il veut',quranRef:'Al-Qasas 28:56',action:'Travaillez pour Dieu et n\'attendez pas les resultats — la guidance est entre les mains de Dieu seul'}
  },
  {
    id:44, emoji:'🏫',
    ar:{title:'الدعوة في مكان العمل',desc:'مكان العمل ميدان دعوي كبير. سلوكك المهني وأمانتك وإتقانك للعمل أبلغ دعوة من ألف محاضرة.',quran:'إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَن يُتْقِنَهُ',quranRef:'حديث شريف',action:'أتقن عملك اليوم واجعله شاهداً على أخلاق المسلم'},
    en:{title:'Dawah in the Workplace',desc:'The workplace is a major dawah field. Your professional conduct, trustworthiness, and work excellence are a more eloquent dawah than a thousand lectures.',quran:'Indeed God loves that when one of you does a job, they perfect it',quranRef:'Prophetic hadith',action:'Perfect your work today and make it a testimony to Muslim ethics'},
    fr:{title:'La Dawah sur le Lieu de Travail',desc:'Le lieu de travail est un grand terrain de dawah. Votre conduite professionnelle, votre fidelite et votre excellence au travail sont une dawah plus eloquente que mille conferences.',quran:'Dieu aime que lorsque l\'un de vous fait un travail, il le perfectionne',quranRef:'Hadith prophetique',action:'Perfectionnez votre travail aujourd\'hui et faites-en un temoignage de l\'ethique musulmane'}
  },
  {
    id:45, emoji:'🌈',
    ar:{title:'الدعوة والتنوع',desc:'الأمة الإسلامية متنوعة في ثقافاتها ولغاتها. الداعية الحكيم يحترم هذا التنوع ويرى فيه قوة لا ضعفاً.',quran:'وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ',quranRef:'الروم ٣٠: ٢٢',action:'تعرف على شخص من ثقافة مختلفة اليوم وشاركه شيئاً عن الإسلام'},
    en:{title:'Dawah and Diversity',desc:'The Muslim Ummah is diverse in its cultures and languages. A wise caller respects this diversity and sees it as a strength, not a weakness.',quran:'And among His signs is the creation of the heavens and the earth and the diversity of your languages and your colors',quranRef:'Ar-Rum 30:22',action:'Meet someone from a different culture today and share something about Islam with them'},
    fr:{title:'La Dawah et la Diversite',desc:'La Oumma musulmane est diversifiee dans ses cultures et ses langues. Un predicateur sage respecte cette diversite et y voit une force, pas une faiblesse.',quran:'Et parmi Ses signes, la creation des cieux et de la terre et la diversite de vos langues et de vos couleurs',quranRef:'Ar-Rum 30:22',action:'Rencontrez quelqu\'un d\'une culture differente aujourd\'hui et partagez quelque chose sur l\'Islam'}
  },
  {
    id:43, emoji:'📱',
    ar:{title:'الدعوة الرقمية',desc:'العالم الرقمي أصبح ميداناً رئيسياً للدعوة. مقطع فيديو قصير أو تغريدة حكيمة قد تغيّر حياة إنسان. استثمر الوسائل الحديثة.',quran:'وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ',quranRef:'عبس ٨٠: ٧',action:'أنشئ محتوى دعوياً رقمياً قصيراً وشاركه مع من حولك'},
    en:{title:'Digital Dawah',desc:'The digital world has become a major arena for dawah. A short video or a wise tweet can change a person\'s life. Invest in modern tools.',quran:'But what would make you perceive that perhaps he might be purified',quranRef:'Abasa 80:7',action:'Create a short digital dawah content piece and share it with those around you'},
    fr:{title:'La Dawah Numerique',desc:'Le monde numerique est devenu un terrain majeur pour la dawah. Une courte video ou un tweet sage peut changer la vie d\'une personne. Investissez dans les outils modernes.',quran:'Qui te dit : peut-etre se purifiera-t-il',quranRef:'Abasa 80:7',action:'Creez un court contenu de dawah numerique et partagez-le avec votre entourage'}
  }
];

// ═══════════════ WISDOM DATA ═══════════════
const WISDOM_DATA = [
  {emoji:'🎓',ar:{title:'التواضع',problem:'الداعية المتكبر ينفّر الناس',solution:'تواضع كما تواضع النبي — كان يخصف نعله ويخدم أهله'},en:{title:'Humility',problem:'An arrogant caller repels people',solution:'Be humble as the Prophet was — he mended his own shoes and served his family'},fr:{title:'L\'Humilite',problem:'Un predicateur arrogant repousse les gens',solution:'Soyez humble comme le Prophete — il reparait ses chaussures et servait sa famille'}},
  {emoji:'👂',ar:{title:'حسن الاستماع',problem:'الداعية الذي لا يستمع لا يُسمع',solution:'استمع بقلبك قبل أذنيك — الناس يحبون من يسمعهم'},en:{title:'Good Listening',problem:'A caller who does not listen will not be heard',solution:'Listen with your heart before your ears — people love those who hear them'},fr:{title:'L\'Ecoute Active',problem:'Un predicateur qui n\'ecoute pas ne sera pas ecoute',solution:'Ecoutez avec votre coeur — les gens aiment ceux qui les ecoutent'}},
  {emoji:'😊',ar:{title:'البشاشة',problem:'العبوس في وجه الناس يبعدهم عن الدين',solution:'تبسمك في وجه أخيك صدقة — الابتسامة مفتاح القلوب'},en:{title:'Cheerfulness',problem:'Frowning at people pushes them away from religion',solution:'Your smile at your brother is charity — a smile is the key to hearts'},fr:{title:'La Jovialite',problem:'Froncer les sourcils devant les gens les eloigne de la religion',solution:'Votre sourire a votre frere est une aumone — le sourire est la cle des coeurs'}},
  {emoji:'🕰️',ar:{title:'اختيار الوقت',problem:'النصيحة في الوقت الخطأ تأتي بنتائج عكسية',solution:'كان النبي يتخوّل أصحابه بالموعظة — يختار الوقت المناسب'},en:{title:'Choosing the Right Time',problem:'Advice at the wrong time backfires',solution:'The Prophet used to choose the right moments for his companions\' counsel'},fr:{title:'Choisir le Bon Moment',problem:'Un conseil au mauvais moment peut avoir l\'effet inverse',solution:'Le Prophete choisissait les bons moments pour conseiller ses compagnons'}},
  {emoji:'📖',ar:{title:'معرفة القرآن',problem:'الداعية الذي لا يعرف القرآن جيداً يقع في أخطاء',solution:'اجعل القرآن رفيقك اليومي — تلاوة وتدبراً وحفظاً'},en:{title:'Knowing the Quran',problem:'A caller who doesn\'t know the Quran well makes errors',solution:'Make the Quran your daily companion — recitation, reflection, and memorization'},fr:{title:'Connaitre le Coran',problem:'Un predicateur qui ne connait pas bien le Coran fait des erreurs',solution:'Faites du Coran votre compagnon quotidien — recitation, reflexion et memorisation'}},
  {emoji:'🤝',ar:{title:'احترام الاختلاف',problem:'رفض كل اختلاف يحوّل الدعوة إلى صدام',solution:'تعلم فقه الاختلاف — ليس كل خلاف يستوجب القطيعة'},en:{title:'Respecting Differences',problem:'Rejecting all differences turns dawah into confrontation',solution:'Learn the jurisprudence of disagreement — not every difference requires severance'},fr:{title:'Respecter les Differences',problem:'Rejeter toute difference transforme la dawah en confrontation',solution:'Apprenez la jurisprudence du desaccord — pas toute difference ne necessite la rupture'}},
  {emoji:'🌟',ar:{title:'الأمل في الناس',problem:'اليأس من هداية الناس يقتل الدعوة',solution:'لا تيأس من أحد — أبو سفيان عدو الإسلام أصبح صحابياً'},en:{title:'Hope in People',problem:'Despair of guiding people kills dawah',solution:'Never despair of anyone — Abu Sufyan, Islam\'s enemy, became a companion'},fr:{title:'L\'Espoir en les Gens',problem:'Desesperer de guider les gens tue la dawah',solution:'Ne desesperez de personne — Abou Soufyan, ennemi de l\'Islam, est devenu compagnon'}},
  {emoji:'🎯',ar:{title:'وضوح الهدف',problem:'الداعية بلا هدف واضح يضيع جهده',solution:'حدد هدفك من كل حوار ومن كل نشاط دعوي'},en:{title:'Clarity of Purpose',problem:'A caller without a clear goal wastes their effort',solution:'Define your goal for every conversation and every dawah activity'},fr:{title:'La Clarte de l\'Objectif',problem:'Un predicateur sans objectif clair gaspille ses efforts',solution:'Definissez votre objectif pour chaque conversation et activite de dawah'}},
  {emoji:'💪',ar:{title:'الشجاعة في الحق',problem:'كثير من الدعاة يخافون قول الحق خشية الناس',solution:'الخوف من الله أولى من الخوف من الناس — قل الحق ولو كان مراً'},en:{title:'Courage in Truth',problem:'Many callers fear speaking the truth out of fear of people',solution:'Fearing God takes priority over fearing people — speak the truth even if bitter'},fr:{title:'Le Courage dans la Verite',problem:'Beaucoup de predicateurs craignent de dire la verite par peur des gens',solution:'Craindre Dieu est prioritaire sur craindre les gens — dites la verite meme si elle est amere'}},
  {emoji:'🌱',ar:{title:'التجديد في الدعوة',problem:'تكرار نفس الأساليب القديمة يُنفّر الشباب',solution:'استخدم وسائل العصر في الدعوة مع الحفاظ على ثوابت الدين'},en:{title:'Renewal in Dawah',problem:'Repeating the same old methods repels young people',solution:'Use modern means in dawah while preserving the constants of the religion'},fr:{title:'Le Renouveau dans la Dawah',problem:'Repeter les memes anciennes methodes repousse les jeunes',solution:'Utilisez les moyens modernes dans la dawah tout en preservant les constantes de la religion'}},
  {emoji:'🤝',ar:{title:'التعاون بين الدعاة',problem:'التنافس بين الدعاة يضعف الدعوة ويشتت الجهود',solution:'التعاون على البر والتقوى أصل من أصول العمل الدعوي'},en:{title:'Cooperation Among Callers',problem:'Competition among callers weakens dawah and scatters efforts',solution:'Cooperation in righteousness and piety is a fundamental principle of dawah work'},fr:{title:'La Cooperation entre Predicateurs',problem:'La competition entre predicateurs affaiblit la dawah et disperse les efforts',solution:'La cooperation dans la piete et la vertu est un principe fondamental du travail de dawah'}},
  {emoji:'❤️',ar:{title:'حب الخير للناس',problem:'البعض يدعو بتعالٍ ويشعر بأنه أفضل من الناس',solution:'الداعية الحقيقي يحب الخير لكل الناس — لا يحب أن يهلك أحد'},en:{title:'Wishing Good for All',problem:'Some preach with arrogance and feel they are better than others',solution:'A true caller wishes good for all people — they do not want anyone to perish'},fr:{title:'Souhaiter le Bien pour Tous',problem:'Certains prechent avec arrogance et se sentent superieurs aux autres',solution:'Un vrai predicateur souhaite le bien a tous — il ne veut que personne ne perisse'}},
  {emoji:'🔄',ar:{title:'المراجعة والتقويم',problem:'الداعية الذي لا يراجع نفسه يكرر أخطاءه',solution:'خصص وقتاً أسبوعياً لمراجعة أدائك الدعوي وتصحيح مسارك'},en:{title:'Review and Evaluation',problem:'A caller who does not review themselves repeats their mistakes',solution:'Dedicate weekly time to review your dawah performance and correct your course'},fr:{title:'La Revision et l\'Evaluation',problem:'Un predicateur qui ne se remet pas en question repete ses erreurs',solution:'Consacrez un temps hebdomadaire a evaluer votre performance de dawah et corriger votre trajectoire'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'🌅',ar:{label:'صلاة الفجر في وقتها',source:'من الكتاب: العبادة زاد الداعية'},en:{label:'Pray Fajr on time',source:'From the book: Worship fuels the caller'},fr:{label:'Prier Fajr a l\'heure',source:'Du livre : L\'adoration nourrit le predicateur'}},
  {emoji:'📖',ar:{label:'قراءة ورد من القرآن',source:'من الكتاب: معرفة القرآن'},en:{label:'Read a portion of Quran',source:'From the book: Knowing the Quran'},fr:{label:'Lire une portion du Coran',source:'Du livre : Connaitre le Coran'}},
  {emoji:'📚',ar:{label:'قراءة صفحة من كتاب علمي',source:'من الكتاب: العلم قبل الدعوة'},en:{label:'Read a page from a scholarly book',source:'From the book: Knowledge before dawah'},fr:{label:'Lire une page d\'un livre de savoir',source:'Du livre : Le savoir avant la dawah'}},
  {emoji:'😊',ar:{label:'ابتسم في وجه ٣ أشخاص',source:'من الكتاب: البشاشة'},en:{label:'Smile at 3 people',source:'From the book: Cheerfulness'},fr:{label:'Souriez a 3 personnes',source:'Du livre : La jovialite'}},
  {emoji:'💬',ar:{label:'شارك حكمة إسلامية مع أحد',source:'من الكتاب: الدعوة رسالة سلام'},en:{label:'Share an Islamic wisdom with someone',source:'From the book: Dawah is a message of peace'},fr:{label:'Partagez une sagesse islamique',source:'Du livre : La dawah est un message de paix'}},
  {emoji:'🤲',ar:{label:'ادعُ لشخص بالهداية',source:'من الكتاب: حب الخير للناس'},en:{label:'Pray for someone\'s guidance',source:'From the book: Wishing good for others'},fr:{label:'Priez pour la guidance de quelqu\'un',source:'Du livre : Souhaiter le bien aux autres'}},
  {emoji:'👂',ar:{label:'استمع بإنصات لشخص يحتاجك',source:'من الكتاب: حسن الاستماع'},en:{label:'Listen attentively to someone in need',source:'From the book: Good listening'},fr:{label:'Ecoutez attentivement quelqu\'un dans le besoin',source:'Du livre : L\'ecoute active'}},
  {emoji:'🌙',ar:{label:'صلِّ ركعتي قيام الليل',source:'من الكتاب: العبادة زاد الداعية'},en:{label:'Pray 2 units of night prayer',source:'From the book: Worship fuels the caller'},fr:{label:'Priez 2 unites de priere nocturne',source:'Du livre : L\'adoration nourrit le predicateur'}},
  {emoji:'💬',ar:{label:'شارك فكرة إسلامية على وسائل التواصل',source:'من الكتاب: وسائل الدعوة الحديثة'},en:{label:'Share an Islamic idea on social media',source:'From the book: Modern dawah tools'},fr:{label:'Partagez une idee islamique sur les reseaux sociaux',source:'Du livre : Les outils modernes de la dawah'}},
  {emoji:'🤝',ar:{label:'صالح شخصاً مختلفاً معك',source:'من الكتاب: احترام الاختلاف'},en:{label:'Reconcile with someone you disagree with',source:'From the book: Respecting differences'},fr:{label:'Reconciliez-vous avec quelqu\'un avec qui vous etes en desaccord',source:'Du livre : Respecter les differences'}},
  {emoji:'🎯',ar:{label:'حدد هدفاً دعوياً لهذا الأسبوع',source:'من الكتاب: وضوح الهدف'},en:{label:'Set a dawah goal for this week',source:'From the book: Clarity of purpose'},fr:{label:'Fixez un objectif de dawah pour cette semaine',source:'Du livre : La clarte de l\'objectif'}},
  {emoji:'💪',ar:{label:'قل كلمة حق في موقف صعب',source:'من الكتاب: الشجاعة في الحق'},en:{label:'Speak a word of truth in a difficult situation',source:'From the book: Courage in truth'},fr:{label:'Dites un mot de verite dans une situation difficile',source:'Du livre : Le courage dans la verite'}},
  {emoji:'❤️',ar:{label:'ادعُ لشخص لا يعرفك بالخير',source:'من الكتاب: حب الخير للناس'},en:{label:'Pray for a stranger\'s wellbeing',source:'From the book: Wishing good for all'},fr:{label:'Priez pour le bien d\'un inconnu',source:'Du livre : Souhaiter le bien pour tous'}},
  {emoji:'🌍',ar:{label:'تعلم عن ثقافة جديدة لتوسيع دعوتك',source:'من الكتاب: الدعوة العالمية'},en:{label:'Learn about a new culture to expand your dawah',source:'From the book: Global dawah'},fr:{label:'Apprenez une nouvelle culture pour elargir votre dawah',source:'Du livre : La dawah mondiale'}},
  {emoji:'📱',ar:{label:'أنشئ محتوى دعوياً رقمياً',source:'من الكتاب: الدعوة الرقمية'},en:{label:'Create digital dawah content',source:'From the book: Digital dawah'},fr:{label:'Creez du contenu de dawah numerique',source:'Du livre : La dawah numerique'}},
  {emoji:'🌹',ar:{label:'عامل شخصاً صعباً بالرحمة واللين',source:'من الكتاب: الدعوة والرحمة'},en:{label:'Treat a difficult person with mercy and gentleness',source:'From the book: Dawah and mercy'},fr:{label:'Traitez une personne difficile avec misericorde et douceur',source:'Du livre : La dawah et la misericorde'}},
  {emoji:'🧒',ar:{label:'تحدث مع شاب عن الإسلام بأسلوب عصري',source:'من الكتاب: الدعوة والشباب'},en:{label:'Talk to a young person about Islam in a modern way',source:'From the book: Dawah and youth'},fr:{label:'Parlez a un jeune de l\'Islam de maniere moderne',source:'Du livre : La dawah et la jeunesse'}},
  {emoji:'🔄',ar:{label:'راجع أداءك الدعوي هذا الأسبوع',source:'من الكتاب: المراجعة والتقويم'},en:{label:'Review your dawah performance this week',source:'From the book: Review and evaluation'},fr:{label:'Evaluez votre performance de dawah cette semaine',source:'Du livre : La revision et l\'evaluation'}},
  {emoji:'📖',ar:{label:'شارك آية قرآنية مع شخص وناقش معناها',source:'من الكتاب: الدعوة بالقرآن'},en:{label:'Share a Quranic verse with someone and discuss its meaning',source:'From the book: Dawah through the Quran'},fr:{label:'Partagez un verset coranique avec quelqu\'un et discutez de son sens',source:'Du livre : La dawah par le Coran'}},
  {emoji:'🏫',ar:{label:'أتقن عملك اليوم كدعوة عملية',source:'من الكتاب: الدعوة في مكان العمل'},en:{label:'Perfect your work today as practical dawah',source:'From the book: Dawah in the workplace'},fr:{label:'Perfectionnez votre travail aujourd\'hui comme dawah pratique',source:'Du livre : La dawah sur le lieu de travail'}},
  {emoji:'🌈',ar:{label:'تعرف على شخص من خلفية مختلفة',source:'من الكتاب: الدعوة والتنوع'},en:{label:'Meet someone from a different background',source:'From the book: Dawah and diversity'},fr:{label:'Rencontrez quelqu\'un d\'un milieu different',source:'Du livre : La dawah et la diversite'}},
  {emoji:'🌟',ar:{label:'طوّر مهارة دعوية جديدة اليوم',source:'من الكتاب: الداعية المتميز'},en:{label:'Develop a new dawah skill today',source:'From the book: The distinguished caller'},fr:{label:'Developpez une nouvelle competence de dawah aujourd\'hui',source:'Du livre : Le predicateur distingue'}},
  {emoji:'🤲',ar:{label:'ادعُ لنفسك بالثبات على الدعوة',source:'من الكتاب: الدعوة والدعاء'},en:{label:'Pray for yourself for steadfastness in dawah',source:'From the book: Dawah and supplication'},fr:{label:'Priez pour vous-meme pour la constance dans la dawah',source:'Du livre : La dawah et l\'invocation'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تراجع نيتك قبل أن تنصح أحداً؟',en:'Do you check your intention before advising someone?',fr:'Verifiez-vous votre intention avant de conseiller quelqu\'un ?'},
  {ar:'هل تفقد صبرك عندما لا يقبل الناس نصيحتك؟',en:'Do you lose patience when people reject your advice?',fr:'Perdez-vous patience quand les gens rejettent votre conseil ?'},
  {ar:'هل تستمع للآخرين أكثر مما تتكلم؟',en:'Do you listen to others more than you speak?',fr:'Ecoutez-vous les autres plus que vous ne parlez ?'},
  {ar:'هل تشعر بالتفوق على من تنصحهم؟',en:'Do you feel superior to those you advise?',fr:'Vous sentez-vous superieur a ceux que vous conseillez ?'},
  {ar:'هل تطبق ما تدعو إليه في حياتك؟',en:'Do you practice what you preach in your life?',fr:'Pratiquez-vous ce que vous prechez dans votre vie ?'},
  {ar:'هل تدعو لمن تنصحهم بالهداية؟',en:'Do you pray for the guidance of those you advise?',fr:'Priez-vous pour la guidance de ceux que vous conseillez ?'},
  {ar:'هل تعتمد على العلم الصحيح في دعوتك؟',en:'Do you rely on sound knowledge in your dawah?',fr:'Vous appuyez-vous sur un savoir solide dans votre dawah ?'},
  {ar:'هل تقبل الاختلاف بصدر رحب؟',en:'Do you accept disagreement with an open heart?',fr:'Acceptez-vous le desaccord avec un coeur ouvert ?'},
  {ar:'هل تبتسم وتلين في حوارك مع الناس؟',en:'Do you smile and show gentleness in your conversations?',fr:'Souriez-vous et montrez-vous de la douceur dans vos conversations ?'},
  {ar:'هل تتوكل على الله في نتائج دعوتك؟',en:'Do you trust God with the results of your dawah?',fr:'Faites-vous confiance a Dieu pour les resultats de votre dawah ?'},
  {ar:'هل تبدأ دعوتك بأهلك وأسرتك قبل الآخرين؟',en:'Do you start your dawah with your family before others?',fr:'Commencez-vous votre dawah par votre famille avant les autres ?'},
  {ar:'هل تصبر على رفض الناس لنصيحتك دون أن تيأس؟',en:'Do you patiently endure people rejecting your advice without despair?',fr:'Supportez-vous patiemment le rejet des gens sans desespoir ?'},
  {ar:'هل تراجع إخلاص نيتك قبل كل عمل دعوي؟',en:'Do you review the sincerity of your intention before every dawah activity?',fr:'Revisez-vous la sincerite de votre intention avant chaque activite de dawah ?'},
  {ar:'هل تتعامل مع التحديات المعاصرة بعلم وحكمة في دعوتك؟',en:'Do you address contemporary challenges with knowledge and wisdom in your dawah?',fr:'Abordez-vous les defis contemporains avec savoir et sagesse dans votre dawah ?'},
  {ar:'هل تشارك في أنشطة المسجد الدعوية بانتظام؟',en:'Do you regularly participate in your mosque\'s dawah activities?',fr:'Participez-vous regulierement aux activites de dawah de votre mosquee ?'},
  {ar:'هل تدعو بالقدوة في سلوكك اليومي أم بالكلام فقط؟',en:'Do you call through your daily behavior or only through words?',fr:'Appelez-vous par votre comportement quotidien ou seulement par les paroles ?'},
  {ar:'هل تستخدم وسائل التواصل الحديثة في نشر رسالة الإسلام؟',en:'Do you use modern social media to spread the message of Islam?',fr:'Utilisez-vous les reseaux sociaux modernes pour repandre le message de l\'Islam ?'},
  {ar:'هل تسعى لتطوير مهاراتك الدعوية باستمرار؟',en:'Do you continuously seek to develop your dawah skills?',fr:'Cherchez-vous continuellement a developper vos competences de dawah ?'},
  {ar:'هل تعامل المخالفين لك بالرحمة واللين؟',en:'Do you treat those who disagree with you with mercy and gentleness?',fr:'Traitez-vous ceux qui ne sont pas d\'accord avec vous avec misericorde et douceur ?'},
  {ar:'هل تعلّم أبناءك أساسيات الدعوة والأخلاق؟',en:'Do you teach your children the basics of dawah and ethics?',fr:'Enseignez-vous a vos enfants les bases de la dawah et de l\'ethique ?'},
  {ar:'هل تتعاون مع دعاة آخرين لتقوية جهود الدعوة؟',en:'Do you cooperate with other callers to strengthen dawah efforts?',fr:'Cooperez-vous avec d\'autres predicateurs pour renforcer les efforts de dawah ?'},
  {ar:'هل تستخدم المحتوى الرقمي في نشر رسالة الخير؟',en:'Do you use digital content to spread the message of goodness?',fr:'Utilisez-vous le contenu numerique pour repandre le message du bien ?'},
  {ar:'هل تدعو في مكان عملك بسلوكك المهني وأمانتك؟',en:'Do you do dawah at your workplace through your professional conduct and trustworthiness?',fr:'Faites-vous la dawah sur votre lieu de travail par votre conduite professionnelle et votre fidelite ?'},
  {ar:'هل تحترم التنوع الثقافي وتراه قوة في الدعوة؟',en:'Do you respect cultural diversity and see it as a strength in dawah?',fr:'Respectez-vous la diversite culturelle et la voyez-vous comme une force dans la dawah ?'},
  {ar:'هل تجدد نيتك الدعوية بانتظام لتبقى مخلصاً لله؟',en:'Do you regularly renew your dawah intention to remain sincere to God?',fr:'Renouvelez-vous regulierement votre intention de dawah pour rester sincere envers Dieu ?'},
  {ar:'هل تدعو بأسلوب يناسب المخاطَب لا بأسلوب واحد للجميع؟',en:'Do you call with a style that suits the addressee rather than one style for all?',fr:'Appelez-vous avec un style adapte a l\'interlocuteur plutot qu\'un seul style pour tous ?'},
  {ar:'هل تدعو في مكان عملك بأخلاقك وأمانتك المهنية؟',en:'Do you do dawah at your workplace through your ethics and professional trustworthiness?',fr:'Faites-vous la dawah sur votre lieu de travail par votre ethique et votre integrite professionnelle ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء طلب الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وثبتني على الطريق المستقيم'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and keep me on the straight path'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et garde-moi sur le droit chemin'}},
  {ar:{label:'دعاء الفتح',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ',tr:'اللهم ارزقني الحكمة والرحمة في الدعوة'},en:{label:'Dua for Wisdom',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ',tr:'O God, bestow upon me Your wisdom and spread over me Your mercy'},fr:{label:'Dua pour la Sagesse',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ',tr:'O Dieu, accorde-moi Ta sagesse et repands sur moi Ta misericorde'}},
  {ar:{label:'دعاء التوفيق',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'رب يسر لي أمر الدعوة والبلاغ'},en:{label:'Dua for Facilitation',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand my chest and ease my task'},fr:{label:'Dua pour la Facilitation',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'Mon Seigneur, ouvre-moi ma poitrine et facilite-moi ma tache'}},
  {ar:{label:'دعاء البلاغة',text:'وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',tr:'رب اجعل كلامي مفهوماً ومؤثراً'},en:{label:'Dua for Eloquence',text:'وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',tr:'And untie the knot from my tongue so they may understand my speech'},fr:{label:'Dua pour l\'Eloquence',text:'وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',tr:'Et denoue le noeud de ma langue afin qu\'ils comprennent ma parole'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'اللهم اصبرنا وثبتنا في طريق الدعوة'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, deverse sur nous la patience et affermis nos pas'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'الله يكفينا وهو خير من نتوكل عليه'},en:{label:'Dua for Trust',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'God is sufficient for us and He is the best disposer of affairs'},fr:{label:'Dua pour la Confiance',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Dieu nous suffit et Il est le meilleur gerant des affaires'}},
  {ar:{label:'دعاء الإخلاص',text:'اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا',tr:'اللهم اجعل كل أعمالي خالصة لوجهك'},en:{label:'Dua for Sincerity',text:'اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا',tr:'O God, make all my deeds righteous and sincerely for Your sake'},fr:{label:'Dua pour la Sincerite',text:'اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا',tr:'O Dieu, rends toutes mes actions justes et sinceres pour Ton visage'}},
  {ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا',tr:'اللهم نوّر قلبي ولساني في الدعوة'},en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا',tr:'O God, place light in my heart and light on my tongue'},fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي لِسَانِي نُورًا',tr:'O Dieu, mets de la lumiere dans mon coeur et sur ma langue'}},
  {ar:{label:'دعاء الثبات في الدعوة',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',tr:'اللهم ثبتنا على طريق الدعوة ولا تحرمنا فضلك'},en:{label:'Dua for Steadfastness in Dawah',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us and grant us mercy from Yourself'},fr:{label:'Dua pour la Constance dans la Dawah',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',tr:'Notre Seigneur, ne devie pas nos coeurs apres nous avoir guides et accorde-nous une misericorde de Ta part'}},
  {ar:{label:'دعاء هداية الناس',text:'اللَّهُمَّ اهْدِ قَوْمِي فَإِنَّهُمْ لَا يَعْلَمُونَ',tr:'اللهم اهد الناس إلى الحق فإنهم لا يعلمون'},en:{label:'Dua for People\'s Guidance',text:'اللَّهُمَّ اهْدِ قَوْمِي فَإِنَّهُمْ لَا يَعْلَمُونَ',tr:'O God, guide my people for they do not know'},fr:{label:'Dua pour la Guidance des Gens',text:'اللَّهُمَّ اهْدِ قَوْمِي فَإِنَّهُمْ لَا يَعْلَمُونَ',tr:'O Dieu, guide mon peuple car ils ne savent pas'}},
  {ar:{label:'دعاء القبول',text:'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',tr:'ربنا تقبل منا إنك أنت السميع العليم'},en:{label:'Dua for Acceptance',text:'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',tr:'Our Lord, accept from us. Indeed, You are the Hearing, the Knowing'},fr:{label:'Dua pour l\'Acceptation',text:'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',tr:'Notre Seigneur, accepte de nous. Tu es certes l\'Audient, l\'Omniscient'}},
  {ar:{label:'دعاء حسن الخاتمة',text:'اللَّهُمَّ اخْتِمْ لَنَا بِخَاتِمَةِ السَّعَادَةِ أَجْمَعِينَ',tr:'اللهم اجعل خاتمتنا خاتمة سعادة'},en:{label:'Dua for a Good End',text:'اللَّهُمَّ اخْتِمْ لَنَا بِخَاتِمَةِ السَّعَادَةِ أَجْمَعِينَ',tr:'O God, seal our lives with a happy ending for all of us'},fr:{label:'Dua pour une Bonne Fin',text:'اللَّهُمَّ اخْتِمْ لَنَا بِخَاتِمَةِ السَّعَادَةِ أَجْمَعِينَ',tr:'O Dieu, scelle nos vies avec une fin heureuse pour nous tous'}},
  {ar:{label:'دعاء الرحمة',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'ربي ارحم والديّ كما ربياني صغيراً'},en:{label:'Dua for Mercy',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'My Lord, have mercy upon them as they brought me up when I was small'},fr:{label:'Dua pour la Misericorde',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'Mon Seigneur, fais-leur misericorde comme ils m\'ont eleve quand j\'etais petit'}},
  {ar:{label:'دعاء الثبات',text:'اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'اللهم يا مقلب القلوب ثبت قلبي على دينك'},en:{label:'Dua for Firm Heart',text:'اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O God, Turner of hearts, keep my heart firm upon Your religion'},fr:{label:'Dua pour un Coeur Ferme',text:'اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Dieu, Retourneur des coeurs, affermis mon coeur sur Ta religion'}},
  {ar:{label:'دعاء التيسير',text:'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا',tr:'اللهم لا سهل إلا ما جعلته سهلاً'},en:{label:'Dua for Ease',text:'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا',tr:'O God, nothing is easy except what You make easy'},fr:{label:'Dua pour la Facilite',text:'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا',tr:'O Dieu, rien n\'est facile sauf ce que Tu rends facile'}},
  {ar:{label:'دعاء النصر للدعوة',text:'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ',tr:'ربنا واجعلنا مسلمين لك ومن ذريتنا أمة مسلمة لك'},en:{label:'Dua for Dawah Victory',text:'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ',tr:'Our Lord, make us both Muslims submitting to You, and from our descendants a Muslim nation'},fr:{label:'Dua pour la Victoire de la Dawah',text:'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ',tr:'Notre Seigneur, fais de nous des soumis a Toi et de notre descendance une communaute soumise a Toi'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('ma-lang') || 'ar';
let theme = localStorage.getItem('ma-theme') || 'earth';
const themes = ['earth','night','oasis'];
const themeIcons = ['🌿','🌙','🏜️'];
const themeNames = {earth:'🌿 Earth',night:'🌙 Night',oasis:'🏜️ Oasis'};
let currentCardIdx = 0;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initSplash();
  initTabs();
  initScrollTop();
  renderHome();
  renderCards();
  renderWisdom();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    const features = T[lang].splashFeatures;
    featuresEl.innerHTML = features.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('ma-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabWisdom', t.tabWisdom);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('wisdomTitle', t.wisdomTitle); set('wisdomDesc', t.wisdomDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderWisdom(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('ma-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'🕌',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة دعوية':lang==='fr'?'20 cartes de dawah':'20 dawah cards'},
    {icon:'🎓',tab:'wisdom',title:t.tabWisdom,desc:lang==='ar'?'صفات الداعية':lang==='fr'?'Qualites du predicateur':'Caller qualities'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'Le livre':'About the book'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.quran}</div>
            <div class="verse-ref">${d.quranRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('cardsContainer')||{}).innerHTML= searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n📖 ${d.quran}\n\n💡 ${d.action}\n\n— مع الله | With God`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text: text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: WISDOM ═══════════════
function renderWisdom() {
  const t = T[lang];
  (document.getElementById('wisdomContainer')||{}).innerHTML= WISDOM_DATA.map(w => {
    const d = w[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${w.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${lang==='ar'?'😰 المشكلة':lang==='fr'?'😰 Le Probleme':'😰 The Problem'}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${lang==='ar'?'😌 الحل':lang==='fr'?'😌 La Solution':'😌 The Solution'}</span>
        ${d.solution}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('ma-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('ma-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  (document.getElementById('habitsContainer')||{}).innerHTML= HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('ma-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('ma-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('ma-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length;
  const total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('ma-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('ma-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('ma-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#4E342E','#8D6E63','#A1887F','#D7CCC8','#66BB6A','#FFA726','#FFD54F'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-.5)*10});
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  (document.getElementById('quizContainer')||{}).innerHTML= QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  const opts = document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`);
  opts.forEach((o, oi) => { o.classList.toggle('selected', [2,1,0][oi] === val); });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [1, 3];
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '🌟'; title = lang==='ar'?'داعية حكيم!':lang==='fr'?'Predicateur sage !':'Wise Caller!';
    desc = lang==='ar'?'أنت على منهج الأنبياء في الدعوة. استمر وزد من علمك!':lang==='fr'?'Vous suivez la voie des prophetes. Continuez !':'You follow the path of the prophets in dawah. Keep going!';
  } else if (pct >= 50) {
    emoji = '🌿'; title = lang==='ar'?'على الطريق':lang==='fr'?'Sur la bonne voie':'On the Path';
    desc = lang==='ar'?'أنت تسير في الاتجاه الصحيح. راجع بطاقات الدعوة لتطوير أسلوبك.':lang==='fr'?'Vous allez dans la bonne direction. Revoyez les cartes de dawah.':'You\'re heading in the right direction. Review the dawah cards to improve.';
  } else {
    emoji = '📚'; title = lang==='ar'?'ابدأ رحلة التعلم':lang==='fr'?'Commencez a apprendre':'Start Learning';
    desc = lang==='ar'?'الدعوة تحتاج علماً وحكمة. ابدأ بقراءة بطاقات الدعوة.':lang==='fr'?'La dawah necessite savoir et sagesse. Commencez par les cartes.':'Dawah requires knowledge and wisdom. Start with the dawah cards.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${pct}%</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً في الفكر الإسلامي والدعوة. درس في الأزهر، ودرّس في جامعات عربية عديدة. عُرف بالتجديد والاعتدال.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"مع الله — دراسات في الدعوة والداعية" كتاب يتناول فن الدعوة إلى الله وصفات الداعية الناجح. يجمع بين الأصول الشرعية والتجربة العملية، ويركز على الإخلاص والعلم والحكمة والصبر كأركان أساسية في الدعوة.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "مع الله — دراسات في الدعوة والداعية" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, known as "The Literary Preacher." Author of 94+ books on Islamic thought and dawah. Studied at Al-Azhar and taught at various Arab universities. Known for renewal and moderation.',
      bookTitle: 'About the Book',
      bookDesc: '"With God — Studies in Dawah and the Caller" explores the art of calling to God and the qualities of a successful caller. It combines scriptural foundations with practical experience, focusing on sincerity, knowledge, wisdom, and patience as essential pillars of dawah.',
      sourcesTitle: 'Sources',
      sources: ['"With God — Studies in Dawah and the Caller" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres sur la pensee islamique et la dawah. Connu pour le renouveau et la moderation.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Avec Dieu — Etudes sur la Dawah et le Predicateur » explore l\'art d\'appeler a Dieu et les qualites du predicateur accompli. Il combine les fondements scripturaires avec l\'experience pratique, se concentrant sur la sincerite, le savoir, la sagesse et la patience.',
      sourcesTitle: 'Sources',
      sources: ['« Avec Dieu — Etudes sur la Dawah et le Predicateur » — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "مع الله" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة دعوية، ٨ صفات للداعية، تتبع العادات، اختبار ذاتي، ٨ أدعية.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"With God" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 20 dawah cards, 8 caller qualities, habit tracker, self-quiz, 8 duas.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate cards. Press Escape to close panels.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« Avec Dieu » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah Prophetique.'},
      {title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 cartes, 8 qualites, suivi habitudes, quiz, 8 duas.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches pour naviguer. Echap pour fermer les panneaux.'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}


// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 مع الله — الشيخ محمد الغزالي','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ اكتشف كنوز الكتاب'],
    en: ['📖 With God — Sheikh Mohammed Al-Ghazali','🏆 Earn points and badges','🌟 Try the Young Explorer mode','🤲 Remember to make dua','⭐ Discover the book\'s treasures'],
    fr: ['📖 Avec Dieu — Cheikh Mohammed Al-Ghazali','🏆 Gagnez des points et des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas le dua','⭐ Découvrez les trésors du livre']
  };
  const curLang = (typeof lang !== 'undefined' && lang) || document.documentElement.lang || 'ar';
  const items = tips[curLang] || tips.ar;
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  if (!ticker) return;
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// Auto-start ticker
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTicker);
} else {
  renderTicker();
}
