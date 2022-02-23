import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'

import { BREAKPOINT_LG, HEIGHT_SHOW_BACK_TOP } from '../../common/constant'
import { ThemeContext } from 'hooks/useDarkMode'

import Banner from './Banner'
import Introducing from './Introducing'
import CreatedBy from './CreatedBy'
import Story from './Story'
import Collection from './Collection'
import Features from './Features'
import Roadmap from './Roadmap'
import TheTeam from './TheTeam'
import Faq from './Faq'
import Partners from './Partners'
import Footer from '../../components/Footer'
import { MenuContext } from 'pages/layout'
import Menu from 'components/Menu'

function HomePage() {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisibleBackTop, setIsVisibleBackTop] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const { theme } = useContext(ThemeContext)
  // const isDarkMode = theme === 'dark'
  const { onMenu, setOnMenu } = useContext(MenuContext)

  useEffect(() => {
    screenResize()
    window.addEventListener('resize', screenResize)
    window.addEventListener('scroll', onSrcoll)
    return () => {
      window.removeEventListener('resize', screenResize)
      window.removeEventListener('scroll', onSrcoll)
    }
  }, [])
  useEffect(() => {
    setIsModalOpen(true)
    return () => {
      setIsModalOpen(false)
    }
  }, [])

  const screenResize = () => {
    setIsMobile(window.innerWidth < BREAKPOINT_LG)
  }

  const onSrcoll = () => {
    setIsVisibleBackTop(window.scrollY > HEIGHT_SHOW_BACK_TOP)
  }

  return (
    <div class="home-page">
      {onMenu ? <Menu /> : null}
      <section id="banner">
        <Banner />
      </section>
      <section id="introducing">
        <Introducing />
      </section>
      <section id="created_by">
        <CreatedBy />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="collection">
        <Collection />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="the_team">
        <TheTeam />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="partner_and_comunity">
        <Partners />
      </section>
      <Footer />
    </div>
  )
}
export default withRouter(HomePage)
