import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import AboutImg from "../assets/2.jpg";
import Footer from "../Components/Footer.jsx";
import ContactForm from "../Components/ContactForm.jsx";


function contact (){
 return (
    <>
    <Navbar/>

    <Hero 
    cName="hero-mid"
    heroImg={AboutImg}
    title="Contact"
    
    btnClass="hide"

    />
    <ContactForm/>
    <Footer/>
    
    
    
    
    </>

 )
}
export default contact;