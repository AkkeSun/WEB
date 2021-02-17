package Algorithm;

import java.util.Scanner;

public class Ex3 {
	/*

  	[왕실의 나이트]
    1. 수평 (a~h), 수직 (1~8)로 이루어진 체스판이 있다.
    2. 나이트는 두 가지 방법으로만 움직일 수 있다.
     -> 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동
     -> 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동 
    3. 체스판을 넘어갈 수는 없다.
    4. 나이트의 위치가 주어졌을 때 이동할 수 있는 모든 경우의 수를 구하라 
    
    입력 : C2 // 결과 : 6

	 */
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 현재 나이트의 위치 입력받기
        String inputData = sc.nextLine();
        int row = inputData.charAt(1) - '0';
        int column = inputData.charAt(0) - 'a' + 1;
        sc.close();
        
        // 나이트가 이동할 수 있는 8가지 방향 정의
        int[] dx = {-2, -1, 1, 2, 2, 1, -1, -2};
        int[] dy = {-1, -2, -2, -1, 1, 2, 2, 1};

        // 8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
        int result = 0;
        for (int i = 0; i < 8; i++) {
            // 이동하고자 하는 위치 확인
            int nextRow = row + dx[i];
            int nextColumn = column + dy[i];
            // 해당 위치로 이동이 가능하다면 카운트 증가
            if (nextRow >= 1 && nextRow <= 8 && nextColumn >= 1 && nextColumn <= 8) {
                result++;
            }
        }

        System.out.println(result);
		
	}
}
