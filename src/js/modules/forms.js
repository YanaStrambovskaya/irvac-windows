import checkNumInputs from './checkNumInputs.js';

const forms = (state) => {
    const forms = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Loading....',
        success: 'Success!',
        failure: 'Failure('
    }

    const postData = async(url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        })

        return await res.text();
    }

    function clearInputs() {
        input.forEach( (item) => {
            item.value = '';
        })
    }

    forms.forEach( (item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.dataset.calc === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            

            postData('assets/server.php', formData)
                .then((res) => {
                    document.querySelector('.status').textContent = message.success;
                    console.log(res);
                })
                .catch(() => {
                    document.querySelector('.status').textContent = message.failure;
                })
                .finally(() => {
                    setTimeout(() => {
                        clearInputs();
                        document.querySelector('.status').remove();
                    }, 5000);
                })
        })
    })
}

export default forms;