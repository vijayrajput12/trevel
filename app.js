Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{

    e.addEventListener('keyup',(e1)=>{
        if(e.value.length >0){
            document.getElementsByClassName('extra')[i].style.transform="rotate(180deg)"
        }
        else{
            document.getElementsByClassName('extra')[i].style.transform="rotate(0deg)"

        }
    })
})