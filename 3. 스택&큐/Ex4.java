package Algorithm;

import java.util.LinkedList;
import java.util.Scanner;

public class Ex4 {
	/*
	요세푸스 문제
	1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 
	이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 
	이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 
	예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
	N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.
	 */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt(); // 인원수
		int k = sc.nextInt(); // 제거하는 순서 
		sc.close();
		
		//값 집어넣기
		LinkedList <Integer> list = new LinkedList<>();
		for (int i = 0; i < n; i++) {
			list.add(i+1);
		}
		
		System.out.print("<");
		//원을 돌리자
		while(true) {
			// k=3 일 때 두 번 움직이고 세번째 턴에 하나 죽이기 
			for (int i = 1; i < k; i++) {
				list.add(list.pollFirst()); //가장 먼저 넣은걸 가장 뒤로 뺀다  				
			}
			if(list.size() == 1) break;
			System.out.print(list.pollFirst()+", "); // 가장 먼저 들어온거 꺼내기 
		}
		System.out.print(list.pollFirst());
		System.out.println(">");
		
		

	}

}
