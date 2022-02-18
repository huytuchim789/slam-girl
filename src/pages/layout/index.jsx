import React, { memo, useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Layout } from "antd";
import { routes } from "../../Routes";
import NotFound from "../notFound";
import { BREAKPOINT_LG } from "common/constant";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import useDarkMode, { ThemeContext } from "hooks/useDarkMode";

const { Content } = Layout;

function LayoutCommon() {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useDarkMode();

  useEffect(() => {
    screenResize();
    window.addEventListener("resize", screenResize);
    return () => {
      window.removeEventListener("resize", screenResize);
    };
  }, []);

  const screenResize = () => {
    setIsMobile(window.innerWidth < BREAKPOINT_LG);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout className="layout">
        <Header isMobile={isMobile} />
        <Layout>
          <Content>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                  key={index}
                />
              ))}
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </ThemeContext.Provider>
  );
}
export default memo(withRouter(LayoutCommon));
