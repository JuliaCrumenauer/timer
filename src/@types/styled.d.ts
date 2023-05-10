// Arquivo de definição de tipos - só tem tipagem

import 'styled-components'
import { dark } from '../styles/themes/dark'

type ThemeType = typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
