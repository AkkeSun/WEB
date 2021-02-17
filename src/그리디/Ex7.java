package Algorithm;

public class Ex7 {
		/*
		 
		 [설탕배달]
		 3kg 봉지와 5kg 봉지가 있다. 가장 적게 가져가는 봉은 몇 봉인가
		  봉지를 만들 수 없으면 -1을 출력하라
		 
		 */
	
	public static void main(String[] args) {
		int sugar = 20;
		int bong = 0;
		
		while(true) {
			if(sugar % 5 == 0) {
				bong = sugar/5;
				System.out.println(bong);
				break;
			}
			sugar -= 3;
			bong++;
		}			
	}
}
