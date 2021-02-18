package 그리디;

import java.util.Scanner;

public class Ex2 {
	/*
	
	 [숫자카드게임]
	 여러 개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한 장을 뽑는 게임 
	 1. 가로[M], 세로[형태로 숫자가 주어진다
	 2. 먼저 [M]을 선택한다. 
	 3. 선택한 [M] 중 가장 낮은 카드를 뽑아야한다. 
	 4. 뽑은 카드들 중 가장 큰 카드를 가진 사람이 승리한다.
	 5. 승리한 사람의 카드는 무엇인가 
	 
	 입력 : 3,3   1 2 5 2 1 2 4 5 3
	 결과 : 3
	
	 */

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		// N, M을 공백을 기준으로 구분하여 입력 받기
		int n = sc.nextInt(); //3
		int m = sc.nextInt(); //3
		int result = 0;

		// 한 줄씩 입력 받아 확인하기
		for (int i = 0; i < n; i++) { 
			// 현재 줄에서 '가장 작은 수' 찾기
			int min_value = 10001; // 초기화
			for (int j = 0; j < m; j++) { 
				int x = sc.nextInt(); 
				min_value = Math.min(min_value, x);
			}
			// '가장 작은 수'들 중에서 가장 큰 수 찾기
			result = Math.max(result, min_value);
		}
		
		sc.close();
		
		System.out.println(result); // 최종 답안 출력
	}

}
