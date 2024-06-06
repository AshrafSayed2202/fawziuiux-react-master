import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useCursor } from './CursorProvider'
import { motion } from 'framer-motion'

function PortfolioCard(props) {
    const { setCursorSize } = useCursor()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: props.delay }}
            className='portfolio-card' style={{ gridArea: props.gridArea }}>
            <img className='portfolio-card-image' src={props.projectImage} alt={props.projectName} />
            <div className='card-text-container' onClick={() => { window.open(props.link, '_blanc') }}>
                <div>
                    <p className='card-see-more'>See more</p>
                    <p className='card-name' onMouseEnter={() => { setCursorSize('65px') }} onMouseLeave={() => { setCursorSize('0px') }}>{props.projectName}</p>
                </div>
                <FontAwesomeIcon className='contact-icon certficate-btn' icon="fa-solid fa-arrow-right" />
            </div>
        </motion.div>
    )
}

export default PortfolioCard