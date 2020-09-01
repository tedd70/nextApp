using Microsoft.AspNetCore.Mvc;
using nextApi.Services;
using nextApi.Services.Interfaces;

namespace nextApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfController : ControllerBase
    {
        private IProfService _profService;
        public ProfController(IProfService profService)
        {
            _profService = profService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_profService.GetAll());
        }
    }
}
