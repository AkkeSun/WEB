package 구현;

import java.util.Scanner;

	/*
  	아이디어를 코드로 바꾸는 것
  	완전탐색 : 모든 경우의 수를 주저 없이 다 계산하는 방법
  	시뮬레이션 : 알고리즘을한 단계씩 차례대로 직접 수행
 	 */

public class Ex1 {
	/*
	 [상하좌우]
	 1. 여행가 A는 상하좌우로 움직일 수 있으며, 시작 좌표는 항상 (1,1)이다.
	 2. 계획서에는 L,R,U,D중 하나의 문자가 반복적으로 적혀있다. 
	 3. 정사각형 공간을 넘어가면 움직임은 무시된다.
	 4. 계획서대로 움직인 여행가의 최종 위치를 구하라  
	 
	 입력 : 3 (N값)    // R R R U D D 
	 출력 : (3, 3)
	 */
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // N을 입력받기
        int n = sc.nextInt();
        sc.nextLine(); // 버퍼 비우기
        String[] plans = sc.nextLine().split(" ");
        int x = 1, y = 1;
        for(String s : plans)
        	System.out.println(s);

        // L, R, U, D에 따른 이동 방향 
        int[] dx = {0, 0, -1, 1};
        int[] dy = {-1, 1, 0, 0};
        char[] moveTypes = {'L', 'R', 'U', 'D'};

        // 이동 계획을 하나씩 확인
        for (int i = 0; i < plans.length; i++) {
            char plan = plans[i].charAt(0);
            // 이동 후 좌표 구하기 
            int nx = -1, ny = -1;
            for (int j = 0; j < 4; j++) {
                if (plan == moveTypes[j]) {
                    nx = x + dx[j];
                    ny = y + dy[j];
                }
            }
            // 공간을 벗어나는 경우 무시 
            if (nx < 1 || ny < 1 || nx > n || ny > n) continue;
            // 이동 수행 
            x = nx;
            y = ny;
        }

        System.out.println(x + " " + y);
    }

}
