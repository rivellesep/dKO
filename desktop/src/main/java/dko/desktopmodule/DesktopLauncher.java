package dko.desktopmodule;

import dko.game.Dko;
import com.jme3.system.AppSettings;

/**
 * Used to launch a jme application in desktop environment
 *
 */
public class DesktopLauncher {
    public static void main(String[] args) {
        final Dko game = new Dko();

        final AppSettings appSettings = new AppSettings(true);

        game.setSettings(appSettings);
        game.start();
    }
}
