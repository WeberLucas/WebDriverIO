import { ApiDemosScreen } from '../../screens/api_demos.screen.js';

const api_demos_screen = new ApiDemosScreen();

describe('Android Native - Views > Buttons', () => {
    it('deve abrir Views, Buttons e tocar em Normal', async () => {
        await api_demos_screen.navegar_views_buttons_normal();
        await expect(api_demos_screen.titulo_views_buttons).toExist();
        await expect(api_demos_screen.opcao_normal).toExist();
    });
});
