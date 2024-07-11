function searchAnime() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const animeItems = document.getElementsByClassName('anime-item');
    
    for (let i = 0; i < animeItems.length; i++) {
        const animeTitle = animeItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (animeTitle.includes(input)) {
            animeItems[i].style.display = '';
        } else {
            animeItems[i].style.display = 'none';
        }
    }
}
