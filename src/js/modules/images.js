const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            
            imgPopup.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            bigImage.style.maxHeight = '90%';
            bigImage.style.maxWidth = '90%';
        }

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })

}

export default images;