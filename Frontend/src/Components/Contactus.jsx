function Contactus(){
    return(
        <>
        <section className="contactpage">
          <h2 className="fon3">Contact us</h2>
          <h1 className="fon3">YOUR DETAILS</h1>

          <div className="col-6 cont1">
        <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">First Name</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Last Name</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label className="form-label">Email</label>
    <input type="text" className="form-control" id="inputAddress"/>
  </div>
  <div className="col-12">
    <label className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="inputAddress2"/>
  </div>
   <div className="mb-3">
  <label className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
</div>
<div className="col-12 text-center">
  <button className="btn btn-primary p-2 but2">
    Send a Message
  </button>
</div>
</form>
</div>
</section>
        </>
    )
}
export default Contactus;