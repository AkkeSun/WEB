package hello;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import dto.CustDto;
import net.sf.json.JSONObject;


public class HelloServlet extends HttpServlet {

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


		//ajax로 보낼 때 사용하는 바구니
		JSONObject jObj = new JSONObject();
		resp.setContentType("applictaion/x-json; charset=UTF-8"); //한글 안깨지게 맞춰주기


		// String 날리기
		String str = "world";
		jObj.put("str", str);         // 담기 (name, obj)  
		resp.getWriter().print(jObj); // 날리기 
		

		//map 날리기 (한꺼번에 넘기기!!!!)
		HashMap<String, Object> map = new HashMap<>();
		map.put("title", "제목입니다");
		map.put("tcontent", "내용입니다");
		jObj.put("map", map);
		esp.getWriter().print(jObj); // 날리기 

		
		
		// list 날리기 (with map)
		HashMap<String, Object> map = new HashMap<>();
		List<CustDto> list = new ArrayList<>();
		list.add(new CustDto("abc", "홍길동"));
		list.add(new CustDto("bcd", "성춘향"));
		map.put("custlist", list);         // map에 list 담기 
		jObj.put("map", map);              // 바구니에 map 담기
		resp.getWriter().print(jObj);      // 날리기
	}

}
