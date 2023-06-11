import NavbarComponent from "./components/common/Navbar";
import LandingPage from "./components/pages/LandingPage";
import FooterComponent from "./components/common/Footer";

function Front() {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <LandingPage></LandingPage>
            <FooterComponent></FooterComponent>
        </>
    )
}

export default Front