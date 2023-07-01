// resources
const amounts = [20, 30, 40];
class Resource {
    constructor() {
        this.x = Math.random() * (canvas.width - cellSize);
        this.y = (Math.floor(Math.random() * 5) + 1) * cellSize + 25;
        this.width = cellSize * 0.6;
        this.height = cellSize * 0.6;
        this.amount = amounts[Math.floor(Math.random() * amounts.length)];
        this.image = new Image;
        this.image.src = './img/coin.png';
        this.frameX = 0;
        this.minFrame = 0
        this.maxFrame = 10;
        this.spriteWidth = 5630 / this.maxFrame;
        this.spriteHeight = 565;
    }
    draw() {
        if (frame % 10 === 0) {
            if (this.frameX < this.maxFrame - 1) this.frameX++;
            else this.frameX = this.minFrame;
        }
        ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

function handleResources() {
    if (frame % 500 === 0 && score < winningScore) {
        resources.push(new Resource());
    }
    for (let i = 0; i < resources.length; i++) {
        resources[i].draw();
        if (resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)) {
            numberOfResources += resources[i].amount;
            floatingMessages.push(new FloatingMessage('+' + resources[i].amount, resources[i].x, resources[i].y, 20, 'black'));
            floatingMessages.push(new FloatingMessage('+' + resources[i].amount, 470, 85, 30, 'gold'));
            resources.splice(i, 1);
            i--;
        }
    }
}