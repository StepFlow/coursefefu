import Glide from '@glidejs/glide';

var glide = new Glide('#prepods-glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
});

glide.mount();