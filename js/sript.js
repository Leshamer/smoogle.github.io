const search = document.querySelector('.search');
const searchString = document.querySelector('.searching_string');
const searchIcon = document.querySelector('.searc_icon');





document.addEventListener("click", searching);

function searching(event) {
    if (event.target.closest('.searc_icon')){
        console.log("появление");
        console.log("Первое нажатие");
        searchIcon.classList.add('_active');
        searchString.classList.add('_active');
        searchString.style.cssText = `transition: transform 2s cubic-bezier(.50,.15,.50,1.25);`;
        searchIcon.style.cssText = `transition: transform 1s cubic-bezier(.30,.90,.43,1.65) 1.155s;`;
        /*document.getElementById("clear_button").onclick = function(event){document.getElementById("input_clearing").value = "";}*/
        if (searchString.classList.contains('_active')){
            document.removeEventListener("click", searching);
            console.log("Кнопка не активна");
        }
    }
};

searchIcon.addEventListener("click", searching_2);

/*searchString.addEventListener("keyup", writing_smth);*/

function searching_2(){
    console.log("Второе нажатие");
    let inputResult = input_clearing.value;

    if (inputResult !== "") {
        inputResult = inputResult.toLowerCase();
        console.log("Строчка не пуста");
        console.log("Идёт отправка");
        console.log(inputResult);
        switch (inputResult){
            case "google": alert("Перейти в Google?"); window.open("https://www.google.ru/webhp?hl=ru");  break;
            case "yandex": alert("Перейти в Яндекс?"); window.open("https://yandex.ru"); break;
            case "яндекс": alert("Перейти в Яндекс?"); window.open("https://yandex.ru"); break;
            case "гугл": alert("Перейти в Google?"); window.open("https://www.google.ru/webhp?hl=ru"); break;
        }
        document.getElementById("input_clearing").value = "";
        console.log("Удаление");
    }
    else {console.log("Строчка пуста");}
    if (!searchString.classList.contains('_active')){
        console.log("Возвращение движения");
        document.addEventListener("click", searching);
        }
}

/*function writing_smth(){
    let stringContein = input_clearing.value;
    console.log(stringContein);
}*/





document.addEventListener("keyup", function(event){
    if (event.code === 'Escape'){
        searchString.style.cssText = `transition: transform 1s ease-out 0;`;
        searchIcon.style.cssText = `transition: transform 0.7s ease-in-out 0.2s;`;
        console.log("исчезновение");
        searchIcon.classList.remove('_active');
        searchString.classList.remove('_active');
        document.getElementById("input_clearing").value = "";
    }
});

