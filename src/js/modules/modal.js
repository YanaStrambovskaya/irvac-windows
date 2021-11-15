const modals = () => {

    // bind modal to trigger (elemnt)
    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('div[data-modal]');
            
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach( item => {
                    item.style.display = 'none';
                })
    
                modal.style.display = "block";
                // document.body.style.overflow = "hidden";
                document.body.classList.add('modal-open');
            })
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";

            windows.forEach( item => {
                item.style.display = 'none';
            })

            document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal && closeClickOverlay) {
                modal.style.display = "none";

                windows.forEach( item => {
                    item.style.display = 'none';
                })

                document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time)
    }

    // const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
    //     modalEngineer = document.querySelector('.popup_engineer'),
    //     modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modals;