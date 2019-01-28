package com.asiainfo.requirement.entity;

import java.io.Serializable;

public class Issue implements Serializable{
	private String issueComponents;
	private Double costTime;
	private Integer sumNeeds;
	private Long sumTime;
	private Integer countP;
	private Integer monSum;
	private String sup;
	private String issueStatus;
	private String createtime;
	private String endtime;
	private String updatetime;
	private String projectKey;
	private String projectVersion;
	private String issueKey;
	private String issueName;
	private String issueType;
	private String month;
	private Integer totalN;
	private Double totalC;
	private Integer monPub;
	
	
	public Integer getMonPub() {
		return monPub;
	}

	public void setMonPub(Integer monPub) {
		this.monPub = monPub;
	}

	public Integer getTotalN() {
		return totalN;
	}

	public void setTotalN(Integer totalN) {
		this.totalN = totalN;
	}

	public Double getTotalC() {
		return totalC;
	}

	public void setTotalC(Double totalC) {
		this.totalC = totalC;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getIssueComponents() {
		return issueComponents;
	}
	
	public void setIssueComponents(String issueComponents) {
		this.issueComponents = issueComponents;
	}
	
	public Double getCostTime() {
		return costTime;
	}
	
	public void setCostTime(Double costTime) {
		this.costTime = costTime;
	}
	
	public Integer getSumNeeds() {
		return sumNeeds;
	}
	
	public void setSumNeeds(Integer sumNeeds) {
		this.sumNeeds = sumNeeds;
	}
	
	public Long getSumTime() {
		return sumTime;
	}
	
	public void setSumTime(Long sumTime) {
		this.sumTime = sumTime;
	}
	
	public Integer getCountP() {
		return countP;
	}
	
	public void setCountP(Integer countP) {
		this.countP = countP;
	}
	
	public Integer getMonSum() {
		return monSum;
	}
	
	public void setMonSum(Integer monSum) {
		this.monSum = monSum;
	}
	
	public String getSup() {
		return sup;
	}
	
	public void setSup(String sup) {
		this.sup = sup;
	}
	
	public String getIssueStatus() {
		return issueStatus;
	}
	
	public void setIssueStatus(String issueStatus) {
		this.issueStatus = issueStatus;
	}
	
	public String getCreatetime() {
		return createtime;
	}
	
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	
	public String getEndtime() {
		return endtime;
	}
	
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	
	public String getUpdatetime() {
		return updatetime;
	}
	
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	
	public String getProjectKey() {
		return projectKey;
	}
	
	public void setProjectKey(String projectKey) {
		this.projectKey = projectKey;
	}
	
	public String getProjectVersion() {
		return projectVersion;
	}
	
	public void setProjectVersion(String projectVersion) {
		this.projectVersion = projectVersion;
	}
	public String getIssueKey() {
		return issueKey;
	}
	
	public void setIssueKey(String issueKey) {
		this.issueKey = issueKey;
	}
	
	public String getIssueName() {
		return issueName;
	}
	
	public void setIssueName(String issueName) {
		this.issueName = issueName;
	}
	
	public String getIssueType() {
		return issueType;
	}
	
	public void setIssueType(String issueType) {
		this.issueType = issueType;
	}

	@Override
	public String toString() {
		return "Issue [issueComponents=" + issueComponents + ", costTime=" + costTime + ", sumNeeds=" + sumNeeds
				+ ", sumTime=" + sumTime + ", countP=" + countP + ", monSum=" + monSum + ", sup=" + sup
				+ ", issueStatus=" + issueStatus + ", createtime=" + createtime + ", endtime=" + endtime
				+ ", updatetime=" + updatetime + ", projectKey=" + projectKey + ", projectVersion=" + projectVersion
				+ ", issueKey=" + issueKey + ", issueName=" + issueName + ", issueType=" + issueType + ", month="
				+ month + ", totalN=" + totalN + ", totalC=" + totalC + ", monPub=" + monPub + "]";
	}
	
}
