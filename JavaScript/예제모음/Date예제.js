<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>생일 계산기</title>
</head>
<body>

<h1>다음 생일까지 남은 일수</h1>
<p>다음 버튼을 클릭하여 생일을 입력하면,<br>
다음 생일가지 남은 일수를 볼 수 있습니다.</p>
<br>

<button onclick='input()'>생일을 입력</button>


<script>
function input() {
	let birthMonth = prompt("생일 월을 입력해 주십시오(1 ~ 12)");
	let birthDay = prompt("생일 날짜를 입력해 주십시오(1 ~ 31)");

	//현재날짜와 비교
	let nowday = new Date(); // 오늘
	let birth = new Date(); // 생일을 작성할 날짜

	//자신의 생일을 저장
	birth.setMonth(birthMonth - 1); // -1을 해줘야 정확한 날짜가 들어감
	birth.setDate(birthDay);

	// 자신의생일 현재 날짜의 시간 
	let mSecond = birth.getTime() - nowday.getTime();
	// mSecondrk '-'일 경우 -> 생일이 지났음 

	if(mSecond <= 0){ // 생일이 지났을경우
	let birthYear = birth.getFullYear(); // 올해 년도
	birth.setFullYear(birthYear + 1);    //내년이니까 1 더하기 

	mSecond = birth.getTime() - nowday.getTime(); //내년 생일날짜로 다시 계산 
	}

	let days = mSecond / (24 * 60 * 60 * 1000); // 하루,시,분,초
	alert(days);
}


</script>

</body>
</html>
