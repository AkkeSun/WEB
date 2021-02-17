package Algorithm;

import java.util.Arrays;
import java.util.Collections;

public class Ex4 {
	/*
	 
	 [동전의 최소갯수 구하기]
	 K원을 만드는데 필요한 동전 갯수의 최솟값을 구하라 
	 
	 */

	public static void main(String[] args) {
		Integer [] coin = {10,50,100,500};
		int money = 1250;
		int cnt = 0;
		
		Arrays.sort(coin, Collections.reverseOrder());
		
		for (int i = 0; i < coin.length; i++) {
			cnt += money / coin[i];
			money %= coin[i];
		}
		
		System.out.println(cnt);
	
	}
}
