import { abrir_date_widgets} from '../../../helpers/navegation.helper.js';
import { scrollHorizontal } from '../../../helpers/scroll.helper.js';
import { ChooseDateScreen } from '../../../screen/chooseDate.screen.js';

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
    it('working with a date picker', async () => {
        //acess the date picker
        //get curret date
        //click on change the data button
        //scroll right to the next month
        //select the 10th date 
        //click on ok button
        //verify the updated date
        
        await choose_date_screen.date_picker_existe();
        await choose_date_screen.date_picker_scroll_existe();
        await choose_date_screen.date_picker_scroll_left_existe();
        await choose_date_screen.date_picker_scroll_right_existe();
        await choose_date_screen.date_picker_scroll_up_existe();
        await choose_date_screen.date_picker_scroll_down_existe();
        await choose_date_screen.date_picker_scroll_up_left_existe();
        await choose_date_screen.date_picker_scroll_up_right_existe();
        await choose_date_screen.date_picker_scroll_down_left_existe();
        await choose_date_screen.date_picker_scroll_down_right_existe();
    });
});