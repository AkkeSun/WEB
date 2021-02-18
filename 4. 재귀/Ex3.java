package Algorithm;

public class Ex3 {
	/* 하노이 탑 
	 * 
		1. 세 개의 기둥이 있고 탑은 첫 번째 기둥에 순서대로 쌓여있다. 
		2. 탑을 세 번째 기둥에 옮긴다.
		3. 단 탑은 언제나 큰 것이 가장 밑에 있다
		4. 총 이동횟수와 옮긴 과정을 출력하라 (from A to B) 
		입력 : 3 
		출력 : 이동횟수 : 7
			   이동경로 : 1 3 1 2 3 2 1 3 2 1 2 3 1 3  

	 */

	public static void main(String[] args) {
		int n = 3;
		hanoi(n, 1, 2, 3);
		System.out.println("이동횟수 : " + cnt);
		System.out.println("이동경로 : " + sb);

	}
	
	static StringBuffer sb = new StringBuffer();
	static int cnt = 0;
	static void hanoi (int n, int from, int by, int to) {
		cnt++;
		
		// 딱 하나 남았으면 1 -> 3
		if (n == 1)
			sb.append(from + " " + to + " ");
		else {
			// 1,2층  빼고 1 -> 2
			hanoi(n-1, from, to, by);  
			// 2층 1 -> 3 
			sb.append(from + " " + to + " ");
			// 나머지 2 -> 3 
			hanoi(n-1, by, from, to);
		}
	}
	
	
	
	
	
}
