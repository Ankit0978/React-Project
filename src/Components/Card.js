import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


 const Card = (props) => {

    let course = props.course
    console.log("====course data", course)
    return (
        <div>
            <div>
                <img src = {course.image.url}></img>
            </div>
            <div>
                <button>
                    <FontAwesomeIcon icon ={faHeart}/>
                </button>
            </div>  
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>

            </div>
        </div>
    )
}

export default Card
