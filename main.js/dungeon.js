let dungeonMap = [];

function generateDungeon() {
    const size = 50;

    for (let y = 0; y < size; y++) {
        dungeonMap[y] = [];
        for (let x = 0; x < size; x++) {
            dungeonMap[y][x] = Math.random() < 0.3 ? 1 : 0;
        }
    }
}
