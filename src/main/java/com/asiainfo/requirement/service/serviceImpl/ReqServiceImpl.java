package com.asiainfo.requirement.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asiainfo.requirement.entity.Issue;
import com.asiainfo.requirement.dao.ReqDao;
import com.asiainfo.requirement.service.ReqService;

@Service
@Transactional
public class ReqServiceImpl implements ReqService {
	
	@Autowired
	private ReqDao rd;
	
	@Override
	public List<String> getIssueComponentsByPro(String p) {
		// TODO Auto-generated method stub
		return rd.getIssueComponentsByPro(p);
	}

	@Override
	public List<String> getProjectKey() {
		// TODO Auto-generated method stub
		return rd.getProjectKey();
	}

	@Override
	public List<String> getCostByComAndPro(String c, String p) {
		// TODO Auto-generated method stub
		return rd.getCostByComAndPro(c,p);
	}

	@Override
	public List<Issue> getIssueByComAndPro(String c, String p) {
		// TODO Auto-generated method stub
		return rd.getIssueByComAndPro(c,p);
	}

	@Override
	public Integer getListByComAndPro(String c, String p) {
		// TODO Auto-generated method stub
		return rd.getListByComAndPro(c,p);
	}

	@Override
	public Integer getMonNees(String mon) {
		// TODO Auto-generated method stub
		return rd.getMonNees(mon);
	}

	@Override
	public List<String> getMonCost(String mon) {
		// TODO Auto-generated method stub
		return rd.getMonCost(mon);
	}

	@Override
	public Integer getMonPublish1(String mon1) {
		// TODO Auto-generated method stub
		return rd.getMonPublish1(mon1);
	}

	@Override
	public Integer getMonPublish2(String mon1) {
		// TODO Auto-generated method stub
		return rd.getMonPublish2(mon1);
	}
}
