function buyItem(hero, shop) {
    if (hero.gold >= shop.price) {
        hero.items.push(shop.item);
        hero.gold -= shop.price;
        return hero;
    }
    else {
        return hero;
    }
}
var hero1 = {
    items: ["sword", "potion"],
    gold: 50,
};
var shop1 = {
    item: "armor",
    price: 20,
};
var hero2 = {
    items: ["sword", "potion"],
    gold: 50,
};
var shop2 = {
    item: "legendary armor",
    price: 200,
};
console.log(buyItem(hero1, shop1)); // { items: ["sword", "potion", "armor"], gold: 30 }
console.log(buyItem(hero2, shop2)); // "Not enough gold!" { items: ["sword", "potion"], gold: 50 }
module.exports = buyItem;
