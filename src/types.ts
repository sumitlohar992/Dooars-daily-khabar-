export type Language = 'en' | 'bn' | 'hi' | 'ne';

export type Category = 
  | 'tea' 
  | 'wildlife' 
  | 'weather' 
  | 'governance' 
  | 'culture' 
  | 'sports' 
  | 'national';

export type LocationId = 
  | 'all'
  | 'alipurduar' 
  | 'madarihat' 
  | 'jalpaiguri' 
  | 'malbazar' 
  | 'jaigaon' 
  | 'birpara' 
  | 'siliguri' 
  | 'coochbehar';

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  caption: Record<Language, string>;
  duration?: string;
  sizeMb: number;
}

export interface Article {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  content: Record<Language, string[]>;
  bullets: Record<Language, string[]>;
  category: Category;
  location: LocationId;
  author: string;
  date: string;
  readTimeMin: number;
  media: MediaItem[];
  isBreaking?: boolean;
  isFactChecked: boolean;
  audioDuration?: string;
}

export interface DailySummary {
  id: string;
  date: string;
  edition: 'morning' | 'evening';
  headline: Record<Language, string>;
  points: Record<Language, string[]>;
  audioDuration: string;
  audioScript: Record<Language, string>;
}

export interface NotificationAlert {
  id: string;
  title: Record<Language, string>;
  message: Record<Language, string>;
  category: string;
  location: LocationId;
  timestamp: string;
  severity: 'info' | 'warning' | 'urgent';
  isRead?: boolean;
}

export interface AppSettings {
  language: Language;
  theme: 'light' | 'dark' | 'sepia';
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  fontFamily: 'sans' | 'serif';
  bionicReading: boolean;
  selectedCategories: Category[];
  selectedLocations: LocationId[];
  alertCorridors: boolean;
  alertWeather: boolean;
  alertBreaking: boolean;
  alertTeaAuction: boolean;
  soundEnabled: boolean;
  simulatedOffline: boolean;
}

export interface OfflineArticleRecord {
  article: Article;
  savedAt: number;
  downloadedMedia: MediaItem[];
  offlineSizeMb: number;
}
