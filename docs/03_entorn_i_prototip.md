# 03_entorn_i_prototip.md

## 1. IDE utilitzat i configuració

**IDE:** Visual Studio Code (VS Code)

**Extensions instal·lades i utilitzades:**
- **Live Server** (`ritwickdey.LiveServer`): per executar el projecte localment amb recàrrega automàtica.
- **Prettier** (`esbenp.prettier-vscode`): per mantenir un format de codi consistent.
- **ESLint** (`dbaeumer.vscode-eslint`): per detectar errors potencials en el codi JavaScript.
- **GitLens** (`eamodio.gitlens`): per facilitar la gestió de Git dins de l'editor.

**Configuració aplicada:**
S'ha creat un fitxer `.vscode/settings.json` amb el següent contingut per a una experiència de desenvolupament òptima:

{
    "liveServer.settings.port": 5501,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "liveServer.settings.root": "/"
}

**Com executar el projecte:**
1. Obrir la carpeta `dead-rush` amb VS Code.
2. Fer clic dret sobre `index.html` i seleccionar **"Open with Live Server"**.
3. El joc s'obrirà automàticament al navegador per defecte (normalment a `http://127.0.0.1:5501`).

## 2. Decisions d'implementació inicials

### Arquitectura modular amb ES6 Modules
S'ha optat per utilitzar **mòduls d'ES6** (`import`/`export`) per organitzar el codi en fitxers separats segons la responsabilitat. Això millora la mantenibilitat i s'ajusta a l'estructura de classes definida a la Fase 2.

### Estructura de carpetes
- `js/classes/`: Conté les definicions de les classes del model (`Jugador`, `Enemic`, `Bala`, `Gemma`, `Millora`).
- `js/utils.js`: Funcions auxiliars reutilitzables (detecció de col·lisions, càlculs geomètrics).
- `js/main.js`: Punt d'entrada que inicialitza el joc, gestiona el bucle principal i la UI.

### Bucle de joc amb `requestAnimationFrame`
S'utilitza `requestAnimationFrame` per obtenir una animació fluida i eficient (aproximadament 60 FPS). El bucle s'executa contínuament però només actualitza la lògica quan l'estat del joc és `'jugant'` i no està en pausa.

### Gestió d'estats del joc
S'implementa una màquina d'estats simple amb la variable `estat`. Els possibles estats són:
- `'inici'`: Pantalla de benvinguda.
- `'jugant'`: Partida en curs.
- `'pujantNivell'`: Joc pausat per triar millora.
- `'gameover'`: Partida finalitzada.

### Sistema de millores
Les millores es defineixen com a instàncies de la classe `Millora` amb un catàleg predefinit. En pujar de nivell, se seleccionen 3 millores aleatòries entre les disponibles (que encara no han arribat al màxim de repeticions). Aquestes es mostren en una interfície HTML/CSS.

### Dificultat escalable
Cada 10 segons de joc (600 frames) s'incrementa la taxa d'aparició d'enemics (`spawnRate`) i la velocitat base dels enemics. A més, la vida màxima dels enemics augmenta lleugerament amb el temps.

### Optimitzacions inicials
- Les bales que surten del canvas s'eliminen immediatament per evitar acumulació innecessària.
- S'utilitza un comptador `frameCount` per temporitzar esdeveniments periòdics en lloc de `setInterval`, garantint sincronització amb el bucle de renderitzat.

## 3. Prototip funcional aconseguit

El prototip implementa **totes les mecàniques bàsiques** definides a la Fase 1:

✅ Moviment del jugador amb WASD i fletxes.  
✅ Aparició d'enemics des de les vores del canvas.  
✅ Enemics es mouen en línia recta cap al jugador.  
✅ Dispar automàtic a l'enemic més proper.  
✅ Sistema de vida, experiència i nivells.  
✅ Recollida de gemmes d'XP.  
✅ Pujada de nivell amb tria de 3 millores aleatòries.  
✅ Escalat de dificultat progressiu.  
✅ Pantalles d'inici i Game Over funcionals.  
✅ Interfície d'usuari (barres de vida/XP, temporitzador, nivell).

## 4. Captures de l'entorn de desenvolupament

*Nota: Les captures es descriuen textualment; s'adjuntaran al repositori com a imatges en una carpeta `docs/captures/`.*

**Figura 1: VS Code amb el projecte obert**
- A l'esquerra es veu l'estructura de carpetes: `css/`, `js/`, `js/classes/`, `docs/`.
- A la dreta, el fitxer `main.js` obert mostrant el codi del bucle principal.

**Figura 2: Navegador amb el joc en execució (pantalla d'inici)**
- Es mostra la pantalla inicial amb el títol "DEAD RUSH", el botó "Començar" i les instruccions de control.

**Figura 3: Navegador amb el joc en execució (partida activa)**
- Es veu el jugador (cercle blau) al centre, enemics (quadrats vermells) movent-se cap a ell, bales (cercles grocs) disparant automàticament, i gemmes (cercles verds) deixades pels enemics eliminats.
- A la part superior, les barres de vida (vermella) i experiència (groga), el nivell actual i el temps sobreviscut.

**Figura 4: Navegador amb el panell de pujada de nivell**
- El joc està pausat i es mostren tres opcions de millora en requadres interactius.

**Figura 5: Consola de desenvolupament (F12) neta**
- Sense errors. Es poden veure els `console.log` d'inicialització: "DOM carregat. Inicialitzant Dead Rush...", "Setup event listeners...", "Iniciant bucle...", i en clicar "Començar", "Començar clicat" i "Joc inicialitzat. Jugador a: 400 300".

## 5. Commits realitzats

S'han realitzat els següents commits des de l'inici de la Fase 3, tal com es reflecteix a l'historial de Git:

| ID Commit | Descripció |
| :--- | :--- |
| `b06b494` | Corregeix error de DOM i inicialització del joc |
| `224be96` | feat: UI de selección de mejoras y escalado de dificultad |
| `7df247a` | feat: sistema de experiencia, gemas y subida de nivel |
| `7d51329` | feat: sistema de disparo automático y colisiones básicas |
| `887c746` | feat: bucle principal, movimiento del jugador y generación de enemigos |
| `0c91fab` | feat: añadir clases del modelo (Jugador, Enemic, Bala, Gemma, Millora) y utils |
| `5856d70` | feat: estructura inicial HTML/CSS y canvas |
| `3fa4640` | README final i correcte |
| `885064a` | README sense sistema de carpetes (es veu malament) |
| `e6566f5` | Commit inicial: Dead Rush |

L'últim commit de codi (`b06b494`) va ser necessari per solucionar un problema d'inicialització: el codi intentava accedir a elements del DOM abans que estiguessin disponibles. Es va encapsular tota la lògica dins d'un listener `DOMContentLoaded`.

## 6. Problemes detectats i solucions durant el prototipat

| Problema | Solució aplicada |
| :--- | :--- |
| El jugador es podia moure fora del canvas | Afegir límits dins del mètode `moure()` de `Jugador` utilitzant els paràmetres `ample` i `alt`. |
| Les bales no s'eliminaven en sortir de la pantalla, causant acumulació | Afegir mètode `foraDePantalla()` a `Bala` i filtrar l'array `bales` a cada frame. |
| La taxa d'aparició era massa alta i el joc es tornava injugable ràpidament | Ajustar `spawnRate` inicial a 1.0 i increment més suau (+0.5 cada 10s). |
| La detecció de col·lisions rectangle-cercle fallava en les cantonades | Implementar funció `detectarColisioRectangleCercle()` correcta a `utils.js` basada en el punt més proper del rectangle al cercle. |
| Les opcions de millora es repetien i algunes no s'aplicaven bé | Afegir control `potAplicar()` i `vegadesAplicada` a la classe `Millora`. |
| En prémer "Començar", el joc no mostrava res (pantalla negra) | **Error crític:** El codi s'executava abans que el DOM estigués llest. Es va envoltar tot amb `DOMContentLoaded` i es van afegir comprovacions de nul·litat. |

## 7. Validació del prototip

El prototip compleix tots els requisits mínims exigits per a la Fase 3:

- ✅ El joc s'executa sense errors crítics (comprovat a la consola del navegador).
- ✅ Existeix interacció funcional (moviment, dispar, col·lisions, millores).
- ✅ El bucle de joc és clar i funcional (`requestAnimationFrame`).
- ✅ Es poden iniciar partides, jugar, pujar de nivell i arribar a Game Over.
- ✅ La interfície d'usuari s'actualitza correctament en temps real.

A més, el prototip ja inclou la majoria de les funcionalitats planejades, deixant per a la Fase 4 i 5 principalment proves, depuració avançada, refactorització i documentació de millores.

---