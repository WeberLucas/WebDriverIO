import { DADOS_AUTO_COMPLETE } from '../../data/api_demos.data.js';
import { AutoCompleteScreen } from '../../screen/auto_complete.screen.js';

const auto_complete_screen = new AutoCompleteScreen();

describe('Auto Complete - Screen Top', () => {
    it('deve inserir país e validar o texto no campo', async () => {
        await auto_complete_screen.inserir_pais_em_screen_top(DADOS_AUTO_COMPLETE.pais_brazil);
        await expect(auto_complete_screen.input_pais).toHaveText(DADOS_AUTO_COMPLETE.pais_brazil);
    });
});
