package Algorithm;
/*
      [피보나치수열] 
      1부터 시작하는 피보나치수열의 값을 구하기 
           입력 : 10 / 출력 : 55
       1 1 2 3 5 8 13
 */

public class Ex2 {
	public static void main(String[] args) {
		
		System.out.println(fibo(10));
		
	}
	static int fibo (int num) {
		if (num==1 || num==2) return 1;
		return fibo(num-1) + fibo(num-2);
	}

}
