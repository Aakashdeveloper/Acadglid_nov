import express from 'express';

let artistRouter = express.Router();

function router(nav){
    artistRouter.route('/')
        .get((req,res) => {
        res.render('about' , {title:'Artist',navbar:nav} )
    })

    artistRouter.route('/details')
        .get((req,res) => {
        res.render('artistDetail' , {title:'Artist Details',navbar:nav} )
    })

    return artistRouter;
}


module.exports = router;


/*

add(1,2)


function add(a,b){
    return a+b
}

add(1,2)

*/
