import { memo, VFC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../componente/pages/Login'
import { homeRoutes } from './HomeRoutes'
import Page404 from '../componente/pages/Page404'
import HeaderLayout from '../componente/templates/HeaderLayout'

const Router: VFC = memo(() => {
  return (
    <Switch>
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
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})

export default Router
