# Fase 3: Entorn i Prototip

## 1. IDE utilitzat i configuració bàsica
Per al desenvolupament s'ha seleccionat **Visual Studio Code**. Aquest entorn permet integrar extensions específiques per a Java ("Extension Pack for Java") i reconeix l'arquitectura de construcció amb "Gradle", la qual cosa facilita la compilació del motor jMonkeyEngine de manera àgil. 

## 2. Decisions inicials d'implementació
Per complir amb l'objectiu de construir un prototip funcional ("vertical slice"), s'ha pres la decisió de separar la lògica matemàtica dels gràfics 3D en aquesta primera versió. El joc s'inicia generant una instància de `SimpleApplication`, però el feedback del llançament de daus, la reducció de vida i les condicions de victòria es mostren inicialment per consola. S'ha mapejat la tecla "Espai" per rebre la interacció de l'usuari i accionar el "core loop" definit a les fases anteriors.