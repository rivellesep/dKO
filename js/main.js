import Jugador from './classes/Jugador.js';
import Enemic from './classes/Enemic.js';
import Bala from './classes/Bala.js';
import { 
    detectarColisioCercles, 
    detectarColisioRectangleCercle,
    obtenirEnemicMesProper,
    angleCapAObjecte,
    posicioAleatoriaVora 
} from './utils.js';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const ample = canvas.width;
const alt = canvas.height;

// UI elements básicos
const healthBar = document.getElementById('health-bar');
const healthText = document.getElementById('health-text');
const timerDisplay = document.getElementById('timer-display');

let jugador;
let enemics = [];
let bales = [];
let jocActiu = false;
let frameCount = 0;
let tempsJoc = 0;

const tecles = {
    w: false, a: false, s: false, d: false,
    up: false, left: false, down: false, right: false
};

function inicialitzar() {
    jugador = new Jugador(ample/2, alt/2);
    enemics = [];
    bales = [];
    frameCount = 0;
    tempsJoc = 0;
    jocActiu = true;
    actualitzarUI();
}

function generarEnemic() {
    const pos = posicioAleatoriaVora(ample, alt, 30);
    enemics.push(new Enemic(pos.x, pos.y, 14));
}

function disparar() {
    if (!jugador.potDisparar()) return;
    const enemicProper = obtenirEnemicMesProper(jugador, enemics);
    if (!enemicProper) return;
    const angle = angleCapAObjecte(jugador, enemicProper);
    const numProjectils = jugador.nombreProjectils;
    for (let i = 0; i < numProjectils; i++) {
        let angleFinal = angle;
        if (numProjectils > 1) {
            angleFinal = angle + (i - (numProjectils-1)/2) * 0.2;
        }
        bales.push(new Bala(jugador.x, jugador.y, angleFinal, jugador.danyBase, jugador.midaProjectil));
    }
    jugador.disparar();
}

function actualitzarUI() {
    const pVida = (jugador.vida / jugador.vidaMaxima) * 100;
    healthBar.style.width = `${Math.max(0, pVida)}%`;
    healthText.textContent = `${Math.max(0, jugador.vida)}/${jugador.vidaMaxima}`;
    timerDisplay.textContent = `Temps: ${Math.floor(tempsJoc)}s`;
}

function actualitzar() {
    if (!jocActiu) return;

    // Moviment
    let dx = 0, dy = 0;
    if (tecles.w || tecles.up) dy -= 1;
    if (tecles.s || tecles.down) dy += 1;
    if (tecles.a || tecles.left) dx -= 1;
    if (tecles.d || tecles.right) dx += 1;
    if (dx !== 0 && dy !== 0) { dx *= 0.707; dy *= 0.707; }
    jugador.moure(dx, dy, { ample, alt });
    jugador.actualitzar();

    // Disparar
    disparar();

    // Enemics
    enemics.forEach(e => e.actualitzar(jugador));
    if (frameCount % 30 === 0) generarEnemic();

    // Bales
    bales = bales.filter(b => { b.actualitzar(); return !b.foraDePantalla(ample, alt); });

    // Col·lisions bales-enemics
    for (let i = bales.length - 1; i >= 0; i--) {
        const bala = bales[i];
        for (let j = enemics.length - 1; j >= 0; j--) {
            const enemic = enemics[j];
            if (detectarColisioCercles(bala, enemic)) {
                const mort = enemic.rebreDany(bala.dany);
                bales.splice(i, 1);
                if (mort) enemics.splice(j, 1);
                break;
            }
        }
    }

    // Col·lisions jugador-enemics
    for (let i = enemics.length - 1; i >= 0; i--) {
        const enemic = enemics[i];
        if (detectarColisioRectangleCercle(enemic, jugador)) {
            const mort = jugador.rebreDany(enemic.danyContacte);
            enemics.splice(i, 1);
            if (mort) {
                jocActiu = false;
                alert(`Game Over! Temps: ${Math.floor(tempsJoc)}s`);
            }
        }
    }

    // Temps
    if (frameCount % 60 === 0) tempsJoc++;
    actualitzarUI();
    frameCount++;
}

function dibuixar() {
    ctx.clearRect(0, 0, ample, alt);
    ctx.fillStyle = '#3498db';
    ctx.beginPath();
    ctx.arc(jugador.x, jugador.y, jugador.radi, 0, Math.PI*2);
    ctx.fill();
    enemics.forEach(e => e.dibuixar(ctx));
    bales.forEach(b => b.dibuixar(ctx));
}

function bucle() {
    actualitzar();
    dibuixar();
    requestAnimationFrame(bucle);
}

// Event listeners teclado
window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (k === 'w') tecles.w = true;
    if (k === 's') tecles.s = true;
    if (k === 'a') tecles.a = true;
    if (k === 'd') tecles.d = true;
    if (k === 'arrowup') tecles.up = true;
    if (k === 'arrowdown') tecles.down = true;
    if (k === 'arrowleft') tecles.left = true;
    if (k === 'arrowright') tecles.right = true;
});
window.addEventListener('keyup', (e) => {
    const k = e.key.toLowerCase();
    if (k === 'w') tecles.w = false;
    if (k === 's') tecles.s = false;
    if (k === 'a') tecles.a = false;
    if (k === 'd') tecles.d = false;
    if (k === 'arrowup') tecles.up = false;
    if (k === 'arrowdown') tecles.down = false;
    if (k === 'arrowleft') tecles.left = false;
    if (k === 'arrowright') tecles.right = false;
});

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    inicialitzar();
});

bucle();