function meleeAttack() {
    enemies.forEach(e => {
        let dx = e.x - player.x;
        let dy = e.y - player.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 80) e.hp -= 20;
    });
}

function castSpell() {
    if (player.mana < 10) return;
    player.mana -= 10;
    projectiles.push(new Projectile(player.x, player.y, 0, -1, 15));
}
