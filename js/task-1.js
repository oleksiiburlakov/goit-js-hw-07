'use strict';

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

for(const category of categories){
    const head2 = category.querySelector('h2').textContent;
    const count = category.querySelectorAll('ul li');

    console.log(`Category: ${head2}`);
    console.log(`Elements: ${count.length}`);
}