const title = document.querySelector('h1');

// override styles
// title.setAttribute('style', 'margin: 50px');

console.log(title.style);
console.log(title.style.color);

// added styles
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';

