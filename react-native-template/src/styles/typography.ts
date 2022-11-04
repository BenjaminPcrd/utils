import { TextStyle } from 'react-native'

type FontSize = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70'
const fontSize: Record<FontSize, TextStyle> = {
    x10: {
        fontSize: 12
    },
    x20: {
        fontSize: 14
    },
    x30: {
        fontSize: 16
    },
    x40: {
        fontSize: 18
    },
    x50: {
        fontSize: 24
    },
    x60: {
        fontSize: 32
    },
    x70: {
        fontSize: 42
    }
}

type FontWeight = 'regular' | 'semibold' | 'bold'
const fontWeight: Record<FontWeight, TextStyle> = {
    regular: {
        fontWeight: 'normal' // normal = 400
    },
    semibold: {
        fontWeight: '600' 
    },
    bold: {
        fontWeight: 'bold' // normal = 700
    }
}

type LineHeight = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70'
const lineHeight: Record<LineHeight, TextStyle> = {
    x10: {
        lineHeight: 20
    },
    x20: {
        lineHeight: 22
    },
    x30: {
        lineHeight: 24
    },
    x40: {
        lineHeight: 26
    },
    x50: {
        lineHeight: 32
    },
    x60: {
        lineHeight: 38
    },
    x70: {
        lineHeight: 44
    }
}

type Bold = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70'
const bold: Record<Bold, TextStyle> = {
    x10: {
        ...fontSize.x10,
        ...lineHeight.x10,
        ...fontWeight.bold
    },
    x20: {
        ...fontSize.x20,
        ...lineHeight.x20,
        ...fontWeight.bold
    },
    x30: {
        ...fontSize.x30,
        ...lineHeight.x30,
        ...fontWeight.bold
    },
    x40: {
        ...fontSize.x40,
        ...lineHeight.x40,
        ...fontWeight.bold
    },
    x50: {
        ...fontSize.x50,
        ...lineHeight.x50,
        ...fontWeight.bold
    },
    x60: {
        ...fontSize.x60,
        ...lineHeight.x60,
        ...fontWeight.bold
    },
    x70: {
        ...fontSize.x70,
        ...lineHeight.x70,
        ...fontWeight.bold
    }
}

type Semibold = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70'
const semibold: Record<Semibold, TextStyle> = {
    x10: {
        ...fontSize.x10,
        ...lineHeight.x10,
        ...fontWeight.semibold
    },
    x20: {
        ...fontSize.x20,
        ...lineHeight.x20,
        ...fontWeight.semibold
    },
    x30: {
        ...fontSize.x30,
        ...lineHeight.x30,
        ...fontWeight.semibold
    },
    x40: {
        ...fontSize.x40,
        ...lineHeight.x40,
        ...fontWeight.semibold
    },
    x50: {
        ...fontSize.x50,
        ...lineHeight.x50,
        ...fontWeight.semibold
    },
    x60: {
        ...fontSize.x60,
        ...lineHeight.x60,
        ...fontWeight.semibold
    },
    x70: {
        ...fontSize.x70,
        ...lineHeight.x70,
        ...fontWeight.semibold
    }
}

type Regular = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70'
const regular: Record<Regular, TextStyle> = {
    x10: {
        ...fontSize.x10,
        ...lineHeight.x10,
        ...fontWeight.regular
    },
    x20: {
        ...fontSize.x20,
        ...lineHeight.x20,
        ...fontWeight.regular
    },
    x30: {
        ...fontSize.x30,
        ...lineHeight.x30,
        ...fontWeight.regular
    },
    x40: {
        ...fontSize.x40,
        ...lineHeight.x40,
        ...fontWeight.regular
    },
    x50: {
        ...fontSize.x50,
        ...lineHeight.x50,
        ...fontWeight.regular
    },
    x60: {
        ...fontSize.x60,
        ...lineHeight.x60,
        ...fontWeight.regular
    },
    x70: {
        ...fontSize.x70,
        ...lineHeight.x70,
        ...fontWeight.regular
    }
}

export {
    bold,
    semibold,
    regular,
    fontSize
}
