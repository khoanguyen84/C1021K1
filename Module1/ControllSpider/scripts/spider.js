const left = 37;
const up = 38;
const right = 39;
const down = 40;
const step = 10;
const transition = ".5s";

function init() {
    let spider = document.getElementById('spider');
    spider.src = "/images/right.png";
    spider.style.width = "50px";
    spider.style.height = "50px";
    spider.style.position = "relative";
    spider.style.top = 0;
    spider.style.left = 0;

    window.addEventListener("keydown", controllSpider);
}

function controllSpider(event) {
    switch (event.keyCode) {
        case left: {
            moveToLeft();
            break;
        }
        case up: {
            moveToUp();
            break;
        }
        case right: {
            moToRight();
            break;
        }
        case down: {
            moveToDown();
            break;
        }
        default: {
            alert("please using arrow keys!")
        }
    }
}

function moveToLeft() {
    let spider = document.getElementById('spider');
    spider.src = "/images/left.png";
    // spider.style.transform = 'rotate(180deg)';
    spider.style.transition = transition;
    if (parseInt(spider.style.left) > 0) {
        spider.style.left = parseInt(spider.style.left) - step + "px";
    }
}

function moveToUp() {
    let spider = document.getElementById('spider');
    // spider.style.transform = 'rotate(360deg)';
    spider.src = "/images/up.png";
    spider.style.transition = transition;
    if (parseInt(spider.style.top) > 0) {
        spider.style.top = parseInt(spider.style.top) - step + "px";
    }
}

function moToRight() {
    let spider = document.getElementById('spider');
    // spider.style.transform = 'rotate(270deg)';
    spider.src = "/images/right.png";
    spider.style.transition = transition;

    if (parseInt(spider.style.left) + parseInt(spider.style.width) + step < window.innerWidth) {
        spider.style.left = parseInt(spider.style.left) + step + "px";
    }
}

function moveToDown() {
    let spider = document.getElementById('spider');
    spider.src = "/images/down.png";
    // spider.style.transform = 'rotate(90deg)';
    spider.style.transition = transition;
    if (parseInt(spider.style.top) + parseInt(spider.style.height) + step < window.innerHeight) {
        spider.style.top = parseInt(spider.style.top) + step + "px";
    }
}

init();