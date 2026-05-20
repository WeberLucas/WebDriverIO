import { clicar_quando_visivel, preencher_quando_visivel } from '../helper/wait.helper.js';

export class AutoCompleteScreen {
    get menu_views() {
        return $('~Views');
    }

    get menu_auto_complete() {
        return $('~Auto Complete');
    }

    get opcao_screen_top() {
        return $('~1. Screen Top');
    }

    get input_pais() {
        return $('.android.widget.AutoCompleteTextView');
    }

    async inserir_pais_em_screen_top(nome_pais) {
        await clicar_quando_visivel(this.menu_views);
        await clicar_quando_visivel(this.menu_auto_complete);
        await clicar_quando_visivel(this.opcao_screen_top);
        await clicar_quando_visivel(this.input_pais);
        await preencher_quando_visivel(this.input_pais, nome_pais);
    }
}
