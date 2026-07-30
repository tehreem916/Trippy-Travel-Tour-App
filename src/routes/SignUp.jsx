import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero.jsx";
import "../Components/SignUpstyls.css";
import Footer from "../Components/Footer";

function SignUp() { 

    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
    heroImg="https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Join Trippy"
        text="Create your account and start your next adventure."
        btnClass="hide"
        />
         <section className="signup">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p>Join thousands of travelers exploring the world with Trippy.</p>

          <form className="signup-form">
            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="password" placeholder="Password" required />

            <input
              type="password"
              placeholder="Confirm Password"
              required
            />

            <button type="submit">Create Account</button>
          </form>

          <p className="login-text">
            Already have an account? <a href="/">Log In</a>
          </p>
        </div>
      </section>
        <Footer />
        </>
    );
}
export default SignUp;