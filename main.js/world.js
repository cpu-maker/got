let worldMap = [];

function generateWorld() {
    for (let y = 0; y < WORLD_TILES; y++) {
        let row = [];
        for (let x = 0; x < WORLD_TILES; x++) {

            let r = Math.random();

            if (r < 0.1) row.push("water");
            else if (r < 0.2) row.push("forest");
            else row.push("grass");

        }
        worldMap.push(row);
    }
}
