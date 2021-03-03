<body>

<!--1. 1초씩 리뉴얼되는 표현식-->
<input type="text" id="text" size="50">

<script>
<!--함수지정-->
function displayDate() {
	document.getElementById('text').value = Date();
}

// 함수 쓰기                // 1초
setInterval("displayDate()", 1000);
</script>





<!-- 2. 사용자 지정 & 원하는 값만 뽑기 -->
<p id="date"></p>
<script>
	let d = new Date();	
	//시간 커스텀
	d = new Date(2021, 6-1, 23, 6, 20, 10, 0);	

	document.getElementById('date').innerHTML = d;               //전체
	/*
	document.getElementById('date').innerHTML = d.getDay();      //요일
	document.getElementById('date').innerHTML = d.getFullYear(); //연
	document.getElementById('date').innerHTML = d.getMonth() + 1;//월
	document.getElementById('date').innerHTML = d.getDate();     //일
	document.getElementById('date').innerHTML = d.getHours();    //시
	document.getElementById('date').innerHTML = d.getMinutes();  //분
	document.getElementById('date').innerHTML = d.getSeconds();  //초
	*/
	
</script>

</body>
