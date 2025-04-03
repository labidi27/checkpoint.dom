var btnplus = document.querySelectorAll('.btnplus')
var btnmoins= document.querySelectorAll('.btnmoins')
var trash= document.querySelectorAll('.fa-trash')
var heart= document.querySelectorAll('.fa-heart')
var totlal= document.getElementById('total')

for (let i = 0; i< btnplus.length; i++) {
    btnplus[i].addEventListener('click',function(){
        btnplus[i].previousElementSibling.innerText++
        sommetotal()
    })
    }

for (let i = 0; i < btnmoins.length; i++) {
    btnmoins[i].addEventListener('click',function(){
        if (btnmoins[i].nextElementSibling.innerText > 0) {
            btnmoins[i].nextElementSibling.innerText--
            sommetotal()
        }
    })
    
}

for(let i = 0; i < trash.length ; i++){
    trash[i].addEventListener('click',function()
    {
    trash[i].parentElement.remove()
})
}

for(let i=0;i<heart.length;i++){
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle('galbi')
    })
}

function sommetotal(){
    var price = document.querySelectorAll('.price')
    var qnt = document.querySelectorAll('.qnt')

    var sum = 0
    for(let i=0;i<price.length;i++){
        sum = sum + price[i].innerText*qnt[i].innerText 
    }
    totlal.innerText=sum
}