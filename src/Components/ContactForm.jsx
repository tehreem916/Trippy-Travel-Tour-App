import "./ContactFormstyles.css";


function ContactForm() { 
return (
<div className="form-container">
    <h1>Contact Us</h1>
    <form>
        <input type="text" placeholder="Name" name="name" required/>
        <input type="email" placeholder="Email" name="email" required/>
        <textarea placeholder="Message" name="message" required></textarea>
        <button type="submit">Send</button>
    </form>
</div>
)

}
export default ContactForm;