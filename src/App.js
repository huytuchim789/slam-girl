import React from 'react'
import { withTranslation } from 'react-i18next'
import { Router, Route, Switch } from 'react-router-dom'
import { browserHistory } from './utils/history'
import Layout from './pages/layout'
import { routes } from './Routes'
import 'antd/dist/antd.css'
import './sass/_app.scss'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()
function App() {
  return (
    <div className="App bg-app">
      <Router history={browserHistory}>
        <Switch>
          <Route
            path={[...routes].map((item) => item.path)}
            component={Layout}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default withTranslation()(App)
