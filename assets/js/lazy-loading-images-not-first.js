const listItems = document.querySelectorAll('li:not(:first-child)');
const paragraphItems = document.querySelectorAll('p:not(:first-child');

listItems.forEach(item => {
    const images = item.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});

paragraphItems.forEach(item => {
    const images = item.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    })
})