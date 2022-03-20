let inputText = document.querySelector('.inputText');
    submitForm = document.querySelector('.submitForm');
    information = document.querySelectorAll('.searchDiv');

    searchFunction = (text) => {
        information.forEach((element) => {
            if(element.textContent == text){
                element.style = "animation:animationElement 2s;";
                console.log(element);
            }
        });
    }
submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    searchFunction(inputText.value);
});