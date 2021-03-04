//////////////////////////입력 가능한 테이블 만들기 //////////////////////


<table border=1>
	<caption>단가x수량 일람표</caption>
	<tr>
		<th>개수</th>
		<th>제품 A</th>
		<th>제품 B</th>
		<th>상품 C</th>
	</tr>
	<tbody id=tb ></tbody>
	

</table>

<script>
	function rowAdd(){
		let low=document.all['tb'].insertRow();
		
		let num=low.insertCell();
		num.innerHTML = "<input type='text' size=1 id='row_num' name='row_num' >";

		let pa=low.insertCell();
		pa.innerHTML = "<input type='text' size=2 id='row_pa' name='row_pa' >";
		
		let pb=low.insertCell();
		pb.innerHTML = "<input type='text' size=2 id='row_pb' name='row_pb' >";
		
		let pc=low.insertCell();
		pc.innerHTML = "<input type='text' size=2 id='row_pc' name='row_pc' >";
	}

</script>

/////////////////////////////////규칙있는 테이블 만들기////////////////////////

<script>

	document.write("<table border=1>")
	document.write("<caption>단가x수량 일람표</caption>")
	document.write("<tr>");
	document.write("<th>개수</th>");
	document.write("<th>제품 A</th>");
	document.write("<th>제품 B</th>");
	document.write("<th>상품 C</th>");
	document.write("</tr>");
	
	let num=1;
	let pA=300;
	let pB=450;
	let pC=520;
	
	for (i = 0; i < 10; i++) {
		let inputNum=num+i;
		let inputPA=pA*(i+1);
		let inputPB=pB*(i+1);
		let inputPC=pC*(i+1);
	
		document.write("<tr>");
		document.write("<th>");
		document.write(inputNum);				
		document.write("</th>");
		document.write("<td>");
		document.write(inputPA+"원");				
		document.write("</td>");
		document.write("<td>");
		document.write(inputPB+"원");				
		document.write("</td>");
		document.write("<td>");
		document.write(inputPC+"원");				
		document.write("</td>");
		document.write("</tr>");
	}
		document.write("</table>");

</script>

////////////////////////////규칙없는 테이블 만들기////////////////////////////////

<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h3>단가 x 수량 일람표</h3>

<table border="1" id="mytable">
<tr>
	<th>갯수</th><th>제품 A</th><th>제품 B</th><th>제품 C</th>
</tr>
</table>

<script type="text/javascript">
let a = 300;
let b = 450;
let c = 520;

// 파일 불러오기
let arrA = [ 23, 45, 11, 36, 27 ];
let arrB = [ 31, 29, 73, 12, 78 ];
let arrC = [ 36, 28, 33, 12, 85 ];


let table = document.getElementById('mytable');

for(i = 0;i < arrA.length; i++){

	let tr = document.createElement("tr");
	
	let th = document.createElement("th");
	th.appendChild( document.createTextNode( (1 + i) + "") );
	
	let td1 = document.createElement("td");
	td1.appendChild( document.createTextNode( arrA[i] + "") );
	
	let td2 = document.createElement("td");
	td2.appendChild( document.createTextNode( arrB[i] + "") );
	
	let td3 = document.createElement("td");
	td3.appendChild( document.createTextNode( arrC[i] + "") );
	
	tr.appendChild(th);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	
	table.appendChild(tr);

}

</script>


</body>
</html>
