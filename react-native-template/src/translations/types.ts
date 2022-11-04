type Translation = {
    hello: string
}

type TranslationKeys = keyof Translation

type Languages = 'en' | 'fr'

export {
    type Translation,
    type TranslationKeys,
    type Languages
}