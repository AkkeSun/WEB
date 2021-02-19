package Algorithm;

/*

[설탕배달]
3kg 봉지와 5kg 봉지가 있다. 가장 적게 가져가는 봉은 몇 봉인가
 정확하게 N킬로그램을 만들 수 없다면 -1을 출력하라
입력 : 18  // 11  // 4
출력 : 4   // 3   //-1

*/

public class Ex2 {
	public static void main(String[] args) {
		int sugar = 4;
		int bong = 0;
		
		while(true) {
			
			// 정확하게 N킬로그램으로 안된다면 -1 출력 
			if(sugar == 1 || sugar == 2) {
				System.out.println(-1);
				break;
			}
			// 5로 나누어 떨어지면 봉지 늘리고 끝내기 
			if(sugar % 5 == 0) {
				bong += sugar / 5;
				System.out.println(bong);
				break;
			}
			// 아니라면 3을 빼고 봉지 하나 늘리기 
			else {
				sugar -= 3;
				bong++;				
			}
			
		} // while
	}
}
