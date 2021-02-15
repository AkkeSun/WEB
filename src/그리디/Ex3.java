package 그리디;

import java.util.Scanner;

public class Ex3 {

	/*
		 [1이 될 때 까지]
		 어떠한 수 N이 1이 될 때 까지 다음 두 과정 중 하나를 반복적으로 수행한다.
		 단 두번째 연산은 N이 K로 나누어 떨어질 때만 선택할 수 있다.
		 최소 횟수를 구하라
		 1. N에서 1을 뺀다
		 2. N을 K로 나눈다 
	 */

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int K = sc.nextInt();
		sc.close();
		
		int cnt = 0;
		while(true) {
			if (N == 1)
				break;
			
			if (N%K == 0) {
				N /= K;
				cnt++;
			} else {
				N--;
				cnt++;
			}
		}
		System.out.println(cnt);
	}
}