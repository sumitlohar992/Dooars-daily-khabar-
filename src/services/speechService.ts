import { Language } from '../types';

let currentUtterance: SpeechSynthesisUtterance | null = null;

export const SpeechService = {
  isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  },

  speak(text: string, lang: Language, onEnd?: () => void, onError?: () => void): void {
    if (!this.isSupported()) {
      console.warn('Speech synthesis not supported in this browser.');
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    currentUtterance = utterance;

    // Pick best matching language code
    const langMap: Record<Language, string> = {
      en: 'en-IN',
      bn: 'bn-IN',
      hi: 'hi-IN',
      ne: 'ne-NP',
    };
    utterance.lang = langMap[lang] || 'en-IN';
    utterance.rate = 0.95; // Calm, gentle cadence
    utterance.pitch = 1.0;

    // Find native voice if available
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang.startsWith(utterance.lang.split('-')[0]));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onend = () => {
      currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      currentUtterance = null;
      if (onError) onError();
    };

    window.speechSynthesis.speak(utterance);
  },

  stop(): void {
    if (this.isSupported()) {
      window.speechSynthesis.cancel();
      currentUtterance = null;
    }
  },

  playAlertChime(): void {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // AudioContext may be restricted before gesture
    }
  },
};
