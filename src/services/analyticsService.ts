// src/services/analyticsService.ts
import { supabase } from './supabase';

interface TrackEvent {
  event_name: string;
  metadata?: Record<string, string>;
  page?: string;
  referrer?: string;
  user_agent?: string;
}

export const trackEvent = async (event: TrackEvent) => {
  try {
    await supabase.from('analytics_events').insert([{
      event_name: event.event_name,
      metadata: event.metadata ?? {},
      page: event.page ?? window.location.pathname,
      referrer: (event.referrer ?? document.referrer) || null,
      user_agent: navigator.userAgent,
    }]);
  } catch {
    // Tracking silencioso — não deve quebrar a experiência do utilizador
  }
};
