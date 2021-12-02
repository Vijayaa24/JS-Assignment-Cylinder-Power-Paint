
const pi=22/7;


var cylinderVolume=()=>{
    let rad=document.getElementById('r').value;
    let height=document.getElementById('h').value;
    let result=document.getElementById('vol');
    let volume=pi*rad*rad*height;
    result.value="volume is :"+volume
}

var cylinderSurfaceArea=()=>{
    let rad=document.getElementById('r').value;
    let height=document.getElementById('h').value;
    let result=document.getElementById('vol');
    let surfacearea=(2*pi*rad*height)+(2*pi*rad*rad);
    result.value="Surface area is :"+surfacearea
}


var powerFunction=()=>{
    var cur=document.getElementById('i').value;
    var volt=document.getElementById('v').value; 
    let result=document.getElementById('p');
    var power=cur*volt;
    result.value="Power is : "+power
}



let wallFunction=()=>{
    var a=document.getElementById('a').value;
    var b=document.getElementById('w').value;
    var c=document.getElementById('h2').value;
    var result=document.getElementById('answer')
    var area=b*c;
    var bucketRequired=area/a;
    result.value=bucketRequired+"bucket paints required"
}