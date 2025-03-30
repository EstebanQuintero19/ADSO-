function myTabGallery(imgs) {
    // Get the expanded image element
    var expandImg = document.getElementById("expandedImg");
    // Get the image text element
    var imgText = document.getElementById("imgtext");
    // Set the source of the expanded image to the clicked image's source
    expandImg.src = imgs.src;
    // Set the text content to the alt attribute of the clicked image
    imgText.textContent = imgs.alt;
    // Display the parent container of the expanded image
    expandImg.parentElement.style.display = "block";
}

  function openModal() {
    document.getElementById('modal-login').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-login').style.display = 'none';
}

function clearFields() {
    document.getElementById('usuario').value = "";
    document.getElementById('password').value = "";
}