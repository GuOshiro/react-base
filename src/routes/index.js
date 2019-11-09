import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks'

import { INITIAL_STATE as HOME_INITIAL_STATE } from '../state/home/reducers'
import { StateProvider } from '../state';
import reducers from "../state/reducers";
import BaseStyles from './base-styles';
import theme from '../theme'
import { client } from '../utils/services'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../views/home'
import Loader from '../components/Loader'
import Wrapper from '../components/Wrapper'

import * as $D from '../constants/dimensions'

const Root = props => {
  const initialState = {
    home: HOME_INITIAL_STATE
  }
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <ApolloProvider client={client}>
        <BaseStyles />
        <Router>
          <ThemeProvider theme={theme}>
            <Loader />
            <Header />
            <Wrapper minHeight={`calc(100vh - ${$D.FOOTER_SIZE})`}>
              <Switch>
                <Redirect exact from='/' to="/home" />
                <Route exact path="/home" component={Home} />
              </Switch>
            </Wrapper>
            <Footer />
          </ThemeProvider>
        </Router>
      </ApolloProvider >
    </StateProvider>
  )
};

export default Root
