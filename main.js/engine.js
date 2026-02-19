const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const TILE = 48;
const WORLD_TILES = 200;
const WORLD_SIZE = WORLD_TILES * TILE;

let gameObjects = [];
let player;

function gameLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    updateWorld();
    updateEntities();

    renderWorld();
    renderEntities();

    renderLighting();
    renderHUD();
    renderMiniMap();

    requestAnimationFrame(gameLoop);
}
