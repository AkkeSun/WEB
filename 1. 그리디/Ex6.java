package Algorithm;
	/*
	  
	 [잃어버린 괄호]
	 임의로 괄호를 쳐서 가질 수 있는 최소값을 구하라 
	 
	 입력 : 55-50+40
	 출력 : -35
	 
	 */

public class Ex6 {

	public static void main(String[] args) {
		String input = "55-50+40";
		String [] arr1 = input.split("-"); // -를 기준으로 나눈 값
		String [] arr2 = null;             // +를 기준으로 나눈 값
		int result = 0;                    // 최종 계산값
		
		for (int i = 0; i < arr1.length; i++) 
			arr2 = arr1[i].split("[+]");
		
		// 첫 값은 양수이므로 더해준다
		result += Integer.parseInt(arr1[0]); 
		
		// 나머지는 전부 빼준다 
		for (int i = 0; i < arr2.length; i++) 
			result -= Integer.parseInt(arr2[i]);
		
		System.out.println(result);
	}
}
