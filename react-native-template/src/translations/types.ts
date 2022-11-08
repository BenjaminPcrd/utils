type TranslationKeys = 
    'hello'

type Translation = Record<TranslationKeys, string>
type Languages = 'en' | 'fr'

export {
    type Translation,
    type TranslationKeys,
    type Languages
}