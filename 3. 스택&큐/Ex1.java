package Algorithm;

	// Stack : First In Last Out
	// Queue : First In First Out 
	// 스택과 큐 구현해보기 

public class Ex1 {
	
	public static void main(String[] args) {
		Stack s = new Stack(5);
		s.push(1);
		s.push(2);
		s.push(3);
		s.push(4);
		s.push(5);
		System.out.println(s.pop());
		System.out.println(s.pop());
		System.out.println(s.pop());
		System.out.println(s.pop());
		System.out.println(s.pop());
		System.out.println(s.pop());

	}
}


class Stack {
	private int maxSize;
	private int top;
	private Object [] stack;

	public Stack(int maxSize) {
		this.maxSize = maxSize;
		stack = new Object[maxSize];
		top = -1;
	}

	public boolean full () {
		return maxSize -1 == top;
	}

	public boolean isEmpty () {
		return top == -1;
	}

	public void push (Object item) {
		if(full())
			System.out.println("가득 찼습니다");
		top++;
		stack[top] = item;
	}

	public Object peek () {
		if(isEmpty()) {
			System.out.println("비어있습니다");
			return null;
		}
		return stack[top];
	}

	public Object pop() {
		Object item = peek();
		top--;
		return item;
	}
}



class Queue {
	private int maxSize;
	private int front; 
	private int rear; 
	private Object [] queue;
	
	public Queue(int maxSize) {
		front = 1;
		rear = -1; 
		this.maxSize = maxSize;
		queue = new Object [maxSize];
	}
	
	public boolean full() {
		return rear == maxSize -1;
	}
	
	public boolean isEmpty() {
		return rear == -1;
	}
	
	public void push(Object item) {
		 if(full())
			 System.out.println("가득 찼습니다.");
		 rear++;
		 queue[rear] = item;
	}
	
	public Object peek() {
		if(isEmpty()) {
			System.out.println("비어있습니다.");
			return null;
		}
		return queue[front];
	}
	
	public Object pop() {
		Object item = peek();
		front ++;
		return item;
	}
	
	
}



