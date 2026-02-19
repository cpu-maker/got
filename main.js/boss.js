class Boss {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.hp = 500;
    }

    update(){
        let dx = player.x - this.x;
        let dy = player.y - this.y;
        this.x += dx * 0.01;
        this.y += dy * 0.01;
    }

    draw(){
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x - camera.x, this.y - camera.y, 80,80);
    }
}
