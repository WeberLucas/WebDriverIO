import { abrir_api_demos } from '../helper/app.helper.js';
import { clicar_quando_visivel } from '../helper/wait.helper.js';

export class ApiDemosScreen {
    get menu_views() {
        return $('//*[@text="Views"]');
    }

    get menu_buttons() {
        return $('//*[@text="Buttons"]');
    }

    get opcao_normal() {
        return $('//*[@text="Normal"]');
    }

    get menu_animation() {
        return $('//*[@text="Animation"]');
    }

    get titulo_views_buttons() {
        return $('//*[@text="Views/Buttons"]');
    }

    get texto_push() {
        return $('//*[@text="Push"]');
    }

    async abrir_home() {
        await abrir_api_demos();
    }

    async navegar_views_buttons_normal() {
        await this.abrir_home();
        await clicar_quando_visivel(this.menu_views);
        await clicar_quando_visivel(this.menu_buttons);
        await clicar_quando_visivel(this.opcao_normal);
    }

    async navegar_views_animation() {
        await this.abrir_home();
        await clicar_quando_visivel(this.menu_views);
        await clicar_quando_visivel(this.menu_animation);
    }
}
