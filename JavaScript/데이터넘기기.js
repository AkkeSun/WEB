<!-- a -->
<a href="NewFile.jsp?name=홍길동&age=24">NewFile.jsp로 이동</a>


<!-- form (name 사용)-->
<!-- 
method = get                    : 서버 정보변경이 없다. 소규모 데이터용. 재실행 가능
method = post                   : 보안에 좋음. 즐겨찾기나 재실행 불가능
enctype = multipart/form-data   : 파일 형식으로 보내겠다
enctype = text/plain            : 텍스트 형식으로 보내겠다
 -->
<form action="NewFile.jsp" method=post>
	이름:<input type=text name=name>
	나이:<input type=text name=age>
	<input type=submit value=이동>
</form>




<!-- JS (id 사용) 함수를 통해 제대로 들어갔는지 검사할 수 있다-->
이름:<input type=text id=name>
나이:<input type=text id=age>
<button onclick=btn()>이동</button>

<script>
	function btn() {
		//값 받기
		let name = document.getElementById("name").value;
		let age = document.getElementById("age").value;
		
		//넘기기
		location.href = "NewFile.jsp?myArr=" + arr+"&age="+age";
		
	}
</script>



<!-- Jquary (유효성 검사를 하면서 간단히 처리-->
 
<form id = frm >
	이름 : <input type = text name=name>
	나이 : <input type = text name=age>
	<button type=button>출력하기</button>
</form>

<script>

 $(function() {
	$('button').click(function () {
		if($('input[name=name]').val ==""){
			alert("이름을 기입해주세요")
		}else{
			$("#frm").attr("action", "NewFile.jsp");
			$("#frm").attr("target", "_blank");      //새 창 열기		
			$("#frm").submit(); 
		}		
	});
});
    
</script>
