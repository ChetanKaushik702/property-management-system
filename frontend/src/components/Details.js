import React from 'react'

function Details(props) {
    const { property } = props;
    return (
        <div className='container'>
            <ul>
                <li>Name: {property.name}</li>
                <li>Description: {property.description}</li>
                <li>Size: {property.size} (in sq. feet)</li> 
                <button onClick={() => props.delete(property._id.toString())}>Delete</button>
            </ul>
        </div>
    )
}

export default Details
