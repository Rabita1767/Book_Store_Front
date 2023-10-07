import Button from "../../components/ui/button"
const About = () => {
    const click = () => {
        console.log(`Button Clicked`);
    }
    return (
        <>
            <h1>About</h1>
            <Button myFunc={click} text="Submit" />

        </>
    )
}
export default About