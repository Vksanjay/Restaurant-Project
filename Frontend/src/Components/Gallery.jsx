function Gallery() {
  return (
    <>
      <section className="gallerypage">
        <div className="gallery-heading">
          <h1>Food Gallery</h1>
          <p>Explore Our Delicious Food Collection</p>
        </div>
        <div className="gallery-buttons">
          <button className="gallery-btn" type="button" data-bs-target="#foodGallery" data-bs-slide-to="0">Main Course</button>
          <button className="gallery-btn" type="button" data-bs-target="#foodGallery" data-bs-slide-to="1">Starters</button>
          <button className="gallery-btn" type="button" data-bs-target="#foodGallery" data-bs-slide-to="2">Kitchen</button>
          <button className="gallery-btn" type="button" data-bs-target="#foodGallery" data-bs-slide-to="3">Desserts</button>
        </div>

        <div id="foodGallery" className="carousel slide gallery-carousel" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="category-title">
                <h2>Main Course</h2>
                <p>Delicious and flavorful main dishes</p>
                </div>
              <div className="gallery-grid">
                <div className="gallery-card">
                  <img src="https://www.kannammacooks.com/wp-content/uploads/buhari-hotel-chennai-chicken-biryani-recipe-1-4.jpg" alt="Chicken Biryani"/>
                  <h3>Chicken Biryani</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://www.whiskaffair.com/wp-content/uploads/2020/06/Chicken-Tikka-2-3.jpg" alt="Chicken Tikka"/>
                  <h3>Chicken Tikka</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG" alt="Butter Chicken"/>
                  <h3>Butter Chicken</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://images.jdmagicbox.com/justdial/icons/website/dishes/mutton_dum_biryani.jpg" alt="Mutton Biryani"/>
                  <h3>Mutton Biryani</h3>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="category-title">
                <h2>Starters</h2>
                <p>Perfect bites to begin your meal</p>
              </div>
              <div className="gallery-grid">
                <div className="gallery-card">
                  <img src="https://www.tawakkulrestaurantchicago.com/_next/image?url=https%3A%2F%2Fdtwaeonhht2im.cloudfront.net%2Fb34bcbe2545e43c4e485f2fe6edb5b22-1.jpg&w=3840&q=75" alt="Chicken 65"/>
                  <h3>Chicken 65</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://palatesdesire.com/wp-content/uploads/2022/06/Spicy-chicken-wings-recipe@palates-desire-2.jpg" alt="Chicken Wings"/>
                  <h3>Chicken Wings</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://profusioncurry.com/wp-content/uploads/2022/01/Paneer-tikka-in-air-fryer-served-for-appetizer.jpg" alt="Paneer Tikka"/>
                  <h3>Paneer Tikka</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://nishkitchen.com/wp-content/uploads/2018/11/Chicken-Lollipop-3B.jpg" alt="Crispy Chicken"/>
                  <h3>Chicken Lollipop</h3>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="category-title">
                <h2>Our Kitchen</h2>
                <p>A glimpse of our kitchen and food preparation</p>
              </div>
              <div className="gallery-grid">
                <div className="gallery-card">
                  <img src="https://images.stockcake.com/public/a/5/f/a5f16108-c197-41ef-8006-6aab3141ad3d_medium/chefs-preparing-meals-stockcake.jpg" alt="Restaurant Kitchen"/>
                  <h3>Fresh Preparation</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://www.tgpinternational.com/hubfs/Imported_Blog_Media/DSC00507.jpg" alt="Chef Cooking"/>
                  <h3>Expert Chefs</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://buyersedgeplatform.com/wp-content/uploads/2026/06/Feature-Graphic-1-scaled.webp" alt="Food Preparation"/>
                  <h3>Quality Ingredients</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://previews.123rf.com/images/kzenon/kzenon1307/kzenon130700213/20925525-two-chefs-in-teamwork-man-and-woman-in-a-restaurant-or-hotel-kitchen-cooking-delicious-food.jpg" alt="Restaurant Kitchen"/>
                  <h3>Made With Love</h3>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="category-title">
                <h2>Desserts</h2>
                <p>Sweet treats to finish your meal</p>
              </div>
              <div className="gallery-grid">
                <div className="gallery-card">
                  <img src="https://cdn.sanity.io/images/cmzramr1/production/2db3f1b5c9b93a7d66731b197906fbd5c81ef5dc-1200x896.png?w=1200&q=80&auto=format" alt="Chocolate Cake"/>
                  <h3>Chocolate Cake</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://www.stefanofaita.com/wp-content/uploads/2023/02/sundae-a-la-creme-glacee-maison-.jpg " alt="Ice Cream"/>
                  <h3>Ice Cream</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics_v2/medium/gulab_jamun.jpg" alt="Gulab Jamun"/>
                  <h3>Gulab Jamun</h3>
                </div>
                <div className="gallery-card">
                  <img src="https://www.cookwithkushi.com/wp-content/uploads/2017/01/sizzling_brownie_sundae_ice_cream.jpg" alt="Dessert"/>
                  <h3>Special Dessert</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;