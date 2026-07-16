import { DADOS_AUTO_COMPLETE } from '../../../data/api_demos.data.js';
import { AutoCompleteScreen } from '../../../screen/auto_complete.screen.js';

const auto_complete_screen = new AutoCompleteScreen();

describe('Auto Complete - validação por seletor', () => {
    it('deve inserir país e validar com xpath no campo', async () => {
        const nome_pais = DADOS_AUTO_COMPLETE.pais_brazil;
        await auto_complete_screen.inserir_pais_em_screen_top(nome_pais);
        const campo_pais = await $(`//android.widget.AutoCompleteTextView[@text="${nome_pais}"]`);
        await expect(campo_pais).toHaveText(nome_pais);
    });
});
