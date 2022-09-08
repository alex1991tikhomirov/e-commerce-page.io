
document.addEventListener('click', (event)=>{
    const dataAction = event.target.dataset.action;
    //check if action was made in the buy section than we proceed
    if(dataAction === 'plus' || dataAction === 'minus'){
        const section = event.target.closest('.buy');
        const outPut = section.querySelector('[data-counter]');

        if(dataAction === 'plus'){
            outPut.innerText = ++outPut.innerText;
        }
        if(dataAction === 'minus'){
            if(outPut.innerText > 1){
                outPut.innerText--;
            }else{
                outPut.innerText = 0;
            }
        }
    }
})
