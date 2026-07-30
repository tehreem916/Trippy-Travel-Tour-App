import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import AboutImg from "../assets/felix-rostig-UmV2wr-Vbq8-unsplash.jpg";
import Footer from "../Components/Footer.jsx";
import Trip from "../Components/Trips.jsx";

function service (){
 return (
    <>
    
      <Navbar/>

    <Hero 
    cName="hero-mid"
    heroImg={AboutImg}
    title="Services"
    
    btnClass="hide"

    />
    <Trip/>
    
    <Footer/>
    
    </>

 )
}
export default service;