<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

<p id='demo'>p tag</p>
<script>

//xml에 넣을 문자열
let xmltext = "<bookstore>" +               /* root tag */
				 "<book>" +                 /* node */
					 "<title>탈무드</title>" +
				 	 "<auther>man</auther>" +
				 	 "<year>2001</year>" +
				 "</book>" +
			 	 "<book>" +                 
				 	 "<title>이솝이야기</title>" +
				  	 "<auther>woman</auther>" +
				 	 "<year>2004</year>" +
				 "</book>" +
				"</bookstore>";


//xml파일로 바꿔주기
let parser, xmlDoc;
parser = new DOMParser();
xmlDoc = parser.parseFromString(xmltext, 'text/html');


//xml 값을 꺼내는 방법
document.getElementById('demo').innerHTML
	= xmlDoc.getElementsByTagName('book')[0].childNodes[0].nodeName; //title
	= xmlDoc.getElementsByTagName('book')[0].childNodes[1].nodeName; //author

	= xmlDoc.getElementsByTagName('book')[0].childNodes[0].childNodes[0].nodeValue; //탈무드	
	= xmlDoc.getElementsByTagName('book').length; // 2
	= xmlDoc.getElementsByTagName('book')[0].childNodes.length; //3
	
</script>

</body>
</html>
