const router =require('express').Router();


router.get('/',(req,res)=>{
    res.status(200).json({
        message:'get all contacts'
    })
});

router.get('/:id',(req,res)=>{
    res.status(200).json({
        message:'get specific contact with id',
        contact_id:req.params.id
    })
});

router.post('/',(req,res)=>{
    res.status(201).json({
        message:'create new'
    })
});
router.patch('/:id',(req,res)=>{
    res.status(201).json({
        message:'partially updates a contact with specific id',
        contact_id:req.params.id
    })
})
router.put('/:id',(req,res)=>{
    res.status(201).json({
        message:'completely updates a contact with specific id',
        contact_id:req.params.id
    })
})

router.delete('/:id',(req,res)=>{
    res.status(201).json({
        message:'delete a contact with specific id',
        contact_id:req.params.id
    })
})
module.exports=router;
