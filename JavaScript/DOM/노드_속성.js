<script>

let ptag = document.createElement('p');                      //<p></p>
let textNode = document.createTextNode("새로운 태그");        //문자열	
ptag.appendChild(textNode);                                  //끼워넣기 <p>새로운 태그</p>


let newAttribute = document.createAttribute("style");        //속성 만들기
newAttribute.value="color:red";                              //속성값 지정
obj.setAttributeNode(newAttribute);                          //속성값 저장 

obj.setAttribute( 'href', 'https://www.codingfactory.net' ); //속성값 변경하기
obj.removeAttribute('href');                                 //속성값 지우기 

</script>



//////////////////////////////////////////////////////////////////////////




<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<!-- appendChile(뒤), insertChild(앞) -->

<div id='div1'>
	<p id='p1'>첫 번째 p태그</p>
	<p id='p2'>두 번째 p태그</p>
</div>

<button type='button' onclick="appendfunc()">뒤에추가</button>
<button type='button' onclick="insertfunc()">앞에추가</button>
<button type='button' onclick="deletefunc()">삭제</button>

<script type="text/javascript">

function appendfunc() {
	let ptag = document.createElement('p');                //<p></p>
	let textNode = document.createTextNode("새로운 태그");  //문자열
	
	ptag.appendChild(textNode);                            // <p>새로운 태그</p>
	
	let element = document.getElementById('div1');
	element.appendChild(ptag);
}


function insertfunc() {
	let h3tag = document.createElement('h3');   
	let textNode = document.createTextNode("새로운 h3 태그");  //문자열
	
	h3tag.appendChild(textNode);   
	let element = document.getElementById('div1');
	let elementBefore = document.getElementById('p2');
	
	element.insertBefore(h3tag, elementBefore);
}


function deletefunc() {
	let element = document.getElementById('div1');      // 부모노드
	let removeElement = document.getElementById('p2');  // 삭제할 자식노드
	
	element.removeChild(removeElement);                 // 부모노드를 통해 자식노드를 삭제 
	removeElement.remove();                             // 노드 개별삭제 
}


</script>

</body>
</html>
