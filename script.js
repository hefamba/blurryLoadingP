const bg = document.querySelector('.bg');
const load = document.querySelector('.loading-text');

let loading = 0;



const blurring = () => {
    loading++;
    if (loading > 99) {
        clearInterval(int);
    }

    load.innerText = `${loading}%`;
    load.style.opacity = scale(loading, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px`
    console.log(loading);
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

let int = setInterval(blurring, 30);