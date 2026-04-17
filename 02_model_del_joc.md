# 02_model_del_joc.md

## 1. Components principals del joc
El sistema es divideix en tres components fonamentals que interactuen entre si:
* **Motor de Logica (GameManager):** Gestiona el flux de la partida, el control de torns i les condicions de victòria.
* **Sistema de Combat i Daus:** Gestiona els llançaments, les combinacions de punts i l'aplicació d'efectes especials (daus trucats).
* **Interfície i Estat Visual:** Gestiona la representació del dany als personatges i la comunicació amb l'usuari.

## 2. Entitats identificades
1.  **Jugador:** Representa tant l'usuari com la IA.
2.  **Dau:** Representa cada objecte físic de llançament (normal o trucat).
3.  **Partida:** L'entitat central que controla l'estat global del joc.

## 3. Atributs clau de cada entitat
### Jugador
* `vida` (float): Salut actual del personatge.
* `nom` (String): Identificador del combatent.
* `dausTrucats` (Llista de Daus): Inventari de daus especials disponibles.
* `estatVisual` (int): Índex que determina quina textura de dany mostrar.

### Dau
* `valor` (int): Resultat numèric del llançament (1-6).
* `esTrucat` (boolean): Flag per diferenciar daus base de especials.
* `tipusEfecte` (String): El nom de l'habilitat especial (ex: "Vampíric", "Kamikaze").

### Partida
* `tornActual` (int): Qui té el control (0 per Jugador 1, 1 per Jugador 2/IA).
* `rondaActual` (int): Comptador per al lliurament de daus trucats cada 3 rondes.
* `puntuacioAcumulada` (int): Punts temporals abans de plantar-se.

## 4. Accions, mètodes o funcions principals
### Jugador
* `llançarDaus()`: Executa l'acció de tirar els daus actius.
* `plantarSe()`: Tanca el torn i aplica el dany acumulat al rival.
* `rebreDany(quantitat)`: Redueix la vida i actualitza l'estat de les textures.

### Dau
* `rodar()`: Genera un valor aleatori.
* `aplicarEfecte()`: Executa la lògica vinculada al seu `tipusEfecte`.

### Partida
* `canviarTorn()`: Alterna entre jugadors i reinicia la puntuació temporal.
* `repartirDauTrucat()`: Assigna un dau aleatori a l'inventari del jugador quan la `rondaActual` és múltiple de 3.
* `comprovarFarkle()`: Revisa si el llançament no conté punts per finalitzar el torn.

## 5. Explicació del diagrama de classes
El diagrama de classes representa l'estructura estàtica del joc i com es relacionen les entitats principals. S'ha organitzat d'aquesta manera perquè la classe `Partida` actuï com a controlador principal (composició), gestionant dos instàncies de `Jugador`. Al seu torn, cada `Jugador` té una relació d'agregació amb els `Daus` (especialment la llista de daus trucats del seu inventari). Això permet mantenir la lògica del combat encapsulada a cada personatge i les regles del joc centralitzades a la partida.

## 6. Explicació del diagrama de comportament
S'ha escollit un **diagrama d'activitat** per reflectir amb precisió el "core loop" (bucle principal) que s'executa durant el torn d'un jugador. Representa el flux des que es llancen els daus, passant per la decisió de risc (press-your-luck) i la comprovació matemàtica (Farkle), fins a l'aplicació del dany físic i el canvi de torn. Aquest diagrama és clau perquè mostra l'arbre de decisions que haurà de seguir l'usuari i, sobretot, la IA que es programarà posteriorment.

## 7. Correspondència entre diagrames i codi futur
El disseny presentat es traduirà directament a Java seguint el patró de Programació Orientada a Objectes (POO). La classe `Partida` s'implementarà com un estat del joc (`AppState` en jMonkeyEngine) per gestionar el bucle principal. Les entitats `Jugador` i `Dau` seran classes POO pures que emmagatzemaran dades. Per al canvi visual dinàmic, s'utilitzarà el mètode `rebreDany()` per modificar els `Materials` i les `Textures` del model 3D del jugador en temps real segons l'atribut `estatVisual`.

## 8. Estructura inicial del repositori
L'estructura del projecte segueix la configuració modular estàndard de jMonkeyEngine amb Gradle, assegurant que el codi i els recursos estiguin ben organitzats:
* `/` (Arrel): Conté els documents de disseny de les fases (`.md`) i el `README.md` principal.
* `/diagrames/`: Directori per emmagatzemar els diagrames UML exportats en format PNG.
* `/game/src/main/java/dko/game/`: Directori principal on s'allotjarà el codi font en Java (les classes Jugador, Dau, Partida, etc.).
* `/game/src/main/resources/`: Directori per als actius del joc (`assets`), subdividit lògicament en `Models`, `Textures`, `Sounds` i `Interface` per gestionar els canvis visuals dinàmics i la UI.
* `/desktop/`: Mòdul independent que conté l'arrencador per compilar i executar el joc a l'escriptori.

## 9. Primer commit i README inicial
El primer commit inclou la configuració bàsica del projecte, la documentació de les fases 1 i 2, i un fitxer README.md que serveix de portada. El README conté el nom del joc (dKO), la descripció comercial en català i les instruccions bàsiques per entendre el concepte del projecte. S'ha inicialitzat la branca `main` com a branca estable de desenvolupament.