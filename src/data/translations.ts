import { Language, Category, LocationId } from '../types';

export const LANGUAGES: { code: Language; name: string; nativeName: string; region: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', region: 'Global / Standard' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', region: 'উত্তরবঙ্গ ও ডুয়ার্স' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', region: 'तराई और चाय बागान' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', region: 'डुवर्स तथा पहाडी भूभाग' },
];

export const CATEGORY_LABELS: Record<Category, Record<Language, string>> = {
  tea: {
    en: 'Tea & Industry',
    bn: 'চা শিল্প ও বাগান',
    hi: 'चाय उद्योग व बागान',
    ne: 'चिया उद्योग र बगान',
  },
  wildlife: {
    en: 'Wildlife & Nature',
    bn: 'বন্যপ্রাণ ও অরণ্য',
    hi: 'वन्यजीव व प्रकृति',
    ne: 'वन्यजन्तु तथा प्रकृति',
  },
  weather: {
    en: 'Weather & Rivers',
    bn: 'আবহাওয়া ও নদী',
    hi: 'मौसम व नदियाँ',
    ne: 'मौसम र नदीहरू',
  },
  governance: {
    en: 'Local Administration',
    bn: 'প্রশাসন ও পরিকাঠামো',
    hi: 'प्रशासन व विकास',
    ne: 'स्थानीय प्रशासन र विकास',
  },
  culture: {
    en: 'Culture & Festivals',
    bn: 'সংস্কৃতি ও উৎসব',
    hi: 'संस्कृति व उत्सव',
    ne: 'संस्कृति र चाडपर्व',
  },
  sports: {
    en: 'Sports & Terai Cup',
    bn: 'খেলাধুলা ও ডুয়ার্স কাপ',
    hi: 'खेलकूद व तराई कप',
    ne: 'खेलकुद र डुवर्स कप',
  },
  national: {
    en: 'National & State',
    bn: 'রাজ্য ও দেশ',
    hi: 'राज्य व देश',
    ne: 'राज्य र राष्ट्रिय',
  },
};

export const LOCATION_LABELS: Record<LocationId, Record<Language, string>> = {
  all: {
    en: 'All Dooars & Terai',
    bn: 'সমগ্র ডুয়ার্স ও তরাই',
    hi: 'सम्पूर्ण डूवर्स व तराई',
    ne: 'सम्पूर्ण डुवर्स र तराई',
  },
  alipurduar: {
    en: 'Alipurduar & Buxa',
    bn: 'আলিপুরদুয়ার ও বক্সা',
    hi: 'अलीपुरद्वार व बक्सा',
    ne: 'अलिपुरद्वार र बक्सा',
  },
  madarihat: {
    en: 'Madarihat & Jaldapara',
    bn: 'মাদারিহাট ও জলদাপাড়া',
    hi: 'मदारीहाट व जलदापाड़ा',
    ne: 'मदारीहाट र जल्दापारा',
  },
  jalpaiguri: {
    en: 'Jalpaiguri & Tiesta',
    bn: 'জলপাইগুড়ি ও তিস্তা',
    hi: 'जलपाईगुड़ी व तीस्ता',
    ne: 'जलपाईगुड़ी र तिस्ता',
  },
  malbazar: {
    en: 'Malbazar & Chalsa',
    bn: 'মালবাজার ও চালসা',
    hi: 'मालबाजार व चालसा',
    ne: 'मालबजार र चाल्सा',
  },
  jaigaon: {
    en: 'Jaigaon (Indo-Bhutan)',
    bn: 'জয়গাঁ (ভারত-ভুটান সীমান্ত)',
    hi: 'जयगांव (भारत-भूटान सीमा)',
    ne: 'जयगाउँ (भारत-भुटान सीमा)',
  },
  birpara: {
    en: 'Birpara & Falakata',
    bn: 'বীরপাড়া ও ফালাকাটা',
    hi: 'बीरपाड़ा व फालाकाटा',
    ne: 'बिरपारा र फलाकाटा',
  },
  siliguri: {
    en: 'Siliguri & Foothills',
    bn: 'শিলিগুড়ি ও পাদদেশ',
    hi: 'सिलीगुड़ी व तलहटी',
    ne: 'सिलीगुड़ी र फेदी',
  },
  coochbehar: {
    en: 'Cooch Behar',
    bn: 'কোচবিহার',
    hi: 'कूचबिहार',
    ne: 'कुचबिहार',
  },
};

export const UI_TEXT = {
  appName: {
    en: 'Dooars Khabar',
    bn: 'ডুয়ার্স খবর',
    hi: 'डूवर्स खबर',
    ne: 'डुवर्स खबर',
  },
  tagline: {
    en: 'Calm, ad-free news for the Dooars foothills',
    bn: 'ডুয়ার্সের শান্ত, বিজ্ঞাপনহীন স্থানীয় সংবাদ',
    hi: 'डूवर्स और तराई की शांत, विज्ञापन-मुक्त विश्वसनीय खबरें',
    ne: 'डुवर्स र तराईको शान्त, विज्ञापनरहित स्थानीय समाचार',
  },
  adFreeBadge: {
    en: '100% Ad-Free & Verified',
    bn: '১০০% বিজ্ঞাপনমুক্ত ও বিশ্বস্ত',
    hi: '100% विज्ञापन-मुक्त व प्रामाणिक',
    ne: '१००% विज्ञापनरहित तथा प्रमाणित',
  },
  navFeed: {
    en: 'Feed',
    bn: 'সংবাদ',
    hi: 'ताज़ा खबरें',
    ne: 'समाचार',
  },
  navBriefing: {
    en: 'Daily Digest',
    bn: 'দৈনিক সংক্ষেপ',
    hi: 'दैनिक सारांश',
    ne: 'दैनिक संक्षेप',
  },
  navOffline: {
    en: 'Saved & Offline',
    bn: 'সংরক্ষিত ও অফলাইন',
    hi: 'ऑफलाइन खबरें',
    ne: 'अफलाइन समाचार',
  },
  navAlerts: {
    en: 'Alerts',
    bn: 'সতর্কবার্তা',
    hi: 'अलर्ट्स',
    ne: 'सूचनाहरू',
  },
  navSettings: {
    en: 'Preferences',
    bn: 'পছন্দসমূহ',
    hi: 'प्राथमिकताएं',
    ne: 'प्राथमिकताहरू',
  },
  downloadOffline: {
    en: 'Download for Offline',
    bn: 'অফলাইনে পড়ার জন্য সংরক্ষণ',
    hi: 'ऑफलाइन पढ़ने के लिए सेव करें',
    ne: 'अफलाइन पढ्नको लागि डाउनलोड गर्नुहोस्',
  },
  downloaded: {
    en: 'Downloaded Offline',
    bn: 'অফলাইনে সংরক্ষিত',
    hi: 'ऑफलाइन सेव किया गया',
    ne: 'अफलाइन सुरक्षित',
  },
  removeOffline: {
    en: 'Remove from Offline',
    bn: 'অফলাইন থেকে মুছুন',
    hi: 'ऑफलाइन से हटाएं',
    ne: 'अफलाइनबाट हटाउनुहोस्',
  },
  readTime: {
    en: 'min read',
    bn: 'মিনিট পাঠ',
    hi: 'मिनट का समय',
    ne: 'मिनेट पढाइ',
  },
  listenArticle: {
    en: 'Listen to Story',
    bn: 'সংবাদটি শুনুন',
    hi: 'खबर सुनें',
    ne: 'समाचार सुन्नुहोस्',
  },
  stopListening: {
    en: 'Stop Audio',
    bn: 'অডিও বন্ধ করুন',
    hi: 'ऑडियो रोकें',
    ne: 'अडियो रोक्नुहोस्',
  },
  quickSummary: {
    en: 'Key Takeaways (60s Skim)',
    bn: 'গুরুত্বপূর্ণ মূল তথ্য',
    hi: 'मुख्य बिंदु (60 सेकंड सार)',
    ne: 'मुख्य बुँदाहरू (६० सेकेन्ड संक्षेप)',
  },
  customizeFeed: {
    en: 'Customize Feed',
    bn: 'ফিড কাস্টমাইজ করুন',
    hi: 'फीड अनुकूलित करें',
    ne: 'फिड अनुकूलन',
  },
  filterByLocation: {
    en: 'Select Location',
    bn: 'অঞ্চল নির্বাচন করুন',
    hi: 'स्थान चुनें',
    ne: 'स्थान छान्नुहोस्',
  },
  allStories: {
    en: 'Latest Stories',
    bn: 'তাজা খবর',
    hi: 'ताज़ा रिपोर्ट',
    ne: 'ताजा समाचार',
  },
  breakingNews: {
    en: 'BREAKING IN DOOARS',
    bn: 'ডুয়ার্স ব্রেকিং',
    hi: 'डूवर्स ब्रेकिंग',
    ne: 'डुवर्स ताजा अपडेट',
  },
  readingOptions: {
    en: 'Distraction-Free Reader',
    bn: 'মনোযোগহীন মুক্ত পাঠ',
    hi: 'शांत पाठन मोड',
    ne: 'शान्त पठन मोड',
  },
  bionicMode: {
    en: 'Bionic Eye Focus',
    bn: 'বায়োনিক ফোকাস',
    hi: 'बायोनिक फोकस',
    ne: 'बायोनिक फोकस',
  },
  installApkButton: {
    en: 'Install APK / App',
    bn: 'APK / অ্যাপ ডাউনলোড',
    hi: 'APK / ऐप डाउनलोड करें',
    ne: 'APK / एप डाउनलोड गर्नुहोस्',
  },
  simulatedOfflineToggle: {
    en: 'Simulate Offline Mode',
    bn: 'অফলাইন মোড পরীক্ষা করুন',
    hi: 'ऑफलाइन मोड टेस्ट करें',
    ne: 'अफलाइन मोड परीक्षण',
  },
  searchPlaceholder: {
    en: 'Search tea gardens, wildlife alerts, towns...',
    bn: 'চা বাগান, বন্যপ্রাণীর খবর, এলাকা খুঁজুন...',
    hi: 'चाय बागान, हाथी कॉरिडोर, शहर खोजें...',
    ne: 'चिया बगान, वन्यजन्तु, सहर खोज्नुहोस्...',
  },
  morningBriefingTitle: {
    en: 'Morning Dooars 60-Second Briefing',
    bn: 'ডুয়ার্স প্রভাতী ৬০-সেকেন্ড সারসংক্ষেপ',
    hi: 'डूवर्स प्रातःकालीन 60-सेकंड सार',
    ne: 'डुवर्स बिहानी ६०-सेकेन्ड संक्षेप',
  },
  eveningBriefingTitle: {
    en: 'Evening Terai Digest',
    bn: 'সান্ধ্য তরাই ডাইজেস্ট',
    hi: 'सांध्य तराई डाइजेस्ट',
    ne: 'साँझको तराई डाइजेस्ट',
  },
  emptyOfflineTitle: {
    en: 'No Saved Stories Offline Yet',
    bn: 'এখনও কোনো অফলাইন সংবাদ সংরক্ষিত নেই',
    hi: 'अभी कोई ऑफलाइन खबर सेव नहीं है',
    ne: 'अहिलेसम्म कुनै अफलाइन समाचार छैन',
  },
  emptyOfflineSubtitle: {
    en: 'Tap the download arrow on any article, photo gallery or video to read without internet connection.',
    bn: 'ইন্টারনেট ছাড়াই পড়তে যেকোনো সংবাদের পাশের ডাউনলোড বাটনে ট্যাপ করুন।',
    hi: 'इंटरनेट के बिना पढ़ने के लिए किसी भी खबर पर डाउनलोड बटन दबाएं।',
    ne: 'इन्टरनेट बिना पढ्नको लागि कुनै पनि समाचारमा डाउनलोड थिच्नुहोस्।',
  },
  corridorAlertTitle: {
    en: 'Wildlife Movement Alert',
    bn: 'বন্যহাতি ও বন্যপ্রাণী চলাচল সতর্কবার্তা',
    hi: 'वन्यजीव व हाथी आवागमन सूचना',
    ne: 'वन्यजन्तु तथा हात्ती आवतजावत सतर्कता',
  },
  weatherAlertTitle: {
    en: 'River & Weather Advisory',
    bn: 'তিস্তা-তোর্ষা নদী ও আবহাওয়া সতর্কবার্তা',
    hi: 'तीस्ता-तोर्षा नदी व मौसम चेतावनी',
    ne: 'तिस्ता-तोर्षा नदी र मौसम सूचना',
  },
  teaAuctionAlertTitle: {
    en: 'Tea Garden & Industry Bulletin',
    bn: 'চা নিলাম ও বাগান বুলেটিন',
    hi: 'चाय नीलामी व बागान बुलेटिन',
    ne: 'चिया लिलामी तथा बगान बुलेटिन',
  },
};
