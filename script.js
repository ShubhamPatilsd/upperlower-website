window.onload=()=>{
    document.getElementById("copy-btn").setAttribute('disabled', 'disabled');

}



function goButtonClicked(){
    const textValue=document.getElementById("textarea").value;
    let newString="";
    for(let i=0; i<textValue.length;i++){
        let c = textValue.charAt(i);
        if(c=='l'||c=='L'){
            newString+=c.toUpperCase();
        } else if(c=='i' || c=='I'){
            newString+=c.toLowerCase();
        }else if(i%2!=0){
            newString+=c.toUpperCase();
        }else{
            newString+=c.toLowerCase();
        }
    }
    document.getElementById("resultingText").innerHTML=newString;
    document.getElementById("copy-btn").removeAttribute('disabled');
}

function copyText(){
    var text = document.getElementById("resultingText").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

}

//<div class="bg-dark text-light" style="margin:auto; display: flex; align-items: center; margin-top: 3rem; width:max-content; padding: 10px 10px; border-radius: 10px;"><i style="margin-right: 1rem;" class="fab fa-github-square fa-3x"></i><h4>Check out my GitHub!</h4></div>