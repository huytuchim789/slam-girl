import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useMemo,
  useCallback,
  Fragment,
  useContext
} from 'react';
import { useTranslation } from 'react-i18next';
import { renderNavigation } from './navigationLink';
import { useLocation } from 'react-router-dom';
import LogoHeader from '../../resources/images/logo.svg';
import LogoHeaderLight from '../../resources/images/logo_light.svg';
import DrawerMenu from '../Drawer';
import MenuTop from '../MenuTop';
import MenuOutlined from '../../resources/images/menu_outline.svg';
import MenuLight from '../../resources/images/menu_light.svg';
import { Events } from 'react-scroll';
import { browserHistory } from '../../utils/history';
import { throttle } from '../../utils/index';
import { Link as ScrollLink } from 'react-scroll';
import { Button, notification, Tooltip } from 'antd';
import LightThemeIcon from '../../resources/images/light_theme.svg';
import DarkThemeIcon from '../../resources/images/dark_theme.svg';
import { ThemeContext } from 'hooks/useDarkMode';
import SelectComponent from '../Select';
import FlagCN from '../../resources/images/china.svg';
import FlagEN from '../../resources/images/english.svg';
import FlagJP from '../../resources/images/japan.svg';
import FlagKR from '../../resources/images/korea.svg';
import { getCurrentLanguage, resources } from '../../i18n/i18n';
import { Language } from 'common/constant';
import closeNav from '../../resources/images/close_nav.svg';
import copyNav from '../../resources/images/copy_banner.svg';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { useTimeout } from 'hooks';
import IconChecked from 'resources/images/IconChecked';

function Header({ isMobile }) {
  const { t, i18n } = useTranslation();
  const headerRef = useRef(null);
  const languageSelect = useRef(null);
  const [hash, setHash] = useState('home');
  const [defaultLanguage, setDefaultLanguage] = useState(Language.EN);
  const { theme, setTheme } = useContext(ThemeContext);

  const [isAllowSetHash, setIsAllowSetHash] = useState(true);

  const [isCopied, setIsCopied] = useState(false);

  const navigation = useMemo(() => renderNavigation(t), [t]);

  const location = useLocation();

  const getCurrentPage = useCallback(() => {
    return navigation.reduce((cur, acc) => {
      if (acc.children.length) {
        const currentSelectedChild = acc.children.find(
          (child) => location.pathname === child.link
        );
        return currentSelectedChild && currentSelectedChild.key
          ? { cur, ...currentSelectedChild }
          : { ...cur };
      } else {
        return location.pathname === acc.link ? { cur, ...acc } : { ...cur };
      }
    }, {});
  }, [navigation, location.pathname]);

  const [currentPage, setCurrentPage] = useState(
    getCurrentPage ? getCurrentPage.key : navigation[0].key
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    handleChange(getCurrentLanguage());

    Events.scrollEvent.register('begin', () => {
      setHash('');
      setIsAllowSetHash(false);
    });
    Events.scrollEvent.register('end', () => {
      setIsAllowSetHash(true);
    });
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    setCurrentPage(getCurrentPage ? getCurrentPage.key : navigation[0].key);
  }, [getCurrentPage, navigation, location.pathname]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isDrawerOpen]);

  const setActiveSection = useCallback(() => {
    if (!isMobile) {
      const allSection = Array.from(
        document.querySelectorAll('#home, #overview, #road-map, #team')
      );
      const scrollPosition = document.documentElement.scrollTop;
      const windowOffset = window.pageYOffset;

      if (allSection.length) {
        for (let i = 0; i < allSection.length - 1; i++) {
          if (
            scrollPosition >
              windowOffset + allSection[i].getBoundingClientRect().top - 500 &&
            scrollPosition <
              windowOffset + allSection[i + 1].getBoundingClientRect().top - 500
          ) {
            isAllowSetHash && setHash(allSection[i].id);
            break;
          }

          if (
            scrollPosition >
            windowOffset +
              allSection[allSection.length - 1].getBoundingClientRect().top -
              500
          ) {
            isAllowSetHash && setHash(allSection[allSection.length - 1].id);
            break;
          }
        }
      }
    }
  }, [isAllowSetHash, isMobile]);

  useLayoutEffect(() => {
    scrollFunc();
    setActiveSection();
    window.addEventListener('scroll', scrollFunc);
    window.addEventListener('scroll', throttle(400, setActiveSection));

    return () => {
      window.removeEventListener('scroll', scrollFunc);
      window.removeEventListener('scroll', setActiveSection);
    };
  }, [setActiveSection]);

  useTimeout(() => {
    if (isCopied) {
      setIsCopied(false);
    }
  }, 1000).start();

  const handleRedirectHomePage = useCallback((hash) => {
    if (!document.getElementById(hash)) {
      browserHistory.push('/');
      setHash(hash);
    }

    setIsDrawerOpen(false);
    setHash(hash);
  }, []);

  const handleClickNavigation = useCallback((e) => {
    setCurrentPage(e.key);
  }, []);

  const scrollFunc = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerRef.current.classList.add('tiny-header');
      document.querySelector('.ant-menu-submenu.ant-menu-submenu-popup') &&
        (document.querySelector(
          '.ant-menu-submenu.ant-menu-submenu-popup'
        ).style.top = `${window.pageYOffset + 65}px`);
    } else {
      headerRef.current.classList.remove('tiny-header');
      document.querySelector('.ant-menu-submenu.ant-menu-submenu-popup') &&
        (document.querySelector(
          '.ant-menu-submenu.ant-menu-submenu-popup'
        ).style.top = `${window.pageYOffset + 65}px`);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  const letTalkSection = useMemo(
    () => (
      <a href='https://t.me/nftify_official' target='_blank' rel='noreferrer'>
        <Link
          to='#'
          onClick={(e) => {
            window.location = 'mailto:info@nftify.network';
            e.preventDefault();
          }}
        >
          <Button className='btn--linear'>
            <p>{t('menu.contactUs')}</p>
          </Button>
        </Link>
      </a>
    ),
    [t]
  );

  const changeTheme = useCallback(() => {
    if (theme !== 'dark') {
      setTheme('theme', 'dark');
    } else {
      setTheme('theme', 'light');
    }
  }, [theme, setTheme]);

  const handleChange = (value) => {
    // let language = value;
    // if (Object.keys(resources).indexOf(value) === -1) {
    //   language = Language.EN;
    // }

    // if (value.indexOf('zh') >= 0) {
    //   language = Language.CN;
    // }

    i18n.changeLanguage(Language.EN);
    // setDefaultLanguage(options.filter((lang) => lang.key === language)[0]);
  };

  const options = [
    {
      key: 'en',
      value: (
        <Fragment>
          <img className='flag' alt='English' src={FlagEN} />
          <span>{t('common.english')}</span>
        </Fragment>
      )
    },
    {
      key: 'ja',
      value: (
        <Fragment>
          <img className='flag' alt='Japan' src={FlagJP} />
          <span>{t('common.japan')}</span>
        </Fragment>
      )
    },
    {
      key: 'ko',
      value: (
        <Fragment>
          <img className='flag' alt='Korean' src={FlagKR} />
          <span>{t('common.korea')}</span>
        </Fragment>
      )
    },
    {
      key: 'cn',
      value: (
        <Fragment>
          <img className='flag' alt='Chinese' src={FlagCN} />
          <span>{t('common.china')}</span>
        </Fragment>
      )
    }
  ];

  const sortedOptions = useMemo(() => {
    const selectedLanguage = options.filter(
      (option) => option.key === defaultLanguage.key
    );
    const restLanguaguages = options.filter(
      (option) => option.key !== defaultLanguage.key
    );

    return [...selectedLanguage, ...restLanguaguages];
  }, [defaultLanguage, options]);

  const themeToggle = useMemo(() => {
    return (
      <Fragment>
        <div className='theme__toggle' onClick={changeTheme}>
          {theme === 'dark' ? (
            <Fragment>
              <img
                width={18}
                height={18}
                src={LightThemeIcon}
                alt='Light theme'
              />
              {/* <span>{t('header.light-theme')}</span> */}
            </Fragment>
          ) : (
            <Fragment>
              <img
                width={18}
                height={18}
                src={DarkThemeIcon}
                alt='Dark theme'
              />
              {/* <span>{t('header.dark-theme')}</span> */}
            </Fragment>
          )}
        </div>
        {/* <div ref={languageSelect} className='language-select'>
          <SelectComponent
            getPopupContainer={() => languageSelect.current}
            active={defaultLanguage}
            options={sortedOptions}
            onChangeLanguage={handleChange}
          />
        </div> */}
      </Fragment>
    );
  }, [theme, changeTheme, defaultLanguage, sortedOptions]);

  return (
    <Fragment>
      <div id='header' className='header' ref={headerRef}>
        <div className='container'>
          <div className='logo'>
            <ScrollLink
              to={'home'}
              onClick={() => handleRedirectHomePage('home')}
              smooth={true}
              duration={500}
              offset={-110}
            >
              {theme === 'dark' && (
                <img
                  width='138'
                  height='36'
                  src={LogoHeader}
                  alt='NFTIFY logo'
                />
              )}
              {theme === 'light' && (
                <img
                  width='138'
                  height='36'
                  src={LogoHeaderLight}
                  alt='NFTIFY logo'
                />
              )}
            </ScrollLink>
          </div>
          {!isMobile && (
            <div class='container-right'>
              <MenuTop
                handleRedirectHomePage={handleRedirectHomePage}
                handleClick={handleClickNavigation}
                current={currentPage}
                navigation={navigation}
                mode='horizontal'
                activeElement={hash}
                isAllowSetHash={isAllowSetHash}
                themeToggle={themeToggle}
              />
              {letTalkSection}
            </div>
          )}
          {isMobile && (
            <div className='header-mobile'>
              {themeToggle}
              {theme === 'dark' && (
                <img
                  width={18}
                  height={22}
                  alt='menu'
                  src={MenuOutlined}
                  onClick={toggleDrawer}
                />
              )}
              {theme === 'light' && (
                <img
                  width={22}
                  height={22}
                  alt='menu'
                  src={MenuLight}
                  onClick={toggleDrawer}
                />
              )}

              <DrawerMenu
                handleRedirectHomePage={handleRedirectHomePage}
                isMobile={isMobile}
                visible={isDrawerOpen}
                handleClick={handleClickNavigation}
                toggleDrawer={toggleDrawer}
                current={currentPage}
                navigation={navigation}
                footerSection={letTalkSection}
                onClose={toggleDrawer}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
