package Algorithm;

public class Ex2 {

	/*
	  
	 [시각]
	 00시 00분 00초부터 N시 59분 59초까지 3이 들어가는 모든 경우의 수를 구하라
	 입력 : 5  // 결과 : 11475
	 */
	
	
	
	public static boolean check(int h, int m, int s) {
		if(h%10 == 3 || m%10 == 3 || m/10 == 3 || s%10 == 3 || s/10 == 3)
			return true;
		return false;
	}	

	public static void main(String[] args) {

		int cnt = 0;
		int n = 5;
		for (int i = 0; i <= n; i++) {
			for (int j = 0; j <= 59; j++) {
				for (int k = 0; k <= 59; k++) {
					if(check(i,j,k)) cnt++;
				}
			}
		}
		System.out.println(cnt);	
	}
}
