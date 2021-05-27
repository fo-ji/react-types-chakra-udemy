import { memo, VFC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginUserProvider } from '../providers/LoginUserProvider'
import Login from '../components/pages/Login'
import { homeRoutes } from './HomeRoutes'
import Page404 from '../components/pages/Page404'
import HeaderLayout from '../components/templates/HeaderLayout'

const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  exact={route.exact}
                  key={route.path}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      {/* ↓機能しなくなっている */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})

export default Router
