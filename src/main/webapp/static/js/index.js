

 	//合并同一列相同内容
function SpanGrid(tabObj,colIndex)
 		{
 		 if(tabObj != null)
 		 {
 		  var i,j;
 		  var intSpan;
 		  var strTemp;
 		  for(i = 0; i < tabObj.rows.length; i++)
 		  {
 		   intSpan = 1;
 		   strTemp = tabObj.rows[i].cells[colIndex].innerText;
 		   for(j = i + 1; j < tabObj.rows.length; j++)
 		   {
 		    if(strTemp == tabObj.rows[j].cells[colIndex].innerText)
 		    {
 		     intSpan++;
 		     tabObj.rows[i].cells[colIndex].rowSpan  = intSpan;
 		     tabObj.rows[j].cells[colIndex].style.display = "none";
 		    }
 		    else
 		    {
 		     break;
 		    }
 		   }
 		   i = j - 1;
 		  }
 		 }
 		}  	
 	
 	$(function(){
// 		var ctx= "${ctx}";
 		var n = $('.left').height();
 		var m = $('.chart').height();
 		
 		if(n>m){
 			$('.chart').height(n);
 		
 		}
 			var ih = $('.item').height();	
 		console.log(ih);
 		var ch = ih-30+'px';
 		$('.charthei').height(ch);
 		      // 基于准备好的dom，初始化echarts实例
 	/* 	var myChart = echarts.init(document.getElementById('main'),"dark");*/
 		var myChart2 = echarts.init(document.getElementById('main2'),"dark");
 		var myChart3 = echarts.init(document.getElementById('main3'),"dark");
 		
 		
 		var sumMonth = [];
 		var sumCost = [];
 		var month = [];
 		var monthPub = [];
 		
 	 	$.ajax({
 		    type : "GET",
 		    url:ctx+"/findList/month",
 		    data : {}, 
 		    dataType : "json", 
 		    async: false,
 		    success : function(data){
 		    	
//  		    	console.log(data);
 		    	
 		    	for(var i=0;i<data.length;i++){
 		        	sumMonth.push(data[i].monSum);
 		        	sumCost.push(data[i].costTime);
 		        	month.push(data[i].month);
 		        	monthPub.push(data[i].monPub);
 		        }
 		    	
 		    	// 指定图表的配置项和数据
 		    	var option = {
 		    	    tooltip : {
 		    	        trigger: 'axis'
 		    	    },
 		    	   grid:{
 	   	                    left:'4%',
 	   	                    right:'4%',
 	   	                    bottom:'5%',
 		    				top:'15%',
 	   	                    containLabel:true
 	   	                },
 		    	    legend: {
 		    	        data:['提交需求量','发布需求量','估计工作量折线']
 		    	    },
 		    	   toolbox: {
				        show : false,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
 		    	    
 		    	    calculable : true,
 		    	    xAxis : [
 		    	        {
 		    	            type : 'category',
 		    	            data : month,
	 		    	           axisLabel:{
	 		    	      		interval: 0,
	 		    	      		rotate:45
	 		    	           }
 		    	        }
 		    	    ],
 		    	    yAxis : [
 		    	        {

 		    	        	splitLine: {
 		    	        	    show: false 
 		    	        	},
 		    	        	name : '需求量',
 		    	        	position : 'left',
 		    	            type : 'value'
 		    	        },
 		    	       {

 		    	        	splitLine: {
 		    	        	    show: false 
 		    	        	},
 		    	        	name : '估计工作量',
 		    	        	position : 'right',
 		    	            type : 'value'
 		    	        }
 		    	    ],
 		    	    series : [
 		    	        {
 		    	            name:'提交需求量',
 		    	            type:'bar',
 		    	            yAxis:1,
 		    	            data:sumMonth
 		    	   
 		    	        },
 		    	        {
 		    	            name:'发布需求量',
 		    	            type:'bar',
 		    	            yAxis:1,
 		    	            data:monthPub
 		    	           
 		    	        },
 		    	        {
 		    	        	name:'估计工作量折线',
 		    	        	type:'line',
 		    	        	yAxisIndex:1,
 		    	        	symbol:'emptyCircle',
			                itemStyle: {
			                    normal: {
			                        color: '#ffa500',
			                        shadowBlur: 10,
			                        shadowColor: 'white'
			                    }
			                },
			                symbolSize: 3,
 		    	        	data:sumCost
 		    	        }
 		    	    ]
 		    	};
 		    	myChart2.setOption(option);
 		    	},
 		    	
 		    	
 		    }); 

 	            

 	// 使用刚指定的配置项和数据显示图表。
 	/* 	myChart.setOption(option);
 	  	myChart2.setOption(option);
 	 */
 		
 	 	//表格展示需求
 		$.ajax({
 			url : ctx+"/findList/getNeeds",
 			dateType :"json",
 			contentType:"text/json",
 			type : "GET",
 			async : false,
 			success : function(data){
 	 			var sum1 = 0;
 				var sum2 = 0;
 				var sum3 = 0; 
 				var sum11 = 0;
 				var sum21 = 0;
 				var sum31 = 0;
 				var s = 0;
 				var s2 = 0;
 				
 				for(var i=0;i<data.length;i++){
 					$("#tbody-result").html($("#tbody-result").html()
 	                        +"<tr><td align='center' class='b_r'>"+data[i].projectKey+"</td>"
 	                        +"<td align='center' class='b_r'>"+data[i].sup+"</td>"
 	                        +"<td align='center' class='b_r'>"+data[i].issueComponents+"</td>"
 	                        +"<td align='center' class='b_r'>"+data[i].sumNeeds+"</td>"
 	                        +"<td align='center' class='b_r'>"+data[i].costTime+"</td>"
 	                        +"<td align='center' class='b_r'>"+data[i].sumTime+"</td></tr>"                            
 	                    );
 					

 					sum1 = sum1 + data[i].sumNeeds;
 					sum2 = sum2 + data[i].costTime;
 					sum3 += data[i].sumTime*data[i].sumNeeds;
 					s = (sum3/sum1).toFixed(1);
 					
 					
 					if(data[i+1] != null && data[i+1].countP==1){
 						$("#tbody-result").html($("#tbody-result").html()
 								+"<tr><td align='center' class='b_r'>"+"汇总"+"</td>"
 		                        +"<td align='center' class='b_r'> </td>"
 		                        +"<td align='center' class='b_r'> </td>"
 		                        +"<td align='center' class='f_color1'>"+sum1+"</td>"
 		                        +"<td align='center' class='f_color1'>"+sum2+"</td>"
 		                        +"<td align='center' class='f_color1'>"+s+"</td></tr>" 
 						);
 						sum11 += sum1;
 						sum21 += sum2; 
 						s2 += s*sum1;
 						sum1 = 0;
 						sum2 = 0;
 						sum3 = 0;
 					}
 					
 					if(data[i+1]==null){
 						$("#tbody-result").html($("#tbody-result").html()
 								+"<tr><td align='center' class='b_r'>"+"汇总"+"</td>"
 		                        +"<td align='center' class='b_r'> </td>"
 		                        +"<td align='center' class='b_r'> </td>"
 		                        +"<td align='center' class='f_color1'>"+sum1+"</td>"
 		                        +"<td align='center' class='f_color1'>"+sum2+"</td>"
 		                        +"<td align='center' class='f_color1'>"+s+"</td></tr>" 
 						);
 						sum11 += sum1;
 						sum21 += sum2;
 						s2 += s*sum1;
 						sum31 = (s2/sum11).toFixed(1);
 					}
 					
 				}
 				console.log(s2);
 				console.log(sum31);
 				$("#sum11").html(sum11);
 				$("#sum21").html(sum21);
 				$("#sum31").html(sum31);
 			},
 			
 			error: function(XMLHttpRequest, textStatus, errorThrown){
 				alert(XMLHttpRequest.status);
 				alert(XMLHttpRequest.readyState);
 				alert(textStatus);
 			},
 			
 		});
 	 
 	 
 	 
 	 	var totalCost = [];
 	 	var totalNeeds = [];
 	 	var month2 = [];
 	 	
 	 	$.ajax({
 		    type : "GET",
 		    url:ctx+"/findList/monSum",
 		    data : {}, 
 		    dataType : "json", 
 		    async: false,
 		    success : function(data){
 		    	
//  		    	console.log(data);
 		    	
 		    	for(var i=0;i<data.length;i++){
 		    		totalCost.push(data[i].totalC);
 		    		totalNeeds.push(data[i].totalN);
 		    		month2.push(data[i].month);
 		        }
 		    	
 		    	// 指定图表的配置项和数据
 		    	var option = {
 		    	    tooltip : {
 		    	        trigger: 'axis'
 		    	    },
 		    	   grid:{
 	   	                    left:'4%',
 	   	                    right:'4%',
 	   	                    bottom:'5%',
 		    				top:'15%',
 	   	                    containLabel:true
 	   	                },
 		    	    legend: {
 		    	        data:['总需求量','总工作量','总工作量折线']
 		    	    },
 		    	   toolbox: {
				        show : false,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
 		    	    
 		    	    calculable : true,
 		    	    xAxis : [
 		    	        {
 		    	            type : 'category',
 		    	            data : month2,
	 		    	           axisLabel:{
	 		    	      		interval: 0,
	 		    	      		rotate:45
	 		    	           }
 		    	        }
 		    	    ],
 		    	    yAxis : [
 		    	        {

 		    	        	splitLine: {
 		    	        	    show: false 
 		    	        	},
 		    	        	name : '需求量',
 		    	        	position : 'left',
 		    	            type : 'value'
 		    	        },
 		    	       {

 		    	        	splitLine: {
 		    	        	    show: false 
 		    	        	},
 		    	        	name : '工作量',
 		    	        	position : 'right',
 		    	            type : 'value'
 		    	        }
 		    	    ],
 		    	    series : [
 		    	        {
 		    	            name:'总需求量',
 		    	            type:'bar',
 		    	            yAxis:1,
 		    	            data:totalNeeds
 		    	   
 		    	        },
 		    	        {
 		    	            name:'总工作量',
 		    	            type:'bar',
 		    	            yAxisIndex:1,
 		    	            data:totalCost
 		    	           
 		    	        },
 		    	        
 		    	        {
 		    	        	name:'总工作量折线',
 		    	        	type:'line',
 		    	        	yAxisIndex:1,
 		    	        	symbol:'emptyCircle',
			                itemStyle: {
			                    normal: {
			                        color: '#ffa500',
			                        shadowBlur: 10,
			                        shadowColor: 'white'
			                    }
			                },
			                symbolSize: 3,
 		    	        	data:totalCost
 		    	        }
 		    	    ]
 		    	};
 		    	myChart3.setOption(option);
 		    	},
 		    	
 		    	
 		    });
 	})