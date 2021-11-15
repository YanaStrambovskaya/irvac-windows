import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {
        form: '0',
        type: 'tree',
        profile: 'Холодное'

    };

    let deadline = '2021-11-28';

    timer('.container1', deadline);

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active', 'block','a');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click', 'block');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    images();
})
