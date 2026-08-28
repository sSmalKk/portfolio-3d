
import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface VisitorData {
  ip_address?: string;
  user_agent: string;
  country?: string;
  city?: string;
  device_type: string;
  browser: string;
  os: string;
  screen_resolution: string;
  language: string;
  referrer: string;
  page_url: string;
}

export const useAnalytics = () => {
  const visitorIdRef = useRef<string | null>(null);
  const sessionStartRef = useRef<number>(Date.now());

  const getDeviceInfo = () => {
    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
    
    let deviceType = 'desktop';
    if (isMobile) deviceType = 'mobile';
    if (isTablet) deviceType = 'tablet';

    let browser = 'unknown';
    if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari')) browser = 'Safari';
    else if (ua.includes('Edge')) browser = 'Edge';

    let os = 'unknown';
    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iOS')) os = 'iOS';

    return { deviceType, browser, os };
  };

  const trackVisitor = async () => {
    try {
      const { deviceType, browser, os } = getDeviceInfo();
      
      const visitorData: VisitorData = {
        user_agent: navigator.userAgent,
        device_type: deviceType,
        browser,
        os,
        screen_resolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        referrer: document.referrer,
        page_url: window.location.href
      };

      const { data, error } = await supabase
        .from('visitor_analytics')
        .insert([visitorData])
        .select()
        .single();

      if (error) {
        console.error('Error tracking visitor:', error);
        return null;
      }

      visitorIdRef.current = data.id;
      return data.id;
    } catch (error) {
      console.error('Error in trackVisitor:', error);
      return null;
    }
  };

  const trackPageView = async (pageUrl: string) => {
    if (!visitorIdRef.current) return;

    try {
      await supabase
        .from('page_views')
        .insert([{
          visitor_id: visitorIdRef.current,
          page_url: pageUrl
        }]);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  const trackInteraction = async (type: string, elementId?: string, elementClass?: string, coordinates?: { x: number; y: number }) => {
    if (!visitorIdRef.current) return;

    try {
      await supabase
        .from('user_interactions')
        .insert([{
          visitor_id: visitorIdRef.current,
          interaction_type: type,
          element_id: elementId,
          element_class: elementClass,
          coordinates: coordinates ? JSON.stringify(coordinates) : null
        }]);
    } catch (error) {
      console.error('Error tracking interaction:', error);
    }
  };

  const updateSessionDuration = async () => {
    if (!visitorIdRef.current) return;

    try {
      const duration = Math.floor((Date.now() - sessionStartRef.current) / 1000);
      await supabase
        .from('visitor_analytics')
        .update({ session_duration: duration })
        .eq('id', visitorIdRef.current);
    } catch (error) {
      console.error('Error updating session duration:', error);
    }
  };

  useEffect(() => {
    trackVisitor();

    // Track page unload
    const handleBeforeUnload = () => {
      updateSessionDuration();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return {
    trackPageView,
    trackInteraction,
    updateSessionDuration
  };
};
