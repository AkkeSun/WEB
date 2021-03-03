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
		let name = document.getElementById("name").value;
		let age = document.getElementById("age").value;
		location.href = "NewFile.jsp?name=" + name + "&age="+age;
	}
</script>


////////////////////////////////////////////////////

<h3>여기는 NewFile.jsp 입니다</h3>

<%
//scriptlet (자바 코드 영역)
//내장객채 사용 : 객채 생성안해도 사용가능 

//무조건 String으로 입력받는다 
String name = request.getParameter("name"); 
int age = Integer.parseInt(request.getParameter("age")); 

//두개 이상의 값을 받을 때는 배열로 받는다 (check box)
String [] lang = request.getParameterValues("language");  

//web에 표현(System넣으면 콘솔에 표현)
out.println("이름 : " +name);
out.println("나이 : " +age);
%>
