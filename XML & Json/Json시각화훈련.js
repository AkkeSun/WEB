<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>

	<table border=1 id=mytable>
		<tr>
			<th>Title</th>
			<th>Author</th>
			<th>Price</th>
		</tr>
		<tr><td></td><td></td><td></td></tr>
		<tr><td></td><td></td><td></td></tr>
		<tr><td></td><td></td><td></td></tr>
		<tr><td></td><td></td><td></td></tr>
		<tr><td></td><td></td><td></td></tr>
	</table>




	<script>
		let xhttp = new XMLHttpRequest();

		//xml 파일 호출 
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				nodeValFunc(this);
			}
		}
		xhttp.open("GET", "NewFile.xml", true);
		xhttp.send();

		function nodeValFunc(xml) {
			let title, author, price; // 태그값을 가진 객채 저장용
			let inTitle, inAuthor, inPrice; // 개별값을 따로 저장할 변수

			//초기화
			inTitle = '';
			inAuthor = '';
			inPrice = '';

			let xmlDoc = xml.responseXML;
			title = xmlDoc.getElementsByTagName("title"); //객채 저장
			author = xmlDoc.getElementsByTagName("author");
			price = xmlDoc.getElementsByTagName("price");

			//Node 갯수만큼 반복 
			for (i = 0; i < title.length; i++) {

				//변수에 값 저장
				inTitle += title[i].childNodes[0].nodeValue+",";
				inAuthor += author[i].childNodes[0].nodeValue+",";
				inPrice += price[i].childNodes[0].nodeValue+",";

		}
			//배열로 저장
			let t = inTitle.split(",");
			let a = inAuthor.split(",");
			let p = inPrice.split(",");
			alert(t.length)
			
			//테이블에 출력
			$(function() {
				for (i = 0; i < t.length; i++) {
					$('tr:eq('+(i+1)+') td:eq(0)').html(t[i]);	
					$('tr:eq('+(i+1)+') td:eq(1)').html(a[i]);	
					$('tr:eq('+(i+1)+') td:eq(2)').html(p[i]);	
				}
			});
		}
			
			
	</script>


</body>
</html>
