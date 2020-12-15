using System;
using System.Collections.Generic;

namespace ShowroomGalleryUI.Models
{
    public partial class Payment
    {
        public int PayId { get; set; }
        public string InvoiceNo { get; set; }
        public decimal? Cash { get; set; }
        public decimal? Pchange { get; set; }
    }
}
