import React from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import NftifyItem from './nftifyItem';
import Why1 from '../../resources/images/low_barrier.svg';
import Why2 from '../../resources/images/why_copyright_protection.svg';
import Why3 from '../../resources/images/low_cost.svg';
import Why4 from '../../resources/images/customizable.svg';

const { Title } = Typography;

const options = (t) => [
  {
    imageUrl: Why1,
    content: t('why-nftify.txt_content1'),
    title: t('why-nftify.txt_title1')
  },
  {
    imageUrl: Why2,
    content: t('why-nftify.txt_content2'),
    title: t('why-nftify.txt_title2')
  },
  {
    imageUrl: Why3,
    content: t('why-nftify.txt_content3'),
    title: t('why-nftify.txt_title3')
  },
  {
    imageUrl: Why4,
    content: t('why-nftify.txt_content4'),
    title: t('why-nftify.txt_title4')
  }
];

function WhyNftifySection() {
  const { t } = useTranslation();

  return (
    <section className='section section--dark Why__NFTify'>
      <div className='container'>
        <Row className='Why__NFTify--header'>
          <Title level={4} class='title'>
            {t('why-nftify.title')}
          </Title>
        </Row>
        <Row className='Why__NFTify--body'>
          {options(t).map((item, index) => (
            <NftifyItem
              key={index}
              index={index}
              imageUrl={item.imageUrl}
              content={item.content}
              title={item.title}
            />
          ))}
        </Row>
      </div>
    </section>
  );
}

export default WhyNftifySection;
