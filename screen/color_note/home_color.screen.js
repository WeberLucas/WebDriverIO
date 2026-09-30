export class HomeColorScreen {
    get text_principal() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/empty_text');
    }
    get btn_text() {
        return $('android=new UiSelector().text("Text")');
    }
    get btn_checklist() {
        return $('android=new UiSelector().text("Checklist")');
    }

    async validar_texto_principal() {
        await this.text_principal.waitForDisplayed();
        await expect(this.text_principal).toBeDisplayed();
    }
    async click_text_principal() {
        await this.text_principal.click();
    }
    async click_btn_text() {
        await this.btn_text.click();
    }
    async click_btn_checklist() {
        await this.btn_checklist.click();
    }
}
