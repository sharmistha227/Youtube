<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="img.aspx.cs" Inherits="Youtube.img" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script language="javascript" type="text/javascript" src="Javascript/Main.js"></script>
    <script language="javascript" type="text/javascript" src="Javascript/jquery-1.8.2.min.js"></script>
    <script language="javascript" type="text/javascript" src="Javascript/json2.js"></script>
    <link rel="stylesheet" href="Styles/site.css" type="text/css" />
</head>
<body onload="Main.focus();">
    <form id="form1" runat="server">
    <asp:HiddenField ID="hdnPosition" runat="server" Value="0" />
    <asp:HiddenField ID="hdnMaxContent" runat="server" Value="0" />
    <asp:HiddenField ID="hdnNoOfImg" runat="server" Value="0" />
    <asp:HiddenField ID="hdnContentShown" runat="server" Value="0" />
    <div id="divMain" runat="server">
        <div id="divGrp1" runat="server">
        </div>
        <br />
        <div id="divGrp2" runat="server">
        </div>
    </div>
    </form>
</body>
</html>
