const express=require('express');
const router = express.Router();
const addmenu=require('../Controller/AddmenuController/addmenucontroller');

router.get('/addmenu',addmenu.getaddmenu);
router.post('/addmenu',addmenu.postaddmenu);
router.put('/addmenu/:id',addmenu.updateaddmenu);
router.delete('/addmenu/:id',addmenu.deleteaddmenu);

module.exports=router;


