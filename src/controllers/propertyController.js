module.exports={
    getAllProperties:(req,res,next)=>{
        const dbInstance=req.app.get('db');

        dbInstance.getAllProperties([req.session.user.user_id])
        .then(properties=>{res.status(200).send(properties)})
        .catch(err=>{
            res.status(500).send(err);
        })
    },
    getFilteredProperties:(req,res,next)=>{
        const dbInstance=req.app.get('db');

        dbInstance.getFilteredProperties([req.session.user.id, req.query.desired_rent])
        .then(properties=>{res.status(200).send(properties)})
        .catch(err=>{
            res.status(500).send(err);
        })
    },
    createNewProperty:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        let {property_name,property_description,address,city,state,
            zip,url,mg_total,mg_monthly,desired_rent,user_id}=
            req.body;

            dbInstance.createNewProperty(req.body)
            .then((res)=>res.status(200).send(res))
            .catch(err=>res.status(500).send(res))
    },
    deleteProperty:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        const {params}=req;

        dbInstance.deleteProperty([params.id])
        .then(()=>res.status(200).send('PROPERTY DELETED YO'))
        .catch(()=>res.status(500).send());
    }
}