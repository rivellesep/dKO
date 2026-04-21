// Funcions auxiliars

export function detectarColisioCercles(obj1, obj2) {
    const dx = obj1.x - obj2.x;
    const dy = obj1.y - obj2.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    return dist < obj1.radi + obj2.radi;
}

export function detectarColisioRectangleCercle(rect, cercle) {
    // Pel jugador (cercle) amb enemics (rectangulars)
    const closestX = Math.max(rect.x - rect.radi, Math.min(cercle.x, rect.x + rect.radi));
    const closestY = Math.max(rect.y - rect.radi, Math.min(cercle.y, rect.y + rect.radi));
    const dx = cercle.x - closestX;
    const dy = cercle.y - closestY;
    return (dx*dx + dy*dy) < cercle.radi * cercle.radi;
}

export function obtenirEnemicMesProper(jugador, enemics) {
    if (enemics.length === 0) return null;
    
    let mesProper = null;
    let distMinima = Infinity;
    
    enemics.forEach(enemic => {
        const dx = enemic.x - jugador.x;
        const dy = enemic.y - jugador.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < distMinima) {
            distMinima = dist;
            mesProper = enemic;
        }
    });
    
    return mesProper;
}

export function angleCapAObjecte(origen, desti) {
    return Math.atan2(desti.y - origen.y, desti.x - origen.x);
}

// Generar posició aleatòria fora de la pantalla (a les vores)
export function posicioAleatoriaVora(ample, alt, marge = 20) {
    const costat = Math.floor(Math.random() * 4);
    let x, y;
    
    switch(costat) {
        case 0: // superior
            x = Math.random() * ample;
            y = -marge;
            break;
        case 1: // dreta
            x = ample + marge;
            y = Math.random() * alt;
            break;
        case 2: // inferior
            x = Math.random() * ample;
            y = alt + marge;
            break;
        default: // esquerra
            x = -marge;
            y = Math.random() * alt;
    }
    return { x, y };
}