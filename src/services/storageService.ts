import { Article, AppSettings, NotificationAlert, OfflineArticleRecord } from '../types';
import { INITIAL_ARTICLES, INITIAL_ALERTS } from '../data/newsData';

const SETTINGS_KEY = 'dk_app_settings_v1';
const OFFLINE_ARTICLES_KEY = 'dk_offline_articles_v1';
const ALERTS_KEY = 'dk_alerts_v1';

export const DEFAULT_SETTINGS: AppSettings = {
  language: 'en',
  theme: 'light',
  fontSize: 'base',
  fontFamily: 'serif',
  bionicReading: false,
  selectedCategories: ['tea', 'wildlife', 'weather', 'governance', 'culture', 'sports', 'national'],
  selectedLocations: ['all', 'alipurduar', 'madarihat', 'jalpaiguri', 'malbazar', 'jaigaon', 'birpara', 'siliguri', 'coochbehar'],
  alertCorridors: true,
  alertWeather: true,
  alertBreaking: true,
  alertTeaAuction: true,
  soundEnabled: true,
  simulatedOffline: false,
};

export const StorageService = {
  getSettings(): AppSettings {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_SETTINGS;
  },

  saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save settings:', e);
    }
  },

  getOfflineArticles(): OfflineArticleRecord[] {
    try {
      const raw = localStorage.getItem(OFFLINE_ARTICLES_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
      // If nothing saved yet, pre-save 1 article as a demo
      const initialSaved: OfflineArticleRecord[] = [
        {
          article: INITIAL_ARTICLES[0],
          savedAt: Date.now() - 3600000,
          downloadedMedia: INITIAL_ARTICLES[0].media,
          offlineSizeMb: 4.6,
        },
      ];
      localStorage.setItem(OFFLINE_ARTICLES_KEY, JSON.stringify(initialSaved));
      return initialSaved;
    } catch {
      return [];
    }
  },

  isArticleDownloaded(articleId: string): boolean {
    const list = this.getOfflineArticles();
    return list.some(item => item.article.id === articleId);
  },

  saveArticleOffline(article: Article): void {
    try {
      const list = this.getOfflineArticles();
      if (!list.some(item => item.article.id === article.id)) {
        const mediaSize = article.media.reduce((acc, m) => acc + (m.sizeMb || 1), 0);
        const record: OfflineArticleRecord = {
          article,
          savedAt: Date.now(),
          downloadedMedia: article.media,
          offlineSizeMb: Math.round((mediaSize + 0.2) * 10) / 10,
        };
        const updated = [record, ...list];
        localStorage.setItem(OFFLINE_ARTICLES_KEY, JSON.stringify(updated));
      }
    } catch (e) {
      console.warn('Failed to save article offline:', e);
    }
  },

  removeArticleOffline(articleId: string): void {
    try {
      const list = this.getOfflineArticles();
      const updated = list.filter(item => item.article.id !== articleId);
      localStorage.setItem(OFFLINE_ARTICLES_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to remove article offline:', e);
    }
  },

  getOfflineTotalSize(): { count: number; totalMb: number } {
    const list = this.getOfflineArticles();
    const totalMb = list.reduce((acc, item) => acc + (item.offlineSizeMb || 1), 0);
    return {
      count: list.length,
      totalMb: Math.round(totalMb * 10) / 10,
    };
  },

  getAlerts(): NotificationAlert[] {
    try {
      const raw = localStorage.getItem(ALERTS_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
      localStorage.setItem(ALERTS_KEY, JSON.stringify(INITIAL_ALERTS));
      return INITIAL_ALERTS;
    } catch {
      return INITIAL_ALERTS;
    }
  },

  markAlertAsRead(alertId: string): NotificationAlert[] {
    try {
      const alerts = this.getAlerts().map(a => a.id === alertId ? { ...a, isRead: true } : a);
      localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts));
      return alerts;
    } catch {
      return INITIAL_ALERTS;
    }
  },

  addAlert(alert: NotificationAlert): NotificationAlert[] {
    try {
      const alerts = [alert, ...this.getAlerts()];
      localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts));
      return alerts;
    } catch {
      return [alert];
    }
  },
};
