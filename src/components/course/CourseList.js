import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CourseList = ({ course }) => (
    <table className="table">
        <thead>
            <tr>
                <th />
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            { course.map(course=>{
                return (
                    <tr key={course.id}>
                        <td>
                            <a className="btn btn-light" href={"#"}>Watch</a>
                        </td>
                        <td>{course.title}</td>
                        <td>{course.authorName}</td>
                        <td>{course.category}</td>
                    </tr>
                )
            }) }
        </tbody>
    </table>
);

CourseList.propTypes = {
    course: PropTypes.isRequired
}

export default CourseList;