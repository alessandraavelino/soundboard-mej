var numBtn = document.querySelectorAll(".sound").length

for (var i = 0; i < numBtn; i++) {
    document.querySelectorAll(".sound")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML

        switch(buttonInnerHtml){
            case "1º Mistério":
                var audio1 = new Audio("audios/misterio1.mp3")
                audio1.play()
                break;
            case "2º Mistério":
                var audio2 = new Audio("audios/misterio2.mp3")
                audio2.play()
                break;
            case "3º Mistério":
                var audio3 = new Audio("audios/misterio3.mp3")
                audio3.play()
                break;
            case "4º Mistério":
                var audio4 = new Audio("audios/misterio4.mp3")
                audio4.play()
                break;
            case "5º Mistério":
                var audio5 = new Audio("audios/misterio5.mp3")
                audio5.play()
                break;
            case "Espírito Santo - p1":
                var audio6 = new Audio("audios/espiritosantop1.mp3")
                audio6.play()
                break;
            case "Espírito Santo - p2":
                var audio7 = new Audio("audios/espiritosantop2.mp3")
                audio7.play()
                break;
            case "Mãos Ensang. de Jesus":
                var audio8 = new Audio("audios/mej.mp3")
                console.log("hello word")
                audio8.play()
                break;
            case "Evangelho - p1":
                var audio8 = new Audio("audios/evangelho1.mp3")
                console.log("hello word")
                audio8.play()
                break;
            case "Evangelho - p2":
                var audio8 = new Audio("audios/evangelho2.mp3")
                console.log("hello word")
                audio8.play()
                break;
            default:
                console.log("erro")
            
        }
    })
}
console.log("erro")



