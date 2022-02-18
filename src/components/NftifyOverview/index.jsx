import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import bgOverview from '../../resources/images/bg_nftify_overview.png';
import bgOverviewLight from '../../resources/images/bg_nftify_overview_light.png';
// import bgOverviewJP from '../../resources/images/bg_nftify_overview_jp.png';
// import bgOverviewJPLight from '../../resources/images/bg_nftify_overview_jp_light.png';
// import bgOverviewKO from '../../resources/images/bg_nftify_overview_ko.png';
// import bgOverviewKOLight from '../../resources/images/bg_nftify_overview_ko_light.png';
// import bgOverviewCN from '../../resources/images/bg_nftify_overview_cn.png';
// import bgOverviewCNLight from '../../resources/images/bg_nftify_overview_cn_light.png';
import InnerImageZoom from 'react-inner-image-zoom';
import { BREAKPOINT_LG, Language } from 'common/constant';
import { ThemeContext } from 'hooks/useDarkMode';
import { getCurrentLanguage } from 'i18n/i18n';

const { Title, Paragraph } = Typography;

function NftifyOverviewSection({ isMobile }) {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [image, setImage] = useState('');
  const isDarkMode = theme === 'dark';

  const onZoom = () => {
    document.body.classList.add('ant-scrolling-effect');
  };

  const onUnzoom = () => {
    document.body.classList.remove('ant-scrolling-effect');
  };

  useEffect(() => {
    changeImage(getCurrentLanguage());
    i18n.on('languageChanged', (value) => {
      changeImage(value);
    });
  }, [isDarkMode]);

  const changeImage = (value) => {
    if (isDarkMode) {
      switch (value) {
        case 'en': {
          setImage(bgOverview);
          break;
        }
        // case 'ja': {
        //   setImage(bgOverviewJP);
        //   break;
        // }
        // case 'ko': {
        //   setImage(bgOverviewKO);
        //   break;
        // }
        // case 'cn': {
        //   setImage(bgOverviewCN);
        //   break;
        // }
        default: {
          setImage(bgOverview);
          break;
        }
      }
    } else {
      switch (value) {
        case 'en': {
          setImage(bgOverviewLight);
          break;
        }
        // case 'ja': {
        //   setImage(bgOverviewJPLight);
        //   break;
        // }
        // case 'ko': {
        //   setImage(bgOverviewKOLight);
        //   break;
        // }
        // case 'cn': {
        //   setImage(bgOverviewCNLight);
        //   break;
        // }
        default: {
          setImage(bgOverviewLight);
          break;
        }
      }
    }
  };

  return (
    <section className='section section--dark Nftify__overview' id='overview'>
      <div className='container'>
        <div className='background__blur blur--3'></div>
        <Row className='Nftify__overview--header'>
          <Title level={4} class='title'>
            {t('nftify-overview.title')}
          </Title>
          <Paragraph className='description'>
            {t('nftify-overview.description')}
          </Paragraph>
          {isMobile ? (
            <InnerImageZoom
              src={image}
              zoomSrc={image}
              fullscreenOnMobile={true}
              mobileBreakpoint={BREAKPOINT_LG}
              afterZoomIn={onZoom}
              afterZoomOut={onUnzoom}
              alt='Background Overview'
            />
          ) : (
            <img
              width='1398'
              height='823'
              src={image}
              alt='Background Overview'
            />
          )}
        </Row>
      </div>
    </section>
  );
}

export default NftifyOverviewSection;
