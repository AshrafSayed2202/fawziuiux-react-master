
import React from 'react'
import './CursorStyle.css'
import { useCursor } from './CursorProvider'
function Cursor() {
    const cursorOut = React.useRef(null)
    const { cursorSize, cursorImage } = useCursor()
    React.useEffect(() => {
        const CursorMove = (e) => {
            const posX = e.clientX
            const posY = e.clientY
            cursorOut.current.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 300, fill: "forwards" })
        }
        cursorOut.current.animate({
            width: cursorSize,
            height: cursorImage == null ? cursorSize : 'unset',
        }, { duration: 300, fill: "forwards" })
        cursorOut.current.animate({
            scale: 1,
            opacity: 1
        }, { duration: 200, delay: 300, fill: "forwards" })
        window.addEventListener("mousemove", CursorMove)
        return () => {
            window.removeEventListener("mousemove", CursorMove)
        }
    })
    return (
        <>
            {cursorImage == null ?
                <div ref={cursorOut} className='cursor-outline'></div> :
                <img ref={cursorOut} className='cursor-image' src={cursorImage} alt={cursorImage} />
            }
        </>
    )
}

export default Cursor