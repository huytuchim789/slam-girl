import React, { createContext, memo, useEffect, useState } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { routes } from '../../Routes'
import NotFound from '../notFound'
import { BREAKPOINT_LG } from 'common/constant'
import Header from '../../components/Header'
import useDarkMode, { ThemeContext } from 'hooks/useDarkMode'
import NavBar from 'components/NavBar'
import LeftSideBar from 'components/LeftSideBar'
import RightSideBar from 'components/RightSideBar'
import Menu from 'components/Menu'

const { Content } = Layout
export const MenuContext = createContext()

function LayoutCommon() {
  const [isMobile, setIsMobile] = useState(false)
  const [theme, setTheme] = useDarkMode()
  const [onMenu, setOnMenu] = useState(false)

  useEffect(() => {
    screenResize()
    window.addEventListener('resize', screenResize)
    return () => {
      window.removeEventListener('resize', screenResize)
    }
  }, [])

  const screenResize = () => {
    setIsMobile(window.innerWidth < BREAKPOINT_LG)
  }

  return (
    <MenuContext.Provider value={{ onMenu, setOnMenu }}>
      <Layout className="layout">
        <LeftSideBar />
        <Layout className="layout-content">
          <NavBar />
          <Content>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                  key={index}
                />
              ))}
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </Layout>
        <RightSideBar />
      </Layout>
    </MenuContext.Provider>
  )
}
export default memo(withRouter(LayoutCommon))
