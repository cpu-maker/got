class Player {
    constructor() {
        this.x = WORLD_SIZE / 2;
        this.y = WORLD_SIZE / 2;
        this.hp = 100;
        this.mana = 50;
        this.speed = 4;
        this.inventory = [];
        this.skills = {};
    }

    update() {
        if (keys["w"]) this.y -= this.speed;
        if (keys["s"]) this.y += this.speed;
        if (keys["a"]) this.x -= this.speed;
        if (keys["d"]) this.x += this.speed;

        updateCamera(this);
    }

    draw() {
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.x - camera.x, this.y - camera.y, 40, 40);
    }
}
