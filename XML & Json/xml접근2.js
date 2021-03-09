<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<p id="demo"></p>

<script type="text/javascript">

//객채 생성
let xhttp = new XMLHttpRequest();

//xml 파일 호출 
xhttp.onreadystatechange = function () {	
	if(this.readyState == 4 && this.status == 200){
		nodeValFunc( this );
		nodeNameFunc( this );
		childNodeFunc( this );
	}	
}
xhttp.open("GET", "member.xml", true);  //열고자 하는 xml 파일 선택
xhttp.send();                           //xml 파일에서 정보 내보내기



//노드 값 가져오기
function nodeValFunc( xml ) {
	let num, name;   // 태그값을 가진 객채 저장용
	let numtxt, nametxt; // 개별값을 따로 저장할 변수
	let xmlDoc;      // responseXML을 불러다 쓸 변수

	//초기화
	txt = ''; 
  numtxt = '';
	
	xmlDoc = xml.responseXML; 
	num = xmlDoc.getElementsByTagName("번호");  //객채 저장
	name = xmlDoc.getElementsByTagName("이름");
	
	for (i = 0; i < num.length; i++) {
		//변수에 하나씩 쌓아나가기 
		numtxt += num[i].childNodes[0].nodeValue + "<br>";      
		nametxt += name[i].childNodes[0].nodeValue + "<br>";
                       //0으로 고정
	  // numtxt = num[0].childNodes[0].nodeValue; // 1
    // numtxt = num[1].childNodes[0].nodeValue; // 2
	}

 
	//최종 출력
	document.getElementById("demo").innerHTML = numtxt + nametxt;	
}



// 노드이름 가져오기 <고객>
function nodeNameFunc( xml ) {
	let arr, xmlDoc, txt;
	txt = "";
	
	xmlDoc = xml.responseXML;
	arr = xmlDoc.documentElement.childNodes;
	
	for (i = 0; i < arr.length; i++) {
		//노드값이 있다면 
		if(arr[i].nodeType == 1){
			txt += arr[i].nodeName + "<br>";
		}
	}
	
	document.getElementById("demo").innerHTML = txt;	
}



// 노드이름 가져오기 <고객의 child Node>
function childNodeFunc( xml ) {
	let arr, xmlDoc, txt;
	txt = "";
	
	xmlDoc = xml.responseXML;
	
	//큰 child node를 한 번 거쳐서 간다
	arr = xmlDoc.getElementsByTagName("고객")[0];
	let len = arr.childNodes.length;
	let fchild = arr.firstChild; // 첫 번째 노드명의 객채 저장
	
	for(i = 0;i < len; i++){
		if(fchild.nodeType == 1){
			txt += i + " " + fchild.nodeName + "<br>";			
			
		}		
		fchild = fchild.nextSibling;
	}
	document.getElementById("demo").innerHTML = txt;
}


</script>

</body>
</html>

	<!-- 
		readyState : 준비상태
	 	0 -> open Method 시행 전에 실행
	 	1 -> loading 중 ...
		2 -> loading 완료
		3 -> Server 처리중
	 	4 -> Server 처리완료
	 
	 	status : 상태
	 	200 -> success
	 	403 -> 접근 금지
	 	404 -> 못찾겠음 (보통 파일명 틀릴 때 발생)
	 	500 -> 문법 틀림		
	 -->
