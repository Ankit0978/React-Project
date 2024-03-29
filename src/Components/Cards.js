import React from 'react'
import Card from "./Card"

 const Cards = (props) => {
     let courses = props.courses 
     let allCourses = [];
    //  console.log("printing data")
    //  console.log(courses)

// This function helps us to return all the courses that we are getting form an api call, jitne bhi cards ka data he wo all courses wale array mein insert kar rha he
    function getCourses() {
        // console.log("====get", courses)
        
        Object.values(courses).forEach(array =>{
            // console.log("=====", array)
            array.forEach(courseData =>{
                // console.log("====data", courseData)
                allCourses.push(courseData)
            })
        })
        return allCourses
        
    }
    console.log(allCourses)
    return (
        <div>{
             getCourses().map((course) =>(
                 <Card key = {course.id} course= {course}></Card>
             ))

        }
        </div>
    )
}

export default Cards;
 