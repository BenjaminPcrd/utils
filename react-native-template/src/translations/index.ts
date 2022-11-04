import { findBestAvailableLanguage } from 'react-native-localize'

import english from './english'
import french from './french'
import type { Translation, TranslationKeys, Languages } from './types'

const translations: Record<Languages, Translation> = { 
    en: english,
    fr: french
}

let languageTag = findBestAvailableLanguage(Object.keys(translations))!.languageTag as Languages
//languageTag = 'fr'

const t = (key: TranslationKeys) => {
    return translations[languageTag][key]
}

export default t