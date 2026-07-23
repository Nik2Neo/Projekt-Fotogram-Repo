const dialogRef = document.getElementById("myDialog");
const titleRef = document.getElementById("dialogTitle");
const imgRef = document.getElementById("dialogImg");
const numberRef = document.getElementById("dialogNumber");


// Lists

const titleList = ["Beautiful Mountains", "Beautiful Alaska"];
const imgList = ["./img/image-1.jpg", "./img/image-2.jpg"];
const numberList = ["1/12", "2/12"];

function openDialog(newTitle, newPicture, dialogNumber){
    titleRef.textContent = newTitle;
    imgRef.src = newPicture;
    imgRef.alt = newTitle;
    numberRef.textContent = dialogNumber;
    dialogRef.showModal();
}

function closeDialog(){
    dialogRef.close();
}

function iterateDialog(index){

}
