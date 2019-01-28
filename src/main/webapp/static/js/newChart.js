//信息实时报告
$(function(){
	var h = $('.info_content').outerHeight();
	console.log(h);
	$(".infoContainer").myScroll({
		speed:40, //数值越大，速度越慢
		rowHeight:h//li的高度
	});
})	

//加载tab页模块
layui.use('element', function(){
  var element = layui.element;
  element.on('tab(docDemoTabBrief)', function(data){
	  myChart1.resize();
	  myChart4.resize();
	  myChart2.resize();
	  myChart3.resize();
	  myChart5.resize();
	  xcChart1.resize();
	  xcChart2.resize();
	  xcChart3.resize();
	  xcChart4.resize();
	  xcChart5.resize();
	  xcChart6.resize();
	  xcChart7.resize();
	  xcChart8.resize();
	  xcChart9.resize();
	  xcChart10.resize();
	  xcChart11.resize();
	  xcChart12.resize();
	  bugChart1.resize();
      bugChart2.resize();
	  bugChart3.resize();
	  bugChart4.resize();
	  bugChart5.resize();
	  bugChart6.resize();
	  bugChart7.resize();
	  bugChart8.resize();
	  bugChart9.resize();
	  bugChart10.resize();
	  bugChart11.resize();
	  bugChart12.resize();
	  bugChart13.resize();
  });
});
//加载轮播模块
layui.use('carousel', function(){
  var carousel = layui.carousel;
  //建造bug处理时长实例
  carousel.render({
    elem: '#test2'
    ,width: '100%' //设置容器宽度
    ,arrow: 'hover' //始终显示箭头
    ,height:'450px'
    ,interval:'100000'
  });
  //建造现场问题处理实例
   carousel.render({
    elem: '#test1'
    ,width: '100%' //设置容器宽度
    ,arrow: 'hover' //始终显示箭头
    ,height:'450px'
    ,interval:'100000'
  });
  //轮播切换事件，重置echarts
  carousel.on('change(test1)', function(obj){
  	  xcChart1.resize();
      xcChart2.resize();
	  xcChart3.resize();
	  xcChart4.resize();
	  xcChart5.resize();
	  xcChart6.resize();
	  xcChart7.resize();
	  xcChart8.resize();
	  xcChart9.resize();
	  xcChart10.resize();
	  xcChart11.resize();
	  xcChart12.resize();
  })

  carousel.on('change(test2)', function(obj){
  	  bugChart1.resize();
      bugChart2.resize();
	  bugChart3.resize();
	  bugChart4.resize();
	  bugChart5.resize();
	  bugChart6.resize();
	  bugChart7.resize();
	  bugChart8.resize();
	  bugChart9.resize();
	  bugChart10.resize();
	  bugChart11.resize();
	  bugChart12.resize();
	  bugChart13.resize();
  })
});
//研发进度图表
 	var myChart1 = echarts.init(document.getElementById('tu1'),'infographic');
    var myChart2 = echarts.init(document.getElementById('tu2'),'infographic');
    var myChart3 = echarts.init(document.getElementById('tu3'),'infographic');
    var myChart4 = echarts.init(document.getElementById('tu4'),'infographic');
	var myChart5 = echarts.init(document.getElementById('tu5'),'infographic');
	var option1 = {
	    title : {
	        text: 'AIIAM迭代燃尽图-进行中',
	        textStyle:{
	        	color:"#000"
	        },
           left:'center'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    xAxis: {
	        type: 'category',
	        data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15]
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [{
	        data: [120,110,105,100,90,70,65,60,55,50,40, 30, 20,10,0],
	        type: 'line',
	        smooth: true
	    }]
	};
	myChart1.setOption(option1);
	myChart2.setOption(option1);
	myChart3.setOption(option1);
	myChart4.setOption(option1);
	myChart5.setOption(option1);
	
//现场问题处理图表
	//3个大图
	var xcChart1 = echarts.init(document.getElementById('hoursChart'),'infographic');
	var xcChart2 = echarts.init(document.getElementById('hoursChart1'),'infographic');
	var xcChart3 = echarts.init(document.getElementById('hoursChart2'),'infographic');
	//9个小图
	var xcChart4 = echarts.init(document.getElementById('AIIAMChart'),'infographic');
	var xcChart5 = echarts.init(document.getElementById('AISSAChart'),'infographic');
	var xcChart6 = echarts.init(document.getElementById('AIFORTChart'),'infographic');
	var xcChart7 = echarts.init(document.getElementById('SSSATPChart'),'infographic');
	var xcChart8 = echarts.init(document.getElementById('AISIAChart'),'infographic');
	var xcChart9 = echarts.init(document.getElementById('SSBDSChart'),'infographic');
	var xcChart10 = echarts.init(document.getElementById('SSSMPChart'),'infographic');
	var xcChart11 = echarts.init(document.getElementById('SSIT4AChart'),'infographic');
	var xcChart12 = echarts.init(document.getElementById('SSNOC4AChart'),'infographic');
	
	var option2 = {
		title:{
			text:'总时长'
		},
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['AIIAM','AISSA','AIFORT','SSATP','AISIA']
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['去年','今年','一月','二月','三月','四月','五月','六月','七月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'AIIAM',
	            type:'line',
	            data:[20,30,60,70,40,50,30,40,10]
	        },
	        {
	            name:'AISSA',
	            type:'line',
	            data:[40,52,41,64,70,60,30,50,23]
	        },
	        {
	            name:'AIFORT',
	            type:'line',
	            data:[50,32,20,54,60,30,41,60,50]
	        },
	        {
	            name:'SSATP',
	            type:'line',
	            data:[60,33,51,44,39,60,40,58,42]
	        },
	        {
	            name:'AISIA',
	            type:'line',
	            data:[50,32,41,54,30,56,62,68,39]
	        }
	    ]
	};

	var option3 = {
		title:{
			text:'pso时长'
		},
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['AIIAM','AISSA','AIFORT','SSATP','AISIA','SSBDS','SSSMP','SSIT4A','SSNOC4A']
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['去年','今年','一月','二月','三月','四月','五月','六月','七月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'AIIAM',
	            type:'line',
	            data:[20,30,60,70,40,50,30,40,10]
	        },
	        {
	            name:'AISSA',
	            type:'line',
	            data:[40,52,41,64,70,60,30,50,23]
	        },
	        {
	            name:'AIFORT',
	            type:'line',
	            data:[50,32,20,54,60,30,41,60,50]
	        },
	        {
	            name:'SSATP',
	            type:'line',
	            data:[60,33,51,44,39,60,40,58,42]
	        },
	        {
	            name:'AISIA',
	            type:'line',
	            data:[50,32,41,54,30,56,62,68,39]
	        },
	        {
	            name:'SSBDS',
	            type:'line',
	            data:[40,52,61,24,37,56,32,68,59]
	        },
	        {
	            name:'SSSMP',
	            type:'line',
	            data:[30,37,41,54,30,66,32,58,49]
	        },
	        {
	            name:'SSIT4A',
	            type:'line',
	            data:[40,52,21,54,60,46,62,48,69]
	        },
	        {
	            name:'SSNOC4A',
	            type:'line',
	            data:[20,42,51,64,70,36,52,38,69]
	        }
	    ]
	};

	var option4 = {
	    title : {
	        text: 'AIIAM'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	    	orient: 'vertical', // 'vertical'
	    	x: 'right',
	        data:['总时长','开发时长','QA时长']
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['去年','今年','一月','二月','三月','四月','五月','六月','七月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'总时长',
	            type:'bar',
	            data:[2,4,5,8,10,9,7,6,5],
	        },
	        {
	            name:'开发时长',
	            type:'bar',
	            data:[3,6,6,4,10,9,8,4,5],
	        },
	        {
	            name:'QA时长',
	            type:'bar',
	            data:[6,7,9,3,6,7,1,3,8],
	        }
	    ]
	};

	xcChart1.setOption(option2);
	xcChart2.setOption(option2);
	xcChart3.setOption(option3);
	xcChart4.setOption(option4);
	xcChart5.setOption(option4);
	xcChart6.setOption(option4);
	xcChart7.setOption(option4);
	xcChart8.setOption(option4);
	xcChart9.setOption(option4);
	xcChart10.setOption(option4);
	xcChart11.setOption(option4);
	xcChart12.setOption(option4);
	
//bug处理时长图表
	//3个大图
	var bugChart1 = echarts.init(document.getElementById('bugChart'),'infographic');
	var bugChart2 = echarts.init(document.getElementById('bugChart1'),'infographic');
	var bugChart3 = echarts.init(document.getElementById('bugChart2'),'infographic');
	//9个小图
	var bugChart4 = echarts.init(document.getElementById('BugAIIAMChart'),'infographic');
	var bugChart5 = echarts.init(document.getElementById('BugAISSAChart'),'infographic');
	var bugChart6 = echarts.init(document.getElementById('BugAIFORTChart'),'infographic');
	var bugChart7 = echarts.init(document.getElementById('BugSSSATPChart'),'infographic');
	var bugChart8 = echarts.init(document.getElementById('BugAISIAChart'),'infographic');
	var bugChart9 = echarts.init(document.getElementById('BugSSBDSChart'),'infographic');
	var bugChart10 = echarts.init(document.getElementById('BugSSSMPChart'),'infographic');
	var bugChart11 = echarts.init(document.getElementById('BugSSIT4AChart'),'infographic');
	var bugChart12 = echarts.init(document.getElementById('BugSSNOC4AChart'),'infographic');
	var bugChart13 = echarts.init(document.getElementById('BugAIDSChart'),'infographic');
	
	bugChart1.setOption(option2);
	bugChart2.setOption(option2);
	bugChart3.setOption(option3);
	bugChart4.setOption(option4);
	bugChart5.setOption(option4);
	bugChart6.setOption(option4);
	bugChart7.setOption(option4);
	bugChart8.setOption(option4);
	bugChart9.setOption(option4);
	bugChart10.setOption(option4);
	bugChart11.setOption(option4);
	bugChart12.setOption(option4);
	bugChart13.setOption(option4);