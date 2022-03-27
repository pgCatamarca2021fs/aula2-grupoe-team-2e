using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace criptoCatBackend.Models
{
    public class Coin
    {
        public string id { get; set; }
        public string name { get; set; }
        public string symbol { get; set; }
        public string image { get; set; }
        public int current_price { get; set; }
        public int price_change_percentage_24h { get; set; }
        public string last_updated { get; set; }

    }
}