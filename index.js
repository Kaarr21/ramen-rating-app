
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" },
    { id: 4, name: "Spicy Miso", restaurant: "Hakata", image: "spicy.jpg", rating: 3, comment: "Nice kick!" },
    { id: 5, name: "Naruto Ramen", restaurant: "Naruto", image: "naruto.jpg", rating: 5, comment: "My absolute favorite!" }
 ];
 
 
 function displayRamens() {
     const ramenMenu = document.getElementById('ramen-menu');
     ramenMenu.innerHTML = '';
     
     ramens.forEach(ramen => {
         const ramenItem = document.createElement('div');
         ramenItem.className = 'ramen-item';
         ramenItem.dataset.id = ramen.id;
         
         const img = document.createElement('img');
         img.src = ramen.image;
         img.alt = ramen.name;
         
           ramenItem.appendChild(img);
         
         ramenItem.addEventListener('click', () => handleClick(ramen.id));
         
         ramenMenu.appendChild(ramenItem);
     });
 }
 
 function handleClick(id) {
     const ramen = ramens.find(r => r.id === id);
     if (!ramen) return;
     
     const ramenDetail = document.getElementById('ramen-detail');
     
     
     const ratingValue = document.getElementById('rating-value');
     let stars = '';
     for (let i = 0; i < (ramen.rating || 0); i++) {
         stars += '★';
     }
     ratingValue.textContent = stars;
     
     const commentText = document.getElementById('comment-text');
     commentText.textContent = ramen.comment || '';
 }
 
 function addSubmitListener() {
     const form = document.getElementById('new-ramen-form');
     
     form.addEventListener('submit', function(event) {
         event.preventDefault();
         
         const name = document.getElementById('name').value;
         const restaurant = document.getElementById('restaurant').value;
         const image = document.getElementById('image').value;
         const rating = parseInt(document.getElementById('rating').value);
         const comment = document.getElementById('comment').value;
         
         const newId = ramens.length > 0 ? Math.max(...ramens.map(r => r.id)) + 1 : 1;
         
         const newRamen = {
             id: newId,
             name,
             restaurant,
             image,
             rating,
             comment
         };
         
         ramens.push(newRamen);
         
         displayRamens();
         
         handleClick(newId);
         
         form.reset();
     });
 }
 
 document.querySelector("#new-ramen-form").addEventListener("submit", function (e) {
     e.preventDefault(); 
 
 function main() {
     displayRamens();
     addSubmitListener();
     
 
 }
 
 document.addEventListener('DOMContentLoaded', function(){
     main();
 })