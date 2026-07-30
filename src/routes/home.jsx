import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Destination from "../Components/Destination.jsx";
import Trips from "../Components/Trips.jsx";
import Footer from "../Components/Footer.jsx";
function home (){
 return (
    <>
    <Navbar/>

    <Hero 
    cName="hero"
    heroImg="https://plus.unsplash.com/premium_photo-1673971700988-346588461fa7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"

    />
    <Destination/>

    
   <Trips/>
   <Footer/>
    
    
    </>

 )
}
export default home;