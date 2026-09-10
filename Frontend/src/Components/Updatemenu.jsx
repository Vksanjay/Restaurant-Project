import { useEffect, useState } from "react";

function Updatemenu({ menudata, onUpdate, onCancel }) {
    const [image, setimage] = useState("");
    const [food_name, setfood_name] = useState("");
    const [description, setdescription] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");

    const API_URL = "https://restaurant-project-backend.vercel.app";

    // Get selected menu data
    useEffect(() => {
        if (menudata) {
            setimage(menudata.image);
            setfood_name(menudata.food_name);
            setdescription(menudata.description);
            setRating(menudata.rating);
            setPrice(menudata.price);
        }
    }, [menudata]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `${API_URL}/api/addmenu/${menudata._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        image: image,
                        food_name: food_name,
                        rating: Number(rating),
                        price: Number(price),
                        description: description
                    })
                }
            );
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }
            alert("Menu updated successfully!");
            onUpdate(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="updatepage">
                <h2 className="fon9">UPDATE MENU</h2>
                <form onSubmit={handleUpdate}>
                    <div className="update-form">
                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input type="text" className="form-control" value={image} onChange={(e) => setimage(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Food Name</label>
                            <input type="text" className="form-control" value={food_name} onChange={(e) => setfood_name(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rating</label>
                            <input type="number" className="form-control" value={rating} onChange={(e) =>setRating(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" value={price} onChange={(e) =>setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" rows="3" value={description} onChange={(e) =>setdescription(e.target.value)}></textarea>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-secondary me-3" onClick={onCancel}>CANCEL</button>
                            <button type="submit" className="btn btn-primary">UPDATE MENU</button>
                              
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Updatemenu;