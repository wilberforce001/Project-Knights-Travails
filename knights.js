function knightMoves(start, end) {
    // Define possible moves of a knight
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Function to check if a position is within the board
    function withinBoard(pos) {
        return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;

    }

    // Perform breadth-first search
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const currentPos = path[path.length - 1];

        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            return path;
        }

        for (const move of moves) {
            const newPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
            if (withinBoard(newPos) && !visited.has(newPos.toString())) {
                visited.add(newPos.toString());
                const newPath = [...path, newPos];
                queue.push(newPath);
            }
        }
    }


}

console.log(knightMoves([0,0], [1,2]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[7,7]));
