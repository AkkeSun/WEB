<!-- 단순 인풋 -->
<form mane="formNm">
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



<!-- 체크박스 -->
<form name="formNm">
	<input type="checkbox" id="language1" value="German">독일어
	<input type="checkbox" id="language2" value="France">프랑스어
	<input type="checkbox" id="language3" value="Japan">일본어
</form>

<!-- 이미지 -->
<img src='주소'>


//////////////////////////////////////////////////////


<script>

function get() {
	
	 // By직접 접근
    document.getElementById('textId').value;
    document.getElementsByName('textNm')[0].value;	
  
    // id,name 없을 때 접근 (첫번째 form의 첫번째 요소) 
    document.forms[0].elements[0].value; 
}



fuction func(){

	// select문 접근하기 (name-name 접근)
	let index = document.formNm.mychoice.selectedIndex;    // 1부터 시작 
	let result = document.formNm.mychoice.options[index].value;

}



	// chech Box 접근하기 (배열 만들어서 접근->name.요소[0]) 
	document.formNm.elements[0].value;



 // 이미지 접근하기 (src 변경하기)
 document.image[0].src = '주소'; 


</script>
