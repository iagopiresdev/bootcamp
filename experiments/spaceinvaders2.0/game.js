
(function () {
    const FPS = 100;
    const TAMX = 600;
    const TAMY = 800;

    const PROB_ENEMY_SHIP = 0.5;

    let gameRunning = false;
    let gamePaused = false;

    let space, ship, score;
    let enemies = [];
    let meteors = [];
    let lives = [];

    function init() {
        space = new Space();
        ship = new Ship();
        score = new Score();
    }

    // callback
    window.addEventListener("keydown", (e) => {
        if (!gameRunning) {
            if (e.key === " ") {
                startGame();
            }
        } else {
            handleGameControls(e);
        }
    });

    function startGame() {
        let interval = window.setInterval(run, 1000 / FPS);
        gameRunning = true;
        console.log("play");
        lives.push(new Life());
        lives.push(new Life());
        lives.push(new Life());
    }

    function handleGameControls(e) {
        switch (e.key) {
            case "ArrowLeft":
                ship.mudaDirecao(-1);
                break;
            case "ArrowRight":
                ship.mudaDirecao(1);
                break;
            case "p":
            case "P":
                togglePause();
                break;
        }
    }

    function togglePause() {
        if (!gamePaused) {
            console.log("pause");
            clearInterval(interval);
            gamePaused = true;
        } else {
            console.log("play");
            interval = window.setInterval(run, 1000 / FPS);
            gamePaused = false;
        }
    }

    class Space {
        constructor() {
            this.element = document.getElementById("space");
            this.element.style.width = `${TAMX}px`;
            this.element.style.height = `${TAMY}px`;
            this.element.style.backgroundPositionY = "0px";
        }
        move() {
            this.element.style.backgroundPositionY = `${parseInt(
                this.element.style.backgroundPositionY
            ) + 1}px`;
        }
    }

    class Ship {
        constructor() {
            this.element = document.getElementById("ship");
            this.assetsDirecoes = [
                "../spaceinvaders2.0/assets/png/playerLeft.png",
                "../spaceinvaders2.0/assets/png/player.png",
                "../spaceinvaders2.0/assets/png/playerRight.png",
            ];
            this.direcao = 1;
            this.element.src = this.assetsDirecoes[this.direcao];
            this.element.style.bottom = "20px";
            this.element.style.left = `${parseInt(TAMX / 2) - 50}px`;
        }
        mudaDirecao(giro) {
            if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
                this.direcao += giro;
                this.element.src = this.assetsDirecoes[this.direcao];
            }
        }
        move() {
            if (this.direcao === 0) {
                this.element.style.left = `${parseInt(this.element.style.left) - 1}px`;
            } else if (this.direcao === 2) {
                this.element.style.left = `${parseInt(this.element.style.left) + 1}px`;
            }
        }
    }

    class Life {
        constructor() {
            this.element = document.createElement("img");
            this.element.className = "life";
            this.element.src = "../spaceinvaders2.0/assets/png/life.png";
            this.element.style.top = "0px";

            let livesContainer = document.getElementById("lives");
            livesContainer.appendChild(this.element);
        }
    }
    class Score {
        constructor() {
            this.element = document.createElement("p");
            this.element.className = "score";
            this.element.textContent = "Score: 0";
            let scoreContainer = document.getElementById("score");
            scoreContainer.appendChild(this.element);
        }
        increase(amount) {
            let currentScore = parseInt(this.element.textContent.split(": ")[1]);
            let newScore = currentScore + amount;
            this.element.textContent = `Score: ${newScore}`;
        }
    }
    class EnemyShip {
        constructor() {
            this.element = document.createElement("img");
            this.element.className = "enemy-ship";
            this.element.src = "../spaceinvaders2.0/assets/png/enemyShip.png";
            this.element.style.top = "-60px";
            this.element.style.left = `${ Math.floor(Math.random() * (TAMX - 50)) } px`;
            document.getElementById("space").appendChild(this.element);
        }
        move() {
            this.element.style.top = `${ parseInt(this.element.style.top) + 1 } px`;
        }
        isColliding(obj) {
            let a = {
                x: parseInt(this.element.style.left),
                y: parseInt(this.element.style.top),
                width: parseInt(this.element.style.width),
                height: parseInt(this.element.style.height),
            };
            let b = {
                x: parseInt(obj.element.style.left),
                y: parseInt(obj.element.style.top),
                width: parseInt(obj.element.style.width),
                height: parseInt(obj.element.style.height),
            };
            return !(
                a.x + a.width < b.x ||
                a.x > b.x + b.width ||
                a.y + a.height < b.y ||
                a.y > b.y + b.height
            );
        }
    }

    class Meteor {
        constructor() {
            this.element = document.createElement("img");
            this.element.className = "meteor";
            this.element.src = "../spaceinvaders2.0/assets/png/meteorSmall.png";
            this.element.style.top = "-60px";
            this.element.style.left = `${ Math.floor(Math.random() * (TAMX - 50)) }px`;
            document.getElementById("space").appendChild(this.element);
            this.fallSpeed = 2;
        }
        move() {
            this.element.style.top = `${ parseInt(this.element.style.top) + this.fallSpeed }px`;
        }
        isColliding(obj) {
            let a = {
                x: parseInt(this.element.style.left),
                y: parseInt(this.element.style.top),
                width: parseInt(this.element.style.width),
                height: parseInt(this.element.style.height),
            };
            let b = {
                x: parseInt(obj.element.style.left),
                y: parseInt(obj.element.style.top),
                width: parseInt(obj.element.style.width),
                height: parseInt(obj.element.style.height),
            };
            return !(
                a.x + a.width < b.x ||
                a.x > b.x + b.width ||
                a.y + a.height < b.y ||
                a.y > b.y + b.height
            );
        }
    }

    function run() {
        space.move();
        ship.move();
        moveEnemies();
        moveMeteors();
        checkCollisions();
        score.increase(1);
    }
    
    function moveMeteors() {
        for (let i = 0; i < meteors.length; i++) {
            meteors[i].move();
        }
    }
    
    

/*   function run() {
        if (Math.random() < PROB_ENEMY_SHIP) {
            enemies.push(new EnemyShip());
        }
        if (Math.random() < PROB_ENEMY_SHIP) {
            meteors.push(new Meteor());
        }
        enemies.forEach((enemy) => {
            enemy.move();
            if (enemy.isColliding(ship)) {
                gameOver();
            }
        });
        meteors.forEach((meteor) => {
            meteor.move();
            if (meteor.isColliding(ship)) {
                gameOver();
            }
        });
        space.move();
        ship.move();
        score.increase(1);
    }
    */

    function gameOver() {
        clearInterval(interval);
        console.log("game over");
    }

    init();
})();



