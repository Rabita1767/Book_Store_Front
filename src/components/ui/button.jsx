const Button = ({ myFunc, text }) => {

    return (
        <>
            <button type="submit" onClick={myFunc}>{text}</button>
        </>
    )

}
export default Button