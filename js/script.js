$("#menu").click(function(){
  $("#navi").slideToggle(1000);
});



function ban(){
  document.getElementById('bannerText').classList.add('banne-text-add');
  document.getElementById('about').style.display = "block";
  document.getElementById('resume').style.display = "none";
  document.getElementById('service').style.display = "none";
  document.getElementById('portf').style.display = "none";
  document.getElementById('conta').style.display = "none";


}

function home(){
  document.getElementById('bannerText').classList.remove('banne-text-add');
  document.getElementById('about').style.display = "none";
  document.getElementById('resume').style.display = "none";
  document.getElementById('service').style.display = "none";
  document.getElementById('portf').style.display = "none";
  document.getElementById('conta').style.display = "none";


}

function res(){
  document.getElementById('bannerText').classList.add('banne-text-add');
  document.getElementById('resume').style.display = "block";
  document.getElementById('about').style.display = "none";
  document.getElementById('service').style.display = "none";
  document.getElementById('portf').style.display = "none";
  document.getElementById('conta').style.display = "none";



}

function ser(){
  document.getElementById('bannerText').classList.add('banne-text-add');
  document.getElementById('service').style.display = "block";
  document.getElementById('resume').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('portf').style.display = "none";
  document.getElementById('conta').style.display = "none";

  
}

function portt(){
  document.getElementById('bannerText').classList.add('banne-text-add');
  document.getElementById('portf').style.display = "block";
  document.getElementById('service').style.display = "none";
  document.getElementById('resume').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('conta').style.display = "none";

  
}

function cont(){
  document.getElementById('bannerText').classList.add('banne-text-add');
  document.getElementById('portf').style.display = "none";
  document.getElementById('service').style.display = "none";
  document.getElementById('resume').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('conta').style.display = "block";
  
}

var a =document.getElementById('photo1');
var b =document.getElementById('photo2');
var c =document.getElementById('photo3');
var d =document.getElementById('photo4');
var e =document.getElementById('photo5');
var f =document.getElementById('photo6');
var g =document.getElementById('photo7');
var h =document.getElementById('photo8');
var i =document.getElementById('photo9');

function alll(){
  a.style.display = 'block';
  b.style.display = 'block';
  c.style.display = 'block';
  d.style.display = 'block';
  e.style.display = 'block';
  f.style.display = 'block';
  g.style.display = 'block';
  h.style.display = 'block';
  i.style.display = 'block';
}

function app(){
  a.style.display = 'block';
  b.style.display = 'none';
  c.style.display = 'block';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'block';
  g.style.display = 'none';
  h.style.display = 'none';
  i.style.display = 'none';
}


function card(){
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'block';
  g.style.display = 'block';
  h.style.display = 'block';
  i.style.display = 'block';
}


function web(){
  a.style.display = 'none';
  b.style.display = 'block';
  c.style.display = 'none';
  d.style.display = 'block';
  e.style.display = 'block';
  f.style.display = 'none';
  g.style.display = 'none';
  h.style.display = 'none';
  i.style.display = 'none';
}