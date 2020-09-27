/* eslint-disable import/first */
import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./HomeComponent'));
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './HeaderComponent';
import Footer from './FooterComonent';
import { Loading } from './LoadingComponent';

const Main = (props) => {
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={props.location.key} classNames="page" timeout={300}>
              <Switch location={props.location}>
                <Route path="/home" component={() => <Suspense fallback={<Loading/>}><Home /></Suspense>} />
                <Redirect to="/home"/>
              </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>

    )
}

export default withRouter(Main);
