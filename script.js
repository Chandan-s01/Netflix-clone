// For scroll 
const trending_shows = document.getElementById('trending-shows');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

scrollLeftBtn.addEventListener('click', () => {
    trending_shows.scrollLeft -= 300;
});

scrollRightBtn.addEventListener('click', () => {
    trending_shows.scrollLeft += 300; 
});


