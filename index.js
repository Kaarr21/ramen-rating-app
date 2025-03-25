const ramen= [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "nirvana Ramen", restaurant: "Ramen-ya", image: "nirvana.jpg" , rating:5, comment:"The best!"},
    { id: 4, name: "Spicy Shoyu", restaurant: "Hakata", image: "shoyu.jpg", rating: 3, comment: "Nice kick!" },
    { id: 5, name: "Naruto Ramen", restaurant: "Naruto", image: "naruto.jpg", rating: 5, comment: "My absolute favorite!" }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');


    ramen.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));

        ramenMenu.appendChild(img);
    });
}
function handleClick(ramen) {
    const details = document.getElementById("ramen-menu");
    details.innerHTML = `
    <h2> ${ramen.name}</h2>
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

        ramen.push(newRamenEntry);

        displayRamens();

        events.target.reset()

    });
}

function main (){
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
