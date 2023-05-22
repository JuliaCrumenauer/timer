import relogio from '../assets/relogio.png'
import { Timer, Scroll, Sun, Moon } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useThemeContext } from '../contexts/ThemeContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { toggleTheme, isDarkTheme } = useThemeContext()

  return (
    <HeaderContainer>
      <img src={relogio} alt="" height="42" width="42" />

      <nav>
        <button onClick={() => toggleTheme()}>
          {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
