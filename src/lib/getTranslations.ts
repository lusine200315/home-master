export const translations = {
  en: () => import("@/i18n/en.json").then((res) => res.default),
  hy: () => import("@/i18n/hy.json").then((res) => res.default),
  ru: () => import("@/i18n/ru.json").then((res) => res.default),
};

export type Lang = keyof typeof translations;

export async function getTranslations(lang: Lang) {
  const loader = translations[lang] || translations.en;
  return loader();
}