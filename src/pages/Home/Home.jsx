import Header from "../../components/Header/header";
import HeaderAdmin from "../../components/Header/headerAdmin";
import "./home.scss"
const Home = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role")
    return (
        <>
            <Header />
            <h1>Home</h1>
        </>
    )

}
export default Home;