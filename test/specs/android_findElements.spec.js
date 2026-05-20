import { abrir_gallery } from '../../helper/app.helper.js';
import { clicar_quando_visivel } from '../../helper/wait.helper.js';

describe('Android Find Elements', () => {
    it('deve encontrar elemento por accessibility id', async () => {
        await clicar_quando_visivel('~App');
        const action_bar = await $('~Action Bar');
        await action_bar.waitForDisplayed();
        await expect(action_bar).toBeExisting();
    });

    it('deve encontrar elemento por class name', async () => {
        const titulo_app = await $('.android.widget.TextView');
        await titulo_app.waitForDisplayed();
        await expect(titulo_app).toHaveText('API Demos');
    });

    xit('deve encontrar elemento por xpath', async () => {
        await clicar_quando_visivel('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        await clicar_quando_visivel(
            '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
        );
        await clicar_quando_visivel('//android.widget.TextView[@text="Command two"]');
        const texto_resultado = await $('//android.widget.TextView');
        await expect(texto_resultado).toHaveText('You selected: 1 , Command two');
    });

    it('deve encontrar elemento por UiAutomator', async () => {
        const item_alert = await $('android=new UiSelector().textContains("Alert")');
        await item_alert.waitForDisplayed();
        await item_alert.click();
    });

    it('deve listar múltiplos elementos', async () => {
        const lista_esperada = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content', 'Graphics',
            'Media', 'NFC', 'OS',
            'Preference', 'Text', 'Views'
        ];

        const lista_atual = [];
        const lista_textos = await $$('android.widget.TextView');

        for (const elemento of lista_textos) {
            lista_atual.push(await elemento.getText());
        }

        await expect(lista_atual).toEqual(lista_esperada);
    });

    it('deve fazer scroll vertical até Secure Surfaces', async () => {
        await clicar_quando_visivel('~App');
        await clicar_quando_visivel('~Activity');
        await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
        );
        await clicar_quando_visivel('~Secure Surfaces');
        await expect($('~Secure Surfaces')).toExist();
    });

    it('deve fazer scroll horizontal na Gallery', async () => {
        await abrir_gallery();
        const scroll_horizontal = $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList()'
        );
        await scroll_horizontal.waitForExist();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    });
});
