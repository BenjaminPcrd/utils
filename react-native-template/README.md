# React-native basic template

This is a basic React-native template using Typescript

## Dependencies

### For navigation : 

- @react-navigation/native
- @react-navigation/native-stack
- react-native-safe-area-context
- react-native-screens

### For translations :

- react-native-localize

## Usage

- Create a new project with `npx react-native init newProject --template react-native-template-typescript`
- Go to the project's root folder
- Install all the dependencies with `npm install @react-navigation/native @react-navigation/native-stack react-native-safe-area-context react-native-screens react-native-localize`
- Paste the 'src' folder structure inside the project's root folder
- Modify the import in index.js: `import App from './src/App'`
- Run `npm start` and `npm run android` to start the template

## Folder structure

- `/src`
    - `/assets`
        - `/data.json`: a data example
    - `/components`
        - `/Button`: a Button component
        - `index.ts`: to facilitate imports
    - `/navigation`
        - `index.tsx`: this is the navigation root with `NavigationContainer`
        - `MainStack.tsx`: a basic stack navigator
    - `/screens`
        - `/Screen`: screen example
    - `/styles`
        - `colors.ts`: palette of colors
        - `index.ts`: managing themes and facilitate imports
        - `outlines.ts`: for borders and shadows
        - `sizing.ts`: for margins, paddings and more
        - `typography.ts`: for text styling
    - `/translations`
        - `english.ts`: english translation
        - `french.ts`: french translation
        - `index.ts`: `t()` function
        - `types.ts`: keys for translations
