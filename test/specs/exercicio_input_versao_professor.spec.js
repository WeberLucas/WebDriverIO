import { AutoCompleteScreen } from '../../screens/auto_complete.screen.js';

const auto_complete_screen = new AutoCompleteScreen();

describe('Auto Complete - Screen Top', () => {
    it('deve inserir país e validar o texto no campo', async () => {
        await auto_complete_screen.inserir_pais_em_screen_top('Brazil');
        await expect(auto_complete_screen.input_pais).toHaveText('Brazil');
    });
});
