let tiles = [];
let buildings = [];

function generateWorld() {
  for (let x = 0; x < WORLD_SIZE; x += 100) {
    for (let y = 0; y < WORLD_SIZE; y += 100) {
      if (Math.random() < 0.1) {
        tiles.push({ x, y, type: "tree" });
      }
    }
  }

  // Town center
  buildings.push({ x: 1200, y: 1200, w: 200, h: 200, interior: true });
}

function drawWorld() {
  ctx.fillStyle = "#1e4d2b";
  ctx.fillRect(-camera.x, -camera.y, WORLD_SIZE, WORLD_SIZE);

  tiles.forEach(t => {
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(t.x - camera.x, t.y - camera.y, 80, 80);
  });

  buildings.forEach(b => {
    ctx.fillStyle = "brown";
    ctx.fillRect(b.x - camera.x, b.y - camera.y, b.w, b.h);
  });
}
