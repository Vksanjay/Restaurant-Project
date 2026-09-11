import { useState, useEffect } from "react";
import Updatemenu from "./Updatemenu";
import Addmenu from "./Addmenu";

function Viewmenu() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectingMenu, setSelectingMenu] = useState(false);
  const [viewmenu, setViewmenu] = useState([]);
  
  const API_URL = "https://restaurant-project-backend.vercel.app";
  
const handleDelete = async (id) => {
    try {
        const res = await fetch(
            `${API_URL}/api/addmenu/${id}`,
            {
                method: "DELETE"
            }
        );
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message);
        }
        alert("Menu deleted successfully!");
        setViewmenu(
            viewmenu.filter((item) => item._id !== id)
        );
    } catch (error) {
        console.error("Error deleting menu:", error);
    }
};

  useEffect(() => {
    const fetchAddmenu = async () => {
      try {
        const res = await fetch(`${API_URL}/api/addmenu`);
        const data = await res.json();
        setViewmenu(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchAddmenu();
  }, []);
  console.log(viewmenu);

  const handleUpdate = (updatedMenu) => {
  setViewmenu((prev) =>
    prev.map((item) =>
      item._id === updatedMenu._id ? updatedMenu : item
    )
  );
  setSelectedMenu(null);
};
const handleUpdateCancel = () => {
    setSelectedMenu(null);
};

const handleAdd = (newMenu) => {
    setViewmenu((prev) => [...prev, newMenu]);
    setSelectingMenu(false);
};

const handleCancel = () => {
    setSelectingMenu(false);
};

  return (
    <>
    {selectingMenu ? (
      <Addmenu onAdd={handleAdd} onCancel={handleCancel}/>
    ) : selectedMenu ? (
    <Updatemenu menudata={selectedMenu} onUpdate={handleUpdate} onCancel={handleUpdateCancel}/>
  ) : (
  <section className="menupage">
    <h2 className="fon4 res">Restaurant Menu</h2>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 offset-lg-8 text-end mb-2">
          <button className="btn btn-primary but1" type="button" onClick={() => { setSelectingMenu(true); setTimeout(() => { document.getElementById("viewmenu")?.scrollIntoView({ behavior: "smooth",block: "start"}); }, 0); }}>Add Dish</button>
        </div>
      </div>
      <div className="row g-4">
        {viewmenu.map((items) => (
          <div className="col-12 col-sm-6 col-lg-4" key={items._id}>
            <div className="card siz h-100">
              <img src={items.image} className="card-img-top siz1 " alt="..."/>
              <div className="card-body car1 ps-3">
                <h5 className="card-title">{items.food_name}</h5>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{items.rating}</p>
                <p>{items.price}</p>
                <p>{items.description}</p>
                <div className="d-flex gap-2">
                  <button className="btn but3" type="button" onClick={() => { setSelectedMenu(items); setTimeout(() => { document.getElementById("viewmenu")?.scrollIntoView({ behavior: "smooth",block: "start"}); }, 0); }}>Update</button>
                  <button className="btn but3" type="button" onClick={() => handleDelete(items._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}  
      </div>
    </div>
  </section>
)}
  </>
  )
}
export default Viewmenu;