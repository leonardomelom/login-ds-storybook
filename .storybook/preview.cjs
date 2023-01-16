import { themes } from '@storybook/theming'
import '../src/styles/global.css'
<<<<<<< HEAD

=======
>>>>>>> c88547d27a73cebc86a9a83f2f4b60d971890dfb
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs:{
    theme: themes.dark
  }
}