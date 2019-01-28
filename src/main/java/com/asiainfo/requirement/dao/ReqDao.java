package com.asiainfo.requirement.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.asiainfo.requirement.entity.Issue;

public interface ReqDao {
	
	List<String> getIssueComponentsByPro(String p);

	List<String> getProjectKey();

	List<String> getCostByComAndPro(@Param(value="c")String c, @Param(value="p")String p);

	List<Issue> getIssueByComAndPro(@Param(value="c")String c, @Param(value="p")String p);

	Integer getListByComAndPro(@Param(value="c")String c, @Param(value="p")String p);

	Integer getMonNees(String mon);

	List<String> getMonCost(String mon);

	Integer getMonPublish1(String mon1);

	Integer getMonPublish2(String mon1);
}
