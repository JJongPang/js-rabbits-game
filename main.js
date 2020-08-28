'use strict'

const findRabbit = document.querySelector('.find__rabbit');
const rabbit = document.querySelector('.rabbit');

findRabbit.addEventListener('click', () => {
    rabbit.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
