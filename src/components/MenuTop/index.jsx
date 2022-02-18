import React, { Fragment } from 'react';
import { Menu } from 'antd';
import ArrowDown from '../SVG/arrowDown';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

function MenuTop({
  handleRedirectHomePage,
  handleClick,
  current,
  navigation,
  mode,
  activeElement,
  isAllowSetHash,
  themeToggle
}) {
  return (
    <Fragment>
      <Menu onClick={handleClick} selected Keys={[current]} mode={mode}>
        {navigation.map((nav) => {
          const isExternalLink =
            nav?.link?.includes('http') || nav?.link?.includes('https');
          return nav.children.length ? (
            <SubMenu
              key={nav.key}
              popupClassName='submenu'
              title={
                mode === 'inline' ? (
                  nav.text
                ) : (
                  <span>
                    {nav.text} <ArrowDown />
                  </span>
                )
              }
            >
              {nav.children.map((child) => {
                const isExternalChildLink =
                  child?.link?.includes('http') ||
                  child?.link?.includes('https');
                return (
                  <Menu.Item key={child.key}>
                    {child.isHash ? (
                      <ScrollLink
                        to={child.link}
                        onClick={() => handleRedirectHomePage(child.link)}
                        smooth={true}
                        duration={500}
                        offset={-105}
                        className={
                          activeElement === child.link && isAllowSetHash
                            ? 'active'
                            : ''
                        }
                      >
                        {child.text}
                      </ScrollLink>
                    ) : isExternalChildLink ? (
                      <a href={child.link} target='_blank' rel='noreferrer'>
                        {child.text}
                      </a>
                    ) : (
                      <Link to={child.link}>{child.text}</Link>
                    )}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          ) : (
            <Menu.Item key={nav.key}>
              {nav.isHash ? (
                <ScrollLink
                  to={nav.link}
                  onClick={() => handleRedirectHomePage(nav.link)}
                  smooth={true}
                  duration={500}
                  offset={-105}
                  className={
                    activeElement === nav.link && isAllowSetHash ? 'active' : ''
                  }
                >
                  {nav.text}
                </ScrollLink>
              ) : isExternalLink ? (
                <a href={nav.link} target='_blank' rel='noreferrer'>
                  {nav.text}
                </a>
              ) : (
                <Link to={nav.link}>{nav.text}</Link>
              )}
            </Menu.Item>
          );
        })}
      </Menu>
      {themeToggle}
    </Fragment>
  );
}

export default MenuTop;
