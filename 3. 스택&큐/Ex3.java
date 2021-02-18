package Algorithm;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Scanner;

public class Ex3 {
	/*
	 N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 
	 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.
	  이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 
	  우선, 제일 위에 있는 카드를 바닥에 버린다. 
	  그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
	  제일 마지막에 남는 카드는?
	  입력 : 5 / 결과 : 2
	 */
	
	public static void main(String[] args) {
		Deque <Integer> list = new LinkedList<>();
		
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		sc.close();
		
		// 값 집어넣기 
		for (int i = 0; i < n; i++) {
			list.add(n-i);
		}
		
		System.out.println(list);
		while(true) {
			
			list.pollLast(); // 맨 앞장(마지막에 넣은 카드) 버린다 
			list.addFirst(list.pollLast()); //맨 앞에 있는 카드를 맨 뒤로 넣는다 
			// 카드가 한 장 남으면 멈춘다. 
			if(list.size() == 1)
				break;
		}
		System.out.println(list.peek());
	}

}
