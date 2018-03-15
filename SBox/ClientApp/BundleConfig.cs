using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Optimization;

namespace SBox.ClientApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~css").Include(
                "~/ArcadiaTheme/css/animate.css"
                , "~/ArcadiaTheme/css/boostrap.css"
                , "~/ArcadiaTheme/css/jasny-bootstrap.min.css"
                , "~/ArcadiaTheme/css/owl.carousel.css"
                , "~/ArcadiaTheme/css/responsive.css"
                , "~/ArcadiaTheme/css/style.css"
                , "~/ArcadiaTheme/css/owl.theme.css"
                , "~/ArcadiaTheme/css/owl.theme.css"
                ));
        }
    }
}
