import { useState } from 'react'

const DropdownText = ({ className, imgsrc, alt, text }) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return(
        <div className={!open ? className : `${className}Clicked`} 
            onClick={handleClick}>
            <img src={imgsrc} alt={alt} 
                className={`${className}pic`} />
            <p className='ig-title'>{alt}</p>
            <div className={open ? "show" : "hide"}>
                {text}
            </div>
        </div>
    )
}

export default DropdownText