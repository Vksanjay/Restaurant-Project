const addmenumodel=require('../../Model/AddmenuSchema/addmenuschema');

exports.getaddmenu=async(req,res)=>{
    try {
        const addmenu=await addmenumodel.find();
        res.json(addmenu);   
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}

exports.postaddmenu=async(req,res)=>{
    const {image,food_name,rating,price,description}=req.body;
    try {
        const newaddmenus=new addmenumodel({image,food_name,rating,price,description});
        await newaddmenus.save();
        res.status(201).json(newaddmenus);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});    
    }
}

exports.updateaddmenu=async(req,res)=>{
    try{
    const {image,food_name,rating,price,description}=req.body;
    const id=req.params.id;
    const updateaddmenu=await addmenumodel.findByIdAndUpdate(
        id,
        {image,food_name,rating,price,description},
        {new:true, runValidators: true }
    );
    if(!updateaddmenu){
        return res.status(404).json({message:"Addmenu not found"});
    }
    res.json(updateaddmenu);
}
catch(error){
    console.log(error);
    res.status(500).json({message:error.message});
}
};

exports.deleteaddmenu = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedMenu = await addmenumodel.findByIdAndDelete(id);
        if (!deletedMenu) {
            return res.status(404).json({
                message: "Menu not found"
            });
        }
        res.status(200).json({
            message: "Deleted Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};