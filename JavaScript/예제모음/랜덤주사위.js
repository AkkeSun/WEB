<p>버튼을 클릭하면 2개의 주사위가 랜덤됩니다</p>
<img id=r1 src="./images/sai_1.gif">
<img id=r2 src="./images/sai_6.gif">
<br>
<button onclick='ran()'>주사위를 굴린다</button>

<script>
function ran(){
let num = parseInt((Math.random()*6)+1);
let num2 = parseInt((Math.random()*6)+1);
let image1= document.getElementById('r1');
let image2= document.getElementById('r2');
image1.src = "./images/sai_"+num+".gif";
image2.src = "./images/sai_"+num2+".gif";

}

</script>
