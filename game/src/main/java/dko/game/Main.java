package dko.game;

import com.jme3.app.SimpleApplication;
import com.jme3.input.KeyInput;
import com.jme3.input.controls.ActionListener;
import com.jme3.input.controls.KeyTrigger;
import java.util.Random;

public class Main extends SimpleApplication {

    private int vidaJugador1 = 50;
    private int vidaJugador2 = 50;
    private boolean tornJugador1 = true;
    private Random random = new Random();

    public static void main(String[] args) {
        Main app = new Main();
        // Desactivem la configuració inicial per anar ràpid al prototip
        app.setShowSettings(false);
        app.start();
    }

    @Override
    public void simpleInitApp() {
        System.out.println("=========================================");
        System.out.println(" Benvingut a dKO! (Prototip Fase 3)");
        System.out.println(" Prem la tecla ESPAI per llançar els daus.");
        System.out.println("=========================================\n");

        // Mapeig de la interacció de l'usuari
        inputManager.addMapping("Llancar", new KeyTrigger(KeyInput.KEY_SPACE));
        inputManager.addListener(actionListener, "Llancar");
    }

    private final ActionListener actionListener = new ActionListener() {
        @Override
        public void onAction(String name, boolean isPressed, float tpf) {
            if (name.equals("Llancar") && !isPressed) {
                executarTorn();
            }
        }
    };

    private void executarTorn() {
        if (vidaJugador1 <= 0 || vidaJugador2 <= 0) return;

        int punts = 0;
        System.out.println("--- Llançant 6 daus... ---");

        for (int i = 0; i < 6; i++) {
            int tirada = random.nextInt(6) + 1;
            System.out.print("[" + tirada + "] ");
            // Lògica simulada: només els 1 i 5 fan mal en aquest prototip base
            if (tirada == 1 || tirada == 5) punts += 5;
        }

        System.out.println("\n> Punts de dany obtinguts: " + punts);

        if (tornJugador1) {
            vidaJugador2 -= punts;
            System.out.println(">> Jugador 1 ataca! Vida del Jugador 2: " + vidaJugador2 + "\n");
            tornJugador1 = false;
        } else {
            vidaJugador1 -= punts;
            System.out.println(">> Jugador 2 ataca! Vida del Jugador 1: " + vidaJugador1 + "\n");
            tornJugador1 = true;
        }

        comprovarVictoria();
    }

    private void comprovarVictoria() {
        if (vidaJugador1 <= 0) {
            System.out.println("+++ EL JUGADOR 2 GUANYA LA PARTIDA! +++");
        } else if (vidaJugador2 <= 0) {
            System.out.println("+++ EL JUGADOR 1 GUANYA LA PARTIDA! +++");
        }
    }
}