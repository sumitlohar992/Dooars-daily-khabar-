import React, { useState } from 'react';
import { 
  Download, 
  Trash2, 
  Play, 
  CheckCircle, 
  Clock, 
  MapPin, 
  HardDrive, 
  FileText, 
  Film, 
  Image as ImageIcon,
  Volume2,
  ExternalLink,
  WifiOff
} from 'lucide-react';
import { Article, Language, OfflineArticleRecord } from '../types';
import { LOCATION_LABELS, CATEGORY_LABELS, UI_TEXT } from '../data/translations';

interface OfflineManagerProps {
  offlineRecords: OfflineArticleRecord[];
  language: Language;
  onSelectArticle: (article: Article) => void;
  onRemoveOffline: (articleId: string) => void;
  onPlaySpeech: (text: string, id: string) => void;
  activeSpeechId: string | null;
}

export const OfflineManager: React.FC<OfflineManagerProps> = ({
  offlineRecords,
  language,
  onSelectArticle,
  onRemoveOffline,
  onPlaySpeech,
  activeSpeechId,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'video' | 'articles'>('all');

  const totalMb = offlineRecords.reduce((acc, r) => acc + (r.offlineSizeMb || 1), 0);
  const totalRounded = Math.round(totalMb * 10) / 10;

  const filteredRecords = offlineRecords.filter(rec => {
    if (filterType === 'video') {
      return rec.article.media?.some(m => m.type === 'video');
    }
    return true;
  });

  const labels = {
    en: {
      title: 'Saved & Offline Hub',
      subtitle: 'Stories, full-resolution photos and video clips stored locally on this device',
      storageUsed: 'Storage Consumed',
      articlesCount: 'Cached Articles',
      cleanStorage: 'Manage Storage',
      allTab: 'All Offline Content',
      videosTab: 'Offline Videos & Clips',
      readOffline: 'Read Story Offline',
      playAudio: 'Play Offline Audio',
      noSaved: 'No offline items downloaded yet',
      noSavedDesc: 'Browse any story and tap the download arrow to make it available without Wi-Fi or mobile data in tea gardens and forest zones.',
    },
    bn: {
      title: 'সংরক্ষিত ও অফলাইন হাব',
      subtitle: 'ইন্টারনেট ছাড়াই পড়ার জন্য আপনার ফোনে সংরক্ষিত সংবাদ, ছবি ও ভিডিও',
      storageUsed: 'ব্যবহৃত স্টোরেজ',
      articlesCount: 'সংরক্ষিত সংবাদ',
      cleanStorage: 'স্টোরেজ পরিচালনা',
      allTab: 'সমস্ত অফলাইন সামগ্রী',
      videosTab: 'অফলাইন ভিডিও ক্লিপ',
      readOffline: 'অফলাইনে পড়ুন',
      playAudio: 'অডিও শুনুন',
      noSaved: 'এখনও কোনো অফলাইন ডেটা সংরক্ষিত নেই',
      noSavedDesc: 'চা বাগান বা নেটওয়ার্কবিহীন বনাঞ্চলে পড়ার জন্য যেকোনো খবরের পাশে থাকা ডাউনলোড আইকনটিতে ট্যাপ করুন।',
    },
    hi: {
      title: 'सेव व ऑफलाइन हब',
      subtitle: 'बिना इंटरनेट के पढ़ने हेतु आपके फोन में संचित खबरें, फोटो और वीडियो',
      storageUsed: 'प्रयुक्त मेमोरी',
      articlesCount: 'सुरक्षित खबरें',
      cleanStorage: 'मेमोरी प्रबंधन',
      allTab: 'सभी ऑफलाइन सामग्री',
      videosTab: 'ऑफलाइन वीडियो',
      readOffline: 'ऑफलाइन पढ़ें',
      playAudio: 'ऑडियो सुनें',
      noSaved: 'अभी कोई ऑफलाइन खबर सेव नहीं है',
      noSavedDesc: 'चाय बागानों व घने वनों में बिना नेटवर्क के पढ़ने के लिए किसी भी खबर पर डाउनलोड बटन दबाएं।',
    },
    ne: {
      title: 'सुरक्षित तथा अफलाइन हब',
      subtitle: 'इन्टरनेट बिना पढ्नको लागि तपाईंको डिभाइसमा सुरक्षित समाचार, तस्बिर र भिडियो',
      storageUsed: 'प्रयोग भएको मेमोरी',
      articlesCount: 'सुरक्षित समाचारहरू',
      cleanStorage: 'मेमोरी व्यवस्थापन',
      allTab: 'सबै अफलाइन सामग्री',
      videosTab: 'अफलाइन भिडियोहरू',
      readOffline: 'अफलाइन पढ्नुहोस्',
      playAudio: 'अडियो सुन्नुहोस्',
      noSaved: 'अहिलेसम्म कुनै अफलाइन सामग्री छैन',
      noSavedDesc: 'चिया बगान र नेटवर्क नभएको जङ्गल क्षेत्रमा पढ्नको लागि कुनै पनि समाचारमा डाउनलोड थिच्नुहोस्।',
    },
  };

  const t = labels[language] || labels.en;

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
      
      {/* Overview Stat Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-sky-900 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <WifiOff className="h-4 w-4" />
              <span>Offline Storage Active</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mt-1 text-white">{t.title}</h2>
            <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-lg">{t.subtitle}</p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shrink-0">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-sky-200">{t.storageUsed}</p>
              <p className="text-xl font-extrabold text-white">{totalRounded} MB</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-sky-200">{t.articlesCount}</p>
              <p className="text-xl font-extrabold text-white">{offlineRecords.length}</p>
            </div>
          </div>
        </div>

        {/* Content filter pills */}
        <div className="flex items-center gap-2 mt-5">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              filterType === 'all'
                ? 'bg-sky-500 text-white'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
          >
            {t.allTab} ({offlineRecords.length})
          </button>
          <button
            onClick={() => setFilterType('video')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              filterType === 'video'
                ? 'bg-sky-500 text-white'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
          >
            <Film className="h-3.5 w-3.5" />
            {t.videosTab}
          </button>
        </div>
      </div>

      {/* Offline Records List */}
      {filteredRecords.length === 0 ? (
        <div className="p-10 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 mx-auto">
            <Download className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">{t.noSaved}</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">{t.noSavedDesc}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRecords.map(record => {
            const article = record.article;
            const title = article.title[language] || article.title.en;
            const summary = article.summary[language] || article.summary.en;
            const categoryLabel = CATEGORY_LABELS[article.category]?.[language] || article.category;
            const locationLabel = LOCATION_LABELS[article.location]?.[language] || article.location;

            const hasVideo = article.media?.some(m => m.type === 'video');

            return (
              <div
                key={article.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top badges */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-semibold text-[11px]">
                      {categoryLabel}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {record.offlineSizeMb} MB cached
                    </span>
                  </div>

                  {/* Thumbnail if present */}
                  {article.media && article.media[0] && (
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 bg-black">
                      <img
                        src={article.media[0].url}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                      {hasVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="h-10 w-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                            <Play className="h-5 w-5 ml-0.5 fill-current" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug line-clamp-2">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {summary}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition cursor-pointer"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    {t.readOffline}
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onPlaySpeech(summary, `offline-${article.id}`)}
                      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                      title={t.playAudio}
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onRemoveOffline(article.id)}
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer"
                      title="Delete from offline"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
