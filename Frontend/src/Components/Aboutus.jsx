import about from "../assets/about.png";

function Aboutus() {
  return (
    <>
    <section className="aboutpage">
      <h2 className="fon3">About Us</h2>
      <p className="text-warning fon5"><i>WELCOME TO FOOD HEAVEN</i></p>
      <div className="container py-2">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={about} className="img-fluid rounded" alt="Food Heaven Restaurant"/>
          </div>
          <div className="col-md-6">
            <h2 className="text-warning fon10">Where Every Bite Feels Like Heaven</h2>
            <p className="mt-3 fon6">At Food Heaven, we believe that great food brings people together. Our restaurant is dedicated to serving delicious, freshly prepared dishes made with quality ingredients and authentic flavors.</p>
            <p className="fon6">From mouth-watering biryanis and flavorful curries to crispy starters, pizzas, and delightful desserts, we offer something for every taste.</p>
            <p className="fon6">Our chefs prepare every dish with passion and attention to detail, while our friendly team makes sure you have a warm and memorable dining experience.</p>
            <a href="#viewmenu" className="btn btn-primary mt-2 but2">Explore Our Menu</a>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-md-4">
            <h2>🍴</h2>
            <h4 className="fon7">Fresh Ingredients</h4>
            <p className="fon6">We use fresh and quality ingredients in every dish.</p>
          </div>
          <div className="col-md-4">
            <h2>👨‍🍳</h2>
            <h4 className="fon7">Expert Chefs</h4>
            <p className="fon6">Our chefs create delicious dishes with passion.</p>
          </div>
          <div className="col-md-4">
            <h2>❤️</h2>
            <h4 className="fon7">Made With Love</h4>
            <p className="fon6">Every meal is prepared with care and served with love.</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
export default Aboutus;