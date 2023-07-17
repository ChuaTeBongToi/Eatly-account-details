function uploadFile() {
    document.getElementById("input-file").click();
}

function previewFile() {
    var preview = document.getElementById('photo');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "Ellipse 194.png";
    }

    reader.onloadend = function () {
        preview.src = reader.result;
    }
}

function deleteFile() {
   document.getElementById('photo').src = "Account Owner.png";
   file = "Ellipse 194.png";
}