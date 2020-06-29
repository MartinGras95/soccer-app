// imports
// 
// 
import { 
    addNewPlayer, 
    getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer
} from "../controllers/playerControllers";


// routes
// 
// 
const routes = (app) => {

    // Players route with post & get end points
    app.route("/players")
        // Get endpoint
        .get(getPlayers)
        // the post method will execute addNewPlayer
        .post(addNewPlayer);

    // Route for finding player
    app.route("/player/:PlayerId")
        // Get endpoint for specific player
        .get(getPlayerWithID)
        // Put endpoint for updating specific player
        .put(updatePlayer)
        // Remove endpoint
        .delete(deletePlayer);
}



export default routes;

