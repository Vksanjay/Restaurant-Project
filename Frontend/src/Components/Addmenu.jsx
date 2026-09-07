import { useState } from "react";
function Addmenu({ onAdd,onCancel }){
  
  const [formData, setFormData] = useState({
        image: "",
        food_name: "",
        rating: "",
        price: "",
        description: ""
    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("https://restaurant-project-api-ten.vercel.app/api/addmenu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || "Failed to add menu");
        }
        console.log("Saved to MongoDB:", data);
        onAdd(data);
        alert("Menu added successfully!");
        setFormData({
            image: "",
            food_name: "",
            rating: "",
            price: "",
            description: ""
        });
    } catch (error) {
        console.error("Error adding menu:", error);
        alert(error.message);
    }
};

    return(
        <>
        <section className="addmenupage">
        <h2 className="fon3">Add Menu</h2>
        <form className="col-6 con" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Image URL</label>
    <input type="text" className="form-control" id="url" value={formData.image} name="image" onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label className="form-label">Food Name</label>
    <input type="text" className="form-control" id="foodname" value={formData.food_name} name="food_name" onChange={handleChange}/>
  </div>
   <div className="mb-3">
    <label className="form-label">Rating</label>
    <input type="number" className="form-control" id="rating" value={formData.rating} name="rating" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Price</label>
    <input type="number" className="form-control" id="price" value={formData.price} name="price" onChange={handleChange}/>
  </div>
  <div className="mb-3">
  <label className="form-label">Description</label>
  <textarea name="description" className="form-control" id="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
</div>
<div className="text-center">
    <button type="button" className="btn btn-secondary mb-5 me-3" onClick={onCancel}>CANCEL</button>
    <button type="submit" className="btn btn-primary mb-5">ADD MENU</button>
  </div>
</form>
</section>
        </>
    )
}
export default Addmenu;


























// const handleChange = (e) => {
//   const {name,value}=e.target;
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//     });
// };

// const handleSubmit=async(e)=>{
//     e.preventDefault();
//     try {
//         const res=await fetch("http://localhost:5000/api/addmenu",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(formData)
//             }
//         );
//         const data = await res.json();
//         console.log("Saved:", data);
//         alert("Menu added successfully");
//     } catch (error) {
//         console.error("Error adding menu:", error);
//     }
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Sending:", formData);
//     console.log("FORM DATA:", formData);
// console.log("JSON:", JSON.stringify(formData));

//     try {
//         const res = await fetch("http://localhost:5000/api/addmenu", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 image: formData.image,
//                 food_name: formData.food_name,
//                 rating: Number(formData.rating),
//                 price: Number(formData.price),
//                 description: formData.description
//             })
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data.message || "Failed to add menu");
//         }

//         console.log("Saved:", data);
//         alert("Menu added successfully");

//     } catch (error) {
//         console.error("Error adding menu:", error);
//         alert(error.message);
//     }
// };