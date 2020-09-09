using Microsoft.AspNetCore.Mvc;
using nextApi.Services;
using nextApi.Services.Interfaces;

namespace nextApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : ControllerBase
    {
        private IClassService _classService;
        public ClassController(IClassService classService)
        {
            _classService = classService;
        }

        [HttpGet]
        public IActionResult GetAllBySchoolId(int schoolId)
        {
            return Ok(_classService.GetAllBySchoolId(schoolId));
        }
    }
}
