<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
// ajax에서 값 받기
String name = request.getParameter("v1"); 
int age = Integer.parseInt(request.getParameter("v2")); 
String birth = request.getParameter("v3"); 

String json = "{ \"name\":\"" + name + "\", \"age\":" + age 
				+ ",\"birth\":\"" + birth + "\" }";
				
//json형식의 String File을 만들어서 web에 출력한다
out.println(json);
%>
