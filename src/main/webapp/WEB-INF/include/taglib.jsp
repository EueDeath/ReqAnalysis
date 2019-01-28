<%
String path = request.getContextPath();
String basePath = request.getServerName()+":"+request.getServerPort();
%>
<%-- <%@ taglib prefix="shiro" uri="/WEB-INF/tlds/shiros.tld" %> --%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%-- <%@ taglib prefix="fns" uri="/WEB-INF/tlds/fns.tld" %> --%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%-- <c:set var="f" value="${pageContext.request.contextPath}${fns:getFrontPath()}"/> --%>
<c:set var="ctxStatic" value="${pageContext.request.contextPath}/static" />
<c:set var="basePath" value="<%=basePath %>" />
<script>
	var ctx = "${ctx}";
	var ctxStatic = "${ctxStatic}";
	var basePath = "${basePath}";
</script>