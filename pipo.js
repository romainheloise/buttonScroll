let scrollDots = document.querySelectorAll('.dot');
let bloc = document.querySelectorAll('.bloc');
let scrollDiv = document.querySelector('.scroll');
let li = document.querySelectorAll('li');

let remDots = [...scrollDiv.childNodes].filter(x => x.className === 'dot');
let divArray = [...bloc];

let actual = divArray.indexOf(blocSelect(bloc));  
scrollDots[actual].classList.add('big');


scrollDots.forEach( (x,index) => {   
    x.addEventListener('click', function(e){
        bloc[index].scrollIntoView({behavior: "smooth", block: "end"}); 
        remDots.map(dot => {
            dot === e.target? dot.classList.add('big') : dot.classList.remove('big');
        })             
    }) 
})


window.addEventListener("wheel", event => {
    let divArray = [...bloc];    
    let actual = divArray.indexOf(blocSelect(bloc));   
    console.log(event.deltaY) 
    if ( event.deltaY > 0 && scrollDots[actual+1] !== undefined ){
        blocSelect(bloc).nextElementSibling.scrollIntoView({behavior: "smooth", block: "end"});
        scrollDots[actual].classList.remove('big');
        scrollDots[actual+1].classList.add('big');
    } else if (event.deltaY < 0 && scrollDots[actual-1] !== undefined) {
        blocSelect(bloc).previousElementSibling.scrollIntoView({behavior: "smooth", block: "end"});
        scrollDots[actual].classList.remove('big');
        scrollDots[actual-1].classList.add('big');
    }    
})


li.forEach( (x,index) => {   
    
    x.addEventListener('click', function(e){
        let indexLi = [...li].indexOf(e.target);
        scrollDots.forEach( (x,i) => {
            indexLi === i ? x.classList.add('big') : x.classList.remove('big');
        })
        bloc[index].scrollIntoView({behavior: "smooth", block: "end"}); 
                 
    }) 
})







function blocSelect(fenetre) {
    let visible;
    fenetre.forEach( x => {
        if ( x.getBoundingClientRect().top === 0 ) visible = x;
    })
    return visible;
}
