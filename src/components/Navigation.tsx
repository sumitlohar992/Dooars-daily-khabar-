import React from 'react';
import { 
  Newspaper, 
  Sparkles, 
  Download, 
  Bell, 
  SlidersHorizontal,
  WifiOff,
  Compass
} from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';

export type NavTab = 'feed' | 'briefing' | 'offline' | 'alerts' | 'settings';

interface NavigationProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  language: Language;
  unreadAlertsCount: number;
  offlineCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onTabChange,
  language,
  unreadAlertsCount,
  offlineCount,
}) => {
  const tabs = [
    {
      id: 'feed' as NavTab,
      label: UI_TEXT.navFeed[language],
      icon: Newspaper,
    },
    {
      id: 'briefing' as NavTab,
      label: UI_TEXT.navBriefing[language],
      icon: Sparkles,
      highlight: true,
    },
    {
      id: 'offline' as NavTab,
      label: UI_TEXT.navOffline[language],
      icon: Download,
      badge: offlineCount > 0 ? offlineCount : undefined,
    },
    {
      id: 'alerts' as NavTab,
      label: UI_TEXT.navAlerts[language],
      icon: Bell,
      badge: unreadAlertsCount > 0 ? unreadAlertsCount : undefined,
      badgeColor: 'bg-rose-500',
    },
    {
      id: 'settings' as NavTab,
      label: UI_TEXT.navSettings[language],
      icon: SlidersHorizontal,
    },
  ];

  return (
    <>
      {/* Desktop Sub-navigation bar under header */}
      <nav className="hidden md:block bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 text-xs font-semibold border-b-2 transition cursor-pointer ${
                    isActive
                      ? 'border-sky-600 text-sky-700 dark:text-sky-300 bg-sky-50/40 dark:bg-sky-950/20'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${tab.highlight && !isActive ? 'text-sky-500' : ''}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold text-white ${tab.badgeColor || 'bg-sky-600'}`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1.5 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
            Distraction-Free Dooars Reading
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1 flex items-center justify-around shadow-lg">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 font-normal hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {tab.badge && (
                  <span className={`absolute -top-1 -right-2 px-1 py-0.2 rounded-full text-[9px] font-bold text-white ${tab.badgeColor || 'bg-sky-600'}`}>
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight truncate max-w-[64px]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
