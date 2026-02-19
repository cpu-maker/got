class Player extends Entity {
  constructor() {
    super(1500, 1500, 40, 40);
    this.speed = 4;
    this.health = 100;
  }

  update() {
    if (keys["w"]) this.y -= this.speed;
    if (keys["s"]) this.y += this.speed;
    if (keys["a"]) this.x -= this.speed;
    if (keys["d"]) this.x += this.speed;

    updateCamera(this);
  }
}

class Enemy extends Entity {
  constructor(x, y) {
    super(x, y, 40, 40);
    this.health = 30;
  }

  update(player) {
    let dx = player.x - this.x;
    let dy = player.y - this.y;
    let dist = Math.sqrt(dx*dx + dy*dy);

    if (dist < 400) {
      this.x += dx / dist;
      this.y += dy / dist;
    }

    if (dist < 40) {
      player.health -= 0.1;
    }
  }
}

class Bullet extends Entity {
  constructor(x, y, dx, dy) {
    super(x, y, 10, 10);
    this.dx = dx;
    this.dy = dy;
  }

  update() {
    this.x += this.dx * 8;
    this.y += this.dy * 8;
  }
}

let player = new Player();
let enemies = [];
let bullets = [];

for (let i = 0; i < 20; i++) {
  enemies.push(new Enemy(Math.random()*3000, Math.random()*3000));
}

document.addEventListener("click", e => {
  let dx = e.clientX - canvas.width/2;
  let dy = e.clientY - canvas.height/2;
  let mag = Math.sqrt(dx*dx + dy*dy);
  bullets.push(new Bullet(player.x, player.y, dx/mag, dy/mag));
});

function drawMiniMap() {
  const mini = document.getElementById("minimap");
  const mctx = mini.getContext("2d");

  mctx.clearRect(0,0,200,200);
  mctx.fillStyle = "green";
  mctx.fillRect(0,0,200,200);

  mctx.fillStyle = "white";
  mctx.fillRect(player.x/WORLD_SIZE*200, player.y/WORLD_SIZE*200, 5,5);
}

function lighting() {
  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 200, 0, Math.PI*2);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";
}

function gameLoop() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawWorld();

  player.update();
  player.draw("cyan");

  enemies.forEach(e => {
    e.update(player);
    e.draw("red");
  });

  bullets.forEach(b => {
    b.update();
    b.draw("yellow");
  });

  lighting();
  drawMiniMap();
  updateQuestUI();

  document.getElementById("health").style.width = player.health*2+"px";

  requestAnimationFrame(gameLoop);
}

generateWorld();
gameLoop();
