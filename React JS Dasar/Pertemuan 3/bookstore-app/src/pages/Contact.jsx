function Contact() {
    return (
      <section className="my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">Have questions or feedback? Get in touch!</p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8641254386446!2d112.7205058!3d-7.1277548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd803dd886bbff5%3A0x9777ca139b28195d!2sUniversitas%20Trunojoyo%20Madura!5e0!3m2!1sen!2sid!4v1712739785623!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  