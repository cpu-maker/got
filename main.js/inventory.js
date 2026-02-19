function addItem(item) {
    player.inventory.push(item);
}

function useItem(index) {
    let item = player.inventory[index];
    if (item.type === "potion") player.hp += 20;
}
