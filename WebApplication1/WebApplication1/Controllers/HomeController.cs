using NTextCat;
using System.Linq;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {


        // GET: Home
        public ActionResult Index()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            var factoryo = new RankedLanguageIdentifierFactory();
            //var identifier = factoryo.Load(@"C:\Users\Ashish Kumar\Downloads\Core14.profile.xml");
            //var identifier = factoryo.Load(Path.Combine(Environment.CurrentDirectory, "Core14.profile.xml"));
            var identifier = factoryo.Load(Server.MapPath("Core14.profile.xml"));

            var languages = identifier.Identify("I am Ashish Kumar");
            var mostCertainLanguage = languages.FirstOrDefault();
            watch.Stop();
            var elapsedMs = watch.ElapsedMilliseconds;
            if (mostCertainLanguage != null)
            {
                ViewBag.Message = mostCertainLanguage.Item1.Iso639_3 + " Ms= " + elapsedMs + mostCertainLanguage.ToString();
                return View();
            }
            else
            {
                ViewBag.Message = "null";
                return View();
            }

        }
    }
}