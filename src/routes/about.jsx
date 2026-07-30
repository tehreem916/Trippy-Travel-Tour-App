import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import AboutImg from "../assets/night.jpg";
import Footer from "../Components/Footer.jsx";
import AboutUs from "../Components/AboutUs.jsx";

function about (){
 return (
    <>
    
     <Navbar/>

    <Hero 
    cName="hero-mid"
    heroImg={AboutImg}
    title="About"
    
    btnClass="hide"

    />

    <AboutUs/>
    <Footer/>

    
    
    
    
    </>

 )
}
export default about;