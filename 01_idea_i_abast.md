# 01_idea_i_abast.md



## 1. Títol provisional del joc

dKO



## 2. Tipus de microvideojoc escollit

Microvideojoc d'estratègia i atzar per torns (1v1, mode local i contra la IA).



## 3. Objectiu del joc

L'objectiu principal és reduir la barra de vida del rival a 0 mitjançant el llançament de daus, on els punts obtinguts es converteixen en dany físic directe.



## 4. Rol del jugador

El jugador pren el paper d'un combatent en una partida de daus. El seu rol consisteix a llançar els daus, triar quines combinacions reservar per puntuar, decidir si arriscar-se a seguir tirant o plantar-se per assegurar el dany, i gestionar estratègicament un inventari de daus trucats amb habilitats especials.



## 5. Regles bàsiques

El joc es basa en les regles clàssiques del "Farkle":

* Es llancen 6 daus. El jugador ha de separar almenys un dau que puntuï (1, 5, o combinacions com trios).

* Després de separar els daus, pot plantar-se (convertint els punts en dany cap a l'oponent) o tornar a llançar els daus restants per acumular més dany.

* Si en un llançament no s'obté cap punt, es fa un "Farkle": es perd el torn i no s'infligeix dany.

* Cada 3 rondes, el jugador rep de forma aleatòria un "Dau Trucat".

* Hi ha 12 daus trucats amb efectes únics classificats en Combate (Vampíric, Punzante, Congelante, Kamikaze), Defensa (Égida, Espejismo), Suerte (Cronos, Imán) i Sabotaje (Maldito, Ladrón, Cegador, Pesado).



## 6. Condicions de victòria i derrota

* **Victòria:** La barra de salut de l'oponent arriba a 0.

* **Derrota:** La barra de salut del propi jugador arriba a 0.



## 7. Bucle principal del joc

1. **Llançament:** Tirar els daus disponibles.

2. **Avaluació i Selecció:** Separar els daus que puntuen o aplicar efectes dels daus trucats.

3. **Decisió:** Arriscar-se a tornar a llançar o plantar-se.

4. **Resolució:** Si es planta, s'aplica el dany (i els estats alterats) a l'oponent. L'aspecte físic del personatge danyat s'actualitza.

5. **Canvi de torn.**



## 8. Repte principal i dificultat

El repte principal és la gestió del risc (press-your-luck) i l'ús tàctic de l'inventari. La dificultat és adaptable (depenent de si es juga contra un altre jugador o la IA) i requereix que el jugador sàpiga llegir les probabilitats i anticipar els sabotatges del rival.



## 9. Limitacions explícites

Per garantir que el projecte es pugui tancar (tot i afegir tots els daus trucats), el joc **NO inclourà**:

* Mode multijugador en línia (només local o contra IA).

* Diferents escenaris o taulers (es desenvoluparà en un únic entorn estàtic de taverna).

* Personalització de personatges o mode campanya.

* Animacions complexes de combat (el dany es representarà mitjançant canvis d'estat a la textura/model del personatge).



## 10. Riscos tècnics

1. **Intel·ligència Artificial:** Programar un arbre de decisions per a la IA perquè sàpiga quan plantar-se i com utilitzar els diferents daus trucats de manera lògica.

2. **Lògica de combinacions:** Implementar un sistema robust i lliure d'errors per detectar totes les combinacions de puntuació del Farkle (escala, trios, etc.).

3. **Feedback visual dinàmic:** Aconseguir que l'aspecte físic (textures o models) dels personatges canviï dinàmicament i de forma progressiva segons la vida que els quedi, sense saturar la memòria.



## 11. Exploració amb IA

* **Prompt 1:** "Vull fer un joc basat en el joc de daus del Kingdom Come Deliverance, però on els punts restin vida a l'altre jugador, amb un aspecte més violent segons el dany. Què et sembla la idea i quines regles hi afegiries?"

&#x20; * *Resposta resumida:* La IA ha validat la mecànica del "Farkle" aplicant els punts com a dany directe i ha suggerit la implementació d'estats alterats visuals.

* **Prompt 2:** "Vull afegir daus trucats amb efectes. Tinc pensats 12 daus diferents (vampíric, punxant, etc.). Ajuda'm a equilibrar-los per un joc per torns i defineix-me els riscos tècnics d'aquesta decisió."

&#x20; * *Resposta resumida:* La IA ha categoritzat els daus (combate, defensa, suerte, sabotaje) i ha alertat sobre la dificultat de programar 12 efectes únics i la IA en menys de 10 hores.



## 12. Proposta final escollida

La creació de **dKO**, un simulador de daus violent basat en el Farkle amb 12 variables de daus especials. El joc es centrarà purament en la jugabilitat mecànica de tauler amb un feedback visual progressiu del desgast dels combatents.



## 13. Justificació de viabilitat

Tot i que la implementació de 12 daus especials i el canvi dinàmic d'estat físic suposa un risc per a un projecte de 10 hores, el docent ha donat permís explícit i llibertat d'hores per assumir el repte. El "core loop" és molt tancat i es pot modular: un cop programat el sistema de llançament i puntuació base, afegir els efectes dels daus és una tasca iterativa.



## 14. Mini pla de treball

* **Fase 1 (3h):** Sistema base de daus, generació aleatòria, detecció de combinacions i regles del Farkle.

* **Fase 2 (2h):** Gestió de torns, sistema de salut i aplicació del dany directe.

* **Fase 3 (3h):** Implementació dels 12 daus trucats i disseny de la IA bàsica.

* **Fase 4 (2h+):** Interfície d'usuari (UI), integració del canvi visual dinàmic dels personatges i testeig.



## 15. Eines previstes i justificació

* **Motor:** **jMonkeyEngine**. És un motor 3D lliure, obert i totalment gratuït. Al estar basat en Java, permet una programació robusta i estructurada, ideal per gestionar la complexa lògica matemàtica de les combinacions de daus, els estats i la IA, mantenint el desenvolupament econòmic.

* **Art/Textures:** GIMP o Krita (eines gratuïtes) per crear les diferents capes d'estat físic danyat dels jugadors.

