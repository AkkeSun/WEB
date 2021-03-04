// String으로 들어오니 숫자로 받으려면 형변환해야함

 id : 중복 불가. 검사할 때 사용 (href: #) 
 name : 데이터 넘길 때 사용 (submit 접근) 
 class : css에 주로 사용 

	value값이 있으면 value로 받고
	글자를 화면에 단순 출력하려면 innerHTML로 받는다
	그게 아닌 경우(이미지를 바꾼다던가) 객채를 저장한 후에 필요값을 불러다쓴다. 
  
  /////////////////////////////////////////////////////////////
  
  <!-- text 인풋 -->
<form name="formNm">
 <input type="text" id="textId" name="textNm" value="123">
 <input type="text" id="textId2" name="textNm" value="456">
 <input type="button" value="GET" onclick="get()" >
</form>


<!-- 셀렉트문 -->
<form name="formNm" onchange='func()'>
 	<select name="myChoice">
		<option value="180">1번 옵션</option>
		<option value="300">2번 옵션</option>
	</select>
</form>


<!-- 이미지 -->
<img src='주소'>


//////////////////////////////////////////////////////


<script>

function get() {
	
	 // ID, NAME으로 접근
    document.getElementById('textId').value;
    document.getElementsByName('textNm')[0].value;	
  
		//TAG로 접근 (nodelist)
    let nodelist = document.getElementsByTagName("p");
		nodelist[index].value;
		
    // form으로 감싸있는 경우 접근 (첫번째 폼의 첫번째 요소) 
    document.forms[0].elements[0].value; 
		document.formNm.textId.value;         // formName.id(name이 하나면 name도 가능)
}



fuction func(){
	// select문 접근하기
	let index = document.formNm.mychoice.selectedIndex;    //선택한 인덱스 값 
	let result = document.formNm.mychoice.options[index].value;
}


	 // 이미지 접근하기 (src 변경하기)
	 document.image[0].src = '주소'; 


</script>
