import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export interface InquiryPreset {
  service?: string;
  machineType?: string;
  message?: string;
}

interface RouterContextValue {
  pathname: string;
  navigate: (to: string, options?: { scrollToId?: string; inquiryPreset?: InquiryPreset }) => void;
  inquiryPreset: InquiryPreset | null;
  clearInquiryPreset: () => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function normalizePath(raw: string): string {
  const [clean] = raw.split(/[?#]/);
  if (!clean || clean === '/') return '/';
  return clean.endsWith('/') ? clean.slice(0, -1) : clean;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() => normalizePath(window.location.pathname));
  const [inquiryPreset, setInquiryPreset] = useState<InquiryPreset | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const clearInquiryPreset = useCallback(() => {
    setInquiryPreset(null);
  }, []);

  const navigate = useCallback(
    (to: string, options?: { scrollToId?: string; inquiryPreset?: InquiryPreset }) => {
      const targetPath = normalizePath(to);

      if (options?.inquiryPreset) {
        setInquiryPreset({ ...options.inquiryPreset });
      }

      if (targetPath !== normalizePath(window.location.pathname)) {
        window.history.pushState({}, '', targetPath);
        setPathname(targetPath);
      }

      const scrollTargetId = options?.scrollToId;
      window.requestAnimationFrame(() => {
        if (scrollTargetId) {
          const el = document.getElementById(scrollTargetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
          // Retry briefly after route render
          window.setTimeout(() => {
            const delayedEl = document.getElementById(scrollTargetId);
            if (delayedEl) {
              delayedEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 80);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    },
    []
  );

  const value = useMemo(
    () => ({ pathname, navigate, inquiryPreset, clearInquiryPreset }),
    [pathname, navigate, inquiryPreset, clearInquiryPreset]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return ctx;
}

interface AppLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  scrollToId?: string;
  inquiryPreset?: InquiryPreset;
}

export function AppLink({
  to,
  scrollToId,
  inquiryPreset,
  onClick,
  children,
  ...rest
}: AppLinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onClick?.(e);
    navigate(to, { scrollToId, inquiryPreset });
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
