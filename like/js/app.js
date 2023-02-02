function like (id){
    let likesSpan = document.querySelector("#"+id+" > .card-header > .head-row > .like-counter > span");
    let likes = parseInt(likesSpan.innerHTML) + 1;
    likesSpan.innerHTML = likes; 

}