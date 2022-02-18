import React from "react";
import CloseIcon from "../../resources/images/close";
import { WIDTH_DRAWER } from "../../common/constant";
import MenuTop from "../MenuTop";
import { Drawer } from "antd";

function DrawerMenu({
  handleRedirectHomePage,
  handleClick,
  isMobile,
  visible,
  toggleDrawer,
  current,
  navigation,
  footerSection,
  ...props
}) {
  return (
    <Drawer
      visible={visible}
      className="menu__drawer"
      width={isMobile ? WIDTH_DRAWER.WIDTH_340 : WIDTH_DRAWER.WIDTH_460}
      placement="right"
      closable={false}
      {...props}
    >
      <div className="menu__drawer--top">
        <div className="head">
          <div onClick={toggleDrawer}>
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className="menu__drawer--bottom">
        <MenuTop
          handleRedirectHomePage={handleRedirectHomePage}
          handleClick={handleClick}
          current={current}
          navigation={navigation}
          mode="inline"
        />
      </div>
      <div class="menu__drawer--footer">{footerSection}</div>
    </Drawer>
  );
}

export default DrawerMenu;
