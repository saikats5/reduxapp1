import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseList from "./CourseList";

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
/*      courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }  */
    componentDidMount(){
        console.log("000000000000000000",this.props);
        const { course, authors, actions } = this.props;
        if(course.length === 0){
            actions.loadCourses().catch(error => {
                alert("Loading courses error " + error);
            });
        }
        if(authors.length === 0){
            actions.loadAuthors().catch(error => {
                alert("Loading authors error " + error);
            })
        }
    }
    render(){
        console.log('2222222',this.props);
        return (
            <div>
                <h1>Courses</h1>
                {this.props.course.length > 0 && <CourseList course={this.props.course} />}
             {/* this.props.course.map(this.courseRow) */ }
{/*           <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
<input type="submit" value="Save" onClick={this.onClickSave} /> */}
            </div>
        )
    }
}

CoursePage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    authors: PropTypes.array.isRequired,
    course: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    //createCourse: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps){
    console.log("11111111111111111111",state);
    return {
        course: state.authors.length === 0 ? []
            : state.course.map(course => {
                return {
                    course, 
                    authorName: state.authors.find(a => a.id === course.authorId).firstName
                }
            }),
        authors: state.authors
/*         course: state.course,
        authors: state.authors */
    };
}

function mapDispatchToProps(dispatch){
    return {
        //actions: bindActionCreators(courseActions, dispatch)
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}

/* function mapDispatchToProps(dispatch){
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
} */

//export default connect(mapStateToProps)(CoursePage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);