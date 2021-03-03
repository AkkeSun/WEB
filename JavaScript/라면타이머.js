<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<form action="" name="frm">
	<div align="center">
	<strong>라면 타이머</strong>
	<br><br>
	
	<select id="selid" name="myChoice">
		<option value="180">원하는 시간을 선택해 주십시오(기본 시간 3분)</option>
		<option value="300">5분</option>
		<option value="180">3분</option>
		<option value="150">2분 30초</option>
		<option value="120">2분</option>
		<option value="60">1분</option>
		<option value="30">30초</option>
	</select>
	
	<input type="button" value="Timer Start" onclick="noodle()">
	<br><br>
	
	<span id="countdown">time selected</span>
	<br><br>
	
	<button type="button" onclick="window.close()">close</button>
	
	</div>
</form>

<script type="text/javascript">

let audio = new Audio('AlarmClockBell.wav');

let count = 0;  //value값
let time = 0;
let choice = 0; //index값

function noodle() {
	
	clearInterval(time); //타임 초기화 
	
	/*
	let value = document.getElementById('selid').value;
	count = value;
	*/
	
	choice = document.frm.myChoice.selectedIndex;	
	count = parseInt( document.frm.myChoice.options[choice].value );

	// 타이머 함수 불러다 쓰기       //1초
	time = setInterval('myTimer()', 1000);
		
}

//타이머 함수 설정 
function myTimer() {
	count = count - 1;
	
	document.getElementById('countdown').innerHTML = "완료까지 <b>" + count + "</b>초 남았습니다";
	
	if(count == 0){
		clearInterval(time); //타임 초기화 
		
		let audio = new Audio('AlarmClockBell.wav');
		audio.play();
	}	
}

</script>

</body>
</html>
