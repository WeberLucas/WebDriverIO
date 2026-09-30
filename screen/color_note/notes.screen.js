import { clicar_quando_visivel } from '../../helpers/wait.helper.js';

export class NotesScreen {
    get txt_note() {
        return $('id:com.socialnmobile.dictapps.notepad.color.note:id/edit_note');
    }
    
    async write_txt_note(note) {
        await this.txt_note.setValue(note);
    }
}
