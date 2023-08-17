const bg = document.querySelector('.bg');
const load = document.querySelector('.loading-text');

let loading = 0;



const blurring = () => {
    loading++;
    if (loading > 99) {
        clearInterval(int);
    }
    console.log(loading);
};

let int = setInterval(blurring, 30);