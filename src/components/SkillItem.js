import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCursor } from './CursorProvider'

function SkillItem(props) {
    const { setCursorSize, setCursorImage } = useCursor()
    const changeCursorSize = (size) => {
        setCursorSize((prev) => {
            return prev !== size ? size : prev;
        })
    }
    const itemRef = React.useRef(null)
    const nameRef = React.useRef(null)
    React.useEffect(() => {
        itemRef.current.addEventListener('click', () => {
            document.querySelectorAll('.skill-item').forEach((e) => {
                e.classList.remove('active')
            })
            itemRef.current.className = 'skill-item active'
        })
        if (props.nameClass === 'education-name') {
            nameRef.current.addEventListener('mouseenter', () => {
                setCursorImage(props.certficate)
                changeCursorSize('150px')
            })
            nameRef.current.addEventListener('mouseleave', () => {
                setCursorImage(null)
                changeCursorSize('0px')
            })
        }
    })
    return (
        <div className='skill-item' ref={itemRef}>
            <div className={props.textClass}>
                <p className={props.nameClass} ref={nameRef}>{props.name}</p>
                <span className='sub-skill-text'>{props.sub}</span>
            </div>
            <>
                {props.nameClass === 'skill-name' ?
                    <img src={props.icon} alt={props.icon} /> :
                    <a href={props.link} target='_blanc'>
                        <FontAwesomeIcon
                            className='contact-icon certficate-btn'
                            icon="fa-solid fa-arrow-right"
                            onMouseEnter={() => { changeCursorSize('60px') }}
                            onMouseLeave={() => { changeCursorSize('0px') }}
                        />
                    </a>
                }
            </>
        </div>
    )
}

export default SkillItem