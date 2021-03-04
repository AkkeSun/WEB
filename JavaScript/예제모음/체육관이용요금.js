<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>체육관 이용 요금 2</h1>
기본 사용료(4시간)40,800원
<br><br>

<form name="frm">

	<input type="checkbox" onclick="sum1(0)" id="ch1" value="20000">야간조명(20,000원)
	<br>
	<input type="checkbox" onclick="sum1(1)" id="ch2" value="4000">배구 네트 x 2장(4,000원)
	<br>
	<input type="checkbox" onclick="sum1(2)" id="ch3" value="5000">배구공 x 10(20,000원)
	<br>
	<br>
	합계금액:<input type="text" id="t1" value="40800">원정

</form>

<script type="text/javascript">


let total = parseInt( document.getElementById("t1").value );

function sum1( num ) {
	
	// 클릭한 checkbox가 true라면 더하고 아니면 빼라 
	if(document.frm.elements[num].checked == true){
		total = total + parseInt(document.frm.elements[num].value);	
	}else{
		total = total - parseInt(document.frm.elements[num].value);
	}

  // 값을 저장 -> 출력
	document.getElementById('t1').value = total;
}

</script>

</body>
</html>
