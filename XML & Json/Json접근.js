Node가 두 개 이상이면 무조건 배열로 접근한다!!!!!


<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<p id='demo'></p>
<script>
// Json 데이터 직접 만들기

let jsonData = [
					{ 
						"name" :"홍길동",
						"age":16
					},
					{ 
						"name" :"성춘향",
						"age":16
					},
					{ 
						"name" :"일지매",
						"age":16
					}
				];

//접근 : Node가 두 개 이상이면 무조건 배열로 접근 (index or Key)
document.getElementById('demo').innerHTML = jsonData[1].name + " " + jsonData[1].age;







//형변환 
let arrText = '{ "name":"홍길동", "age":24, "address":"서울시" }'; //따옴표가 있으므로 문자열이다. 
let jsonObj = JSON.parse(arrText);    // String -> Json
let strObj = JSON.stringify(jsonObj); // Json -> String
document.getElementById('demo').innerHTML = jsonObj.address;








//외부 JSON 파일 불러다 쓰기 
let xhttp = new XMLHttpRequest(); //객채생성
xhttp.onreadystatechange = function () {
	if(xhttp.readyState == 4 && xhttp.status == 200){
		jsonFunc(this.responseText); //xhttp.responseText (text로 가져오기)
	}
}
xhttp.open("GET", "data.json", true);
xhttp.send();


function jsonFunc( respText ) {
		let json = JSON.parse(respText); // String -> Json
		let txt = "";
		//alert(json.length); //node 갯수
	

		//////////////  1번 방법   //////////////////
		
		for(i=0; i<json.length; i++){
		 txt += json[i].name+ " " +
		        json[i].age + " " +
		        json[i].address + " " +
		        json[i].height + "<br>";
		}	
		document.getElementById('demo').innerHTML = txt;

			
		
		//////////////  2번 방법   //////////////////
		
		for(i=0; i<json.length; i++){ // 배열 길이만큼 반복 
			for(key in json[i]){ 	  // 키값만 받아오기 
				txt += json[i][key];  // 실제 값을 받아오기 K:V 는 인덱스가 K값이다.
			}
			txt += "<br>";
		}
		document.getElementById('demo').innerHTML = txt;	
}		
		

</script>


</body>
</html>
