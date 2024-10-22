/**
 * Set 3
 *
 * This assignment will develop your ability to manipulate data.
 * You should be ready for JS tutorials on more advanced topics after this.
 *
 * Please refer to the `module4/sample-data/set3-sample-data.js` file for examples of:
 * - the `socialGraph` parameter for `relationshipStatus`
 * - the `board` parameter for `ticTacToe`
 * - the `routeMap` parameter for `eta`
 */

/**
 * Relationship status
 *
 * Let's pretend that you are building a new app with social media functionality.
 * Users can have relationships with other users.
 *
 * The two guidelines for describing relationships are:
 * 1. Any user can follow any other user.
 * 2. If two users follow each other, they are considered friends.
 *
 * This function describes the relationship that two users have with each other.
 *
 * Please see the sample data for examples of `socialGraph`.
 *
 * @param {string} fromMember The subject member
 * @param {string} toMember The object member
 * @param {object} socialGraph The relationship data
 * @returns {string} "follower" if fromMember follows toMember;
 * "followed by" if fromMember is followed by toMember;
 * "friends" if fromMember and toMember follow each other;
 * "no relationship" otherwise.
 */
 function relationshipStatus(fromMember, toMember, socialGraph) {
    const follows = socialGraph[fromMember]?.follows || [];
    const followedBy = socialGraph[toMember]?.follows || [];
    const isFollowing = follows.includes(toMember);
    const isFollowedBy = followedBy.includes(fromMember);

    if (isFollowing && isFollowedBy) {
        return "friends"; 
    } else if (isFollowing) {
        return "follower";
    } else if (isFollowedBy) {
        return "followed by"; 
    } else {
        return "no relationship"; 
    }
}


/**
 * Tic tac toe
 *
 * Tic Tac Toe is a common paper-and-pencil game.
 * Players must attempt to draw a line of their symbol across a grid.
 * The player that does this first is considered the winner.
 *
 * This function evaluates a Tic Tac Toe game board and returns the winner.
 *
 * Please see the sample data for examples of `board`.
 *
 * @param {Array} board The representation of the Tic Tac Toe board as a square array of arrays. The size of the array will range between 3x3 to 6x6.
 * The board will never have more than 1 winner.
 * There will only ever be 2 unique symbols at the same time.
 * @returns {string} the symbol of the winner, or "NO WINNER" if there is no winner.
 */
function ticTacToe(board) {
    function ticTacToe(board) {
        const size = board.length;
    
        
        for (let row = 0; row < size; row++) {
            if (board[row].every(cell => cell === board[row][0] && cell !== "")) {
                return board[row][0]; 
            }
        }
    
        
        for (let col = 0; col < size; col++) {
            let column = [];
            for (let row = 0; row < size; row++) {
                column.push(board[row][col]);
            }
            if (column.every(cell => cell === column[0] && cell !== "")) {
                return column[0]; 
            }
        }
    
        
        let mainDiagonal = [];
        for (let i = 0; i < size; i++) {
            mainDiagonal.push(board[i][i]);
        }
        if (mainDiagonal.every(cell => cell === mainDiagonal[0] && cell !== "")) {
            return mainDiagonal[0];
        }
    
      
        let antiDiagonal = [];
        for (let i = 0; i < size; i++) {
            antiDiagonal.push(board[i][size - 1 - i]);
        }
        if (antiDiagonal.every(cell => cell === antiDiagonal[0] && cell !== "")) {
            return antiDiagonal[0]; 
        }
    
        return "NO WINNER";
    }

}

/**
 * ETA
 *
 * A shuttle van service is tasked to travel one way along a predefined circular route.
 * The route is divided into several legs between stops.
 * The route is fully connected to itself.
 *
 * This function returns how long it will take the shuttle to arrive at a stop after leaving anothe rstop.
 *
 * Please see the sample data for examples of `routeMap`.
 *
 * @param {string} firstStop the stop that the shuttle will leave
 * @param {string} secondStop the stop that the shuttle will arrive at
 * @param {object} routeMap the data describing the routes
 * @returns {Number} the time that it will take the shuttle to travel from firstStop to secondStop
 */
function eta(firstStop, secondStop, routeMap) {
    let totalTravelTime = 0;

    const stops = Object.keys(routeMap).map(key => key.split(',')[0]);

    let startIndex = stops.indexOf(firstStop);
    let endIndex = stops.indexOf(secondStop);

    while (startIndex !== endIndex) {

        const nextIndex = (startIndex + 1) % stops.length;
        const routeKey = `${stops[startIndex]},${stops[nextIndex]}`;

        if (routeMap[routeKey]) {
            totalTravelTime += routeMap[routeKey].travel_time_mins;
        }

        startIndex = nextIndex;
        
    
        if (startIndex === 0) break;
    }

    return (stops[startIndex] === secondStop) ? totalTravelTime : "NO ROUTE";
   
}