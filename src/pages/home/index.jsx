import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OurTeamSection from 'components/OurTeam';
import HomeSection from 'components/Home';
import WhyNftifySection from 'components/WhyNftify';
import NftifyOverviewSection from 'components/NftifyOverview';
import RoadmapSection from 'components/RoadMap';
import BackedBy from 'components/BackedBy';
import { BackTop } from 'antd';
import IconArrowUp from '../../resources/images/Icon_up.svg';
import IconArrowUpLight from '../../resources/images/Icon_up_light.svg';
import { BREAKPOINT_LG, HEIGHT_SHOW_BACK_TOP } from '../../common/constant';
import BuiltOn from 'components/BuiltOn';
import { ThemeContext } from 'hooks/useDarkMode';
import LatestNews from 'components/LastestNews';
import ComingSoon from 'components/ComingSoon';

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisibleBackTop, setIsVisibleBackTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    screenResize();
    window.addEventListener('resize', screenResize);
    window.addEventListener('scroll', onSrcoll);
    return () => {
      window.removeEventListener('resize', screenResize);
      window.removeEventListener('scroll', onSrcoll);
    };
  }, []);
  useEffect(() => {
    setIsModalOpen(true);
    return () => {
      setIsModalOpen(false);
    };
  }, []);

  const screenResize = () => {
    setIsMobile(window.innerWidth < BREAKPOINT_LG);
  };

  const onSrcoll = () => {
    setIsVisibleBackTop(window.scrollY > HEIGHT_SHOW_BACK_TOP);
  };

  return (
    <div class='home-page'>
      <BackTop visibilityHeight={HEIGHT_SHOW_BACK_TOP}>
        <div className='wrapper'>
          <img src={isDarkMode ? IconArrowUp : IconArrowUpLight} alt='up' />
        </div>
      </BackTop>
    </div>
  );
}
export default withRouter(HomePage);
