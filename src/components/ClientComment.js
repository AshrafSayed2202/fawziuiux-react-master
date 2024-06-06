import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ClientComment(props) {
    return (
        <div className='client-comment'>
            <div className='comment'>
                <FontAwesomeIcon className='comment-icon' icon="fa-solid fa-quote-left" />
                <p>{props.comment}</p>
            </div>
            <div className='comment-person'>
                <img src={props.personImage} alt={props.personName} draggable='false' />
                <p className='person-name'>{props.personName}</p>
                <p className='person-title'>{props.personTitle}</p>
            </div>
        </div>
    )
}

export default ClientComment