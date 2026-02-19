let rain = [];

function updateWeather() {
    if (Math.random() < 0.1) {
        rain.push({
            x: Math.random() * canvas.width,
            y: 0
        });
    }

    rain.forEach(drop => {
        drop.y += 10;
        ctx.fillStyle = "lightblue";
        ctx.fillRect(drop.x, drop.y, 2, 10);
    });
}
