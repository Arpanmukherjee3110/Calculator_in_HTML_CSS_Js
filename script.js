
// FIRST HEADING TEXT
var text=document.getElementById("type");
function dynamic(){
        setTimeout(function(){text.innerHTML="by Arpan Mukherjee"},0);
        setTimeout(function(){text.innerHTML="in HTML, CSS and Js"},3000);
        setTimeout(function(){dynamic()},6000);
}
dynamic();

// ATTRIBUTION TEXT
var txt=document.getElementById("head");
function dyn(){
        setTimeout(function(){txt.innerHTML="Welcome to this project"},0);
        setTimeout(function(){txt.innerHTML="Thanks for dropping by :)"},3000);
        setTimeout(function(){dyn()},6000);
}
dyn();

var string=""; var i=0; var obj=[]; var final=0;

// INPUT BUTTONS
let button=document.querySelectorAll(".num");
string=document.getElementById("txt").value;
Array.from(button).forEach(function(items){
        items.addEventListener("click",function(event){
               event.preventDefault();
               var light=function(){
               setTimeout(()=>{document.getElementById("txt").style.boxShadow ='#A2EDD4 0vh 0vh 2vh'},0);
               setTimeout(()=>{document.getElementById("txt").style.boxShadow ='none'},280);
        }
               light();
               string+=items.value;
               document.getElementById("txt").value=string;
        })
})

// EQUAL TO BUTTON
document.getElementById("equal").addEventListener("click",function(){
        try{
        final=eval(string);
        document.getElementById("txt").value=final;
        string=document.getElementById("txt").value;
        }
        catch(SyntaxError){
                document.getElementById("txt").value="Error";
        }
});

// C BUTTON
cross.addEventListener("click",function(){
        string="";
        document.getElementById("txt").value=string;
})

// CE BUTTON
clear.addEventListener("click",function(){ 
        for (i = 0; i<string.length;i++){
            obj.push(string.charAt(i));    
        }
        obj.pop();
        string=obj.join("");
        obj=[];
        document.getElementById('txt').value = string;
})
