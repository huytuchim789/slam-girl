import React, { Fragment, useContext, useEffect } from "react";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import IcHomePage from "../../resources/images/ic_home_page.png";
import IcHomePageLight from "../../resources/images/ic_home_page_light.png";
import Feature1 from "../../resources/images/based_on_substrate.svg";
import Feature2 from "../../resources/images/copyright_protection.svg";
import Feature3 from "../../resources/images/permissionless_shop_creation.svg";
import Feature4 from "../../resources/images/cross_chain.svg";
import Feature5 from "../../resources/images/zero_coding.svg";
import Feature6 from "../../resources/images/low_fees.svg";
import Feature1Light from "../../resources/images/based_on_substrate_light.svg";
import Feature2Light from "../../resources/images/copyright_protection_light.svg";
import Feature3Light from "../../resources/images/permissionless_shop_creation_light.svg";
import Feature4Light from "../../resources/images/cross_chain_light.svg";
import Feature5Light from "../../resources/images/zero_coding_light.svg";
import Feature6Light from "../../resources/images/low_fees_light.svg";
import { ThemeContext } from "hooks/useDarkMode";

function HomeSection() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <Fragment>
      <section className="section home" id="home">
        <div className="container container--full">
          <div className="background__blur blur--1"></div>
          <div className="background__blur blur--2"></div>
          <div className="container_left">
            <div className="content_left">
              <div className="title">
                <h1 className="title_label">{t("home.title")}</h1>
              </div>
              <div className="content">
                <p
                  dangerouslySetInnerHTML={{ __html: t("home.content") }}
                  className="content_label"
                ></p>
              </div>
            </div>
          </div>
          <div className="conatiner_right">
            <img
              className="image"
              src={isDarkMode ? IcHomePage : IcHomePageLight}
              alt="Banner"
            />
          </div>
        </div>
      </section>
      <section className="section home feature">
        <div className="container">
          <div className="container_left">
            <div className="content_left">
              <div className="content__features">
                <div className="features">
                  <p className="features_label">{t("home.features")}</p>
                </div>
                <div className="list">
                  <div className="item">
                    <Tooltip
                      title={t("home.tooltip__1")}
                      arrowPointAtCenter
                      overlayClassName="tooltip"
                    >
                      <img
                        width="60"
                        height="60"
                        src={isDarkMode ? Feature1 : Feature1Light}
                        alt={t("home.tooltip__1")}
                      />
                    </Tooltip>
                  </div>
                  <div className="item">
                    <Tooltip
                      title={t("home.tooltip__2")}
                      arrowPointAtCenter
                      overlayClassName="tooltip"
                    >
                      <img
                        width="60"
                        height="60"
                        src={isDarkMode ? Feature2 : Feature2Light}
                        alt={t("home.tooltip__2")}
                      />
                    </Tooltip>
                  </div>
                  <div className="item">
                    <Tooltip
                      title={t("home.tooltip__3")}
                      arrowPointAtCenter
                      overlayClassName="tooltip"
                    >
                      <img
                        width="60"
                        height="60"
                        src={isDarkMode ? Feature3 : Feature3Light}
                        alt={t("home.tooltip__3")}
                      />
                    </Tooltip>
                  </div>
                  <div className="item">
                    <Tooltip
                      title={t("home.tooltip__4")}
                      arrowPointAtCenter
                      overlayClassName="tooltip"
                    >
                      <img
                        width="60"
                        height="60"
                        src={isDarkMode ? Feature4 : Feature4Light}
                        alt={t("home.tooltip__4")}
                      />
                    </Tooltip>
                  </div>
                  <div className="item">
                    <Tooltip
                      title={t("home.tooltip__5")}
                      arrowPointAtCenter
                      overlayClassName="tooltip"
                    >
                      <img
                        width="60"
                        height="60"
                        src={isDarkMode ? Feature5 : Feature5Light}
                        alt={t("home.tooltip__5")}
                      />
                    </Tooltip>
                  </div>
                  <div className="item">
                    <Tooltip
                      title={t("home.tooltip__6")}
                      arrowPointAtCenter
                      overlayClassName="tooltip"
                    >
                      <img
                        width="60"
                        height="60"
                        src={isDarkMode ? Feature6 : Feature6Light}
                        alt={t("home.tooltip__6")}
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HomeSection;
