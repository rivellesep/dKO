export default class Bala {
    constructor(x, y, angle, dany, radi = 6, velocitat = 8) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.velocitat = velocitat;
        this.radi = radi;
        this.dany = dany;
    }

    actualitzar() {
        this.x += Math.cos(this.angle) * this.velocitat;
        this.y += Math.sin(this.angle) * this.velocitat;
    }

    foraDePantalla(ample, alt) {
        return this.x < -this.radi || this.x > ample + this.radi ||
               this.y < -this.radi || this.y > alt + this.radi;
    }

    dibuixar(ctx) {
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radi, 0, Math.PI * 2);
        ctx.fill();
    }
}