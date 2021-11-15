const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display= 'block', tagActiveClassAdd = null) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
          

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (
                target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
            )
            ) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideContent();
                        showContent(i);
                    }
                })
        }
    })

    function hideContent () {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            if (tagActiveClassAdd == null) {
                item.classList.remove(activeClass);
            } else {
                item.querySelector(tagActiveClassAdd).classList.remove(activeClass);
            }
            
        })
    };

    function showContent (i = 0) {
        content[i].style.display = display;
        if (tagActiveClassAdd == null) {
            tab[i].classList.add(activeClass);
        } else {
            tab[i].querySelector(tagActiveClassAdd).classList.add(activeClass);
        }
    };

    hideContent();
    showContent();
};

export default tabs;