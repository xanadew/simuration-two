module.exports={
    register:(req,res,next)=>{
        const dbInstance=req.app.get('db');

        dbInstance.register([req.body.username,req.body.password])
        .then(res=>{req.session.user=res;
        res.status(200).send(res)})
        .catch((err)=>{res.status(500).send(error)})
    },
    login:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        console.log("YOU LOGGED IN MY G")

        dbInstance.login([req.body.username,req.body.password])
        .then(res=>{
            req.session.user=res[0];
            console.log('xXx',req.session.user);
            res.status(200).send(res)})
            .catch((err)=>{console.log(err)
            res.status(500).send(err)})
            console.log(req.session.user)
    },
    logout:(req,res,next)=>{
        console.log('LOGGED OUT MY G')
        req.session.destroy(function(err){
            console.log(req.session);
            console.log(err);
            res.status(200).send('r u finished or r u done')
        })
    }
}