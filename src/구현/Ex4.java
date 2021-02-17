package Algorithm;

import java.util.Scanner;

/*

[게임개발]
N X M 크기의 작사각형 맵 
각각의 칸은 육지(0) 혹은 바다(1)이며 캐릭터는 육지만 갈 수 있다. 
북(0), 동(1), 남(2), 서(3)
캐릭터가 위치하는 곳 가장 끝 = (0,0)
1. 왼쪽 방향으로 회전한다.
2. 왼쪽 방향에 가보지 않은 칸이 존재한다면 전진한다.
3. 네 방향 어디도 갈 수 없다면 바라보는 방향을 유지한 채로 뒤로 한칸 간다. 
4. 뒷편이 바다라면 멈춘다.

캐릭터가 방문한 칸의 수를 구하시오
입력 : 4 4      N, M 값
 1 1 0    시작위치, 바라보는 방향
 1 1 1 1  맵의 정보(육지, 바다) 
 1 0 0 1
 1 1 0 1
 1 1 1 1 

 */

public class Ex4 {

	public static int direction;


	// 왼쪽으로 회전
	public static void turn_left() {
		direction --;
		if (direction == -1) direction = 3;
	}


	public static void main(String[] args) {
		int n, m, x, y;
		// 북, 동, 남, 서 방향 정의
		int dx[] = {-1, 0, 1, 0}; // 열
		int dy[] = {0, 1, 0, -1}; // 행 
		
		Scanner sc = new Scanner(System.in);

		n = sc.nextInt();
		m = sc.nextInt();
		x = sc.nextInt(); // 현재좌표
		y = sc.nextInt(); // 현재좌표
		direction = sc.nextInt();

		
		boolean [][] visit = new boolean[n][m];
		int[][] map = new int [n][m];
		visit[x][y] = true; // 현재 좌표 방문 처리

		
		// 전체 맵 정보를 입력 받기
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				map[i][j] = sc.nextInt();
			}
		}
		sc.close();

		// 시뮬레이션 시작
		int cnt = 1;
		int turn_time = 0;
		while (true) {
			// 왼쪽으로 회전
			turn_left();
			int nx = x + dx[direction];
			int ny = y + dy[direction];
			// 회전한 이후 정면에 가보지 않은 칸이 존재하는 경우 이동
			if (visit[nx][ny] == false && map[nx][ny] == 0) {
				visit[nx][ny] = true;
				x = nx;
				y = ny;
				cnt += 1;
				turn_time = 0;
				continue;
			}
			// 회전한 이후 정면에 가보지 않은 칸이 없거나 바다인 경우
			else turn_time += 1;
			// 네 방향 모두 갈 수 없는 경우
			if (turn_time == 4) {
				nx = x - dx[direction];
				ny = y - dy[direction];
				// 뒤로 갈 수 있다면 이동하기
				if (map[nx][ny] == 0) {
					x = nx;
					y = ny;
				}
				// 뒤가 바다로 막혀있는 경우
				else break;
			}
		}

		System.out.println(cnt);
	}
}
