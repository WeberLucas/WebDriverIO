import { abrir_date_widgets} from '../../helpers/navegation.helper.js';
import { scrollHorizontal } from '../../helpers/scroll.helper.js';
import { ChooseDateScreen } from '../../screen/chooseDate.screen.js';

const choose_date_screen = new ChooseDateScreen();

describe('Android Choose Date', () => {
    it('deve abrir a tela de escolha de data', async () => {
        await abrir_date_widgets();
        await choose_date_screen.titulo_tela_existe();
        await choose_date_screen.change_date_existe();
        await scrollHorizontal();
        await choose_date_screen.pick_date()
        await expect(choose_date_screen.new_date).toExist();

    });
});