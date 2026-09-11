function Contactus(){
    return(
        <>
        <section className="contactpage">
          <h2 className="fon3 mb-3">Contact</h2>
          <h1 className="fon3">YOUR DETAILS</h1>
          <div className="contact-form">
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstname"/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastname"/>
              </div>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="email"/>
              </div>
              <div className="col-12">
                <label className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="phonenumber"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3"></textarea>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary p-2 but2">Send a Message</button>
              </div>
            </form>
          </div>
        </section>
        </>
    )
}
export default Contactus;