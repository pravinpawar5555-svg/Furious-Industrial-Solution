import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export function useSEO({ title, description, path, keywords, structuredData }: SEOConfig) {
  useEffect(() => {
    const fullUrl = `${window.location.origin}${path === '/' ? '/' : path}`;
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    if (keywords) {
      upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', fullUrl);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertCanonical(fullUrl);

    const scriptId = 'fis-dynamic-jsonld';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const node = document.getElementById(scriptId);
      if (node) {
        node.remove();
      }
    };
  }, [title, description, path, keywords, structuredData]);
}
