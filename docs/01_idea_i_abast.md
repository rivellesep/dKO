# 01_idea_i_abast.md

## 1. Títol del joc
**Dead Rush**

> *Nota:* El títol evoca una "cursa mortal" contra onades d'enemics, on cada segon compta i l'acció és frenètica.

## 2. Tipus de microvideojoc escollit
Joc de **supervivència amb hordes**, dins de la categoria d'**acció en temps real amb gestió de millores**.

## 3. Objectiu del joc
Sobrevivre el màxim temps possible contra onades creixents d'enemics que apareixen contínuament. El jugador millora les seues habilitats en pujar de nivell, però el repte escala fins a fer impossible la supervivència. L'objectiu final és aconseguir una puntuació rècord (temps sobreviscut).

## 4. Rol del jugador
El jugador controla un personatge que:
- Es mou lliurement per la pantalla (amb tecles **WASD** o **fletxes**).
- Dispara automàticament **a l'enemic més proper** (no cal apuntar amb el ratolí).
- Recull gemmes d'experiència que deixen anar els enemics en morir.
- Quan puja de nivell, tria una millora entre tres opcions aleatòries.

## 5. Regles bàsiques
1. El personatge comença amb **100 punts de vida** i una arma bàsica (un sol projectil, dany baix, velocitat de tret lenta).
2. Els enemics apareixen fora de la pantalla i es mouen directament cap al jugador.
3. Cada enemic eliminat deixa anar una **gemma d'experiència (XP)**.
4. En recollir suficients gemmes, el jugador puja de nivell. Cada nivell ofereix **tres millores aleatòries**.
5. Si un enemic toca el jugador, aquest perd **20 punts de vida**.
6. La dificultat augmenta progressivament: cada **10 segons** augmenta la taxa d'aparició d'enemics i la seua velocitat.
7. El joc acaba quan la vida del jugador arriba a **0**.

## 6. Condicions de victòria i derrota
- **Derrota:** La vida del jugador arriba a 0. Es mostra el temps sobreviscut i es permet reiniciar la partida.
- **Victòria:** No hi ha condició de victòria final; el joc està dissenyat per ser infinit però progressivament impossible.

## 7. Bucle principal del joc
Mentre el jugador estigui viu, es repeteix el següent cicle:
1. **Actualització d'entrada:** Es llegeixen tecles de moviment.
2. **Aparició d'enemics:** Segons taxa actual.
3. **Moviment d'enemics:** Cap al jugador.
4. **Dispars del jugador:** Automàtics a l'enemic més proper.
5. **Moviment de bales.**
6. **Col·lisions:** Bala-enemic, jugador-enemic, jugador-gemma.
7. **Pujada de nivell:** Si XP suficient, tria de millora.
8. **Escalat de dificultat:** Cada 10 segons.
9. **Comprovació de derrota.**

## 8. Repte principal i dificultat
- **Repte:** Esquivar enemics mentre es trien millores estratègiques.
- **Dificultat:** Creix exponencialment; partides ràpides i intenses.

## 9. Limitacions explícites (Què NO inclourà)
- Gràfics avançats ni sprites (formes geomètriques).
- Sons ni música.
- Múltiples personatges o modes de joc.
- Persistència de dades (inicialment).
- IA complexa o efectes visuals avançats.

## 10. Riscos tècnics

| Risc | Solució |
| :--- | :--- |
| Rendiment amb molts objectes | Graella espacial + Object Pooling |
| Lògica de millores apilables | Objecte de modificadors centralitzat |
| Sincronització UI / bucle | Variable `pausa` per aturar el bucle |

## 11. Exploració amb IA

**Prompt 1:** Sobre escalat de dificultat en jocs de supervivència.
**Prompt 2:** Sobre estructura de modificadors en JavaScript.

*(Veure resums i decisions a la versió completa)*

## 12. Proposta final escollida
Joc de supervivència **Dead Rush** amb **HTML5, CSS3 i JavaScript (Canvas API)**. Mecàniques bàsiques completes i progressió addictiva.

## 13. Justificació de viabilitat
- **Temps:** 10 hores.
- **Complexitat controlada:** Canvas i JavaScript són adequats.
- **Abast limitat:** Característiques extres excloses.

## 14. Mini pla de treball

| Fase | Durada | Tasques |
| :--- | :--- | :--- |
| Fase 1 | 1,5 h | Idea i abast |
| Fase 2 | 2 h | Modelatge UML i repositori |
| Fase 3 | 2 h | Prototip funcional |
| Fase 4 | 2 h | Proves i millores |
| Fase 5 | 2 h | Refactorització i documentació final |

## 15. Eines previstes

| Eina | Justificació |
| :--- | :--- |
| HTML, CSS, JS | Tecnologies web estàndard |
| Canvas API | Dibuix 2D eficient |
| VS Code | IDE lleuger |
| Git / GitHub | Control de versions |
| IA (DeepSeek) | Suport a la documentació i resolució de dubtes |

---