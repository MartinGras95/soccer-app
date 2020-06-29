// imports
// 
// 
import mongoose, { mongo } from "mongoose";
import { PlayerSchema } from "../models/playerModel";

// create player object 
const Player = mongoose.model("Player", PlayerSchema);

// create controllers
// 
// 
// functions that interract with the database 
// when request is made to the api
// Request sent to API -> controller executes function in DB

// Add players
// 
// 
export const addNewPlayer = (req, res) => {
    // new player
    // Player object with parameters from front end
    let newPlayer = new Player(req.body);

    // Save player to DB
    newPlayer.save((err, Player) => {
        if (err) {
           res.send(err); 
        }
        res.json(Player);
    })
};


// Get all players
// 
// 
export const getPlayers = (req, res) => {
    // Find all players
    Player.find({}, (err, Player) => {
        // throw errors if any
        if (err) {
           res.send(err); 
        }
        // else return player data
        res.json(Player);
    })
};


// Get specfic player
// 
// 
export const getPlayerWithID = (req, res) => {
    // Find by ID by inserting ID as parameter
    Player.findById(req.params.PlayerId, (err, Player) => {
        // throw errors if any
        if (err) {
           res.send(err); 
        }
        // else return player data
        res.json(Player);
    })
};


// Update player
// 
// 
export const updatePlayer = (req, res) => {
    // Find by ID and update
    // use id provided and pass the body of the player object
    // to update it
    // the new: true option will return new player instead of old
    Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, { new: true }, (err, Player) => {
        // throw errors if any
        if (err) {
           res.send(err); 
        }
        // else return player data
        res.json(Player);
    })
};


// Delete player
// 
// 
export const deletePlayer = (req, res) => {
    // Find by ID by inserting ID as parameter
    Player.remove({ _id: req.params.PlayerId },(err, Player) => {
        // throw errors if any
        if (err) {
           res.send(err); 
        }
        // else return player data
        res.json({ message: `Successfully deleted player!`});
    })
};
