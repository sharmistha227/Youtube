using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml;

namespace Youtube
{
    public class ContentData : IContentData
    {
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public string Group { get; set; }
    }
    class Content : IContent
    {
        private Content()
        {
        }

        static Content()
        {
        }

        private static readonly Content dataInstance = new Content();

        public static Content Instance
        {
            get { return dataInstance; }
        }

        public List<ContentData> GetContentData(string GroupId)
        {
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(HttpContext.Current.Server.MapPath("~/XML/YVideos.xml"));
            List<ContentData> lstContent = (List<ContentData>)JsonConvert.DeserializeObject(xmlDoc.ChildNodes[1].InnerText, typeof(List<ContentData>));
            return lstContent.Where(g=>g.Group==GroupId).ToList<ContentData>();
        }
    }
}