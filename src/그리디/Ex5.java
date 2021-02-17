package Algorithm;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Ex5 {
	/*
	 [회의실 배정]
	 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대 갯수 
	 입력 : 신청한 총 인원  각각 회의 시작시간과 끝나는시각
	 11
	 1 4
  	 3 5
	 0 6
	 5 7
	 3 8
	 5 9
	 6 10
	 8 11
	 8 12
	 2 13
	 12 14
	  결과 : 4
	 */
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int index = sc.nextInt();
		int [][] arr = new int[index][2];
		
		//값 집어넣기
		for (int i = 0; i < index; i++) {
			arr[i][0] = sc.nextInt(); // 시작 시간
			arr[i][1] = sc.nextInt(); // 끝나는 시간 
		}
		sc.close();
		
		// 끝나는 순을 우선으로 정렬하기 
		// 익명클래스 : 딱 한 번 사용..! 클래스 생성과 동시에 지정 
		Arrays.sort(arr, new Comparator<int[]>() {

			@Override
			// i 값은 sort하면 자동으로 올라가니까 
			public int compare(int[] o1, int[] o2) {
				if(o1[1] == o2[1]) 
					return Integer.compare(o1[0], o2[0]);
				return Integer.compare(o1[1], o2[1]);
			}
		});
		
		
		Arrays.sort(arr);
		
		int cnt = 0;
		int end = -1;
		
		// 시작 시간이 끝나는 시간보다 느릴때만 카운트  
		for (int i = 0; i < arr.length; i++) {
			if(end < arr[i][0]) {
				end = arr[i][1];
				cnt++;
			}
		}
		System.out.println(cnt);
		
		
	} // main

} // class
