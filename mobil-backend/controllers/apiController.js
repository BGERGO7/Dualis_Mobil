let Models = require('../models/index');
let axios = require('axios');

require("dotenv").config();

let addArticle = (title, content, contentLong,  authorName, imageUrl) => {
    return Models.Post.create({
        title: title,
        content: content,
        contentLong: contentLong,
        authorName: authorName,
        imageUrl: imageUrl,
    });
}

exports.registerArticle = (req, res) => {
    console.log("Hozzáadok egy új cikket...");

    const { title, content, contentLong,  authorName, imageUrl } = req.body;

    addArticle(title, content, contentLong,  authorName, imageUrl)
    .then((result) => {
        res.status(201).send("Az adat létrejött.");
    })
    .catch((err) => {
        res.status(500).send("Hiba történt az adat létrehozásakor.");
    });
};

exports.getAllArticles = (req, res) => {
    Models.Post.findAll({
        order: [['title', 'ASC']]
    })
    .then((result) => {
        if(!result){
            return res.status(404).json({
                error: "Jelenleg nincs bejegyzés az adatbázisban."
            });
        }
        res.status(200).json({data: result});
    })
    .catch((err) => {
        res.status(500).json({error: "Hiba történt az adatok lekérdezésekor."});
    });
};

exports.getArticle = (req, res) => {
    const {id} = req.params;

    Models.Post.findOne({
        where: {id: id}
    })
    .then((result) => {
        if(!result){
            return res.status(404).json({
                error: `Nincs ${id} azonosítóval bejegyzés az adatbázisban.`
            });
        }
        res.status(200).json({data: result});
    })
    .catch((err) => {
        res.status(500).json({error: "Hiba történt az adat lekérdezésekor."});
    });
};

exports.deleteArticle = (req, res) => {
    const {id} = req.params;

    Models.Post.destroy({
        where: {id: id}
    })
    .then(() => {
        res.status(418).json({message: `A ${id} azonosítójú bejegyzés törölve lett.`});
    });
};

exports.getPokemon = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokeData = response.data;

        const customPokemon = {
            id : pokeData.id,
            name : pokeData.name,
            height : pokeData.height,
            weight : pokeData.weight,
            image: pokeData.sprites.other["official-artwork"].front_default,
            type : pokeData.types[0].type,
        };

        res.status(200).json({data: customPokemon});
    } 
    catch (error) {
        if(error.response && error.response.status === 404){
            return res.status(404).json({error: `gatya`});
        }
        res.status(500).json({error: "Hiba történt a Pokémon adatainak lekérésekor."});
    };
};