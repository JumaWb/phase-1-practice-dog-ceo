const breedUrl = "https://dog.ceo/api/breeds/list/all";
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById("dog-image-container");

            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imgElement.alt = "Dog Image";
                imagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));
});
function fetchDogBreeds(breedUrl) {
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsList = document.getElementById("dog-breeds");

            for (const breed in data.message) {
                const breedItem = document.createElement("li");
                breedItem.textContent = breed;

                // Add event listener to change font color when clicked
                breedItem.addEventListener("click", function() {
                    this.style.color = "blue"; // Change color to blue on click
                });
                
                if (data.message[breed].length > 0) {
                    const subBreedsList = document.createElement("ul");
                    data.message[breed].forEach(subBreed => {
                        const subBreedItem = document.createElement("li");
                        subBreedItem.textContent = subBreed;
                        subBreedsList.appendChild(subBreedItem);
                    });
                    breedItem.appendChild(subBreedsList);
                }

                breedsList.appendChild(breedItem);
            }
        })
        .catch(error => console.error("Error fetching dog breeds:", error));
}