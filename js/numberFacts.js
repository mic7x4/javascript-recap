let fact =  document.querySelector('#fact');
let factText =  document.querySelector('#fact__text');
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input',getFactAjax);


function getFactAjax(){
    let number = numberInput.value;
    let xhr =  new XMLHttpRequest();
    xhr.open('GET',`http://numbersapi.com/${number}`);
    
    xhr.onload =  function(){
        if(xhr.status === 200 && number != ''){
            fact.style.display = 'block';
            factText.innerHTML = this.responseText;
    }
    }
    xhr.send();
}
