import { AutoCompleteScreen } from '../../screens/auto_complete.screen.js';

const auto_complete_screen = new AutoCompleteScreen();

describe('Auto Complete - validação por seletor', () => {
    it('deve inserir país e validar com xpath no campo', async () => {
        await auto_complete_screen.inserir_pais_em_screen_top('Brazil');
        const campo_pais = await $('//android.widget.AutoCompleteTextView[@text="Brazil"]');
        await expect(campo_pais).toHaveText('Brazil');
    });
});
