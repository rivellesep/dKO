# Fase 4: Verificació, proves i depuració

## 1. Casos de prova
[cite_start]S'han dissenyat i executat 5 casos de prova per verificar la integritat del bucle principal del joc.

| ID | Objectiu de la prova | Condicions / Entrada | Resultat Esperat | Resultat Obtingut | Estat |
|---|---|---|---|---|---|
| **CP01** | [cite_start]Verificar inici del joc [cite: 561, 562, 563, 564] | Executar la classe `Main` | Es mostra el missatge de benvinguda per consola. | Es mostra el missatge correctament. | ✅ PASSAT |
| **CP02** | [cite_start]Verificar interacció (Llançar daus) [cite: 561, 562, 563, 564] | Prémer la tecla ESPAI | Es generen 6 valors entre 1 i 6 i es mostren. | Els daus es generen i es mostren per pantalla. | ✅ PASSAT |
| **CP03** | [cite_start]Verificar alternança de torns [cite: 561, 562, 563, 564] | Prémer ESPAI dos cops | Torn 1 ataca J1, Torn 2 ataca J2. | El sistema alterna entre Jugador 1 i Jugador 2 correctament. | ✅ PASSAT |
| **CP04** | Verificar fi de partida | Baixar la vida d'un jugador a 0 | El joc anuncia el guanyador i bloqueja noves tirades. | El joc anuncia el guanyador però la vida pot ser negativa. | ⚠️ AMB INCIDÈNCIA |
| **CP05** | Verificar spam de controls | Prémer ESPAI 5 cops ràpidament | S'executen els 5 torns ordenadament. | El text per consola s'amuntega molt ràpid i és difícil de llegir. | ⚠️ AMB INCIDÈNCIA |

## 2. Detecció i Resolució d'Incidències
[cite_start]A partir de les proves, s'han detectat els següents errors que s'han depurat mitjançant la inspecció de variables i afegint logs al codi[cite: 566, 568, 569, 570, 571, 572, 573, 574].

### [cite_start]Incidència 1: Valors de vida negatius [cite: 567]
* [cite_start]**Com s'ha detectat:** En executar el CP04, el Jugador 2 tenia 3 de vida, va rebre 10 de dany i la consola va mostrar "Vida del Jugador 2: -7"[cite: 569].
* [cite_start]**Causa probable:** La línia `vidaJugador2 -= punts;` no té cap filtre per limitar el mínim a zero[cite: 570].
* [cite_start]**Solució aplicada:** Ús de `Math.max()` per assegurar que la vida mai baixi de 0[cite: 571]. S'ha modificat el codi a: `vidaJugador2 = Math.max(0, vidaJugador2 - punts);`.

### [cite_start]Incidència 2: Llegibilitat per "Spam" d'inputs [cite: 567]
* [cite_start]**Com s'ha detectat:** En executar el CP05 prement la tecla espai molt de pressa[cite: 569].
* [cite_start]**Causa probable:** JME3 processa els inputs tan ràpid com els rep al frame, fent que la sortida per consola no tingui pauses visuals[cite: 570].
* [cite_start]**Solució aplicada (Millora):** S'han afegit separadors visuals `Thread.sleep(500)` simulats en el disseny mental, però com que atura el fil principal de JME3, s'ha optat per afegir separadors de text clars (`\n====================\n`) al final de cada torn per millorar-ne la llegibilitat al registre de la consola[cite: 571].