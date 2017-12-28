using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiPOC.Models
{
    public class Product
    {
       
        public int Id { get; set; }
        public string Name { get; set; }

        public string Category { get; set; }

        // New code:    
        [ForeignKey("Supplier")]
        public int? SupplierId { get; set; }
        public virtual Supplier Supplier { get; set; }

        public virtual ProductPrice ProductPrices { get; set; }

        public decimal? TotalPrice
        {
            get
            {
               return  ProductPrices.MRP + ((ProductPrices.MRP * ProductPrices.GST) / 100) + ProductPrices.Shipping;
            } 
        }

    }
}