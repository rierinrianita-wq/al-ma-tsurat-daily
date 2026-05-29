export type Dzikr = {
  id: string;
  title: { id: string; en: string };
  arabic: string;
  translation: { id: string; en: string };
  repeat: number;
};

export const morningDzikr: Dzikr[] = [
  {
    id: "m1",
    title: { id: "Isti'adzah", en: "Seeking Refuge" },
    arabic: "أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    translation: {
      id: "Aku berlindung kepada Allah Yang Maha Mendengar lagi Maha Mengetahui dari godaan setan yang terkutuk.",
      en: "I seek refuge in Allah, the All-Hearing, the All-Knowing, from the accursed Satan.",
    },
    repeat: 1,
  },
  {
    id: "m2",
    title: { id: "Surah Al-Fatihah", en: "Surah Al-Fatihah" },
    arabic:
      "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ١ ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ٣ مَٰلِكِ يَوۡمِ ٱلدِّينِ ٤ إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ٥ ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ ٦ صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ ٧",
    translation: {
      id: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Yang menguasai hari pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan. Tunjukilah kami jalan yang lurus. Yaitu jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat.",
      en: "In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of all the worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. You alone we worship and You alone we ask for help. Guide us to the straight path. The path of those upon whom You have bestowed favor, not of those who have evoked anger or those who are astray.",
    },
    repeat: 1,
  },
  {
    id: "m3",
    title: { id: "Al-Baqarah 1-5", en: "Al-Baqarah 1-5" },
    arabic:
      "الٓمٓ ١ ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ ٢ ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ٣ وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ ٤ أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ ٥",
    translation: {
      id: "Alif Laam Miim. Kitab Al-Quran ini tidak ada keraguan padanya, petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang gaib, mendirikan shalat, dan menafkahkan sebagian rezeki yang Kami anugerahkan. Dan mereka yang beriman kepada apa yang diturunkan kepadamu dan apa yang diturunkan sebelummu, serta yakin akan adanya akhirat. Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung.",
      en: "Alif Lam Mim. This is the Book about which there is no doubt, a guidance for those conscious of Allah. Who believe in the unseen, establish prayer, and spend out of what We have provided for them. And who believe in what has been revealed to you and what was revealed before you, and of the Hereafter they are certain. Those are upon guidance from their Lord, and it is those who are the successful.",
    },
    repeat: 1,
  },
  {
    id: "m4",
    title: { id: "Ayat Kursi (Al-Baqarah 255-257)", en: "Ayat Al-Kursi (Al-Baqarah 255-257)" },
    arabic:
      "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَايَئُودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ ۝ لَآ إِكۡرَاهَ فِي ٱلدِّينِۖ قَد تَّبَيَّنَ ٱلرُّشۡدُ مِنَ ٱلۡغَيِّۚ فَمَن يَكۡفُرۡ بِٱلطَّٰغُوتِ وَيُؤۡمِنۢ بِٱللَّهِ فَقَدِ ٱسۡتَمۡسَكَ بِٱلۡعُرۡوَةِ ٱلۡوُثۡقَىٰ لَا ٱنفِصَامَ لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ ۝ ٱللَّهُ وَلِيُّ ٱلَّذِينَ ءَامَنُواْ يُخۡرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِ",
    translation: {
      id: "Allah, tidak ada Tuhan selain Dia, Yang Mahahidup, Yang terus-menerus mengurus makhluk-Nya. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka. Mereka tidak mengetahui sesuatu dari ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dialah Yang Mahatinggi lagi Mahaagung. Tidak ada paksaan dalam agama. Sungguh, jalan yang benar telah jelas dari jalan yang sesat. Barang siapa ingkar kepada tagut dan beriman kepada Allah, maka sungguh dia telah berpegang pada tali yang sangat kuat yang tidak akan putus. Allah Maha Mendengar, Maha Mengetahui. Allah pelindung orang-orang yang beriman. Dia mengeluarkan mereka dari kegelapan kepada cahaya.",
      en: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great. There shall be no compulsion in religion. The right course has become clear from the wrong. So whoever disbelieves in taghut and believes in Allah has grasped the most trustworthy handhold with no break in it. And Allah is Hearing and Knowing. Allah is the ally of those who believe. He brings them out from darkness into the light.",
    },
    repeat: 1,
  },
  {
    id: "m5",
    title: { id: "Al-Baqarah 284-286", en: "Al-Baqarah 284-286" },
    arabic:
      "لِّلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ وَإِن تُبۡدُواْ مَا فِيٓ أَنفُسِكُمۡ أَوۡ تُخۡفُوهُ يُحَاسِبۡكُم بِهِ ٱللَّهُۖ فَيَغۡفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٌ ۝ ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ ۝ لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
    translation: {
      id: "Milik Allah apa yang ada di langit dan apa yang ada di bumi. Jika kamu menyatakan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah memperhitungkannya bagimu. Dia mengampuni siapa yang Dia kehendaki dan mengazab siapa yang Dia kehendaki. Allah Mahakuasa atas segala sesuatu. Rasul beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semua beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. Mereka berkata, 'Kami dengar dan kami taat. Ampunilah kami ya Tuhan kami, dan kepada-Mu tempat kembali.' Allah tidak membebani seseorang melainkan sesuai kesanggupannya. Baginya apa yang diusahakannya dan atasnya apa yang dikerjakannya. Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami salah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tidak sanggup kami memikulnya. Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah pelindung kami, maka tolonglah kami menghadapi orang-orang kafir.",
      en: "To Allah belongs whatever is in the heavens and whatever is in the earth. Whether you show what is within yourselves or conceal it, Allah will bring you to account for it. Then He will forgive whom He wills and punish whom He wills, and Allah is over all things competent. The Messenger has believed in what was revealed to him from his Lord, and so have the believers. All of them have believed in Allah and His angels and His books and His messengers. They say, 'We make no distinction between any of His messengers.' And they say, 'We hear and we obey. Grant us Your forgiveness, our Lord, and to You is the final destination.' Allah does not burden a soul beyond that it can bear. It will have the consequence of what good it has gained, and it will bear the consequence of what evil it has earned. Our Lord, do not impose blame upon us if we forget or make an error. Our Lord, lay not upon us a burden like that which You laid upon those before us. Our Lord, burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
    },
    repeat: 1,
  },
  {
    id: "m6",
    title: { id: "Surah Al-Ikhlas", en: "Surah Al-Ikhlas" },
    arabic:
      "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ قُلۡ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ ۝ لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ ۝ وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ",
    translation: {
      id: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah, Dialah Allah Yang Maha Esa. Allah tempat meminta segala sesuatu. Dia tidak beranak dan tidak diperanakkan. Dan tidak ada sesuatu pun yang setara dengan-Nya.",
      en: "In the name of Allah, the Most Gracious, the Most Merciful. Say, He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.",
    },
    repeat: 3,
  },
  {
    id: "m7",
    title: { id: "Surah Al-Falaq", en: "Surah Al-Falaq" },
    arabic:
      "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    translation: {
      id: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah, Aku berlindung kepada Tuhan yang menguasai subuh. Dari kejahatan makhluk-Nya. Dan dari kejahatan malam apabila telah gelap gulita. Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul. Dan dari kejahatan pendengki bila ia dengki.",
      en: "In the name of Allah, the Most Gracious, the Most Merciful. Say, I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.",
    },
    repeat: 3,
  },
  {
    id: "m8",
    title: { id: "Surah An-Nas", en: "Surah An-Nas" },
    arabic:
      "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝ مَلِكِ ٱلنَّاسِ ۝ إِلَٰهِ ٱلنَّاسِ ۝ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ ۝ ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ ۝ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
    translation: {
      id: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah, Aku berlindung kepada Tuhan manusia. Raja manusia. Sembahan manusia. Dari kejahatan bisikan setan yang bersembunyi. Yang membisikkan kejahatan ke dalam dada manusia. Dari golongan jin dan manusia.",
      en: "In the name of Allah, the Most Gracious, the Most Merciful. Say, I seek refuge in the Lord of mankind. The Sovereign of mankind. The God of mankind. From the evil of the retreating whisperer. Who whispers evil into the breasts of mankind. From among the jinn and mankind.",
    },
    repeat: 3,
  },
  {
    id: "m9",
    title: { id: "Doa Pagi", en: "Morning Supplication" },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لَا شَرِيكَ لَهُ، لَا إِلَهَ إِلَّا هُوَ، وَإِلَيْهِ النُّشُورُ",
    translation: {
      id: "Kami berpagi hari dan berpagi hari pula kerajaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia, dan kepada-Nya tempat kembali.",
      en: "Ours is the morning, and to God belongs the morning. All praise be to God; there is no partner for Him; there is no god but He, and to Him is the final return.",
    },
    repeat: 3,
  },
  {
    id: "m10",
    title: { id: "Fitrah Islam (Pagi)", en: "Fitrah of Islam (Morning)" },
    arabic:
      "أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
    translation: {
      id: "Kami berpagi hari di atas fitrah Islam, di atas kata ikhlasan, di atas agama Nabi kami; Muhammad SAW, dan di atas millah bapak kami Ibrahim yang hanif dan ia bukan termasuk golongan orang-orang yang musyrik.",
      en: "We base our lives on the natural disposition of Islam, on sincerity, on the religion of our Prophet, Muhammad (peace be upon him), and on the faith of our father Abraham, who was upright and did not belong to the ranks of the polytheists.",
    },
    repeat: 3,
  },
  {
    id: "m11",
    title: { id: "Nikmat Pagi", en: "Morning Blessings" },
    arabic:
      "اللَّهُمَّ إِنِّي أَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَةِ",
    translation: {
      id: "Ya Allah, sesungguhnya aku berpagi hari dari-Mu dalam kenikmatan, kesehatan, dan perlindungan. Maka sempurnakanlah untukku kenikmatan, kesehatan, dan perlindungan-Mu itu, di dunia dan akhirat.",
      en: "O Allah, I have begun this day with Your blessings, good health, and protection. So grant me Your blessings, good health, and protection in this world and the hereafter.",
    },
    repeat: 3,
  },
  {
    id: "m12",
    title: { id: "Syukur Atas Nikmat (Pagi)", en: "Gratitude for Blessings (Morning)" },
    arabic:
      "اللَّهُمَّ مَا أَصْبَحَ بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    translation: {
      id: "Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu berpagi hari dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur.",
      en: "O Allah, the blessings that I or any of Your creatures enjoy in the morning come from You alone; You have no partner. To You be all praise and thanks.",
    },
    repeat: 3,
  },
  {
    id: "m13",
    title: { id: "Pujian kepada Allah", en: "Praise to Allah" },
    arabic:
      "يَا رَبِّي لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ",
    translation: {
      id: "Ya Tuhanku, Segala puji bagi-Mu sebagaimana seyogyanya kemuliaan wajah-Mu dan keagungan kekuasaan-Mu.",
      en: "O my Lord, all praise be to You, as befits the glory of Your countenance and the majesty of Your power.",
    },
    repeat: 3,
  },
  {
    id: "m14",
    title: { id: "Ridha dengan Islam", en: "Content with Islam" },
    arabic:
      "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُولًا",
    translation: {
      id: "Aku ridha Allah sebagai Rabb, Islam sebagai agama, dan Muhammad sebagai Rasul.",
      en: "I accept Allah as my Lord, Islam as my religion, and Muhammad as my Prophet.",
    },
    repeat: 3,
  },
  {
    id: "m15",
    title: { id: "Tasbih Agung", en: "Grand Glorification" },
    arabic:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
    translation: {
      id: "Maha Suci Allah dan Segala Puji bagi-Nya, sebanyak bilangan makhluk-Nya, seridha diri-Nya, setimbangan 'arsy-Nya, dan sebanyak tinta dari kata-kata-Nya.",
      en: "Glory be to Allah, and all praise be to Him, as numerous as His creatures, as vast as His will, as weighty as His Throne, and as abundant as the ink of His words.",
    },
    repeat: 3,
  },
  {
    id: "m16",
    title: { id: "Perlindungan Nama Allah", en: "Protection through Allah's Name" },
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation: {
      id: "Dengan nama Allah Yang bersama Nama-Nya sesuatu apa pun tidak akan celaka baik di bumi dan di langit. Dialah Maha Mendengar lagi Maha Mengetahui.",
      en: "In the name of Allah, by whose name nothing on earth or in the heavens can come to harm. He is the All-Hearing, the All-Knowing.",
    },
    repeat: 3,
  },
  {
    id: "m17",
    title: { id: "Berlindung dari Syirik", en: "Refuge from Shirk" },
    arabic:
      "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
    translation: {
      id: "Ya Allah sesungguhnya kami berlindung kepada-Mu dari menyekutukan-Mu dengan sesuatu yang kami ketahui, dan kami memohon ampunan-Mu dari apa-apa yang tidak kami ketahui.",
      en: "O Allah, we seek refuge in You from associating anything with You that we know of, and we ask for Your forgiveness for what we do not know.",
    },
    repeat: 3,
  },
  {
    id: "m18",
    title: { id: "Berlindung dari Keburukan Ciptaan", en: "Refuge from Evil of Creation" },
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    translation: {
      id: "Aku berlindung dengan kalimat Allah yang sempurna dari keburukan apa-apa yang Dia ciptakan.",
      en: "I seek refuge in Allah's perfect words from the evil of all that He has created.",
    },
    repeat: 3,
  },
  {
    id: "m19",
    title: {
      id: "Berlindung dari Kesedihan dan Kelemahan",
      en: "Refuge from Grief and Weakness",
    },
    arabic:
      "اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الهَمِّ وَالْحَزَنِ وَأَعُوْذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ وَالبُخْلِ وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    translation: {
      id: "Ya Allah, aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat pengecut dan bakhil, dan dari lilitan hutang dan kesewenang-wenangan orang.",
      en: "O Allah, I seek refuge in You from anxiety and sorrow, from weakness and laziness, from cowardice and stinginess, and from the burden of debt and the oppression of others.",
    },
    repeat: 3,
  },
  {
    id: "m20",
    title: { id: "Doa Kesehatan", en: "Prayer for Health" },
    arabic:
      "اَللَّهُمَّ عَافِنِي فِي بَدَنِي اَللَّهُمَّ عَافِنِي فِي سَمْعِي اَللَّهُمَّ عَافِنِي فِي بَصَرِي",
    translation: {
      id: "Ya Allah berikanlah kesehatan bagi badanku, bagi pendengaranku, bagi penglihatanku.",
      en: "O God, grant me good health, good hearing, and good eyesight.",
    },
    repeat: 3,
  },
  {
    id: "m21",
    title: {
      id: "Berlindung dari Kekufuran dan Azab Kubur",
      en: "Refuge from Disbelief and Grave Torment",
    },
    arabic:
      "اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ لاَ إِلهَ إِلاَّ أَنْتَ",
    translation: {
      id: "Ya Allah sungguh aku berlindung kepada-Mu dari kekufuran dan kefakiran, Ya Allah sungguh aku berlindung kepada-Mu dari azab kubur, tidak ada Ilah kecuali Engkau.",
      en: "O Allah, I seek refuge in You from disbelief and poverty. O Allah, I seek refuge in You from the torment of the grave. There is no god but You.",
    },
    repeat: 3,
  },
  {
    id: "m22",
    title: { id: "Sayyidul Istighfar", en: "Master of Seeking Forgiveness" },
    arabic:
      "اَللّهُمَّ أَنْتَ رَبِّي لَا إلهَ إِلاَّ أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ",
    translation: {
      id: "Ya Allah, Engkau Tuhanku, tiada Tuhan kecuali Engkau. Engkau ciptakan aku dan aku adalah hamba-Mu. Aku berada di atas janji-Mu, semampuku. Aku berlindung kepada-Mu dari keburukan perbuatanku. Aku mengakui banyaknya nikmat yang Engkau anugerahkan kepadaku dan aku mengakui dosa-dosaku, maka ampunilah aku. Karena sesungguhnya tiada yang mengampuni dosa-dosa melainkan Engkau.",
      en: "O Allah, You are my Lord; there is no god but You. You created me, and I am Your servant. I am committed to Your covenant to the best of my ability. I seek refuge in You from the evil of my deeds. I acknowledge the many blessings You have bestowed upon me, and I acknowledge my sins; so forgive me. For indeed, none forgives sins except You.",
    },
    repeat: 3,
  },
  {
    id: "m23",
    title: { id: "Istighfar", en: "Seeking Forgiveness" },
    arabic:
      "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إلهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    translation: {
      id: "Aku memohon ampunan Allah Yang Tiada Tuhan melainkan Dia, Yang Maha Hidup dan Maha Mengurus makhluk-Nya.",
      en: "I seek forgiveness from Allah, there is no god but He, the Ever-Living, the Sustainer of all things.",
    },
    repeat: 3,
  },
  {
    id: "m24",
    title: { id: "Shalawat Ibrahimiyyah", en: "Ibrahimi Salutation" },
    arabic:
      "اَللّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ فِي الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
    translation: {
      id: "Ya Allah berikanlah sholawat kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Berikanlah barakah kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Di alam semesta, sesungguhnya Engkaulah Yang Maha Terpuji lagi Maha Mulia.",
      en: "O Allah, bestow Your blessings upon the Prophet Muhammad and the family of the Prophet Muhammad, just as You have bestowed them upon the Prophet Abraham and the family of the Prophet Abraham. Grant Your blessings to the Prophet Muhammad and the family of the Prophet Muhammad, just as You have granted them to the Prophet Abraham and the family of the Prophet Abraham. In Your realm, You are the Most Praised and the Most Glorious.",
    },
    repeat: 10,
  },
  {
    id: "m25",
    title: {
      id: "Tasbih, Tahmid, Tahlil, Takbir",
      en: "Glorification, Praise, Tahlil, Magnification",
    },
    arabic:
      "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ",
    translation: {
      id: "Maha Suci Allah, segala puji bagi Allah, tiada Tuhan melainkan Allah dan Allah Maha Besar.",
      en: "Glory be to God, all praise be to God, there is no god but God, and God is the Greatest.",
    },
    repeat: 100,
  },
  {
    id: "m26",
    title: { id: "Tahlil Lengkap", en: "Complete Tahlil" },
    arabic:
      "لاَ إلهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ",
    translation: {
      id: "Tiada Tuhan melainkan Allah semata, yang tiada sekutu bagi-Nya, bagi-Nya kerajaan dan bagi-Nya segala puji, dan Dia berkuasa atas segala sesuatu.",
      en: "There is no god but Allah alone, who has no partner; to Him belongs the kingdom, and to Him belongs all praise, and He has power over all things.",
    },
    repeat: 10,
  },
  {
    id: "m27",
    title: { id: "Penutup Majelis", en: "Closing Supplication" },
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَّا إلهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ",
    translation: {
      id: "Maha suci Engkau ya Allah, dan segala puji bagi-Mu. Aku bersaksi bahwa tiada Tuhan melainkan Engkau, aku memohon ampunan dan bertaubat kepada-Mu.",
      en: "Glory be to You, O Allah, and all praise is due to You. I bear witness that there is no god but You; I seek Your forgiveness and repent to You.",
    },
    repeat: 3,
  },
  {
    id: "m28",
    title: { id: "Shalawat Agung", en: "Grand Salutation upon the Prophet" },
    arabic:
      "اَللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُوْلِكَ النَّبِيِّ الأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيْمًا عَدَدَ مَا أَحَاطَ بِهِ عِلْمُكَ وَخَطَّ بِهِ قَلَمُكَ وَأَحْصَاهُ كِتَابُكَ، وَارْضَ اللَّهُمَّ عَنْ سَادَاتِنَا أَبِيْ بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيْ، وَعَنِ الصَّحَابَةِ أَجْمَعِيْنَ، وَعَنِ التَّابِعِيْنَ وَتَابِعِيْهِمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ، وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ، وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِيْنَ",
    translation: {
      id: "Ya Allah berikanlah sholawat kepada Nabi Muhammad; hamba-Mu, nabi-Mu, dan Rasul-Mu; Nabi yang ummi. Juga kepada keluarga dan para sahabatnya serta berilah keselamatan sebanyak yang terjangkau oleh ilmu-Mu yang tergores oleh pena-Mu, dan yang terangkum oleh kitab-Mu. Ridhailah ya Allah para pemimpin kami, Abu Bakar, Umar, Utsman, dan Ali, semua sahabat, semua tabi'in dan orang-orang yang mengikuti mereka sampai hari pembalasan. Maha suci Tuhanmu; Tuhan kemuliaan, dari apa-apa yang mereka sifatkan. Keselamatan semoga tercurah kepada para utusan dan segala puji bagi Allah, Tuhan semesta alam.",
      en: "O Allah, send blessings upon the Prophet Muhammad — Your servant, Your Prophet, and Your Messenger — the unlettered Prophet. Also upon his family and companions, and grant them peace in the measure of Your knowledge, as inscribed by Your pen and recorded in Your Book. Be pleased, O Allah, with our leaders, Abu Bakr, Umar, Uthman, and Ali, all the companions, all the tabi'in, and those who follow them until the Day of Reckoning. Glorified be Your Lord; the Lord of Majesty, above all that they attribute to Him. May peace be upon the messengers, and all praise be to Allah, Lord of the worlds.",
    },
    repeat: 3,
  },
  {
    id: "m29",
    title: { id: "Ali Imran 26-27", en: "Ali Imran 26-27" },
    arabic:
      "قُلِ اللّٰهُمَّ مٰلِكَ الْمُلْكِ تُؤْتِى الْمُلْكَ مَنْ تَشَاۤءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاۤءُ وَتُعِزُّ مَنْ تَشَاۤءُ وَتُذِلُّ مَنْ تَشَاۤءُ بِيَدِكَ الْخَيْرُ اِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ ۝ تُوْلِجُ الَّيْلَ فِى النَّهَارِ وَتُوْلِجُ النَّهَارَ فِى الَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَنْ تَشَاۤءُ بِغَيْرِ حِسَابٍ",
    translation: {
      id: "Katakanlah, 'Wahai Allah, Pemilik kekuasaan, Engkau berikan kekuasaan kepada siapa pun yang Engkau kehendaki dan Engkau cabut kekuasaan dari siapa yang Engkau kehendaki. Engkau muliakan siapa yang Engkau kehendaki dan Engkau hinakan siapa yang Engkau kehendaki. Di tangan-Mulah segala kebajikan. Sesungguhnya Engkau Mahakuasa atas segala sesuatu. Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati dan Engkau keluarkan yang mati dari yang hidup. Engkau berikan rezeki kepada siapa yang Engkau kehendaki tanpa perhitungan.'",
      en: "Say, 'O Allah, Possessor of power, You grant power to whomever You will and You take power away from whomever You will. You exalt whomever You will and You abase whomever You will. In Your hands is all good. Indeed, You are All-Powerful over all things. You cause the night to enter into the day and You cause the day to enter into the night. You bring the living out of the dead and You bring the dead out of the living. You provide sustenance to whomever You will without measure.'",
    },
    repeat: 1,
  },
  {
    id: "m30",
    title: { id: "Doa Rabithah (Pembuka)", en: "Rabithah Supplication (Opening)" },
    arabic:
      "اَللَّهُمَّ إِنَّ هَذَا إِقْبَالُ نَهَارِكَ وَإِدْبَارُ لَيْلِكَ وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْ لِي",
    translation: {
      id: "Ya Allah, sesungguhnya ini adalah siang-Mu yang telah menjelang dan malam-Mu yang tengah berlalu serta suara-suara penyeru-Mu, maka ampunilah aku.",
      en: "O Allah, this is Your day that is about to begin and Your night that is passing, and the voices of Your callers; so forgive me.",
    },
    repeat: 3,
  },
  {
    id: "m31",
    title: { id: "Doa Rabithah", en: "Rabithah Supplication" },
    arabic:
      "اَللّهُمَّ إِنَّكَ تَعْلَمُ أَنَّ هَذِهِ الْقُلُوْبَ، قَدِ اجْتَمَعَتْ عَلَى مَحَبَّتِكَ وَالْتَقَتْ عَلَى طَاعَتِكَ، وَتَوَحَّدَتْ عَلَى دَعْوَتِكَ وَتَعَاهَدَتْ عَلَى نُصْرَةِ شَرِيْعَتِكَ فَوَثِّقِ اللَّهُمَّ رَابِطَتَهَا، وَأَدِمْ وُدَّهَا، وَاهْدِهَا سُبُلَهَا وَامْلَأَهَا بِنُوْرِكَ الَّذِيْ لاَ يَخْبُوْ وَاشْرَحْ صُدُوْرَهَا بِفَيْضِ الْإِيْمَانِ بِكَ، وَجَمِيْلِ التَّوَكُّلِ عَلَيْكَ وَاَحْيِهَا بِمَعْرِفَتِكَ، وَأَمِتْهَا عَلَى الشَّهَادَةِ فِي سَبِيْلِكَ إِنَّكَ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرِ. اَللَّهُمَّ آمِيْنَ. وَصَلِّ اللَّهُمَّ عَلَى سَيِّدَنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ",
    translation: {
      id: "Ya Allah, sesungguhnya Engkau Maha Mengetahui bahwa hati-hati ini telah berhimpun di atas dasar kecintaan terhadap-Mu, bertemu di atas ketaatan kepada-Mu, dan bersatu bagi memikul beban dakwah-Mu, hati-hati ini telah mengikat persetiaan untuk menolong meninggikan syariat-Mu. Oleh itu, Ya Allah, perkukuhkan ikatannya, kekalkan kemesraan hati-hati ini, tunjukilah hati-hati ini akan jalan yang sebenarnya, serta penuhkanlah hati-hati ini dengan cahaya Rabbani-Mu yang tidak kunjung redup, lapangkanlah hati-hati dengan limpahan keimanan serta keindahan tawakkal kepada-Mu, hidupsuburkan hati-hati ini dengan ma'rifat tentang-Mu, dan jika Engkau takdirkan kami mati, maka matikanlah kami sebagai para syuhada dalam perjuangan agama-Mu. Sesungguhnya Engkau sebaik-baik pelindung dan sebaik-baik penolong. Ya Allah perkenankanlah doa kami. Dan semoga shalawat serta salam selalu tercurah kepada Nabi Muhammad, keluarganya dan kepada semua sahabatnya.",
      en: "O Allah, You know full well that these hearts have come together out of love for You, united in obedience to You, and joined in bearing the burden of Your call; these hearts have pledged their loyalty to help uphold Your Sharia. Therefore, O Allah, strengthen their bond and preserve the harmony of these hearts; guide these hearts to the true path, and fill these hearts with the light of Your Lord that never fades; expand these hearts with an abundance of faith and the beauty of reliance upon You; and nourish these hearts with true knowledge of You. If You decree that we die, then let these hearts die as martyrs in the struggle for Your religion. Verily, You are the Best of Protectors and the Best of Helpers. O Allah, grant our supplication. And may blessings and peace always be upon the Prophet Muhammad, his family, and all his companions.",
    },
    repeat: 3,
  },
];

export const eveningDzikr: Dzikr[] = morningDzikr.map((d) => {
  if (d.id === "m9") {
    return {
      ...d,
      id: "e9",
      title: { id: "Doa Petang", en: "Evening Supplication" },
      arabic:
        "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لاَ شَرِيكَ لَهُ، لاَ إِلَهَ إِلاَّ هُوَ وَإِلَيْهِ الْمَصِيرُ",
      translation: {
        id: "Kami memasuki waktu petang dan petang pula kerajaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan selain Dia dan kepada-Nya tempat kembali.",
        en: "We have entered the evening and the dominion belongs to Allah. All praise is to Allah, none has the right to be worshipped except Him, He has no partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.",
      },
    };
  }
  if (d.id === "m10") {
    return {
      ...d,
      id: "e10",
      title: { id: "Fitrah Islam (Petang)", en: "Fitrah of Islam (Evening)" },
      arabic:
        "أَمْسَيْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
      translation: {
        id: "Kami berpetang hari di atas fitrah Islam, di atas kata ikhlasan, di atas agama Nabi kami; Muhammad SAW, dan di atas millah bapak kami Ibrahim yang hanif dan ia bukan termasuk golongan orang-orang yang musyrik.",
        en: "We enter the evening on the natural disposition of Islam, on sincerity, on the religion of our Prophet, Muhammad (peace be upon him), and on the faith of our father Abraham, who was upright and did not belong to the ranks of the polytheists.",
      },
    };
  }
  if (d.id === "m11") {
    return {
      ...d,
      id: "e11",
      title: { id: "Nikmat Petang", en: "Evening Blessings" },
      arabic:
        "اللَّهُمَّ إِنِّي أَمْسَيْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ، فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَةِ",
      translation: {
        id: "Ya Allah, sesungguhnya aku bersore hari dari-Mu dalam nikmat, kesehatan, dan perlindungan. Maka sempurnakanlah nikmat-Mu, kesehatan-Mu, dan perlindungan-Mu atasku di dunia dan akhirat.",
        en: "O Allah, I have entered the evening under Your grace, wellbeing and protection. So complete Your grace, wellbeing and protection upon me in this world and the Hereafter.",
      },
    };
  }
  if (d.id === "m12") {
    return {
      ...d,
      id: "e12",
      title: { id: "Syukur Atas Nikmat (Petang)", en: "Gratitude for Blessings (Evening)" },
      arabic:
        "اللَّهُمَّ مَا أَمْسَى بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
      translation: {
        id: "Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu bersore hari dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur.",
        en: "O Allah, the blessings that I or any of Your creatures enjoy in the evening come from You alone; You have no partner. To You be all praise and thanks.",
      },
    };
  }
  if (d.id === "m30") {
    return {
      ...d,
      id: "e30",
      title: { id: "Doa Rabithah (Pembuka)", en: "Rabithah Supplication (Opening)" },
      arabic:
        "اَللَّهُمَّ إِنَّ هَذَا إِقْبَالُ لَيْلِكَ وَإِدْبَارُ نَهَارِكَ وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْ لِي",
      translation: {
        id: "Ya Allah, sesungguhnya ini adalah malam-Mu yang telah menjelang dan siang-Mu yang tengah berlalu serta suara-suara penyeru-Mu, maka ampunilah aku.",
        en: "O Allah, this is Your night that is about to begin and Your day that is passing, and the voices of Your callers; so forgive me.",
      },
    };
  }
  return { ...d, id: d.id.replace("m", "e") };
});

export type SessionKey = "morning" | "evening";

export const sessions: Record<SessionKey, Dzikr[]> = {
  morning: morningDzikr,
  evening: eveningDzikr,
};
