package com.asiainfo.requirement.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.asiainfo.requirement.entity.Issue;
import com.asiainfo.requirement.service.ReqService;

@Controller
@RequestMapping(value="findList")
public class JiraReqController {
	
	static String[] nsg1 = {"北京电信","北京移动","北京联通","天津","辽宁","湖北","湖南","贵州","云南","陕西","内蒙","青海","山东","新疆","西藏","山西","宁夏"};
	static String[] nsg2 = {"安徽","江苏","广东","福建","海南","江苏广电"};
	static String[] nsg3 = {"移动总部","联通总部","电信总部","吉林","甘肃","广西","移动研究院 ","杭研","河北广电","中移在线","重庆物联网","国家发改委——北京项目",
			"浙江","江西","上海","河南","河北","四川","重庆","重庆机场","北京机场","铁塔","北京声学研究所","CNcert"};
	static String[] nsg4 = {"黑龙江","贵阳市人民政府","北京泰策科技有限公司","北京信长城技术研究院","其它政企和公安市场等"};
	
	static String n1 = "支持一部";
	static String n2 = "支持二部";
	static String n3 = "支持三部";
	static String n4 = "支持四部";
	static String n5 = "其他";
	
	@Autowired
	private ReqService rs;
	
	@RequestMapping(value="/getReqList")
	public String productDownloadIndex1(Model model, HttpServletRequest req) throws Exception
		{
			return "main/reqList";
		}
	
	@RequestMapping(value = "/getNeeds", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String getNeeds(Model model, HttpServletResponse res)
			throws Exception
		{
			
			List<Issue> issueList2 = new ArrayList<>();
			List<Issue> issueList = new ArrayList<>();
	
			List<String> pro = rs.getProjectKey();
			for (int i = 0; i<pro.size(); i++)
			{
				String p = pro.get(i);
				int sumNeeds = 0;
				long sumTime = 0L;
				int countP = 0;
				String sup="";
				issueList.removeAll(issueList);
	
				List<String> components = rs.getIssueComponentsByPro(p);
				Issue issue;
				for (int j = 0;j<components.size();j++ )
				{
					String c = components.get(j);
					issue = new Issue();
					
					List<String> cost = rs.getCostByComAndPro(c, p);
					double costTime = getCostTime(cost);
					List<Issue> issues = rs.getIssueByComAndPro(c, p);
					sumTime = getsumTime(issues);
					sumNeeds = rs.getListByComAndPro(c, p);
					sup = getSupport(c);
					
					
					issue.setIssueComponents(c);
					issue.setSup(sup);
					issue.setCostTime(Double.valueOf(costTime));
					issue.setProjectKey(p);
					issue.setSumNeeds(Integer.valueOf(sumNeeds));
					issue.setSumTime(Long.valueOf(sumTime));
					
					issueList.add(issue);
				}
				
				for(Issue is:issueList) {
					if (is.getSup()=="支持一部") {
						countP++;
						is.setCountP(countP);
						issueList2.add(is);
					}
				}
				for(Issue is:issueList) {
					if (is.getSup()=="支持二部") {
						countP++;
						is.setCountP(countP);
						issueList2.add(is);
					}
				}
				for(Issue is:issueList) {
					if (is.getSup()=="支持三部") {
						countP++;
						is.setCountP(countP);
						issueList2.add(is);
					}
				}
				for(Issue is:issueList) {
					if (is.getSup()=="支持四部") {
						countP++;
						is.setCountP(countP);
						issueList2.add(is);
					}
				}
				for(Issue is:issueList) {
					if (is.getSup()=="其他") {
						countP++;
						is.setCountP(countP);
						issueList2.add(is);
					}
				}
	
			}
	
			String json = JSON.toJSONString(issueList2);
			res.setContentType("text/json");
			res.setCharacterEncoding("UTF-8");
			res.addHeader("Access-Control-Allow-Origin", "*");
			return json;
	}
	
	@RequestMapping(value = "/month", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String monthNeeds(HttpServletResponse res) throws ParseException
	{
		String mon = "";
		String mon1 = "";
		List<Issue> monList = new ArrayList<>();
		List<String> month = getMonthBetween("2018/10");
		
		for (int i = 0; i < month.size(); i++) {
			mon = month.get(i);
			mon1 = monthFormat(mon);
			Issue is = new Issue();
			Integer sumMon = rs.getMonNees(mon);
			List<String> il = rs.getMonCost(mon);
			
			Integer monPub1 = rs.getMonPublish1(mon1);
			Integer monPub2 = rs.getMonPublish2(mon1);
			
			Integer monPub = monPub1+monPub2;
			
			double monCost = getCostTime(il);
			is.setMonSum(sumMon);
			is.setCostTime(monCost);
			is.setMonth(mon);
			is.setMonPub(monPub);
			monList.add(is);
		}

		String json = JSON.toJSONString(monList);
		res.setContentType("text/json");
		res.setCharacterEncoding("UTF-8");
		res.addHeader("Access-Control-Allow-Origin", "*");
		return json;
	}
	
	@RequestMapping(value = "/monSum", produces = "application/json; charset=utf-8")
	@ResponseBody
	public String monthSum(HttpServletResponse res) throws ParseException
	{
		String mon = "";
		List<Issue> monList = new ArrayList<>();
		List<String> month1 = getMonthBetween("2018/12");
		
		for(int i=0;i<month1.size();i++) {
			Issue is = new Issue();
			int totalN = 0;
			double totalC = 0;
			String end = month1.get(i);
			List<String> month2 = getMonthBetween2(end);
			for (int j = 0; j < month2.size(); j++) {
					mon = month2.get(j);
					Integer sumMon = rs.getMonNees(mon);
					List<String> il = rs.getMonCost(mon);
					double monCost = getCostTime(il);
					totalN += sumMon;
					totalC += monCost;
			}
			
			is.setTotalN(totalN);
			is.setTotalC(totalC);
			is.setMonth(end);
			monList.add(is);
		}		

		String json = JSON.toJSONString(monList);
		res.setContentType("text/json");
		res.setCharacterEncoding("UTF-8");
		res.addHeader("Access-Control-Allow-Origin", "*");
		return json;
	}

	public static double getCostTime(List<String> cost)
	{
		List<Double> cos = new ArrayList<>();
		for (int i = 0; i < cost.size(); i++)
		{
			String str = (String)cost.get(i);
			if (str != null && str != "" && str.length() >= 1)
			{
				char str1 = str.charAt(str.length() - 1);
				if (str1 == 'd')
				{
					str = str.substring(0, str.length() - 1);
					cos.add(Double.parseDouble(str));
				} else
				if (str1 == 'w')
				{
					str = str.substring(0, str.length() - 1);
					cos.add(Double.parseDouble(str)*7);
				} else
				{
					cos.add(Double.parseDouble(str));
				}
			} else
			{
				cos.add(0.0);
			}
		}

		double costTime = 0.0;
		for (int i = 0; i < cos.size(); i++)
			costTime += cos.get(i);

		return costTime;
	}

	public static long getsumTime(List<Issue> issues)
		throws Exception
	{
		long sumTime = 0;
		for (int i=0;i<issues.size();i++)
		{
			Issue is = issues.get(i);
			String crTime = is.getCreatetime();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
			long time;
				time = System.currentTimeMillis() - sdf.parse(crTime).getTime();
			sumTime += time / (1000*60*60*24);
		}

		return sumTime / issues.size();
	}

		
	public static String getSupport(String com) {
		
		
		for (int i = 0; i < nsg1.length; i++) {
			if (com.contains(nsg1[i])) {				
				return n1;
			}
		}
		for (int i = 0; i < nsg2.length; i++) {
			if (com.contains(nsg2[i])) {				
				System.out.println(n2);
				return n2;
			}
		}
		for (int i = 0; i < nsg3.length; i++) {
			if (com.contains(nsg3[i])) {				
				System.out.println(n3);
				return n3;
			}
		}
		for (int i = 0; i < nsg4.length; i++) {
			if (com.contains(nsg4[i])) {				
				System.out.println(n4);
				return n4;
			}
		}
		
		return n5;
	}
	
	private static List<String> getMonthBetween(String start) throws ParseException {
	      ArrayList<String> result = new ArrayList<String>();
	      SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM");//格式化为年月
     
	      Calendar min = Calendar.getInstance();
	      Calendar max = Calendar.getInstance();
	      
	      Date date = max.getTime();
	  
	      min.setTime(sdf.parse(start));
	      min.set(min.get(Calendar.YEAR), min.get(Calendar.MONTH), 1);
	  
	      max.setTime(date);
	      max.set(max.get(Calendar.YEAR), max.get(Calendar.MONTH), 2);
	  
	      Calendar curr = min;
	      while (curr.before(max)) {
	       result.add(sdf.format(curr.getTime()));
	       curr.add(Calendar.MONTH, 1);
	      }
	      
//	      result.remove(result.size()-1);
	      
	      return result;
	    }
	
	private static List<String> getMonthBetween2(String end) throws ParseException {
	      ArrayList<String> result = new ArrayList<String>();
	      SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM");//格式化为年月
	      String start = "2018/01";
   
	      Calendar min = Calendar.getInstance();
	      Calendar max = Calendar.getInstance();
	      
	  
	      min.setTime(sdf.parse(start));
	      min.set(min.get(Calendar.YEAR), min.get(Calendar.MONTH), 1);
	  
	      max.setTime(sdf.parse(end));
	      max.set(max.get(Calendar.YEAR), max.get(Calendar.MONTH), 2);
	  
	      Calendar curr = min;
	      while (curr.before(max)) {
	       result.add(sdf.format(curr.getTime()));
	       curr.add(Calendar.MONTH, 1);
	      }	      
	      return result;
	    }
	
	private static String monthFormat(String start) throws ParseException {
	      SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM");//格式化为年月
	      SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM");
	      Calendar min = Calendar.getInstance();	  
	  
	      min.setTime(sdf.parse(start));  
	      return sdf2.format(min.getTime());
	}
	
}
