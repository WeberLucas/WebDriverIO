export class HomeColorScreen {
    get text_principal() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/empty_text');
    }

    async validar_texto_principal() {
        await this.text_principal.waitForDisplayed();
        await expect(this.text_principal).toBeDisplayed();
    }
}
