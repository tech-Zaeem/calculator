function wn(number){
    a=document.getElementById('h11').innerText;
    document.getElementById('h11').innerText=a+number;
}
function clr(){
    document.getElementById('h11').innerText=""
}
function wa(){
    exp=document.getElementById('h11').innerText;
    if(exp==""||exp==" "){
        alert("please put an expression");
        return
    }
    ans=eval(exp);
    document.getElementById('h11').innerText=ans;
}
function del(){
    b=document.getElementById('h11').innerText;
    c=b.slice( 0,b.length-1);
    document.getElementDyId('h11').innerText=c
}
    
