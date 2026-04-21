export default class Jugador {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radi = 16;
        this.vida = 100;
        this.vidaMaxima = 100;
        this.xp = 0;
        this.xpPerNivell = 100;
        this.nivell = 1;
        this.velocitatMov = 5;
        
        // Modificadors de combat
        this.danyBase = 20;
        this.nombreProjectils = 1;
        this.velocitatTret = 15; // frames entre dispars
        this.midaProjectil = 6;
        
        // Intern
        this.tempsRecarrega = 0;
        this.invencible = false;
        this.tempsInvencible = 0;
    }

    moure(dx, dy, limits) {
        let nouX = this.x + dx * this.velocitatMov;
        let nouY = this.y + dy * this.velocitatMov;
        
        // Limitar al canvas
        if (limits) {
            nouX = Math.max(this.radi, Math.min(limits.ample - this.radi, nouX));
            nouY = Math.max(this.radi, Math.min(limits.alt - this.radi, nouY));
        }
        
        this.x = nouX;
        this.y = nouY;
    }

    rebreDany(dany) {
        if (this.invencible) return false;
        
        this.vida -= dany;
        this.invencible = true;
        this.tempsInvencible = 60; // 1 segon a 60fps
        
        return this.vida <= 0;
    }

    curar(quantitat) {
        this.vida = Math.min(this.vidaMaxima, this.vida + quantitat);
    }

    afegirXP(xp) {
        this.xp += xp;
        if (this.xp >= this.xpPerNivell) {
            this.xp -= this.xpPerNivell;
            this.nivell++;
            this.xpPerNivell = Math.floor(this.xpPerNivell * 1.2);
            return true; // Ha pujat de nivell
        }
        return false;
    }

    actualitzar() {
        if (this.tempsRecarrega > 0) {
            this.tempsRecarrega--;
        }
        if (this.invencible) {
            this.tempsInvencible--;
            if (this.tempsInvencible <= 0) {
                this.invencible = false;
            }
        }
    }

    potDisparar() {
        return this.tempsRecarrega === 0;
    }

    disparar() {
        this.tempsRecarrega = this.velocitatTret;
    }

    aplicarMillora(millora) {
        switch(millora.tipus) {
            case 'dany':
                this.danyBase += millora.valor;
                break;
            case 'projectils':
                this.nombreProjectils += millora.valor;
                break;
            case 'velocitat_tret':
                this.velocitatTret = Math.max(3, this.velocitatTret - millora.valor);
                break;
            case 'mida_projectil':
                this.midaProjectil += millora.valor;
                break;
            case 'velocitat_mov':
                this.velocitatMov += millora.valor;
                break;
            case 'vida_maxima':
                this.vidaMaxima += millora.valor;
                this.vida += millora.valor;
                break;
        }
    }
}