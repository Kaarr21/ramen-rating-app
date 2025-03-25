const ramen= [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" },
    { id: 4, name: "Spicy Miso", restaurant: "Hakata", image: "spicy.jpg", rating: 3, comment: "Nice kick!" },
    { id: 5, name: "Naruto Ramen", restaurant: "Naruto", image: "naruto.jpg", rating: 5, comment: "My absolute favorite!" }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
}
    
    ramen.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        images.addEventListener("click", () => handleClick(ramen));

        ramenMenu.appendChild(images);
    });

function handleClick(ramen) {
    const details = document.getElementById("ramen-detail");
    details.innerHTML = `<h2> ${ramen.name}</h2>
    <h3> ${ramen.restaurant}</h2>
    <img src = "${ramen.image}" alt = "${ramen.name}" >
    <p> Ratings: ${ramen.rating || "Not Rated"}</p>
    <p> Comment section: ${ramen.comment || "No comments available!"}</p>`;
}
    
function addSubmitListener(){
    const form = document.getElementById("new-ramen");

    form.addEventListener("submit", (events) => {
        events.preventDefault()

        const name = events.target.name.value;
        const restaurant = events.target.restaurant.value;
        const image = events.target.image.value;
        const rating = events.target.rating.value;
        const comment = events.target.comment.value;

        const newRamenEntry = {
            id: ramen.length + 1,
            name,
            restaurant,
            image,
            rating: rating ? parseInt(rating) : 0,
            comment,
        }

        ramens.push(newRamenEntry);

        displayRamens();

        events.target.reset()

    });
}

function main (){
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
