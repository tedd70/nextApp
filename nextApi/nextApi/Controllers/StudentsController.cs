using Microsoft.AspNetCore.Mvc;
using nextApi.Services;

namespace nextApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : ControllerBase
    {
        private IStudentService _studentService;
        public StudentsController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public IActionResult GetAllByClassId(int classId)
        {
            return Ok(_studentService.GetAllByClassId(classId));
        }
    }
}
