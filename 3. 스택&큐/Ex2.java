package Algorithm;

import java.util.Stack;

//포털사이트 back, front 만들기 
	
public class Ex2 {

	public static void main(String[] args) {
		
	}
	
	static Stack<String> back = new Stack<>();
	static Stack<String> front = new Stack<>();
	
	public static void addURL(String url) {
		if(front != null)
			front.clear();
		back.push(url);
	}
	
	
	public static void back() {
	   if(back != null)
		   front.push(back.pop());
	}
	
	public static void front() {
		if(front != null)
			back.push(front.pop());
	}
	
	public static void read() {
		System.out.println("현재 페이지 : " +back.peek());
		System.out.println("이전 페이지 : " +back);
		System.out.println("다음 페이지 : " +front);
	}
	

}
