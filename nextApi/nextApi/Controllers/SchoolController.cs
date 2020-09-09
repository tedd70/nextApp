using Microsoft.AspNetCore.Mvc;
using nextApi.Models;
using nextApi.Services;
using nextApi.Services.Interfaces;

namespace nextApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SchoolController : ControllerBase
    {
        private ISchoolService _service;
        public SchoolController(ISchoolService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }

        [HttpPost]
        public IActionResult CreateSchool(School school)
        {
            return Ok(_service.CreateSchool(school));
        }
    }
}
