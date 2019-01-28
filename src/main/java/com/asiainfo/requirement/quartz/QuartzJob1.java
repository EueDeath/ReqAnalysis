package com.asiainfo.requirement.quartz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asiainfo.requirement.service.ReqService;


@Service
public class QuartzJob1 {
	
	@Autowired
	private ReqService job;

	public void work() {
		task1();
	}
	
	private void task1() {
		System.out.println("task1 的定时任务， 每 日7、17时执行一次");
		try {
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("task1 的定时任务， 结束！");
	}
}
