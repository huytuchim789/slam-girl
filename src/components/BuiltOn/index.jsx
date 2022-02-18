import React, { useContext } from "react";
import { Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import Polka from "../../resources/images/polka.svg";
import PolkaLight from "../../resources/images/polka_light.svg";
import Arrow1 from "../../resources/images/Arrow 1.svg";
import Arrow2 from "../../resources/images/Arrow 2.svg";
import Arrow3 from "../../resources/images/Arrow 3.svg";
import Arrow4 from "../../resources/images/Arrow 4.svg";
import { ThemeContext } from "hooks/useDarkMode";
const { Title } = Typography;

function BuiltOn() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  return (
    <section className="section built__on">
      <div className="container">
        <div className="background__blur blur--4"></div>
        <Row className="title">
          <Title level={4} class="section__header">
            {t("builtOn.header")}
          </Title>
          <p
            class="section__content"
            dangerouslySetInnerHTML={{ __html: t("builtOn.content") }}
          ></p>
        </Row>
        <Row className="content">
          <div className="container__left">
            <div className="built__on__questions">
              <p class="title">{t("builtOn.question")}</p>
              <img src={isDarkMode ? Polka : PolkaLight} alt="Polka Foundry" />
              <p>{t("builtOn.answer")}</p>
            </div>
            <div className="built__on__arrows">
              <img src={Arrow1} alt="arrow-1" />
              <img src={Arrow2} alt="arrow-2" />
              <img src={Arrow3} alt="arrow-3" />
              <img src={Arrow4} alt="arrow-4" />
            </div>
          </div>
          <div className="container__right">
            <div className="built__on__info">
              <span>{`0${t("builtOn.num1")}`}</span>
              {t("builtOn.info1")}
            </div>
            <div className="built__on__info">
              <span>{`0${t("builtOn.num2")}`}</span>
              {t("builtOn.info2")}
            </div>
            <div className="built__on__info">
            <span>{`0${t("builtOn.num3")}`}</span>
              {t("builtOn.info3")}
            </div>
            <div className="built__on__info">
            <span>{`0${t("builtOn.num4")}`}</span>
              {t("builtOn.info4")}
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default BuiltOn;
