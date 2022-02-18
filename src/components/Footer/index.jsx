import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Button } from 'antd';
import { Formik, Field } from 'formik';
import Input from '../Input';
import { EMAIL_REGEX } from '../../common/constant';
import Telegram from '../../resources/images/telegram.svg';
import Medium from '../../resources/images/medium.svg';
import Twitter from '../../resources/images/twitter.svg';
import Youtube from '../../resources/images/youtube.svg';
import { sendEmailAPI } from '../../services/Email';

function Footer({}) {
  const { t } = useTranslation();

  return (
    <footer>
      <div class='footer__copyright'>{t('footer.copyright')}</div>
    </footer>
  );
}

export default Footer;
