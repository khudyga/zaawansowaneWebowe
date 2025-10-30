const CustomButton = ({text = "kliknij", color="primary", size="md", onClick}) => {
    const sizeClasses = {
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
    }
    return (
        <button className={`btn btn-${color} ${sizeClasses[size]} mb-2`} onClick={onClick}>{text}</button>
    )
    

}

export default CustomButton