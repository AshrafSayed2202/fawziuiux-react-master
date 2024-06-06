import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function PricingCard(props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: props.delay }}
            className='pricing-card'>
            <div className='pricing-text'>
                <div>
                    <p className='pricing-header'>{props.head}</p>
                    <p className='pricing-sub-header'>{props.sub}</p>
                </div>
                <div>
                    <p className={props.noteType === 'text' ? 'note' : 'note round'}>{props.note}</p>
                    <p className={props.priceType === 'price' ? 'price' : 'note'}>{props.priceType === 'price' ? <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /> : null}{props.price}</p>
                </div>
            </div>
            <div onClick={() => { props.toggleForm() }} className={props.btnType === 'normal' ? 'pricing-btn' : 'pricing-btn trans'} >{props.btnType === 'normal' ? 'Get Started' : 'Free Skill Check'}</div>
        </motion.div>
    )
}

export default PricingCard