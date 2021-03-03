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

//고정된 값을 배열에 집어넣기 
let arr = {};
arr[0] = parseInt( document.getElementById("ch1").value );
arr[1] = parseInt( document.getElementById("ch2").value );
arr[2] = parseInt( document.getElementById("ch3").value );

let total = parseInt( document.getElementById("t1").value );

function sum1( num ) {
	
	// 배열에 들어간 checkbox가 true라면 더하고 아니면 빼라 
	// name으로 읽어들이기
	if(document.frm.elements[num].checked == true){
		total = total + arr[num];	
	}else{
		total = total - arr[num];
	}

  // 값을 저장 -> 출력
	document.frm.elements[3].value = total;
}

</script>
