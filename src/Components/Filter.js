import React from "react"
import "./filter.css"

const Filter =  (props) => {
    let filterData = props.filterData;
    return (
        <div className="filter">
        
        {filterData.map ((data) => { 
          return  (<button className="button" key = {data.id}>
                {data.title}
            </button>)
        } )}

        </div>
    )
}

export default Filter;