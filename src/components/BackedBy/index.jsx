import React, { useContext } from 'react';
import { Card, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'hooks/useDarkMode';
import { backedByDarkMode, backedBy } from './backedBy';

const { Title } = Typography;

function BackedBy() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  return (
    <section className='section section--dark backed__by' id='backed'>
      <div className='container'>
        <Row className='title'>
          <Title level={4} class='section__header'>
            {t('backed.title')}
          </Title>
        </Row>
        <Row className='backed__by__section'>
          {isDarkMode
            ? backedByDarkMode(t).map(({ linkHref, img }) => (
                <Card key={linkHref}>
                  <a href={linkHref} target='_blank' rel='noreferrer'>
                    {img()}
                  </a>
                </Card>
              ))
            : backedBy(t).map(({ linkHref, img }) => (
                <Card key={linkHref}>
                  <a href={linkHref} target='_blank' rel='noreferrer'>
                    {img()}
                  </a>
                </Card>
              ))}
        </Row>
      </div>
    </section>
  );
}

export default BackedBy;
