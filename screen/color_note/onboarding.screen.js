import { clicar_quando_visivel } from '../../helpers/wait.helper.js';

export class OnboardingScreen {
    get btn_skip() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip');
    }

    async pular_onboarding() {
        await clicar_quando_visivel(this.btn_skip);
    }
}
