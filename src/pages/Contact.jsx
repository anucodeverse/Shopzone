function Contact() {
  return (
    <div className="page">
      <h1 className="page-title">Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message"></textarea>
        <button type="button" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;