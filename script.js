document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("title-input"); // Add title input
    const textInput = document.getElementById("text-input");
    const imageInput = document.getElementById("image-input");
    const postButton = document.getElementById("post-button");
    const postedContent = document.getElementById("posted-content");
    const createLink = document.getElementById("create-link");
    const contentForm = document.getElementById("content-form");
    const popupOverlay = document.getElementById("popup-overlay");

    createLink.addEventListener("click", function () {
        contentForm.style.display = "block";
        popupOverlay.style.display = "block";
    });

    postButton.addEventListener("click", function () {
        const title = titleInput.value; // Get title from input
        const text = textInput.value;
        const image = imageInput.files[0];

        if (title || text || image) {
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("content-item");

            // Include the title in the posted content
            if (title) {
                const titleHeading = document.createElement("h3");
                titleHeading.textContent = title;
                contentDiv.appendChild(titleHeading);
            }

            if (text) {
                const textParagraph = document.createElement("p");
                textParagraph.textContent = text;
                contentDiv.appendChild(textParagraph);
            }

            if (image) {
                const imageElement = document.createElement("img");
                imageElement.src = URL.createObjectURL(image);
                contentDiv.appendChild(imageElement);
            }

            postedContent.appendChild(contentDiv);

            // Reset input fields
            titleInput.value = "";
            textInput.value = "";
            imageInput.value = "";
        }
    });
});
