

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    var congrats_text = document.getElementById("text")

    button.addEventListener("click", play_audio);

    function ballon_animation (){
        // let id = null;
        const container = document.getElementById("container");
        var balloon  = document.querySelectorAll(".animate")
        const containerWidth = container.offsetWidth;

        balloon.forEach((elem)=>{
        elem.style.visibility ="visible";
        const imgWidth = elem.offsetWidth;
        const maxLeft = containerWidth - imgWidth;
        const leftValue = Math.random() * maxLeft;
        elem.style.left = `${leftValue}px`;
        let pos = 0;
        // clearInterval(id);
        let id = setInterval(frame, 5);
        function frame() {
            if (pos == 650) {
            clearInterval(id);
            } else {
            pos++;
            elem.style.bottom= pos + 'px';
            // elem.style.left = pos + 'px';
            }
            }});
    }
    function play_audio() {
        
        congrats_text.style.visibility="visible"

        var success_audio = document.getElementById("audio");
        success_audio.play().catch(console.error);
        button.style.visibility="hidden"
        black_film = document.querySelector('.black-film')
        black_film.style.visibility = "hidden"
        pop_up = document.querySelectorAll('.b-text')
        pop_up.forEach((text)=>{
                text.style.visibility = "hidden"
        }
        )
        
        // ballon_animation()
    }
});
//  window.addEventListener("load", () => {
//     const audio = document.getElementById("audio");
//     audio.muted = false;
//     audio.play().catch(console.error);
//   });
