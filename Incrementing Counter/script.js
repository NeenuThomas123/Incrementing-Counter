const counters = document.querySelectorAll('.counter')

counters.forEach(counter=>{
    counter.innerText = '0'


const updateCounter = () =>{

    //here we get the final number you want
    const target = +counter.getAttribute('data-target')

    //here we get the current number showing in the counter
    const c = +counter.innerText

    const increment = target / 200

    console.log(increment);

    //it will increase the number inside the counter until it reaches the final target
    if(c < target){
        counter.innerText = `${Math.ceil(c + increment)}`

        setTimeout(updateCounter , 1)
    }
    else{
        counter.innerText = target
    }
    
}
updateCounter()
})