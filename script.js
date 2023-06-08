const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id== "clr"){
            display.innerText="";
        }else if (item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        } else if(display.innerText!==""&& item.id=="equal"){
            display.innerText= eval(display.innerText);
        
        }else if(display.innerText==""&& item.id=="equal"){
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""), 2000);
        }else {
            display.innerText+=item.id;

        }
        
    }
});

const footer = document.getElementById('footer');
const h2 = document.createElement('h2');
h2.innerText = 'Made with ☕ by </José Torres>';
footer.appendChild(h2);
const div = document.createElement('div')
div.classList.add('social-media');
footer.appendChild(div);

