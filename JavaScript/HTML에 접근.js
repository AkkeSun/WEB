<!-- 단순 인풋 -->
<form mane="formNm">
 <input type="text" id="textId" name="textNm" value="123">
 <input type="text" id="textId2" name="textNm" value="456">
 <input type="button" value="GET" onclick="get()" >
</form>


<!-- 셀렉트문 -->
<form name="formNm">
 	<select name="myChoice">
		<option value="180">1번 옵션</option>
		<option value="300">2번 옵션</option>
	</select>
	<input type="button" onclick="func()">
</form>



<!-- 체크박스 -->
<form name="formNm">
 	<select id='select' name="myChoice">
		<option value="180">1번 옵션</option>
		<option value="300">2번 옵션</option>
	</select>
</form>


<script>

function get() {
	
	 // By.. 접근 시 ( 인자 '0'은 중복시 순서를 의미함 )
    document.getElementById('textId').value;
    document.getElementsByName('textNm')[0].value;	
  
    // 폼 객체의 배열로 접근할 시 
    document.forms[0].elements[0].value;
}



fuction func(){

	// select문 접근하기 (name-name)
	let choice = document.formNm.mychoice.selectedIndex; //option의 index값 구하기 
	let result = document.formNm.mychoice.options[choice].value;

}




	// chech Box 접근하기 (배열 만들어) 
	document.formId.elements[0].value;


</script>
