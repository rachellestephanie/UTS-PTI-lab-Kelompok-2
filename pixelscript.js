var money = 0;
var clickValue = 1;
var perSecond = 0;
var multiplierCost = 500;
var autoClickerCost = 200;
var autoClickerLevel = 0;
var sausageCost = 100;
var lemperCost = 400;

function updateMoney() {
    document.getElementById("money").innerHTML = money;
}

function clickButton() {
    money += clickValue;
    document.getElementById("coin-sound").play();
    updateMoney();
    changeImage();
}

function startAutoClick() {
    setInterval(function () {
        money += perSecond * autoClickerLevel;
        updateMoney();
    }, 1000);
}

function buyMultiplier() {
    if (money >= multiplierCost) {
        money -= multiplierCost;
        clickValue *= 2;
        multiplierCost *= 2;
        document.getElementById("buyMultiplier").innerHTML = multiplierCost + " coins";
        document.getElementById("purchase-sound").play();
        updateMoney();
        startAutoClick();
    } else {
        alert("You don't have enough money to buy the multiplier!");
    }
}

function buyAutoClicker() {
    if (money >= autoClickerCost) {
        money -= autoClickerCost;
        autoClickerLevel++;
        perSecond += clickValue;
        autoClickerCost *= 2;
        document.getElementById("buyAutoClicker").innerHTML = autoClickerCost + " coins";
        document.getElementById("purchase-sound").play();
        updateMoney();
        startAutoClick();
    } else {
        alert("You don't have enough money to buy the auto-clicker!");
    }
}

function Mushroom() {
    if (money >= sausageCost) {
        money -= sausageCost;
        clickValue += 1;
        sausageCost *= 2;
        document.getElementById("Mushroom").innerHTML = sausageCost + " coins";
        document.getElementById("purchase-sound").play();
        updateMoney();
        startAutoClick();
    } else {
        alert("You don't have enough money to buy this item!");
    }
}

function Star() {
    if (money >= lemperCost) {
        money -= lemperCost;
        clickValue += 5;
        lemperCost *= 2;
        document.getElementById("Star").innerHTML = lemperCost + " coins";
        document.getElementById("purchase-sound").play();
        updateMoney();
        startAutoClick();
    } else {
        alert("You don't have enough money to buy this item!");
    }
}

window.onload = function () {
    const button = document.getElementById("clickButton");
    button.addEventListener("click", clickButton);
    document.getElementById("buyMultiplier").addEventListener("click", buyMultiplier);
    document.getElementById("buyAutoClicker").addEventListener("click", buyAutoClicker);
    document.getElementById("Mushroom").addEventListener("click", Mushroom);
    document.getElementById("Star").addEventListener("click", Star);
    startAutoClick();
};

const audio = new Audio("assets/buy.mp3");
const buttons = document.querySelectorAll("#buyAutoClicker");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (money >= autoClickerCost) {
            audio.play();
        }
    });
});


const audio2 = new Audio("assets/batukam.mp3");
const buttons2 = document.querySelectorAll("#clickButton");

buttons2.forEach(button => {
    button.addEventListener("click", () => {
        audio2.play();
    });
});

const audio3 = new Audio("assets/buy.mp3");
const buttons3 = document.querySelectorAll("#buyMultiplier");

buttons3.forEach(button => {
    button.addEventListener("click", () => {
        if (money >= multiplierCost) {
            audio3.play();
        }
    });
});

const audio4 = new Audio("assets/buy.mp3");
const buttons4 = document.querySelectorAll("#Mushroom");

buttons4.forEach(button => {
    button.addEventListener("click", () => {
        if (money >= sausageCost) {
            audio4.play();
        }
    });
});

const audio5 = new Audio("assets/buy.mp3");
const buttons5 = document.querySelectorAll("#Star");

buttons5.forEach(button => {
    button.addEventListener("click", () => {
        if (money >= lemperCost) {
            audio5.play();
        }
    });
});

const image = document.getElementById('image');

button.addEventListener('click', changeImage);

function changeImage() {
    image.src = "assets/jump.png";

    setTimeout(function () {
        image.src = "assets/idle.png";
    }, 1000);
}
