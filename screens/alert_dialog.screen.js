import { abrir_alert_dialogs } from '../helper/app.helper.js';
import { clicar_quando_visivel } from '../helper/wait.helper.js';

export class AlertDialogScreen {
    get titulo_tela() {
        return $('//*[@text="App/Alert Dialogs"]');
    }

    get btn_dois_botoes() {
        return $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]');
    }

    get btn_ok_alerta() {
        return $('//*[@resource-id="android:id/button1"]');
    }

    get titulo_alerta() {
        return $('//*[@resource-id="android:id/alertTitle"]');
    }

    async abrir_tela() {
        await abrir_alert_dialogs();
        await this.titulo_tela.waitForExist();
    }

    async abrir_dialog_dois_botoes_e_confirmar() {
        await this.abrir_tela();
        await clicar_quando_visivel(this.btn_dois_botoes);
        await driver.getAlertText();
        await clicar_quando_visivel(this.btn_ok_alerta);
    }
}
