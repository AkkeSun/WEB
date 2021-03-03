// onclick : 누를 때 실행되는 이벤트 (innerHTML : 단순 출력 // value: form태그에서 주로 사용)

<br>  
<button onclick="oper(1)">덧셈</button>
<button onclick="oper(2)">뺄셈</button>
<button onclick="oper(3)">곱셈</button>
<button onclick="oper(4)">나눗셈</button>
<button onclick="oper(5)">나머지</button>
<br>
<p id=demo> 입력하세요 </p>      <!-- 일반태그(아웃풋만 가능) -->
<br>
<input id=num1>                  <!-- form 태그(인아웃 모두 가능) -->
<input id=oper>
<input id=num2> = 
<input id=result>

<script>
function oper(num){
	document.getElementById('demo').innerHTML = "결과값 입니다";

	let num1 = document.getElementById('num1').value;
	let num2 = document.getElementById('num2').value;
	let result;
	if(num==1){
		document.getElementById('oper').value = '+';		
		result = parseInt(num1) + parseInt(num2);
	} else if(num==2) {
		document.getElementById('oper').value = '-';		
		result = parseInt(num1) - parseInt(num2);
	} else if(num==3) {
		document.getElementById('oper').value = '*';		
		result = parseInt(num1) * parseInt(num2);
	} else if(num==4) {
		document.getElementById('oper').value = '/';		
		result = parseInt(num1) / parseInt(num2);
	} else if(num==5) {
		document.getElementById('oper').value = '%';		
		result = parseInt(num1) % parseInt(num2);
	}	
	document.getElementById('result').value = result;
}


</script>
