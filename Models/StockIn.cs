﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShowroomGalleryUI.Models
{
    public class StockIn
    {
        public Guid ProductNo { get; set; }
        public float Quantity { get; set; }
        public DateTime DateIn { get; set; }
    }
}
