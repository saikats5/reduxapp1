import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
    constructor(props, context){
        super(props, context);
 /*        this.state = {
            course: {title: ""}
        } */
/*         this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this); */
    }
/*     onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    } */
/*     onClickSave(){
        this.props.dispatch(courseActions.createCourse(this.state.course));
    } */
/*     onClickSave(){
        //this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    } */
    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render(){
        return (
            <div>
                <h1>Courses</h1>
                {this.props.course.map(this.courseRow)}
{/*           <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
<input type="submit" value="Save" onClick={this.onClickSave} /> */}
            </div>
        )
    }
}

CoursePage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    course: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    //createCourse: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        course: state.course
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

/* function mapDispatchToProps(dispatch){
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
} */

//export default connect(mapStateToProps)(CoursePage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);