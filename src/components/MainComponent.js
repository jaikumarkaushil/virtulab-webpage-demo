/* eslint-disable import/first */
import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./HomeComponent'));
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
// const Header = React.lazy(() => import('./HeaderComponent'));
// const Footer = React.lazy(() => import('./FooterComponent'))
import Footer from './FooterComonent';
import { Loading } from './LoadingComponent';

const Main = (props) => {
    return (
      <div>
        <Suspense fallback={<Loading/>}>
          <Header />
              <Switch>
                <Route path="/home" component={() => <Home />} />
                <Redirect to="/home"/>
              </Switch>
          <Footer/>
        </Suspense>
      </div>

    )
}

export default withRouter(Main);
