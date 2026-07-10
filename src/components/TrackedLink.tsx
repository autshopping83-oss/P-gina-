// src/components/TrackedLink.tsx
import { type ReactNode } from 'react';
import { trackEvent } from '../services/analyticsService';

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  metadata?: Record<string, string>;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const TrackedLink = ({
  href, children, className, eventName, metadata, target, rel, onClick,
}: TrackedLinkProps) => {
  const handleClick = () => {
    onClick?.();
    trackEvent({
      event_name: eventName ?? 'cta_click',
      metadata: { ...metadata, destination: href },
      referrer: window.location.href,
    });
  };

  return (
    <a href={href} target={target} rel={rel} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};
