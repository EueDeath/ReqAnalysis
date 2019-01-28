<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ include file="/WEB-INF/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>需求分析</title>
<link rel="stylesheet" type="text/css" href="${ctxStatic}/css/index.css"/>

</head>
<body onload="init()">
	<div class="content">
		<div class="tile left">			
			<table id="table1" align="center" border="1" class="table tile">
				<thead>
					<tr>
						<th class='b_r'>产品</th>
						<th class='b_r'>支持部</th>
						<th class='b_r'>局点</th>
						<th class='b_r'>个数</th>
						<th class='b_r'>估计工作量</th>
						<th class='b_r'>持续时长</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td align='center' class='b_r'>总和</td>
						<td align='center' class='b_r'> </td>
						<td align='center' class='b_r'> </td>
						<td align='center' class='b_r'> </td>
						<td align='center' class='f_color1' id="sum11"></td>
						<td align='center' class='f_color1' id="sum21"></td>
						<td align='center' class='f_color1' id="sum31"></td>
					</tr>
				</tfoot>
				<tbody id="tbody-result">		
				</tbody>
				
			</table>
		</div>
		<div class="chart">
			<div class="item tile">
				<h2 class="tile-title">&nbsp;汇总报告</h2>
				<div id="main" class="charthei"></div>
			</div>
			<div class="item mt1 tile">
				<table class="table tile">
					<thead>
						<tr>
							<th>产品</th>
							<th>接纳需求数</th>
							<th>工作量</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="item mt1 tile">
				<h2 class="tile-title">&nbsp;月度需求报告</h2>
				<div id="main2" class="charthei"></div>
			</div>
			<div class="item mt1 tile">
				<h2 class="tile-title">&nbsp;月度截止需求报告</h2>
				<div id="main3" class="charthei"></div>
			</div>				
		</div>
	</div>
</body>
 	<script src="${ctxStatic}/js/jquery-1.11.1.min.js"></script>
 	<script src="${ctxStatic}/js/echarts.common.min.js"></script>
 	<script src="${ctxStatic}/js/dark.js"></script>
 	<script src="${ctxStatic}/js/index.js"></script>
 	
<script type="text/javascript">
	function init(){
	 	SpanGrid(table1,0);
	 	SpanGrid(table1,1); 
	}
</script>


</html>