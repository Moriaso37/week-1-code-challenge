document.addEventListener("DOMContentLoaded", () => {
    const ramens = [
        {
            name: "Shoyu Ramen",
            restaurant: "Ichiran",
            image: "./images/shoyu.jpg",
            rating: 5,
            comment: "Delicious!"
        },
        {
            name: "Miso Ramen",
            restaurant: "Menya",
            image: "./images/miso.jpg",
            rating: 4,
            comment: "Very flavorful!"
        },
        {
            name: "Tonkotsu Ramen",
            restaurant: "Ramen-ya",
            image: "./images/tonkotsu.jpg",
            rating: 4.5,
            comment: "sweet and yummy"
        }
    ];

    function displayRamens() {
        const menu = document.querySelector("#ramen-menu");
        menu.innerHTML = ""; 
        ramens.forEach(ramen => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.style.width = "200px";
            img.addEventListener("click", () => handleClick(ramen));
            menu.appendChild(img);
        });
        
        if (ramens.length > 0) {
            handleClick(ramens[0]);
        }
    }

    function handleClick(ramen) {
        const detailDiv = document.querySelector("#ramen-detail");
        detailDiv.innerHTML = `
            <h2>${ramen.name}</h2>
            <h3>${ramen.restaurant}</h3>
            <img src="${ramen.image}" alt="${ramen.name}" style = "width: 200px;">
            <p>Rating: <span id="rating">${ramen.rating}</span></p>
            <p>Comment: <span id="comment">${ramen.comment}</span></p>
            <button id="delete-button">Delete</button>
        `;
        
        document.querySelector("#delete-button").addEventListener("click", () => deleteRamen(ramen));
    }

    function addSubmitListener() {
        const form = document.querySelector("#new-ramen");
        form.addEventListener("submit", event => {
            event.preventDefault();
            const newRamen = {
                name: form.name.value,
                restaurant: form.restaurant.value,
                image: form.image.value,
                rating: form.rating.value,
                comment: form.comment.value
            };
            ramens.push(newRamen);
            displayRamens();
            form.reset();
        });
    }

    function deleteRamen(ramenToDelete) {
        const index = ramens.indexOf(ramenToDelete);
        if (index !== -1) {
            ramens.splice(index, 1);
            displayRamens();
        }
    }

    function main() {
        displayRamens();
        addSubmitListener();
    }
    
    main();
});