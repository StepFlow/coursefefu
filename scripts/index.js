import Glide from '@glidejs/glide';
// import Vue from 'vue/dist/vue.common.dev';
// import VueComponent from './components/VueComponent.vue';
// import { firestorePlugin } from 'vuefire'
// Vue.use(firestorePlugin)

const prepodsGlide = document.getElementById('prepods-glide');

if (prepodsGlide) {
    var glide = new Glide(prepodsGlide, {
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
}

// const lessonsElement = document.getElementById('lessons');

// new Vue({
//     el: lessonsElement,
//     template: `<vue-component></vue-component>`,
//     components: {
//         VueComponent,
//     },
// });