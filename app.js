let input=document.querySelector("#inputBox");
let btns=document.querySelectorAll("button");

let string="";
let arr=Array.from(btns);

arr.forEach((btn)=>{
    btn.addEventListener("click",(el)=>{
        if(el.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(el.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(el.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=el.target.innerHTML;
            input.value=string;
        }
    });
});
