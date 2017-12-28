using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiPOC.Models
{
    public class ProductPrice
    {
        
        public decimal MRP { get; set; }
        public decimal GST { get; set; }
        public decimal Shipping { get; set; }

        [Key,ForeignKey("Product")]
        public int? ProductId { get; set; }
        
        public virtual Product Product { get; set; }
    }
}