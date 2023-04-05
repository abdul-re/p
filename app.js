let bContent = `
        
<style>

#links{
width: 750px;
animation: zoom-out ease 0.9s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
}

@keyframes zoom-out {
0% {
transform: scale(0.1, 0.1);
}

100% {
transform: scale(1, 1);
}
}


.link{
font-family: sans-serif;
font-weight: 600;
  font-size:15px;
text-decoration: none;
color: white;
background-color: #5bc0de;
padding: 10px;
cursor: pointer;
transition: 0.2s ;
border-radius: 2px;
}

.link:hover{
background-color: #3b95b0;
padding: 13px;
  text-decoration: none;
}

a:link{
color:white;
}

a:visited{
color:white;
}
</style>



<div id="links">
    <a href="#" class="link l1 ">SOCCER LINKS</a>
    <a href="#" class="link l5 ">NHL LINKS</a>
    <a href="#" class="link l2 ">NBA LINKS</a>
    <a href="#" class="link l3 ">NFL LINKS</a>
    <a href="#" class="link l4 ">MLB LINKS</a>
    <a href="#" class="link l6 ">MMA LINKS</a>
</div><br>


`

document.getElementById('display').innerHTML = bContent