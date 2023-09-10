const DropdownText = ({ className, imgsrc, alt}) => {

    return(
        <div className={ className } >
            <img src={imgsrc} alt={alt} 
                className={`${className}pic`} />
            <p className='ig-title'>{alt}</p>
        </div>
    )
}

export default DropdownText