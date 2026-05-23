import { clicar_quando_visivel } from '../helpers/wait.helper.js';


export class ChooseDateScreen {
    get titulo_tela() {
        return $('//*[@text="Views/Date Widgets/1. Dialog"]');
    }
    get current_date() {
        return $('//*[contains(@text,"5-23-2026")]')
    }
    get change_date() {
        return $('//*[@text="change the date"]')
    }

    get dateFromTheMonth() {
        return($('//*[@text="10"]'))
    }
    get btn_ok(){
        return $('//*[@text="OK"]');
    }
    get new_date(){
        return $('//*[contains(@text,"8-10-2026")]')
    }

    async titulo_tela_existe() {
        await expect(this.titulo_tela).toExist();
    }
    async change_date_existe() {
        await expect(this.change_date).toExist();
        await clicar_quando_visivel(this.change_date);
    }
    async pick_date(){
        await clicar_quando_visivel(this.dateFromTheMonth);
        await clicar_quando_visivel(this.btn_ok)
    }
    async new_date_selectd(){
        await expect(this.new_date).toExist();
    }
}