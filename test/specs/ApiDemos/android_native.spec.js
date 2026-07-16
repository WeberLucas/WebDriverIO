import { AlertDialogScreen } from '../../../screen/alert_dialog.screen.js';
import { abrir_alert_dialogs } from '../../../helpers/navegation.helper.js';

const alert_dialog_screen = new AlertDialogScreen();

describe('Android Native Feature Tests', () => {
    it('deve abrir activity Alert Dialogs diretamente', async () => {
        await abrir_alert_dialogs();
        await expect(alert_dialog_screen.titulo_tela).toExist();
    });

    it('deve interagir com dialog de dois botões', async () => {
        await alert_dialog_screen.abrir_dialog_dois_botoes_e_confirmar();
        await expect(alert_dialog_screen.titulo_alerta).not.toExist();
    });
});
