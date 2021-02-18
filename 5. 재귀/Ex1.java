package Algorithm;
	 /*
	  
	  재귀함수 : 원하는 값이 충족될 때 까지 자기 자신을 호출하여 계산하는 것
	 [펙토리얼]
	 factorial 5 = 5 * 4 * 3 * 2 * 1
	  입력 : 5 / 출력 : 120
	  
	  */
public class Ex1 {

	public static void main(String[] args) {
		System.out.println(factorial(5));

	}
	
	static int factorial (int num) {
		if (num ==1) return 1;
		return num * factorial(num-1);
	}

}
