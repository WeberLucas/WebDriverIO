import { OnboardingScreen } from '../../../screen/color_note/onboarding.screen.js';
import { HomeColorScreen } from '../../../screen/color_note/home_color.screen.js';
const onboarding_screen = new OnboardingScreen();
const home_color_screen = new HomeColorScreen();

describe('ColorNote - Pular Onboarding', () => {
    it('deve pular o onboarding', async () => {
        await onboarding_screen.pular_onboarding();
        await expect(onboarding_screen.btn_skip).not.toBeDisplayed();
        await home_color_screen.validar_texto_principal();
    });
});
