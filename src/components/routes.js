import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './home/HomePage';
import CoursePage from './course/CoursePage';
import AboutPage from './about/AboutPage';
import ManageCoursePage from './course/ManageCoursePage'; 

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path="course" component={CoursePage}></Route>
        <Route path="managecourse" component={ManageCoursePage}></Route>
        <Route path="about" component={AboutPage}></Route>
    </Route>
)