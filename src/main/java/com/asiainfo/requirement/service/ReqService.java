package com.asiainfo.requirement.service;

import java.util.List;

import com.asiainfo.requirement.entity.Issue;

public interface ReqService {
	
	List<String> getIssueComponentsByPro(String p);

	List<String> getProjectKey();

	List<String> getCostByComAndPro(String c, String p);

	List<Issue> getIssueByComAndPro(String c, String p);

	Integer getListByComAndPro(String c, String p);

	Integer getMonNees(String mon);

	List<String> getMonCost(String mon);

	Integer getMonPublish1(String mon1);

	Integer getMonPublish2(String mon1);
}
