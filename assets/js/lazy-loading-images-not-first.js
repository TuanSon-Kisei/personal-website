const listItems = document.querySelectorAll('li:not(:first-child)');

listItems.forEach(item => {
    const images = item.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});