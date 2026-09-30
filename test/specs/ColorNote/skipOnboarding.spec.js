import { OnboardingScreen } from '../../../screen/color_note/onboarding.screen.js';
import { HomeColorScreen } from '../../../screen/color_note/home_color.screen.js';
import { NotesScreen } from '../../../screen/color_note/notes.screen.js';
const onboarding_screen = new OnboardingScreen();
const home_color_screen = new HomeColorScreen();
const notes_screen = new NotesScreen();
describe('ColorNote - Pular Onboarding', () => {
    it('deve pular o onboarding', async () => {
        await onboarding_screen.pular_onboarding();
        await expect(onboarding_screen.btn_skip).not.toBeDisplayed();
        await home_color_screen.validar_texto_principal();
    });
    it('adicionar notas na lista de notas', async () => {
        await home_color_screen.validar_texto_principal();
        await home_color_screen.click_text_principal();
        await home_color_screen.click_btn_text();
        await notes_screen.write_txt_note(
            'Naruto é o melhor anime de todos os tempos'
        );
    
        await expect(notes_screen.txt_note)
            .toHaveText('Naruto é o melhor anime de todos os tempos');
    
    });
});
