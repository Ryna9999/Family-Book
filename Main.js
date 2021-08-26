var images=["Mom.jpg","Dad.jpg","Me.jpg","Sister.jpg"];
var names=["Jaspreet","Padam","Ryna","Kyra"];
var i=0;
function next(){
    document.getElementById("image").src=images[i];
    document.getElementById("name").innerHTML=names[i];
    i++;
    if(i>3){
        i=0;
    }
}