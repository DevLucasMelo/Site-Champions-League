var time = [];
var time2 = [];
var time3 = [];
var time4 = [];
function sortear(){
    var aleatorio;
    aleatorio =  Math.floor(Math.random() * 8 + 1);
     for(var i=1;i<=8;i++){
       
        for(var j=0;j<8;j++){
            if(time[7] != undefined){
                break;
            }
            if(time[j] == aleatorio){
                aleatorio =  Math.floor(Math.random() * 8 + 1);
                j=-1;
            }
        }
        var num = document.getElementById("_" + i).src.indexOf("fotos/bolinha5.png");
       
        if(num != -1){
            switch(aleatorio){
                case 1:
                    document.getElementById("_" + i).src = "fotos/1.png";
                    document.getElementById("-" + 1).src = "fotos/bolinha5.png";
                    document.getElementById("p" +1).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Chelsea";
                    time.push(1);   
                    return true;
                case 2:
                    document.getElementById("_" + i).src = "fotos/2.jpg";
                    document.getElementById("-" + 2).src = "fotos/bolinha5.png";
                    document.getElementById("p" +2).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Villarreal";
                    time.push(2);
                    return true;
                case 3:
                    document.getElementById("_" + i).src = "fotos/3.png";
                    document.getElementById("-" + 3).src = "fotos/bolinha5.png";
                    document.getElementById("p" +3).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Manchester City";
                    time.push(3);
                    return true;
                case 4:
                    document.getElementById("_" + i).src = "fotos/4.png";
                    document.getElementById("-" + 4).src = "fotos/bolinha5.png";
                    document.getElementById("p" +4).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Atletico de Madrid";
                    time.push(4);
                    return true;
                case 5:
                    document.getElementById("_" + i).src = "fotos/5.png";
                    document.getElementById("-" + 5).src = "fotos/bolinha5.png";
                    document.getElementById("p" +5).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Bayern de Munique";
                    time.push(5);
                    return true;
                case 6:
                    document.getElementById("_" + i).src = "fotos/6.png";
                    document.getElementById("-" + 6).src = "fotos/bolinha5.png";
                    document.getElementById("p" +6).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Inter de Milão";
                    time.push(6);
                    return true;
                case 7:
                    document.getElementById("_" + i).src = "fotos/7.png";
                    document.getElementById("-" + 7).src = "fotos/bolinha5.png";
                    document.getElementById("p" +7).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Lille";
                    time.push(7);
                    return true;
                case 8:
                    document.getElementById("_" + i).src = "fotos/8.png";
                    document.getElementById("-" + 8).src = "fotos/bolinha5.png";
                    document.getElementById("p" +8).innerHTML = "Sorteado";
                    document.getElementById("pot" +i).innerHTML = "Sporting";
                    time.push(8);
                    return true;
                default:
                    alert("Deu ruim");
                    return true;
                    
            }
        }
    }
}
function sortear2(){
    var aleatorio;
    aleatorio =  Math.floor(Math.random() * 8 + 1);
        for(var i=1;i<=8;i++){
            for(var j=0;j<8;j++){
                if(time2[7] != undefined){
                    break;
                }
                if(time2[j] == aleatorio){
                    aleatorio =  Math.floor(Math.random() * 8 + 1);
                    j=-1;
                }
            }
        var num = document.getElementById("__" + i).src.indexOf("fotos/bolinha5.png");
        if(num != -1){
            switch(aleatorio){
                case 1:
                    document.getElementById("__" + i).src = "fotos/11.png";
                    document.getElementById("-" + 11).src = "fotos/bolinha5.png";
                    document.getElementById("p" +11).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Real Madrid";
                    time2.push(1);
                    return true;
                case 2:
                    document.getElementById("__" + i).src = "fotos/12.png";
                    document.getElementById("-" + 12).src = "fotos/bolinha5.png";
                    document.getElementById("p" +12).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Barcelona";
                    time2.push(2);
                    return true;
                case 3:
                    document.getElementById("__" + i).src = "fotos/13.png";
                    document.getElementById("-" + 13).src = "fotos/bolinha5.png";
                    document.getElementById("p" +13).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Juventus";
                    time2.push(3);
                    return true;
                case 4:
                    document.getElementById("__" + i).src = "fotos/14.png";
                    document.getElementById("-" + 14).src = "fotos/bolinha5.png";
                    document.getElementById("p" +14).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Manchester United";
                    time2.push(4);
                    return true;
                case 5:
                    document.getElementById("__" + i).src = "fotos/15.png";
                    document.getElementById("-" + 15).src = "fotos/bolinha5.png";
                    document.getElementById("p" +15).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Paris Saint-Germain";
                    time2.push(5);
                    return true;
                case 6:
                    document.getElementById("__" + i).src = "fotos/16.png";
                    document.getElementById("-" + 16).src = "fotos/bolinha5.png";
                    document.getElementById("p" +16).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Liverpool";
                    time2.push(6);
                    return true;
                case 7:
                    document.getElementById("__" + i).src = "fotos/17.png";
                    document.getElementById("-" + 17).src = "fotos/bolinha5.png";
                    document.getElementById("p" +17).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Sevilla";
                    time2.push(7);
                    return true;
                case 8:
                    document.getElementById("__" + i).src = "fotos/18.png";
                    document.getElementById("-" + 18).src = "fotos/bolinha5.png";
                    document.getElementById("p" +18).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 2).innerHTML = "Borussia Dortmund";
                    time2.push(8);
                    return true;
                default:
                    alert("Deu ruim");
                    return true;
                    
            }
        }
    }
}  
function sortear3(){
    var aleatorio;
    aleatorio =  Math.floor(Math.random() * 8 + 1);
    
        for(var i=1;i<=8;i++){
       
        for(var j=0;j<8;j++){
            if(time3[7] != undefined){
                break;
            }
            if(time3[j] == aleatorio){
                aleatorio =  Math.floor(Math.random() * 8 + 1);
                j=-1;
            }
        }
        var num = document.getElementById("___" + i).src.indexOf("fotos/bolinha5.png");
       
        if(num != -1){

            switch(aleatorio){
                case 1:
                    document.getElementById("___" + i).src = "fotos/21.png";
                    document.getElementById("-" + 21).src = "fotos/bolinha5.png";
                    document.getElementById("p" +21).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "Porto";
                    time3.push(1);
                    return true;
                case 2:
                    document.getElementById("___" + i).src = "fotos/22.png";
                    document.getElementById("-" + 22).src = "fotos/bolinha5.png";
                    document.getElementById("p" +22).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "Ajax";
                    time3.push(2);
                    return true;
                case 3:
                    document.getElementById("___" + i).src = "fotos/23.png";
                    document.getElementById("-" + 23).src = "fotos/bolinha5.png";
                    document.getElementById("p" +23).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "RB Leipzig";
                    time3.push(3);
                    return true;
                case 4:
                    document.getElementById("___" + i).src = "fotos/24.png";
                    document.getElementById("-" + 24).src = "fotos/bolinha5.png";
                    document.getElementById("p" +24).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "Atalanta";
                    time3.push(4);
                    return true;
                case 5:
                    document.getElementById("___" + i).src = "fotos/25.png";
                    document.getElementById("-" + 25).src = "fotos/bolinha5.png";
                    document.getElementById("p" +25).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "Zenit";
                    time3.push(5);
                    return true;
                case 6:
                    document.getElementById("___" + i).src = "fotos/26.png";
                    document.getElementById("-" + 26).src = "fotos/bolinha5.png";
                    document.getElementById("p" +26).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "Besiktas";
                    time3.push(6);
                    return true;
                case 7:
                    document.getElementById("___" + i).src = "fotos/27.png";
                    document.getElementById("-" + 27).src = "fotos/bolinha5.png";
                    document.getElementById("p" +27).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "Dínamo Kiev";
                    time3.push(7);
                    return true;
                case 8:
                    document.getElementById("___" + i).src = "fotos/28.png";
                    document.getElementById("-" + 28).src = "fotos/bolinha5.png";
                    document.getElementById("p" +28).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 3).innerHTML = "Club Brugge";
                    time3.push(8);
                    return true;
                default:
                    alert("Deu ruim");
                    return true;
                    
            }
        }
    }
}
function sortear4(){
    var aleatorio;
    aleatorio =  Math.floor(Math.random() * 8 + 1);
    
        for(var i=1;i<=8;i++){
       
        for(var j=0;j<8;j++){
            if(time4[7] != undefined){
                break;
            }
            if(time4[j] == aleatorio){
                aleatorio =  Math.floor(Math.random() * 8 + 1);
                j=-1;
            }
        }
        var num = document.getElementById("____" + i).src.indexOf("fotos/bolinha5.png");
       
        if(num != -1){

            switch(aleatorio){
                case 1:
                    document.getElementById("____" + i).src = "fotos/31.png";
                    document.getElementById("-" + 31).src = "fotos/bolinha5.png";
                    document.getElementById("p" +31).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Milan";
                    time4.push(1);
                    return true;
                case 2:
                    document.getElementById("____" + i).src = "fotos/32.png";
                    document.getElementById("-" + 32).src = "fotos/bolinha5.png";
                    document.getElementById("p" +32).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Wolfsburg";
                    time4.push(2);
                    return true;
                case 3:
                    document.getElementById("____" + i).src = "fotos/33.png";
                    document.getElementById("-" + 33).src = "fotos/bolinha5.png";
                    document.getElementById("p" +33).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Lokomotiv";
                    time4.push(3);
                    return true;
                case 4:
                    document.getElementById("____" + i).src = "fotos/34.png";
                    document.getElementById("-" + 34).src = "fotos/bolinha5.png";
                    document.getElementById("p" +34).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Galatasaray";
                    time4.push(4);
                    return true;
                case 5:
                    document.getElementById("____" + i).src = "fotos/35.png";
                    document.getElementById("-" + 35).src = "fotos/bolinha5.png";
                    document.getElementById("p" +35).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Olympique";
                    time4.push(5);
                    return true;
                case 6:
                    document.getElementById("____" + i).src = "fotos/36.png";
                    document.getElementById("-" + 36).src = "fotos/bolinha5.png";
                    document.getElementById("p" +36).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Lazio";
                    time4.push(6);
                    return true;
                case 7:
                    document.getElementById("____" + i).src = "fotos/37.png";
                    document.getElementById("-" + 37).src = "fotos/bolinha5.png";
                    document.getElementById("p" +37).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Rennes";
                    time4.push(7);
                    return true;
                case 8:
                    document.getElementById("____" + i).src = "fotos/38.png";
                    document.getElementById("-" + 38).src = "fotos/bolinha5.png";
                    document.getElementById("p" +38).innerHTML = "Sorteado";
                    document.getElementById("pot" +i +"" + 4).innerHTML = "Istanbul";
                    time4.push(8);
                    return true;
                default:
                    alert("Deu ruim");
                    return true;
                    
            }
        }
    } 
}
