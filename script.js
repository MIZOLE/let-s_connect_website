function myMove(){
    let id = null;
    const elem = document.getElementsByClassName("our_name");
    let pos = 1;

    clearInterval(id);

    id = setInterval(frame, 5);

    function frame(){

        if (pos == 350){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px'
        }
    }
}