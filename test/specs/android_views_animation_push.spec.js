import { ApiDemosScreen } from '../../screen/api_demos.screen.js';

const api_demos_screen = new ApiDemosScreen();

describe('Android Native - Views > Animation', () => {
    it('deve abrir Views, Animation e exibir Push', async () => {
        await api_demos_screen.navegar_views_animation();
        await expect(api_demos_screen.texto_push).toExist();
    });
});
