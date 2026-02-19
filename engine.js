const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const WORLD_SIZE = 3000;

let camera = { x: 0, y: 0 };
let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

class Entity {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw(color) {
    ctx.fillStyle = color;
    ctx.fillRect(this.x - camera.x, this.y - camera.y, this.w, this.h);
  }
}

function updateCamera(player) {
  camera.x = player.x - canvas.width / 2;
  camera.y = player.y - canvas.height / 2;
}
