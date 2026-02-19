const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const worldWidth = 4000;
const worldHeight = 4000;

let camera = { x: 0, y: 0 };

let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

class Player {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.width = 40;
        this.height = 40;
        this.speed = 4;
        this.health = 100;
        this.stamina = 100;
        this.inventory = [];
    }

    update() {
        if (keys["w"]) this.y -= this.speed;
        if (keys["s"]) this.y += this.speed;
        if (keys["a"]) this.x -= this.speed;
        if (keys["d"]) this.x += this.speed;

        camera.x = this.x - canvas.width / 2;
        camera.y = this.y - canvas.height / 2;
    }

    draw() {
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    }
}

class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.health = 50;
    }

    update(player) {
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < 500) {
            this.x += dx / dist;
            this.y += dy / dist;
        }

        if (dist < 40) {
            player.health -= 0.1;
        }
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    }
}

let player = new Player();
let enemies = [];

for (let i = 0; i < 30; i++) {
    enemies.push(new Enemy(
        Math.random() * worldWidth,
        Math.random() * worldHeight
    ));
}

function updateUI() {
    document.getElementById("healthBar").style.width = player.health * 2 + "px";
    document.getElementById("staminaBar").style.width = player.stamina * 2 + "px";

    document.getElementById("inventory").innerText =
        "Inventory: " + player.inventory.join(", ");
}

function saveGame() {
    localStorage.setItem("shadowSave", JSON.stringify(player));
}

function loadGame() {
    const save = localStorage.getItem("shadowSave");
    if (save) Object.assign(player, JSON.parse(save));
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();
    player.draw();

    enemies.forEach(e => {
        e.update(player);
        e.draw();
    });

    updateUI();
    requestAnimationFrame(gameLoop);
}

loadGame();
gameLoop();

setInterval(saveGame, 5000);
