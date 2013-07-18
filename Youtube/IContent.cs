using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Youtube
{
    interface IContentData
    {
        string ImageUrl { get; set; }
        string Description { get; set; }
        string Group { get; set; }
    }
    interface IContent
    {
        List<ContentData> GetContentData(string GroupId);
    }
}
