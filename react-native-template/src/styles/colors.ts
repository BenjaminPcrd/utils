import materialColors from './material-colors.json'

const colors = {
    ...materialColors,
    black: '#000000',
    white: '#ffffff'
}

const applyOpacity = (hexColor: string, opacity: number): string => {
    const red = parseInt(hexColor.slice(1, 3), 16)
    const green = parseInt(hexColor.slice(3, 5), 16)
    const blue = parseInt(hexColor.slice(5, 7), 16)
  
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

export default colors
export {
    applyOpacity
}
