/*

DFS : 깊이 우선 탐색
  1. 방문한 곳을 체크한 후 출력
  2. 현재 노드와 연결된 다른 노드를 재귀적으로 방문(작은것부터)
  
DFS : 너비 우선 탐색
  1. 첫번째 노드를 큐에 저장 후 방문처리
  2. 제일 앞의 노드를 변수에 저장한 후 출력
  3. 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 저장후 방문처리
  
*/

public class Ex1 {
	
	public static boolean [] visited = new boolean[9];
	//tree 구조는 2중 list로 표현한다. 
	public static ArrayList <ArrayList<Integer>> graph = new ArrayList<>();
	
	public static void dfs(int x) {
		//현재 노드를 방문처리 
		visited[x] = true;
		System.out.print(x + " ");
		   //현재 노드와 연결된 다른 노드를 재귀적으로 방문 (작은것부터 순차적으로)
	       for (int i = 0; i < graph.get(x).size(); i++) {
	            int y = graph.get(x).get(i); 
	            if (!visited[y]) dfs(y); 
		}
	}
	
	  public static void bfs(int start) {
	        Deque<Integer> q = new LinkedList<>();
	        q.add(start);
	        // 현재 노드를 방문 처리
	        visited[start] = true;
	        // 큐가 빌 때까지 반복
	        while(!q.isEmpty()) {
	            // 큐에서 하나의 원소를 뽑아 출력
	            int x = q.pollFirst();
	            System.out.print(x + " ");
	            // 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
	            for(int i = 0; i < graph.get(x).size(); i++) {
	                int y = graph.get(x).get(i);
	                if(!visited[y]) {
	                    q.add(y);
	                    visited[y] = true;
	                }
	            }
	        }
	  }
	
	
	
	public static void main(String[] args) {
		
	     // 그래프 초기화
        for (int i = 0; i < 9; i++) {
            graph.add(new ArrayList<Integer>());
        }
        
        
        // 노드 1에 연결된 노드 정보 저장 
        graph.get(1).add(2);
        graph.get(1).add(3);
        graph.get(1).add(8);
        
        // 노드 2에 연결된 노드 정보 저장 
        graph.get(2).add(1);
        graph.get(2).add(7);
        
        // 노드 3에 연결된 노드 정보 저장 
        graph.get(3).add(1);
        graph.get(3).add(4);
        graph.get(3).add(5);
        
        // 노드 4에 연결된 노드 정보 저장 
        graph.get(4).add(3);
        graph.get(4).add(5);
        
        // 노드 5에 연결된 노드 정보 저장 
        graph.get(5).add(3);
        graph.get(5).add(4);
        
        // 노드 6에 연결된 노드 정보 저장 
        graph.get(6).add(7);
        
        // 노드 7에 연결된 노드 정보 저장 
        graph.get(7).add(2);
        graph.get(7).add(6);
        graph.get(7).add(8);
        
        // 노드 8에 연결된 노드 정보 저장 
        graph.get(8).add(1);
        graph.get(8).add(7);

        dfs(1);
        bfs(1);
    }
}
