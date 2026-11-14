/**
 * Small translation helpers. English is the only language for now.
 *
 * Adding Thai later (see README.md, "Adding Thai later"):
 *   1. Create th.ts with the same keys as en.ts.
 *   2. Add `th` to `languages`, `locales` and `ui` below.
 * English pages stay at the root (/about/), Thai pages get a prefix (/th/about/).
 */
import { en } from './en';

export const languages = { en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Language codes for <html lang>, dates (Intl) and share cards (og:locale). */
export const locales: Record<Lang, { html: string; intl: string; og: string }> = {
  en: { html: 'en', intl: 'en-US', og: 'en_US' },
};

export type UIKey = keyof typeof en;

/** Every language must provide every key that English has. */
const ui: Record<Lang, Record<UIKey, string>> = { en };

/** Works out the page language from its address: "/th/..." is Thai, anything else is English. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first && first in languages ? (first as Lang) : defaultLang;
}

/** Returns a `t()` function for one language: t('nav.about') → "About". */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    let text: string = ui[lang]?.[key] ?? ui[defaultLang][key];
    if (vars) {
      for (const [name, value] of Object.entries(vars)) {
        text = text.replaceAll(`{${name}}`, String(value));
      }
    }
    return text;
  };
}

/** Turns "/about/" into the right address for a language ("/about/" in English, "/th/about/" in Thai). */
export function localizePath(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/** Formats a date for the given language, e.g. "October 30, 2026". */
export function formatDate(date: Date, lang: Lang, style: 'long' | 'short' = 'long'): string {
  const options: Intl.DateTimeFormatOptions =
    style === 'long'
      ? { dateStyle: 'long', timeZone: 'UTC' }
      : { month: 'short', day: 'numeric', timeZone: 'UTC' };
  return new Intl.DateTimeFormat(locales[lang].intl, options).format(date);
}
