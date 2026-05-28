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
    title: { id: "Ta'awudz", en: "Seeking Refuge" },
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    translation: {
      id: "Aku berlindung kepada Allah dari godaan setan yang terkutuk.",
      en: "I seek refuge in Allah from Satan, the accursed.",
    },
    repeat: 1,
  },
  {
    id: "m2",
    title: { id: "Al-Fatihah", en: "Al-Fatihah" },
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    translation: {
      id: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam...",
      en: "In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds...",
    },
    repeat: 1,
  },
  {
    id: "m3",
    title: { id: "Ayat Kursi", en: "Ayat Al-Kursi" },
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
    translation: {
      id: "Allah, tidak ada Tuhan selain Dia, Yang Maha Hidup, Yang Maha Berdiri Sendiri...",
      en: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence...",
    },
    repeat: 1,
  },
  {
    id: "m4",
    title: { id: "Al-Ikhlas", en: "Al-Ikhlas" },
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    translation: {
      id: "Katakanlah: Dialah Allah Yang Maha Esa. Allah tempat bergantung segala sesuatu...",
      en: "Say: He is Allah, the One. Allah, the Eternal Refuge...",
    },
    repeat: 3,
  },
  {
    id: "m5",
    title: { id: "Al-Falaq", en: "Al-Falaq" },
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    translation: {
      id: "Aku berlindung kepada Tuhan yang menguasai subuh, dari kejahatan makhluk-Nya...",
      en: "I seek refuge in the Lord of daybreak from the evil of that which He created...",
    },
    repeat: 3,
  },
  {
    id: "m6",
    title: { id: "An-Nas", en: "An-Nas" },
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
    translation: {
      id: "Aku berlindung kepada Tuhan manusia, Raja manusia, sembahan manusia...",
      en: "I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind...",
    },
    repeat: 3,
  },
  {
    id: "m7",
    title: { id: "Doa Pagi", en: "Morning Supplication" },
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    translation: {
      id: "Kami berpagi-pagi, dan jadilah kerajaan ini milik Allah. Segala puji bagi Allah, tiada Tuhan selain Allah Yang Esa, tiada sekutu bagi-Nya.",
      en: "We have reached the morning and at this very time all sovereignty belongs to Allah. All praise is for Allah; none has the right to be worshipped but Allah, alone, without partner.",
    },
    repeat: 1,
  },
  {
    id: "m8",
    title: { id: "Sayyidul Istighfar", en: "Master of Seeking Forgiveness" },
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
    translation: {
      id: "Ya Allah, Engkau adalah Tuhanku, tiada Tuhan selain Engkau, Engkau yang menciptakanku, dan aku adalah hamba-Mu...",
      en: "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant...",
    },
    repeat: 1,
  },
  {
    id: "m9",
    title: { id: "Tasbih Pagi", en: "Morning Glorification" },
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    translation: {
      id: "Maha Suci Allah dan segala puji bagi-Nya.",
      en: "Glory be to Allah and praise be to Him.",
    },
    repeat: 100,
  },
  {
    id: "m10",
    title: { id: "Dzikir Penjagaan", en: "Protection Dhikr" },
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation: {
      id: "Dengan nama Allah yang dengan menyebut nama-Nya tidak akan ada sesuatu pun yang membahayakan, baik di bumi maupun di langit. Dialah Yang Maha Mendengar lagi Maha Mengetahui.",
      en: "In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    },
    repeat: 3,
  },
  {
    id: "m11",
    title: { id: "Ridha", en: "Contentment" },
    arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
    translation: {
      id: "Aku ridha Allah sebagai Tuhan, Islam sebagai agama, dan Muhammad ﷺ sebagai Nabi.",
      en: "I am pleased with Allah as my Lord, Islam as my religion, and Muhammad ﷺ as my Prophet.",
    },
    repeat: 3,
  },
  {
    id: "m12",
    title: { id: "Shalawat", en: "Salutations upon the Prophet" },
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ",
    translation: {
      id: "Ya Allah, limpahkanlah shalawat dan salam kepada junjungan kami Muhammad, keluarga, dan para sahabatnya.",
      en: "O Allah, send blessings and peace upon our master Muhammad, his family, and his companions.",
    },
    repeat: 10,
  },
];

export const eveningDzikr: Dzikr[] = morningDzikr.map((d) => {
  if (d.id === "m7") {
    return {
      ...d,
      id: "e7",
      title: { id: "Doa Petang", en: "Evening Supplication" },
      arabic:
        "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
      translation: {
        id: "Kami berpetang-petang, dan jadilah kerajaan ini milik Allah. Segala puji bagi Allah, tiada Tuhan selain Allah Yang Esa, tiada sekutu bagi-Nya.",
        en: "We have reached the evening and at this very time all sovereignty belongs to Allah. All praise is for Allah; none has the right to be worshipped but Allah, alone, without partner.",
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
