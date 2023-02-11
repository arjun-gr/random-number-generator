let select = document.querySelector('h1')
let secSelect = document.querySelector('p')

let but = document.querySelector('button')

but.addEventListener('click',function(){
    let ran = Math.floor(Math.random()*100+1);
    secSelect.innerHTML = ran
})