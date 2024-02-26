document.addEventListener("DOMContentLoaded", function() {
   
    const image_data = {
      "cards": [
        {
          
          "image": "url2.jpg",
          "title": "Dr. Y K Mishra",
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url4.jpg"
        },
        {
          "title": "Dr. Prithvi Mohandas",
          "image": "url7.jpg"
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url5.jpg"
        },
        {
          "title": "Dr. Y K Mishra",
          "image": "url7.jpg"
        },
        {
          "title": "Dr. Prithvi Mohandas",
          "image": "url4.jpg"
        },
        {
          "title": "Dr. Y K Mishra",
          "image": "url7.jpg"
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url6.jpg"
        },
        {
          "title": "Dr. Prithvi Mohandas",
          "image": "url3.jpg"
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url4.jpg"
        },
        {
          "title": "Dr. Shreyash Gajjar",
          "image": "url5.jpg"
        },
        {
          "title": "Dr. Prithvi Mohandas",
          "image": "url4.jpg"
        },
        {
          "title": "Dr. Shreyash Gajjar",
          "image": "url6.jpg"
        },
        {
          "title": "Dr. Shreyash Gajjar",
          "image": "url3.jpg"
        },
        {
          "title": "Dr. Y K Mishra",
          "image": "url7.jpg"
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url3.jpg"
        },
        {
          "title": "Dr. Shreyash Gajjar",
          "image": "url4.jpg"
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url5.jpg"
        },
        {
          "title": "Dr. Y K Mishra",
          "image": "url7.jpg"
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url3.jpg"
        },
        {
          "title": "Dr. Shreyash Gajjar",
          "image": "url4.jpg"
        },
        {
          "title": "Dr. Ayushi  Gajjar",
          "image": "url7.jpg"
        },
        {
          "title": "Dr. Shreyash Gajjar",
          "image": "url6.jpg"
        },
        {
          "title": "Dr. Arun Halankar",
          "image": "url3.jpg"
        },

        // Add more cards as needed
      ]
    };

    // Function to create and display cards
    function createCards(data) {
      const cardContainer = document.getElementById("cardContainer");

      // Loop through each card in the JSON data
      data.cards.forEach(cardData => {
        // Create card element
        const card = document.createElement("div");
        card.classList.add("card");

        
        // Create image element
        const image = document.createElement("img");
        image.classList.add("card-image");
        image.src = cardData.image;
        // Create title element
        const title = document.createElement("h2");
        title.classList.add("card-title");
        title.textContent = cardData.title;
        card.appendChild(image);
        card.appendChild(title);
        cardContainer.appendChild(card);
      });
    }

   
      createCards(image_data);
  });
