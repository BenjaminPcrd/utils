type Colors = 'pink' | 'purple' | 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'brown' | 'black' | 'darker' | 'dark' | 'light' | 'lighter' | 'white'
const colors: Record<Colors, string> = {
    pink: 'rgb(255, 105, 180)',
    purple: 'rgb(153, 50, 204)',
    red: 'rgb(200, 50, 50)',
    orange: 'rgb(255, 140, 0)',
    yellow: 'rgb(255, 215, 75)',
    green: 'rgb(34, 139, 34)',
    cyan: 'rgb(32, 178, 200)',
    blue: 'rgb(65, 105, 255)',
    brown: 'rgb(139, 69, 19)',

    black: 'rgb(0, 0, 0)',
    darker: 'rgb(30, 30, 30)',
    dark: 'rgb(60, 60, 60)',
    light: 'rgb(195, 195, 195)',
    lighter: 'rgb(225, 225, 225)',
    white: 'rgb(255, 255, 255)'
}

export default colors
