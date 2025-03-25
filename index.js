const ramen= [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" },
    { id: 4, name: "Spicy Miso", restaurant: "Hakata", image: "spicy.jpg", rating: 3, comment: "Nice kick!" },
    { id: 5, name: "Naruto Ramen", restaurant: "Naruto", image: "naruto.jpg", rating: 5, comment: "My absolute favorite!" }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = '';
}
    
    ramen.forEach(ramen => {
        const ramenItem = document.createElement('div');
        ramenItem.className = 'ramen-item';
        ramenItem.dataset.id = ramen.id;
    })
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        
        ramenItem.appendChild(img);
        
        ramenItem.addEventListener('click', () => handleClick(ramen.id));
        
        ramenMenu.appendChild(ramenItem);
    

function handleClick(id) {
    const ramen = ramen.find(r => r.id === id);
}
    if (!ramen) return;
    
    const ramenDetail = document.getElementById('ramen-detail');