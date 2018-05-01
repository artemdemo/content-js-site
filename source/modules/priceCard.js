import anime from 'animejs';

/**
 * Price card
 * @param element {HTMLElement}
 */
const priceCard = (element) => {
    const headerEl = element.querySelector('.card-header');
    const titleEl = headerEl.querySelector('h4');

    const options = {
        easing: 'easeInOutQuad',
        duration: 150,
    };

    element.addEventListener('mouseenter', () => {
        anime(Object.assign({}, options, {
            targets: element,
            scale: 1.15,
        }));
        anime(Object.assign({}, options, {
            targets: headerEl,
            backgroundColor: '#FF7043',
        }));
        anime(Object.assign({}, options, {
            targets: titleEl,
            color: '#ffffff',
        }));
    });

    element.addEventListener('mouseleave', () => {
        anime(Object.assign({}, options, {
            targets: element,
            scale: 1,
        }));
        anime(Object.assign({}, options, {
            targets: headerEl,
            backgroundColor: '#f7f7f7',
        }));
        anime(Object.assign({}, options, {
            targets: titleEl,
            color: '#212529',
        }));
    });
};

export default priceCard;
