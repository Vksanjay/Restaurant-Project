import Navbar from "./Navbar";

function Home(){
    return(
        <>
        <section className="homepage">
        <Navbar/>
        <div className="container">
        <div className="row">
        <div className="col-12 col-md-6 col-lg-5">
        <h1 className="cont"><i>Food Heaven</i></h1>
        <p className="mt-4 fon cont">Welcome to Food Heaven, where every meal is made with passion and served with love. Enjoy delicious flavors, fresh ingredients, and a warm dining experience that makes every visit special. From mouth-watering biryanis to delightful desserts, we bring you food that turns every meal into a memorable experience.</p>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default Home;