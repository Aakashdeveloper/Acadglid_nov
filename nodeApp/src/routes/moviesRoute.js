const express = require('express');
const moviesRouter = express.Router();
const {MongoClient, ObjectID}  = require('mongodb');
import 'babel-polyfill';

function router(nav){
    moviesRouter.route('/')
    .get((req,res) => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'acadgild_aug';
        (async function mongo(){
            let client;
            try{
                client  = await MongoClient.connect(url);
                const db = client.db(dbName);

                const col = await db.collection('books');
                const movies = await col.find().toArray();
                res.render('movies',{
                    title: `Movies `,
                    navbar:nav,
                    movies
                })
            }
            catch(err){

            }
            client.close();
        }())
        
    }) 

    moviesRouter.route('/:id')
        .get((req,res) => {
            const {id} = req.params;
            const url = 'mongodb://localhost:27017';
            const dbName = 'acadgild_aug';

            (async function mongo(){
                let client;
                try{
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);
                    const col = await db.collection('books');
                    const movieDetail =  await col.findOne({_id:id})
                    res.render('moviesDetail',
                        {
                            title: 'Movies detail page',
                            movies: movieDetail,
                            navbar:nav
                        })
                }
                catch(err){
                    console.log("no connection")
                }
            }())

        })

    
    return moviesRouter
}


module.exports = router;