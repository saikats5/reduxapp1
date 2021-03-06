import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './components/routes';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
//import './styles/styles.css';

const store = configureStore();
//store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);