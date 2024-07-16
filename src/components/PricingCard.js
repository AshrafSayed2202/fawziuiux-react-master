import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function PricingCard(props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: props.delay }}
            className={props.plan === 'Basic' ? 'pricing-card' : props.plan === 'Standard' ? 'pricing-card standard' : props.plan === 'Pro' ? 'pricing-card pro' : props.plan === 'Unlimited' ? 'pricing-card unlimited' : 'pricing-card'}>
            <div>
                <div className='pricing-header-container'>
                    <p className='pricing-header'>{props.head}</p>
                    {props.sub1 !== '' ? <p className='pricing-sub-header1'>{props.sub1}</p> : null}
                </div>
                <div className='price-container'>
                    <span className='price'>${props.price}</span>
                    <span className='pricing-sub'>
                        <span className='pricing-sub-header2'>{props.sub2}<br /></span>
                        <span className='pricing-sub-header3'>{props.sub3}<br /></span>
                    </span>
                </div>
                {props.priceType === 'hourly' ?
                    <ul>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Include source file</li>
                        <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Wireframes</li>
                        <li><FontAwesomeIcon icon={props.plan === 'Basic' ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check"} /> Prototype</li>
                        <li><FontAwesomeIcon icon={props.plan === 'Basic' ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check"} /> User flows</li>
                        <li><FontAwesomeIcon icon={props.plan === 'Basic' || props.plan === 'Standard' ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check"} /> Responsive design</li>
                        <li><FontAwesomeIcon icon={props.plan === 'Basic' || props.plan === 'Standard' || props.plan === 'Pro' ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check"} /> Competitive UX analysis</li>
                        <li><FontAwesomeIcon icon={props.plan === 'Basic' || props.plan === 'Standard' || props.plan === 'Pro' ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check"} /> User research and personas</li>
                    </ul>
                    :
                    props.isFree === 'yes' ?
                        <ul>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 1 Desktop screen</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 2 Mobile app screen</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> 1 Cars screen</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Include pdf, png</li>
                        </ul>
                        :
                        <ul>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> {props.plan === 'Standard' ? '4' : '8'} Hours / Day</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Includes the unlimited plan</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Remote</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-circle-check" /> Hybrid</li>
                            <li><FontAwesomeIcon icon={props.plan === 'Standard' ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check"} /> On site</li>
                        </ul>
                }
            </div >
            <div onClick={() => { props.toggleForm() }} className='pricing-btn' >Get Started</div>
        </motion.div >
    )
}

export default PricingCard