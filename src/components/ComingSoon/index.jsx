import { Col, Row, Image, Typography, Button } from 'antd';
import React, { useState, useMemo, useEffect, useContext } from 'react';
import ModalComponent from '../Modal';
import ComingSoomImg from 'resources/images/coming_soon.png';
import ComingSoomLightImg from 'resources/images/coming_soon_light.png';
import { useTranslation } from 'react-i18next';
import { socialData } from './RenderSocial';
import Notification from 'resources/images/notification.svg';
import { ThemeContext } from 'hooks/useDarkMode';
import MarketCap from 'resources/images/market_cap.jpeg';

const { Title, Paragraph } = Typography;

const ComingSoon = ({ isModalOpen, setIsModalOpen }) => {
  const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const Detail = useMemo(() => {
    // return (
    //   <Row gutter={[{ lg: 74, xs: 64 }, 32]} align="middle">
    //     <Col xs={24} lg={12} className="column-left">
    //       {/* <Title level={4}>{t('header.special_event')}</Title> */}
    //       <Title level={1}>
    //         <span className="primary">
    //           {t('header.nftifyPlatform')}
    //           &nbsp;<span>{t('header.is')}</span>
    //           <br />
    //         </span>
    //         <span>{t('header.launching')}</span>
    //       </Title>
    //       <Paragraph>{t('header.wait_list')}</Paragraph>
    //       <div className="list-button">
    //         <a
    //           target="_blank"
    //           rel="noreferrer"
    //           href="https://docs.google.com/forms/d/e/1FAIpQLSetb4SzxV64izj7cikneNr1VorM3QdGro_2b5XviQLHz6WaSw/viewform"
    //         >
    //           <Button className="btn--linear">{t('header.register')}</Button>
    //         </a>

    //         <Row className="social">
    //           {socialData().map((item) => (
    //             <a href={item.link} target="_blank" rel="noreferrer">
    //               <Image width={30} height={30} src={item.image} preview={false} alt={item.link} />
    //             </a>
    //           ))}
    //         </Row>
    //       </div>
    //     </Col>

    //     <Col xs={24} lg={12} className="column-right">
    //       {isDarkMode && <Image src={ComingSoomImg} alt="Coming soon" preview={false} />}
    //       {!isDarkMode && <Image src={ComingSoomLightImg} alt="Coming soon" preview={false} />}
    //     </Col>
    //   </Row>
    // );
    return (
      <a
        href='https://news.nftify.network/nftify-giving-away-250-000-n1-tokens-airdrop-with-coinmarketcap-204484a29ba6'
        target='_blank'
        rel='noreferrer'
      >
        <Image preview={false} src={MarketCap} alt='Market Cap' />
      </a>
    );
  }, [t, isDarkMode]);

  return (
    <>
      <ModalComponent
        content={Detail}
        onClose={() => setIsModalOpen(false)}
        visible={isModalOpen}
        wrapClass='coming-soon'
        width={1398}
      />
      <Button className='notification-btn' onClick={() => setIsModalOpen(true)}>
        {<Image src={Notification} alt='Notification' preview={false} />}
      </Button>
    </>
  );
};

export default ComingSoon;
