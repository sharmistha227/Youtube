using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Youtube
{
    public partial class img : System.Web.UI.Page
    {
        IContent data = (IContent)Content.Instance;
        protected void Page_Load(object sender, EventArgs e)
        {
            int index1 = 0, index2 = 0;
            string htmlGrp1 = string.Empty, htmlGrp2 = string.Empty;

            hdnMaxContent.Value = System.Configuration.ConfigurationManager.AppSettings["TotalNoOfContents"];
            hdnNoOfImg.Value = Application.Get("NoOfImages").ToString();

            #region Html Template

            foreach (ContentData obj in data.GetContentData("1"))
            {
                if (index1 < Convert.ToInt32(hdnNoOfImg.Value))
                {
                    htmlGrp1 += "<div runat=\"server\" class=\"tile\" id=\"divContent" + (index1 + 1) + "\" tabindex=\"" + index1 + "\"><a target=\"_blank\" href=\"\" ><img src=" + obj.ImageUrl + " alt=\"abc\" /></a><div class=\"desc\">" + obj.Description + "</div></div>";
                    index1++;
                }

            }

            foreach (ContentData obj in data.GetContentData("2"))
            {
                if (index2 < Convert.ToInt32(hdnNoOfImg.Value))
                {
                    htmlGrp2 += "<div runat=\"server\" class=\"tile\" id=\"divContent" + ((Convert.ToInt32(hdnNoOfImg.Value) + index2) + 1) + "\" tabindex=\"" + (Convert.ToInt32(hdnNoOfImg.Value) + index2) + "\"><a target=\"_blank\" href=\"\" ><img src=" + obj.ImageUrl + " alt=\"abc\" /></a><div class=\"desc\">" + obj.Description + "</div></div>";
                    index2++;
                }
            }

            hdnContentShown.Value = (index1 + index2).ToString();

            divGrp1.InnerHtml = htmlGrp1;
            divGrp2.InnerHtml = htmlGrp2;

            #endregion
        }

    }
}