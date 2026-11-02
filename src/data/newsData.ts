import { Article, DailySummary, NotificationAlert } from '../types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'dk-art-001',
    category: 'wildlife',
    location: 'madarihat',
    author: 'Subhashish Barman (Dooars Forest Correspondent)',
    date: 'Today, 06:45 AM',
    readTimeMin: 3,
    isBreaking: true,
    isFactChecked: true,
    audioDuration: '1m 40s',
    title: {
      en: 'Jaldapara Rhino Census Confirms 14% Population Surge Across Holong River Belt',
      bn: 'জলদাপাড়ায় হলং নদীর অববাহিকায় গন্ডারের সংখ্যা ১৪% বৃদ্ধি পেল',
      hi: 'जलदापाड़ा में होलोंग नदी क्षेत्र में एक सींग वाले गैंडों की संख्या 14% बढ़ी',
      ne: 'जल्दापाराको होलोंग नदी किनारमा एकसिङ्गे गैँडाको संख्यामा १४% वृद्धि',
    },
    summary: {
      en: 'Forest department field patrols completed the 3-day quadrennial survey across 12 ranges, recording healthy calves and robust grasslands despite monsoon spates.',
      bn: 'বন দপ্তরের তিন দিনব্যাপী সুসংহত সমীক্ষায় হলং ও তোর্ষা রেঞ্জে নতুন শাবক সহ সুস্থ গন্ডারের উপস্থিতি ধরা পড়েছে। ঘাসভূমির সংরক্ষণ সফল হয়েছে।',
      hi: 'वन विभाग के 3 दिवसीय सर्वेक्षण में 12 रेंजों में नवजात शावकों की संख्या उत्साहवर्धक रही। नदी तटीय घास के मैदानों का बेहतर प्रबंधन कारगर रहा।',
      ne: 'वन विभागको ३ दिने सर्वेक्षणमा होलोंग र तोर्षा क्षेत्रमा नयाँ पाछाहरूसहित गैँडाको संख्या बढेको पाइएको छ।',
    },
    bullets: {
      en: [
        'Total recorded one-horned rhinoceros count reaches 302 across Jaldapara National Park.',
        'Holong and Chilapata corridors recorded zero poaching incidents over the last 36 months.',
        'Eco-tourism vehicle safaris will resume morning slots from Madarihat gate on schedule.',
      ],
      bn: [
        'জলদাপাড়া জাতীয় উদ্যানে মোট একশৃঙ্গ গন্ডারের সংখ্যা ৩০২-এ পৌঁছেছে।',
        'হলং ও চিলাপাতা করিডোরে বিগত ৩৬ মাসে কোনো চোরাশিকারের ঘটনা ঘটেনি।',
        'মাদারিহাট গেট থেকে সকালের সাফারি যথারীতি পূর্বনির্ধারিত সময়ে চলবে।',
      ],
      hi: [
        'जलदापाड़ा राष्ट्रीय उद्यान में एक सींग वाले गैंडों की कुल संख्या 302 तक पहुंची।',
        'होलोंग और चिलापाता कॉरिडोर में पिछले 36 महीनों से शिकार का एक भी मामला नहीं हुआ।',
        'मदारीहाट गेट से सुबह की पर्यावरण-सफारी पूर्व निर्धारित समय पर जारी रहेगी।',
      ],
      ne: [
        'जल्दापारा राष्ट्रिय निकुञ्जमा एकसिङ्गे गैँडाको संख्या ३०२ पुगेको छ।',
        'होलोंग र चिलापाता करिडोरमा बिगत ३६ महिनामा कुनै चोरी शिकार भएको छैन।',
        'मदारीहाट प्रवेशद्वारबाट बिहानी सफारी समय तालिका अनुसार सुचारु रहनेछ।',
      ],
    },
    content: {
      en: [
        'Forest officials from the North Bengal wildlife circle have released preliminary findings from the rigorous direct-sighting census in Jaldapara National Park.',
        'Led by senior divisional forest conservators and tribal elephant trackers, teams fanned across 216 square kilometres spanning Madarihat, Rangani, and Torsa riverine grasslands. The recorded tally of one-horned rhinos climbed past the 300 milestone to reach 302 individuals, including 38 calves under two years of age.',
        'Continuous drone monitoring, anti-depredation solar fences near fringing tea estates like Dalsingpara and Totopara, and community surveillance by local youth have contributed to this sustained ecological recovery.',
      ],
      bn: [
        'উত্তরবঙ্গ বন্যপ্রাণী সার্কেলের বন আধিকারিকরা জলদাপাড়া জাতীয় উদ্যানে সাম্প্রতিক প্রত্যক্ষ পর্যবেক্ষণ সমীক্ষার প্রাথমিক ফলাফল প্রকাশ করেছেন।',
        'মাদারিহাট, রঙ্গিণী এবং তোর্ষা নদী তীরবর্তী ২১৬ বর্গকিলোমিটার এলাকা জুড়ে বনকর্মী এবং মাহুতরা এই নিবিড় সমীক্ষা পরিচালনা করেন। মোট গন্ডার সংখ্যা ৩০২-এ পৌঁছেছে, যার মধ্যে ৩৮টি দুই বছরের কম বয়সী শাবক রয়েছে।',
        'ডালসিংপাড়া ও টোটোপাড়া সংলগ্ন চা বাগানগুলির সীমানায় সৌর বেড়া ও ড্রোন নজরদারি বন্যপ্রাণী ও মানুষের সংঘাত অনেকাংশে কমিয়ে এনেছে।',
      ],
      hi: [
        'उत्तर बंगाल वन्यजीव वृत्त के अधिकारियों ने जलदापाड़ा राष्ट्रीय उद्यान में प्रत्यक्ष गणना के उत्साहजनक परिणाम घोषित किए हैं।',
        'मदारीहाट, रंगीनी और तोर्षा नदी के 216 वर्ग किलोमीटर में फैले घास के मैदानों में वन टीमों ने लगातार तीन दिनों तक पैदल और हाथियों पर गश्त की। गैंडों की संख्या 302 तक पहुंच गई है, जिसमें 38 स्वस्थ छोटे बच्चे शामिल हैं।',
        'डालसिंगपाड़ा और टोटोपाड़ा जैसे चाय बागानों की सीमा पर सौर ऊर्जा बाड़ और ड्रोन निगरानी ने शिकारियों पर पूरी तरह रोक लगाई है।',
      ],
      ne: [
        'उत्तर बंगाल वन्यजन्तु विभागका अधिकारीहरूले जल्दापारा राष्ट्रिय निकुञ्जमा भएको प्रत्यक्ष गणनाको नतिजा सार्वजनिक गरेका छन्।',
        'मदारीहाट, रङ्गिनी र तोर्षा नदी किनारका घाँसे मैदानमा वन रक्षक टोलीले ३०२ गैँडा दर्ता गरेका छन्, जसमा ३८ नयाँ पाछाहरू छन्।',
        'डालसिङपारा र टोटोपारा चिया बगान नजिकै सौर्य तारबार र स्थानीय युवाको निगरानीले वन संरक्षणमा ठूलो सफलता मिलेको छ।',
      ],
    },
    media: [
      {
        id: 'med-01',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
        caption: {
          en: 'A Greater One-horned Rhinoceros grazing calmly in morning mist near Holong, Jaldapara.',
          bn: 'জলদাপাড়ার হলং অঞ্চলে কুয়াশাচ্ছন্ন সকালে একশৃঙ্গ গন্ডার।',
          hi: 'जलदापाड़ा के होलोंग क्षेत्र में सुबह की धुंध में विचरता एक सींग वाला गैंडा।',
          ne: 'जल्दापाराको होलोंग क्षेत्रमा बिहानी हुस्सुमा चर्लङ्ग देखिएको एकसिङ्गे गैँडा।',
        },
        sizeMb: 1.4,
      },
      {
        id: 'med-02',
        type: 'video',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=800&q=80',
        caption: {
          en: 'Field footage: Forest patrol navigating the tall elephant grass along Holong riverbed.',
          bn: 'ভিডিও ফুটেজ: হলং নদীর তীরে বনকর্মীদের টহল ও পর্যবেক্ষণ।',
          hi: 'फील्ड वीडियो: होलोंग नदी के किनारे वन रक्षकों की विशेष गश्ती।',
          ne: 'भिडियो फुटेज: होलोंग नदी किनारमा वन रक्षकहरूको गस्ती।',
        },
        duration: '0:15',
        sizeMb: 3.2,
      },
    ],
  },
  {
    id: 'dk-art-002',
    category: 'tea',
    location: 'malbazar',
    author: 'Aniruddha Sen (Agricultural & Terai Market Desk)',
    date: 'Today, 08:15 AM',
    readTimeMin: 2,
    isBreaking: false,
    isFactChecked: true,
    audioDuration: '1m 20s',
    title: {
      en: 'Siliguri Tea Auction Center Records Premium Bids for Dooars Autumn Flush',
      bn: 'শিলিগুড়ি চা নিলাম কেন্দ্রে ডুয়ার্স অটাম ফ্লাশের চড়া দাম',
      hi: 'सिलीगुड़ी चाय नीलामी केंद्र में डूवर्स ऑटम फ्लश को मिला रिकॉर्ड भाव',
      ne: 'सिलीगुड़ी चिया लिलामी केन्द्रमा डुवर्सको शरदकालीन चियाले पायो उच्च मूल्य',
    },
    summary: {
      en: 'CTC leaves from Nagrakata and Chalsa estates fetched up to ₹345 per kg, boosted by steady domestic festive demand and direct export contracts.',
      bn: 'চালসা ও নাগরাকাটার এস্টেটের সিটিসি চা পাতা প্রতি কেজি ৩৪৫ টাকা পর্যন্ত দরে বিক্রি হয়েছে। উৎসবের চাহিদায় চাঙ্গা বাজার।',
      hi: 'नागराकाटा और चालसा बागानों की सीटीसी पत्तियों को ₹345 प्रति किलो तक का रिकॉर्ड मूल्य मिला। घरेलू मांग में भारी इजाफा।',
      ne: 'नागराकाटा र चाल्सा बगानको सीटीसी चिया प्रतिकिलो ₹३४५ सम्म बिक्री भयो। घरेलु र निर्यात माग उच्च छ।',
    },
    bullets: {
      en: [
        'Average sale price for Dooars orthodox and premium CTC rose 18% over last month.',
        'Planters highlight favorable post-monsoon sunshine across Jalpaiguri district.',
        'Workers welfare bonus disbursals completed across 98% of active Dooars estates.',
      ],
      bn: [
        'ডুয়ার্সের সিলেকশন সিটিসি চায়ের গড় দাম গত মাসের তুলনায় ১৮% বৃদ্ধি পেয়েছে।',
        'জলপাইগুড়ি জেলা জুড়ে বর্ষা-পরবর্তী রৌদ্রোজ্জ্বল আবহাওয়া পাতার মান বাড়িয়েছে।',
        'ডুয়ার্সের ৯৮% চালু চা বাগানে শ্রমিকদের বোনাস বিতরণ নির্বিঘ্নে সম্পন্ন হয়েছে।',
      ],
      hi: [
        'डूवर्स प्रीमियम सीटीसी का औसत बिक्री मूल्य पिछले माह की तुलना में 18% बढ़ा।',
        'जलपाईगुड़ी जिले में अनुकूल धूप से पत्तियों के स्वाद व खुशबू में सुधार हुआ।',
        'सक्रिय 98% चाय बागानों में श्रमिकों के कल्याणकारी बोनस का भुगतान शांतिपूर्वक संपन्न।',
      ],
      ne: [
        'डुवर्सको प्रीमियम सीटीसी चियाको औसत दर अघिल्लो महिनाभन्दा १८% ले बढेको छ।',
        'जलपाईगुड़ी क्षेत्रमा मिलेको पर्याप्त घामले चियाको गुणस्तर उकासेको छ।',
        '९८% चिया बगानहरूमा श्रमिक बोनस वितरण शान्तिपूर्ण रूपमा सम्पन्न भयो।',
      ],
    },
    content: {
      en: [
        'Brisk trading characterized Sale 44 at the Siliguri Tea Auction Centre (STAC) this morning as quality orthodox and premium crush-tear-curl (CTC) grades from Western Dooars saw competitive buying.',
        'Brokers pointed out that crisp sunshine following gentle late-October showers allowed tea gardens across Malbazar, Nagrakata, and Matelli to harvest sweet, full-bodied leaves ideal for export blends.',
        'The Indian Tea Association (ITA) Dooars branch reported satisfactory processing schedules and reaffirmed that green leaf quality protocols are yielding visible market dividends for local small growers as well.',
      ],
      bn: [
        'শিলিগুড়ি চা নিলাম কেন্দ্রে আজ ৪৪ নম্বর সেলে পশ্চিম ডুয়ার্সের প্রিমিয়াম কোয়ালিটির সিটিসি চায়ের বিপুল চাহিদা লক্ষ্য করা গেছে।',
        'নাগরাকাটা, চালসা ও মাটেল্লি ব্লকের বাগানগুলিতে সাম্প্রতিক নাতিশীতোষ্ণ আবহাওয়া এবং পরিমিত রোদ পাতার গুণমানকে অনন্য উচ্চতায় নিয়ে গেছে।',
        'ইন্ডিয়ান টি অ্যাসোসিয়েশনের ডুয়ার্স শাখা জানিয়েছে, গুণগত মান বজায় রাখার কারণে ডুয়ার্স চা আন্তর্জাতিক বাজারেও সমাদৃত হচ্ছে।',
      ],
      hi: [
        'सिलीगुड़ी चाय नीलामी केंद्र (STAC) में आज सुबह पश्चिम डूवर्स के चाय बागानों की उच्च गुणवत्ता वाली पत्तियों की जोरदार बोली लगी।',
        'नागराकाटा, चालसा और माटेली के बागानों में अक्टूबर के बाद की गुनगुनी धूप ने पत्तियों में प्राकृतिक मिठास और खुशबू भर दी है।',
        'चाय उत्पादक संघ ने बताया कि स्थानीय छोटे चाय किसानों को भी इस मूल्य वृद्धि का सीधा लाभ मिल रहा है।',
      ],
      ne: [
        'सिलीगुड़ी चिया लिलामी केन्द्रमा आज पश्चिम डुवर्सका उत्कृष्ट चिया पत्तीहरूको उच्च माग देखियो।',
        'नागराकाटा, चाल्सा र माटेली बगानहरूमा अनुकूल मौसमले गर्दा चियाको स्वाद र बास्ना उत्कृष्ट भएको छ।',
        'साना चिया कृषकहरूले समेत यो मूल्यवृद्धिको प्रत्यक्ष लाभ प्राप्त गरिरहेका छन्।',
      ],
    },
    media: [
      {
        id: 'med-03',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1588693951525-6b6689ff3030?auto=format&fit=crop&w=1200&q=80',
        caption: {
          en: 'Lush green tea terraces nestled against the misty Himalayan foothills near Chalsa.',
          bn: 'চালসার কাছে ডুয়ার্সের পাহাড়ের পাদদেশে সবুজ চা বাগান।',
          hi: 'चालसा के समीप हिमालय की तलहटी में फैले हरे-भरे चाय बागान।',
          ne: 'चाल्सा नजिकै पहाडी फेदीमा फैलिएका हरियाली चिया बगानहरू।',
        },
        sizeMb: 1.6,
      },
    ],
  },
  {
    id: 'dk-art-003',
    category: 'governance',
    location: 'jaigaon',
    author: 'Pema Tshering (Indo-Bhutan Border Correspondent)',
    date: 'Yesterday, 04:30 PM',
    readTimeMin: 3,
    isBreaking: false,
    isFactChecked: true,
    audioDuration: '1m 30s',
    title: {
      en: 'Jaigaon-Phuentsholing Digital Gate Streamlines Pedestrian Crossings with Zero Delays',
      bn: 'জয়গাঁ-ফুন্টশোলিং আধুনিক ডিজিটাল গেটে মসৃণ সীমান্ত পারাপার',
      hi: 'जयगांव-फुनशोलिंग डिजिटल गेट से सीमा पार आवाजाही हुई सुगम और तेज',
      ne: 'जयगाउँ-फुन्टशोलिङ डिजिटल गेटबाट सहज र द्रुत सीमा आवतजावत',
    },
    summary: {
      en: 'New contactless optical pass scanners and dual biometric corridors on the Indo-Bhutan frontier have cut daily commute times for workers and tourists to under 4 minutes.',
      bn: 'ভারত-ভুটান সীমান্তে নতুন অপটিক্যাল স্ক্যানার ও বায়োমেট্রিক করিডোর চালু হওয়ায় দুই দেশের কর্মী ও পর্যটকদের অপেক্ষার সময় কমে ৪ মিনিটে এসেছে।',
      hi: 'भारत-भूटान सीमा पर नए बायोमेट्रिक व त्वरित बारकोड स्कैनर शुरू होने से दैनिक यात्रियों और पर्यटकों का समय बच रहा है।',
      ne: 'भारत-भुटान सीमामा नयाँ कन्ट्याक्टलेस स्क्यानर र बायोमेट्रिक करिडोरले दैनिक यात्रु र पर्यटकलाई सहज बनाएको छ।',
    },
    bullets: {
      en: [
        'Dedicated green channels opened for daily vegetable vendors and students.',
        'Unified QR code permits recognized seamlessly on both sides of the friendship gate.',
        'Commercial freight truck holding plaza in Jaigaon eliminates NH-317A congestion.',
      ],
      bn: [
        'দৈনন্দিন শাকসবজি ব্যবসায়ী ও শিক্ষার্থীদের জন্য পৃথক গ্রিন চ্যানেল খোলা হয়েছে।',
        'মৈত্রী গেটের উভয় পাশেই একক কিউআর কোড অনুমতিপত্র কার্যকর হয়েছে।',
        'জয়গাঁয় পণ্যবাহী ট্রাকের জন্য পার্কিং প্লাজা গড়ে তোলায় ৩১এ জাতীয় সড়কে যানজট মুক্ত।',
      ],
      hi: [
        'दैनिक सब्जी विक्रेताओं व छात्रों के लिए अलग ग्रीन चैनल शुरू किया गया।',
        'मैत्री द्वार के दोनों ओर एकीकृत क्यूआर कोड परमिट को तत्काल मान्यता।',
        'जयगांव में नए ट्रक टर्मिनल से राष्ट्रीय राजमार्ग 317A पर जाम से मुक्ति।',
      ],
      ne: [
        'दैनिक तरकारी बिक्रेता र विद्यार्थीहरूका लागि छुट्टै हरित लेनको व्यवस्था।',
        'मैत्री ढोकाको दुवै तर्फ एकीकृत क्यूआर कोड परमिट सहजै मान्य।',
        'जयगाउँमा नयाँ ट्रक पार्किङ बनेपछि राजमार्गमा हुने जाम पूर्ण रूपमा हटेको छ।',
      ],
    },
    content: {
      en: [
        'The pedestrian terminal connecting Jaigaon in Alipurduar district with Phuentsholing in Bhutan witnessed an effortless morning transition today as the upgraded immigration automated gates operated at peak efficiency.',
        'Local trade associations and cross-border transport unions commended the smooth coordination between Indian border authorities and the Royal Government of Bhutan.',
        'With festive winter tourism kicking off, the streamlined entry protocol is anticipated to boost homestay bookings across Dooars, including Totopara, Chilapata, and Rajabhatkhawa.',
      ],
      bn: [
        'আলিপুরদুয়ার জেলার জয়গাঁ এবং ভুটানের ফুন্টশোলিং সংযোগকারী পথচারী টার্মিনালে আজ সকাল থেকে আধুনিক স্বয়ংক্রিয় গেট চালু হওয়ায় মানুষের স্বস্তি ফিরেছে।',
        'ভারতীয় সীমান্ত প্রশাসন এবং ভুটান সরকারের যৌথ উদ্যোগে এই ব্যবস্থা কার্যকর হওয়ায় দুই দেশের মৈত্রী আরও সুদৃঢ় হয়েছে।',
        'শীতকালীন পর্যটন মরশুমের মুখে এই সহজ চলাচল ডুয়ার্সের টোটোপাড়া, চিলাপাতা ও রাজাভাতখাওয়ার হোমস্টে ব্যবসার প্রসারে বড় ভূমিকা নেবে।',
      ],
      hi: [
        'अलीपुरद्वार जिले के जयगांव और भूटान के फुनशोलिंग को जोड़ने वाले पैदल यात्री टर्मिनल पर अत्याधुनिक डिजिटल गेट्स ने यात्रियों की राह आसान कर दी है।',
        'भारतीय सीमा सुरक्षा बल और भूटान सरकार के बीच तालमेल से प्रतिदिन हजारों लोग कुछ ही मिनटों में सीमा पार कर रहे हैं।',
        'सर्दियों के पर्यटन सीजन को देखते हुए यह सुगम व्यवस्था डूवर्स के होमस्टे और स्थानीय व्यापार को बड़ा बढ़ावा देगी।',
      ],
      ne: [
        'अलिपुरद्वार जिल्लाको जयगाउँ र भुटानको फुन्टशोलिङ जोड्ने पैदल टर्मिनलमा नयाँ डिजिटल गेटले यात्रुहरूलाई ठूलो सुविधा दिएको छ।',
        'भारतीय सुरक्षा बल र भुटान सरकारको सहकार्यले सीमा पार आवतजावत मिनेटमै सम्भव भएको छ।',
        'हिउँदको पर्यटकीय मौसम सुरु भएसँगै डुवर्सका होमस्टे तथा स्थानीय व्यापार व्यवसाय फस्टाउने अपेक्षा गरिएको छ।',
      ],
    },
    media: [
      {
        id: 'med-04',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
        caption: {
          en: 'The vibrant Indo-Bhutan Friendship Gate connecting Jaigaon with Phuentsholing.',
          bn: 'জয়গাঁ ও ফুন্টশোলিং-এর মধ্যবর্তী ঐতিহাসিক ভারত-ভুটান মৈত্রী ফটক।',
          hi: 'जयगांव और फुनशोलिंग के बीच स्थित भारत-भूटान मैत्री द्वार।',
          ne: 'जयगाउँ र फुन्टशोलिङ जोड्ने प्रसिद्ध भारत-भुटान मैत्री द्वार।',
        },
        sizeMb: 1.2,
      },
    ],
  },
  {
    id: 'dk-art-004',
    category: 'weather',
    location: 'jalpaiguri',
    author: 'Maitreyi Deb (North Bengal Hydrology & Weather Desk)',
    date: 'Yesterday, 07:00 PM',
    readTimeMin: 2,
    isBreaking: false,
    isFactChecked: true,
    audioDuration: '1m 15s',
    title: {
      en: 'Teesta and Torsa River Discharge Stabilizes as Clear Skies Settle Over Foothills',
      bn: 'শান্ত তিস্তা ও তোর্ষা: ডুয়ার্সের আকাশ পরিষ্কার, পর্যটনের অনুকূল আবহাওয়া',
      hi: 'तीस्ता और तोर्षा नदियों का जलस्तर सामान्य, डूवर्स में सुहाना मौसम',
      ne: 'तिस्ता र तोर्षा नदीको बहाव सामान्य, डुवर्समा मौसम सफा र रमाइलो',
    },
    summary: {
      en: 'Central Water Commission gauge stations at Domohani and Jalpaiguri confirm water levels well below danger marks, opening riverbed boating and angling paths.',
      bn: 'দোমহনী ও জলপাইগুড়িতে জলস্তর বিপদসীমার বহু নিচে রয়েছে। তিস্তার পাড়ে শান্ত পরিবেশ এবং মনোরম রোদে পর্যটকদের সমাগম বাড়ছে।',
      hi: 'दोमोहनी और जलपाईगुड़ी में केंद्रीय जल आयोग के स्टेशनों ने जलस्तर को सामान्य घोषित किया। नदियों के किनारे शांति व पर्यटन लौटा।',
      ne: 'दोमोहनी र जलपाईगुड़ीमा नदीको जलस्तर खतराको रेखाभन्दा धेरै तल झरेको छ। मौसम सफा भएसँगै डुङ्गा सयर सुरु भएको छ।',
    },
    bullets: {
      en: [
        'Teesta barrage releases adjusted smoothly with upstream dam authorities in Sikkim.',
        'Temperatures across Dooars range between a pleasant 18°C night to 28°C daytime.',
        'Riverbed eco-camping sites at Murti and Gajoldoba report full weekend bookings.',
      ],
      bn: [
        'গজলডোবা তিস্তা ব্যারেজে জলপ্রবাহ স্বাভাবিক ও নিয়ন্ত্রিত রয়েছে।',
        'ডুয়ার্সে রাতের তাপমাত্রা ১৮ ডিগ্রি এবং দিনে মিষ্টি রোদ সহ ২৮ ডিগ্রি সেলসিয়াস।',
        'মূর্তি নদী ও গজলডোবার ইকো-ক্যাম্পিং সাইটগুলিতে পর্যটকদের বিপুল ভিড়।',
      ],
      hi: [
        'गजोल्डोबा तीस्ता बैराज से जल निकासी पूरी तरह संतुलित और सुरक्षित।',
        'डूवर्स में सुहावना मौसम: रात में 18°C और दिन में 28°C तापमान।',
        'मूर्ति नदी और गजोल्डोबा के पक्षी विहार व कैंपिंग स्थलों पर पर्यटकों का जमावड़ा।',
      ],
      ne: [
        'गजोल्डोबा तिस्ता ब्यारेजबाट पानीको बहाव पूर्ण नियन्त्रणमा छ।',
        'डुवर्समा रातको तापक्रम १८°C र दिनमा २८°C को रमाइलो मौसम छ।',
        'मुर्ति नदी र गजोल्डोबाका चराचुरुङ्गी अवलोकन स्थलहरूमा पर्यटकहरूको चहलपहल।',
      ],
    },
    content: {
      en: [
        'Following the cessation of post-monsoon localized cloudbursts in the upper Teesta basin, the North Bengal river network has attained tranquil winter conditions.',
        'Gauges monitored at Domohani in Jalpaiguri district indicate normal discharge rates, allowing fishermen and ferry operators to resume regular schedules.',
        'The tranquil flow along river Murti near Gorumara National Park has turned riverbanks into scenic congregation spots for migratory winter waterfowl, including bar-headed geese and ruddy shelducks.',
      ],
      bn: [
        'সিকিম ও তরাইয়ের উচ্চ অববাহিকায় বৃষ্টিপাত থেমে যাওয়ায় তিস্তা ও তোর্ষা নদী এখন শান্ত রূপ ধারণ করেছে।',
        'জলপাইগুড়ির দোমহনীতে জলস্তর স্বাভাবিক হওয়ায় নৌকা চলাচল এবং মৎস্যজীবীদের কাজ স্বাভাবিক ছন্দে চলছে।',
        'গরুমারা জাতীয় উদ্যানের গা ঘেঁষে বয়ে চলা মূর্তি নদীর তীরে ইতিমধ্যেই পরিযায়ী পরিযায়ী পাখিদের আগমন শুরু হয়েছে।',
      ],
      hi: [
        'सिक्किम और ऊपरी जलग्रहण क्षेत्रों में बारिश थमने से उत्तर बंगाल की नदियां शांत हो गई हैं।',
        'जलपाईगुड़ी के दोमोहनी स्टेशन पर तीस्ता का बहाव पूरी तरह नियंत्रित है और नावों का संचालन निर्बाध रूप से चालू है।',
        'गोरुमारा के समीप मूर्ति नदी के शांत किनारों पर प्रवासी पक्षियों का आगमन शुरू हो गया है, जिससे प्रकृति प्रेमियों में उत्साह है।',
      ],
      ne: [
        'सिक्किम र पहाडी क्षेत्रमा वर्षा रोकिएपछि उत्तर बंगालका सबै नदीहरूको जलस्तर सामान्य भएको छ।',
        'जलपाईगुड़ी नजिकै डुङ्गा सञ्चालन र माछा मार्ने काम नियमित भएको छ।',
        'गोरुमारा नजिकै मुर्ति नदी किनारमा पाहुना चराहरूको आगमनले वातावरण मनमोहक बनेको छ।',
      ],
    },
    media: [
      {
        id: 'med-05',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: {
          en: 'Tranquil crystal waters of river Murti reflecting the lush green forest canopy of Dooars.',
          bn: 'ডুয়ার্সের ঘন সবুজ অরণ্যের প্রতিচ্ছবি মেখে শান্ত মূর্তি নদীর জলধারা।',
          hi: 'डूवर्स के घने वनों की छाया लिए मूर्ति नदी का शांत व निर्मल जल।',
          ne: 'डुवर्सको घनाजङ्गल बीचबाट बग्ने मुर्ति नदीको कञ्चन पानी।',
        },
        sizeMb: 1.5,
      },
    ],
  },
  {
    id: 'dk-art-005',
    category: 'culture',
    location: 'alipurduar',
    author: 'Kalyan Roy (Dooars Heritage & Tribal Arts Archive)',
    date: '2 Days Ago',
    readTimeMin: 4,
    isBreaking: false,
    isFactChecked: true,
    audioDuration: '2m 10s',
    title: {
      en: 'Buxa Fort Heritage Restoration Project Unveils 19th Century Stone Inscriptions',
      bn: 'বক্সা দুর্গের ঐতিহ্যবাহী সংস্কারের সময় উনিশ শতকের প্রাচীন শিলালিপি উদ্ধার',
      hi: 'बक्सा किले के संरक्षण कार्य के दौरान मिले 19वीं सदी के दुर्लभ शिलालेख',
      ne: 'बक्सा किल्लाको संरक्षण कार्यको क्रममा १९औँ शताब्दीका दुर्लभ शिलालेख फेला',
    },
    summary: {
      en: 'Archaeologists working in the high-altitude Buxa Tiger Reserve discovered intact Indo-Tibetan trade tablets and freedom fighters detention records inside the stone bastion.',
      bn: 'বক্সা ব্যাঘ্র প্রকল্পের উঁচু পাহাড়ে অবস্থিত বক্সা দুর্গের পাথর সংস্কারের সময় ইন্দো-তিব্বত বাণিজ্য সংক্রান্ত অমূল্য ফলক এবং স্বাধীনতা সংগ্রামীদের বন্দীশালার নথি আবিষ্কৃত হলো।',
      hi: 'बक्सा टाइगर रिजर्व की ऊंचाई पर स्थित ऐतिहासिक किले के जीर्णोद्धार में भारत-तिब्बत व्यापारिक पट्टिकाएं और स्वतंत्रता सेनानियों के ऐतिहासिक दस्तावेज मिले।',
      ne: 'बक्सा टाइगर रिजर्भको पहाडमा रहेको ऐतिहासिक किल्लाको संरक्षण गर्दा भारत-तिब्बत व्यापार र स्वतन्त्रता सेनानीका महत्वपूर्ण अभिलेखहरू भेटिएका छन्।',
    },
    bullets: {
      en: [
        'Lime-mortar consolidation of the historic prison block completed under ASI guidelines.',
        'Eco-trekking route from Santalabari to Buxa Fort repaired with stone pitching.',
        'Local Dukpa community youth trained as certified cultural heritage trail guides.',
      ],
      bn: [
        'ভারতীয় পুরাতত্ত্ব সর্বেক্ষণের তত্ত্বাবধানে প্রাচীন কারাগার অংশের সংস্কার চলছে।',
        'সান্তালাবাড়ি থেকে বক্সা ফোর্ট পর্যন্ত মনোরম পাহাড়ি ট্রেকিং পথ সংস্কার করা হয়েছে।',
        'স্থানীয় ডুকপা সম্প্রদায়ের তরুণ-তরুণীদের হেরিটেজ গাইডের বিশেষ প্রশিক্ষণ দেওয়া হয়েছে।',
      ],
      hi: [
        'एएसआई के दिशा-निर्देशों में ऐतिहासिक जेल ब्लॉक का चूना-गारे से संरक्षण कार्य पूरा।',
        'सांतालाबाड़ी से बक्सा फोर्ट तक के पैदल ट्रेकिंग मार्ग की पत्थरों से मरम्मत की गई।',
        'स्थानीय डुकपा समुदाय के युवाओं को प्रमाणित हेरिटेज टूरिस्ट गाइड का प्रशिक्षण दिया गया।',
      ],
      ne: [
        'पुरातत्व विभागको रेखदेखमा ऐतिहासिक कारागार भवनको संरक्षण कार्य सम्पन्न भएको छ।',
        'सान्तालाबाड़ीदेखि बक्सा किल्लासम्मको ट्रेकिङ बाटो ढुङ्गा छापेर मर्मत गरिएको छ।',
        'स्थानीय डुकपा समुदायका युवाहरूलाई सम्पदा मार्गदर्शकको तालिम प्रदान गरियो।',
      ],
    },
    content: {
      en: [
        'Perched at an elevation of 2,844 feet amidst the dense subtropical montane forests of Buxa Tiger Reserve, the legendary Buxa Fort is undergoing careful restoration to safeguard its multi-layered history.',
        'During the clearing of overgrown ficus roots along the eastern parapet, conservationists uncovered carved granite tablets bearing script documenting border barter agreements between Bhutanese dzongs and Koch Kingdom commissioners.',
        'The site, famed for holding prominent Indian revolutionaries including Netaji Subhash Chandra Bose\'s comrades during British colonial rule, will soon feature a zero-plastic visitor information center operated in partnership with the Forest Department.',
      ],
      bn: [
        'বক্সা ব্যাঘ্র প্রকল্পের ঘন অরণ্যে ২,৮৪৪ ফুট উচ্চতায় দাঁড়িয়ে থাকা ঐতিহাসিক বক্সা দুর্গের সুসংহত সংস্কার কাজ জোরকদমে চলছে।',
        'পূর্বদিকের প্রাচীন দেওয়াল থেকে বটগাছের শিকড় সরানোর সময় খোদাই করা গ্রানাইট শিলালিপির সন্ধান মেলে, যা কোচবিহার রাজ্য ও ভুটানের প্রাচীন বাণিজ্যিক সম্পর্কের সাক্ষ্য দেয়।',
        'যে দুর্গে ব্রিটিশ আমলে স্বাধীনতা সংগ্রামীদের বন্দী রাখা হয়েছিল, সেখানে একটি পরিবেশবান্ধব প্লাস্টিকহীন তথ্যকেন্দ্র চালু হতে চলেছে।',
      ],
      hi: [
        'बक्सा टाइगर रिजर्व के 2,844 फीट ऊंचे जंगलों में स्थित ऐतिहासिक बक्सा फोर्ट का संरक्षण पुरातत्व विशेषज्ञों द्वारा किया जा रहा है।',
        'पूर्वी प्राचीर की सफाई के दौरान ग्रेनाइट के दुर्लभ शिलालेख मिले, जो प्राचीन काल में भूटान और कूचबिहार साम्राज्य के बीच व्यापारिक समझौतों का विवरण देते हैं।',
        'क्रांतिकारियों की पावन भूमि रहे इस किले पर जल्द ही वन विभाग के सहयोग से एक प्लास्टिक-मुक्त पर्यटक सूचना केंद्र खुलेगा।',
      ],
      ne: [
        'बक्सा जङ्गलको २,८४४ फिट उचाइमा रहेको ऐतिहासिक बक्सा किल्लालाई जोगाउन विशेष संरक्षण कार्य भइरहेको छ।',
        'किल्लाको भित्ता सफा गर्दा प्राचीन ग्रेनाइट शिलालेख भेटिएका छन्, जसले भुटान र कुचबिहार राज्यबीचको पुरानो व्यापारिक सम्बन्ध देखाउँछ।',
        'नेपाली र डुकपा समुदायका गाउँलेहरूको सहभागितामा यहाँ प्लास्टिकरहित वातावरणमैत्री पदयात्रा केन्द्र निर्माण भइरहेको छ।',
      ],
    },
    media: [
      {
        id: 'med-06',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        caption: {
          en: 'Misty stone ramparts of the historic Buxa Fort high in the Alipurduar hills.',
          bn: 'আলিপুরদুয়ারের পাহাড়ের চূড়ায় অবস্থিত ঐতিহাসিক বক্সা দুর্গের কুয়াশাচ্ছন্ন প্রাঙ্গণ।',
          hi: 'अलीपुरद्वार की पहाड़ियों में धुंध के बीच ऐतिहासिक बक्सा फोर्ट की प्राचीन प्राचीर।',
          ne: 'अलिपुरद्वारको डाँडामा अवस्थित ऐतिहासिक बक्सा किल्लाको हुस्सुले घेरिएको दृश्य।',
        },
        sizeMb: 1.8,
      },
    ],
  },
  {
    id: 'dk-art-006',
    category: 'sports',
    location: 'birpara',
    author: 'Vikram Gurung (Terai Sports & Youth Chronicle)',
    date: '2 Days Ago',
    readTimeMin: 2,
    isBreaking: false,
    isFactChecked: true,
    audioDuration: '1m 10s',
    title: {
      en: 'Dooars Gold Cup Football Tournament Announces 16-Team Fixture at Birpara Stadium',
      bn: 'বীরপাড়া স্টেডিয়ামে ডুয়ার্স গোল্ড কাপ ফুটবল: ১৬টি দলের পূর্ণাঙ্গ সূচি ঘোষণা',
      hi: 'बीरपाड़ा स्टेडियम में डूवर्स गोल्ड कप फुटबॉल: 16 टीमों के मुकाबलों की घोषणा',
      ne: 'बिरपारा रंगशालामा डुवर्स गोल्ड कप फुटबल: १६ टोलीहरूको खेल तालिका सार्वजनिक',
    },
    summary: {
      en: 'Historic grassroots tournament will feature top clubs from Darjeeling hills, Assam tea belt, Sikkim and local Dooars powerhouses competing under floodlights.',
      bn: 'বীরপাড়া গান্ধী ময়দানে ঐতিহ্যবাহী ডুয়ার্স গোল্ড কাপের আসর বসতে চলেছে। দার্জিলিং, আসাম, সিকিম ও স্থানীয় সেরা ফুটবল ক্লাব অংশ নিচ্ছে।',
      hi: 'बीरपाड़ा स्टेडियम में प्रतिष्ठित डूवर्स गोल्ड कप के तहत दार्जिलिंग, असम, सिक्किम और डूवर्स की 16 प्रमुख फुटबॉल टीमों के बीच रोमांचक मुकाबले होंगे।',
      ne: 'बिरपारा रंगशालामा प्रतिष्ठित डुवर्स गोल्ड कप अन्तर्गत दार्जिलिङ, असम, सिक्किम र डुवर्सका उत्कृष्ट टोलीहरू भिड्नेछन्।',
    },
    bullets: {
      en: [
        'Opening match between Birpara FC and Kalchini Sporting Club on Friday evening.',
        'Free admission for students and junior football academy players across North Bengal.',
        'High-definition live audio and text commentary available exclusively in Dooars Khabar.',
      ],
      bn: [
        'উদ্বোধনী ম্যাচে বীরপাড়া এফসি বনাম কালচিনি স্পোর্টিং মুখোমুখি হবে।',
        'উত্তরবঙ্গের স্কুল শিক্ষার্থী ও স্থানীয় একাডেমি খেলোয়াড়দের জন্য প্রবেশ সম্পূর্ণ বিনামূল্যে।',
        'ডুয়ার্স খবর অ্যাপে থাকছে প্রতিটি খেলার ধারাভাষ্য ও তাজা স্কোর।',
      ],
      hi: [
        'उद्घाटन मैच शुक्रवार शाम बीरपाड़ा एफसी और कालचीनी क्लब के बीच खेला जाएगा।',
        'स्कूलों के विद्यार्थियों और जूनियर खिलाड़ियों के लिए प्रवेश पूरी तरह निशुल्क।',
        'डूवर्स खबर ऐप पर सभी मैचों का लाइव स्कोर और मुख्य विवरण उपलब्ध रहेगा।',
      ],
      ne: [
        'उद्घाटन खेल शुक्रबार साँझ बिरपारा एफसी र कालचिनी स्पार्टिङ क्लबबीच हुनेछ।',
        'विद्यार्थी तथा कनिष्ठ खेलाडीहरूका लागि रंगशालामा निःशुल्क प्रवेश।',
        'डुवर्स खबर एपमा खेलको प्रत्यक्ष ताजा अपडेट उपलब्ध रहनेछ।',
      ],
    },
    content: {
      en: [
        'Birpara is gripped by football fever as the organizing committee of the historic Dooars Gold Cup unveiled the official draw for the 38th edition of the region’s premier soccer tournament.',
        'With match venues prepared with lush natural turf and floodlights, local football enthusiasts across Madarihat, Falakata, and Binnaguri military cantonment are eagerly looking forward to high-tempo football matches.',
        'The champions will take home the rolling silver Dooars Cup along with prize bursaries aimed at supporting local rural football grassroots infrastructure.',
      ],
      bn: [
        'ঐতিহাসিক ডুয়ার্স গোল্ড কাপকে ঘিরে বীরপাড়া সহ গোটা ডুয়ার্স জুড়ে ফুটবল প্রেমীদের মধ্যে উন্মাদনা তুঙ্গে।',
        'বীরপাড়া গান্ধী মাঠের ঘাস ও আধুনিক আলো সংস্কার করে টুর্নামেন্ট আয়োজনের জন্য প্রস্তুত করা হয়েছে।',
        'চ্যাম্পিয়ন দলকে ঐতিহ্যবাহী ডুয়ার্স কাপ ট্রফির পাশাপাশি স্থানীয় ফুটবল প্রতিভা বিকাশের জন্য আর্থিক অনুদান দেওয়া হবে।',
      ],
      hi: [
        'ऐतिहासिक डूवर्स गोल्ड कप को लेकर बीरपाड़ा और आसपास के चाय बागानों में फुटबॉल का जबरदस्त उत्साह है।',
        'मैदान को हरी घास और आधुनिक रोशनी से सुसज्जित किया गया है ताकि दर्शक शाम के रोमांचक मैचों का आनंद ले सकें।',
        'विजेता टीम को प्रतिष्ठित चांदी की ट्रॉफी के साथ जमीनी स्तर के खेल विकास के लिए पुरस्कार राशि दी जाएगी।',
      ],
      ne: [
        'ऐतिहासिक डुवर्स गोल्ड कपलाई लिएर बिरपारा तथा सम्पूर्ण डुवर्स क्षेत्रमा फुटबलको रौनक छाएको छ।',
        'मैदानमा प्राकृतिक दुबो र फ्लडलाइटको राम्रो व्यवस्था गरिएको छ।',
        'विजेता टोलीलाई आकर्षक शिल्ड तथा ग्रामीण फुटबल विकासको लागि विशेष पुरस्कार प्रदान गरिनेछ।',
      ],
    },
    media: [
      {
        id: 'med-07',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
        caption: {
          en: 'Passionate youth football match underway amidst the lush backdrop of Dooars.',
          bn: 'ডুয়ার্সের সবুজ মাঠের মাঝে স্থানীয় তরুণ ফুটবলারদের উদ্দীপনা।',
          hi: 'डूवर्स के हरे-भरे मैदान पर स्थानीय युवाओं का रोमांचक फुटबॉल मैच।',
          ne: 'डुवर्सको हरियो मैदानमा युवा फुटबलरहरूको उत्साहजनक खेल।',
        },
        sizeMb: 1.3,
      },
    ],
  },
];

export const DAILY_SUMMARIES: DailySummary[] = [
  {
    id: 'sum-morning-01',
    date: 'Today, 07:00 AM',
    edition: 'morning',
    headline: {
      en: 'Dooars Morning Briefing: Rhino Count Hits 302, Tea Prices Firm, Clear River Trails',
      bn: 'প্রভাতী ডুয়ার্স সংক্ষেপ: জলদাপাড়ায় গন্ডার বৃদ্ধি, চায়ের বাজার চাঙ্গা, তিস্তা শান্ত',
      hi: 'प्रातःकालीन डूवर्स बुलेटिन: जलदापाड़ा में गैंडों की वृद्धि, चाय बाजार में तेजी, नदियां शांत',
      ne: 'बिहानी डुवर्स संक्षेप: जल्दापारामा गैँडा बढे, चियाको राम्रो बजार, शान्त नदिहरू',
    },
    audioDuration: '1m 00s',
    audioScript: {
      en: 'Good morning from Dooars Khabar. In today’s 60-second summary: Jaldapara National Park reports a 14% surge in one-horned rhinos, crossing 302 individuals. At the Siliguri Tea Auction, premium Dooars autumn flush fetched record bids up to ₹345 per kilo. Meanwhile, Teesta and Torsa river discharges have normalized under clear skies, opening scenic eco-tourism and birdwatching spots. Have a peaceful, productive day.',
      bn: 'ডুয়ার্স খবর থেকে শুভ সকাল। আজকের ৬০ সেকেন্ডের প্রভাতী সংক্ষেপ: জলদাপাড়া জাতীয় উদ্যানে গন্ডারের সংখ্যা বেড়ে ৩০২-এ পৌঁছেছে। শিলিগুড়ি চা নিলামে ডুয়ার্স চায়ের দাম সর্বোচ্চ ৩৪৫ টাকা প্রতি কেজিতে উঠেছে। তিস্তা ও তোর্ষা নদীর জলস্তর বিপদসীমার নিচে স্বাভাবিক রয়েছে এবং পর্যটন ও পরিযায়ী পাখির কলকাকলি মুখরিত হয়েছে। আপনার দিনটি শুভ হোক।',
      hi: 'डूवर्स खबर की ओर से सुप्रभात। आज का 60 सेकंड का मुख्य समाचार: जलदापाड़ा में एक सींग वाले गैंडों की संख्या बढ़कर 302 हो गई है। सिलीगुड़ी चाय नीलामी में डूवर्स की चाय ₹345 प्रति किलो तक बिकी। तीस्ता व तोर्षा नदियों का जलस्तर सामान्य है और मौसम बेहद सुहावना बना हुआ है। आपका दिन शुभ हो।',
      ne: 'डुवर्स खबरको बिहानी सेवामा स्वागत छ। आजको ६० सेकेन्डको मुख्य समाचार: जल्दापारामा एकसिङ्गे गैँडाको संख्या बढेर ३०२ पुगेको छ। सिलीगुड़ी चिया लिलामीमा डुवर्स चियाको मूल्य ₹३४५ प्रतिकिलो पुगेको छ। तिस्ता र तोर्षा नदीहरू शान्त छन् र मौसम रमाइलो बनेको छ। तपाईंको दिन शुभ रहोस्।',
    },
    points: {
      en: [
        'Wildlife: Jaldapara census records 302 rhinos with 38 calves; zero poaching for 36 months.',
        'Economy: Tea auction prices rally 18% as autumn pluckings yield rich liquors.',
        'Nature: Water levels on Teesta, Murti, and Torsa remain safely stable; pleasant 22°C daytime.',
      ],
      bn: [
        'বন্যপ্রাণী: জলদাপাড়ায় মোট ৩০২টি গন্ডার নথিভুক্ত, বিগত ৩৬ মাসে কোনো চোরাশিকার হয়নি।',
        'অর্থনীতি: শিলিগুড়ি নিলামে ডুয়ার্স চায়ের দাম ১৮% বৃদ্ধি, শ্রমিকদের বোনাস সম্পন্ন।',
        'প্রকৃতি: তিস্তা, মূর্তি ও তোর্ষায় জলপ্রবাহ স্বাভাবিক; মনোরম রৌদ্রোজ্জ্বল আবহাওয়া।',
      ],
      hi: [
        'वन्यजीव: जलदापाड़ा में गैंडों की संख्या 302 तक पहुंची, 38 स्वस्थ शावक मिले।',
        'अर्थव्यवस्था: डूवर्स चाय के भाव में 18% का उछाल, उत्पादकों में उत्साह।',
        'प्रकृति: तीस्ता, तोर्षा और मूर्ति नदियां शांत, दिन का तापमान 22°C के आसपास सुखद।',
      ],
      ne: [
        'वन्यजन्तु: जल्दापारामा गैँडाको संख्या ३०२ पुग्यो, ३८ नयाँ पाछाहरू भेटिए।',
        'अर्थतन्त्र: सिलीगुड़ी लिलामीमा डुवर्स चियाको भाउ १८% ले वृद्धि।',
        'प्रकृति: तिस्ता र तोर्षा नदीहरू शान्त, दिनभर घमाइलो र मनमोहक मौसम।',
      ],
    },
  },
  {
    id: 'sum-evening-01',
    date: 'Yesterday, 06:30 PM',
    edition: 'evening',
    headline: {
      en: 'Evening Terai Digest: Digital Border Speeds, Buxa Fort Heritage, Football Fixtures',
      bn: 'সান্ধ্য তরাই ডাইজেস্ট: জয়গাঁ সীমান্তে গতি, বক্সা দুর্গের আবিষ্কার, ফুটবল উন্মাদনা',
      hi: 'सांध्य तराई डाइजेस्ट: भारत-भूटान डिजिटल गेट, बक्सा फोर्ट संरक्षण, फुटबॉल की तैयारी',
      ne: 'साँझको तराई डाइजेस्ट: डिजिटल सीमाद्वार, बक्सा किल्लाको सम्पदा, फुटबल तयारी',
    },
    audioDuration: '1m 00s',
    audioScript: {
      en: 'Good evening. Here is your Dooars Khabar end-of-day digest: The Jaigaon-Phuentsholing digital pedestrian corridors slashed border crossing times to four minutes. In Alipurduar, historical preservation at Buxa Fort unearthed 19th-century trade records. And Birpara is gearing up for the 38th Dooars Gold Cup with sixteen teams. Stay safe and enjoy an ad-free calm evening.',
      bn: 'শুভ সন্ধ্যা। আজকের সান্ধ্য ডাইজেস্ট: জয়গাঁ-ফুন্টশোলিং সীমান্তে নতুন স্বয়ংক্রিয় গেটে ৪ মিনিটেই যাতায়াত সম্ভব হচ্ছে। বক্সা দুর্গে উনিশ শতকের প্রাচীন ভারত-ভুটান বাণিজ্য লিপি আবিষ্কৃত হয়েছে। বীরপাড়ায় ১৬ দলের ডুয়ার্স গোল্ড কাপ ফুটবলের প্রস্তুতি তুঙ্গে। শান্ত ও বিজ্ঞাপনহীন সন্ধ্যায় আমাদের সাথেই থাকুন।',
      hi: 'शुभ संध्या। डूवर्स खबर का शाम का सार: जयगांव-फुनशोलिंग सीमा पर नए डिजिटल गेट से 4 मिनट में आवाजाही संभव हुई। बक्सा फोर्ट में 19वीं सदी के ऐतिहासिक व्यापारिक दस्तावेज मिले। बीरपाड़ा में डूवर्स गोल्ड कप की 16 टीमों के मुकाबलों की घोषणा। शांतिपूर्ण शाम की शुभकामनाएं।',
      ne: 'शुभ साँझ। डुवर्स खबरको साँझको मुख्य बुँदाहरू: जयगाउँ-फुन्टशोलिङ डिजिटल गेटबाट सीमा पार गर्न मात्र ४ मिनेट लाग्ने भएको छ। बक्सा किल्लामा १९औँ शताब्दीका ऐतिहासिक व्यापारिक अभिलेख भेटिए। बिरपारामा डुवर्स गोल्ड कपको खेल तालिका घोषणा भयो। शुभ रात्रि।',
    },
    points: {
      en: [
        'Cross-Border: Contactless biometrics eliminate queues at Indo-Bhutan friendship gate.',
        'Heritage: Conservation at Buxa Fort reveals centuries-old Indo-Tibetan trade tablets.',
        'Community: Birpara prepares Gandhi Ground for the prestigious Dooars Gold Cup.',
      ],
      bn: [
        'সীমান্ত: জয়গাঁ-ফুন্টশোলিং সীমান্তে ডিজিটাল সিস্টেমে সাধারণ মানুষ ও পর্যটকদের স্বস্তি।',
        'ঐতিহ্য: বক্সা ফোর্টের সংস্কারে শতাব্দী প্রাচীন ঐতিহাসিক বাণিজ্যের শিলালিপি উদ্ধার।',
        'খেলাধুলা: বীরপাড়ায় আলো ও সবুজ মাঠে ১৬ দলের ডুয়ার্স কাপ ফুটবলের বর্ণাঢ্য আয়োজন।',
      ],
      hi: [
        'सीमा व्यापार: जयगांव-फुनशोलिंग गेट पर बायोमेट्रिक स्कैनर से कतारें खत्म।',
        'विरासत: बक्सा फोर्ट में सदियों पुराने भारत-तिब्बत व्यापारिक दस्तावेज सुरक्षित मिले।',
        'खेलकूद: बीरपाड़ा स्टेडियम में डूवर्स गोल्ड कप के लिए खेल प्रेमियों में जबरदस्त रोमांच।',
      ],
      ne: [
        'सीमा: जयगाउँ-फुन्टशोलिङ गेटमा डिजिटल प्रणालीले यात्रुहरूलाई छिटो छरितो सुविधा।',
        'सम्पदा: बक्सा किल्लामा शताब्दीऔँ पुरानो भारत-तिब्बत व्यापारिक अभिलेख प्राप्त।',
        'खेलकुद: बिरपारामा १६ टोलीहरूको सहभागितामा डुवर्स गोल्ड कप सुरु हुँदै।',
      ],
    },
  },
];

export const INITIAL_ALERTS: NotificationAlert[] = [
  {
    id: 'alt-001',
    category: 'wildlife',
    location: 'madarihat',
    timestamp: '15 mins ago',
    severity: 'warning',
    isRead: false,
    title: {
      en: 'Wildlife Alert: Wild Elephant Herd Crossing Near Madarihat Tea Garden NH-317',
      bn: 'বন্যপ্রাণী সতর্কবার্তা: মাদারিহাট চা বাগান সংলগ্ন ৩১৭ নম্বর সড়কে হাতির দল',
      hi: 'हाथी आवागमन चेतावनी: मदारीहाट चाय बागान के पास NH-317 पर हाथियों का झुंड',
      ne: 'वन्यजन्तु सतर्कता: मदारीहाट चिया बगान नजिकै NH-317 सडकमा हात्तीको बथान',
    },
    message: {
      en: 'A herd of 9 wild elephants is currently crossing from Jaldapara South Ridge into Dalsingpara tea block. Commuters on NH-317 advised to proceed cautiously and avoid high-beam headlights.',
      bn: 'জলদাপাড়া দক্ষিণ রিজ থেকে ৯টি বুনো হাতির দল ডালসিংপাড়া চা বাগানের দিকে রাস্তা পার হচ্ছে। ৩১৭ নম্বর জাতীয় সড়কের গাড়িচালকদের ধীরগতিতে ও শান্তভাবে চলার পরামর্শ বন দপ্তরের।',
      hi: 'जलदापाड़ा से 9 हाथियों का एक झुंड डालसिंगपाड़ा बागान की ओर जा रहा है। राष्ट्रीय राजमार्ग 317 पर वाहन चालकों को धीमी गति रखने और हॉर्न न बजाने की सलाह दी गई है।',
      ne: 'जल्दापाराबाट ९ वटा जङ्गली हात्तीहरूको बथान डालसिङपारा चिया बगानतर्फ गइरहेको छ। NH-317 सडकमा यात्रा गर्नेहरूलाई होसियारी अपनाउन आग्रह गरिएको छ।',
    },
  },
  {
    id: 'alt-002',
    category: 'tea',
    location: 'malbazar',
    timestamp: '2 hours ago',
    severity: 'info',
    isRead: false,
    title: {
      en: 'Tea Bulletin: Minimum Green Leaf Floor Benchmark Revised for Dooars Small Growers',
      bn: 'চা বুলেটিন: ডুয়ার্সের ক্ষুদ্র চাষীদের জন্য সবুজ পাতার সহায়ক মূল্য পুনর্বিবেচনা',
      hi: 'चाय बुलेटिन: डूवर्स के छोटे चाय किसानों के लिए हरी पत्तियों का समर्थन मूल्य तय',
      ne: 'चिया बुलेटिन: डुवर्सका साना कृषकहरूका लागि हरियो चिया पत्तीको न्यूनतम मूल्य निर्धारण',
    },
    message: {
      en: 'Tea Board of India North Bengal office published Sale 45 advisory setting standard base price at ₹24.80/kg for unbruised fine-two-leaves plucking.',
      bn: 'টি বোর্ড অফ ইন্ডিয়ার উত্তরবঙ্গ অফিস আগামী সপ্তাহের জন্য মানসম্মত দুই পাতা ও একটি কুঁড়ির ভিত্তি দর কেজি প্রতি ২৪.৮০ টাকা ধার্য করেছে।',
      hi: 'भारतीय चाय बोर्ड ने उच्च गुणवत्ता वाली पत्तियों के लिए न्यूनतम खरीद मूल्य ₹24.80 प्रति किलो घोषित किया है।',
      ne: 'भारतीय चिया बोर्डले गुणस्तरीय दुई पात एक सुइरो चियाको लागि न्यूनतम मूल्य ₹२४.८० प्रतिकिलो निर्धारण गरेको छ।',
    },
  },
  {
    id: 'alt-003',
    category: 'weather',
    location: 'jalpaiguri',
    timestamp: '5 hours ago',
    severity: 'info',
    isRead: true,
    title: {
      en: 'Weather Advisory: Clear Skies & Light Fog Across Foothills for Next 48 Hours',
      bn: 'আবহাওয়া বার্তা: আগামী ৪৮ ঘণ্টায় ডুয়ার্স ও পাদদেশে পরিষ্কার আকাশ ও ভোরের কুয়াশা',
      hi: 'मौसम सूचना: अगले 48 घंटों में तलहटी में साफ मौसम और सुबह हल्की धुंध',
      ne: 'मौसम सूचना: आगामी ४८ घण्टामा डुवर्स र पहाडी फेदीमा मौसम सफा र बिहानी हुस्सु',
    },
    message: {
      en: 'IMD Gangtok and Jalpaiguri stations predict crisp autumn weather, zero rainfall risk, and night temperatures dipping to 17°C across Dooars tea belts.',
      bn: 'আলিপুর আবহাওয়া দপ্তর জানিয়েছে, আগামী দুদিন বৃষ্টির কোনো সম্ভাবনা নেই। রাতে শীতের আমেজ ও দিনে মনোরম আবহাওয়া বজায় থাকবে।',
      hi: 'मौसम विभाग के अनुसार अगले दो दिनों तक बारिश की कोई संभावना नहीं है। रात के तापमान में हल्की गिरावट के साथ गुलाबी ठंडक रहेगी।',
      ne: 'मौसम विभागका अनुसार आगामी दुई दिनसम्म वर्षाको कुनै सम्भावना छैन। बिहानीपख हुस्सु र दिउँसो पारिलो घाम लाग्नेछ।',
    },
  },
];
