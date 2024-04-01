import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./card.css"


 const Card = (props) => {

    let course = props.course
    // console.log("====course data", course)
    return (
        <div className="main">
            <div className="image">
                <img src = {course.image.url}></img>
                <div className="button">
                <button>
                    <FontAwesomeIcon className="icon" icon ={faHeart}/>
                </button>
                </div>
                </div>
         
        
            <div className="para">
                <p className="para1">{course.title}</p>
                <p className="para2">{course.description}</p>

            </div>
        </div>
    )
}

export default Card
