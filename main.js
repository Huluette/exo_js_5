const textarea = document.querySelector('textarea');
const nbmot = document.getElementById('nbmot');

textarea.value = "";

textarea.addEventListener("keyup", (e) => {

    console.log(e.value);

    if(e.target.value != ""){
        nbmot.textContent = countWords(e.target.value);
    }

    else {
        console.log("mettre à zéro");
        nbmot.textContent = '0';
    }
});

const countWords = (text) => {
    return text.replace(/[!.,:]/g,"").trim().split(' ').length;
}