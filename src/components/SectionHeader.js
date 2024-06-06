import React from 'react'
import { motion } from 'framer-motion';
function SectionHeader(props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <p className='section-header'>{props.header}</p>
            <p className='section-sub-header'>{props.sub}</p>
        </motion.div>
    )
}

export default SectionHeader