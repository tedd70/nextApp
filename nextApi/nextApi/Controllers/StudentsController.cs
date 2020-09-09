using Microsoft.AspNetCore.Mvc;
using nextApi.Models;
using nextApi.Services;
using nextApi.Services.Interfaces;

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

        [HttpPost]
        public IActionResult CreateStudent(Student student)
        {
            return Ok(_studentService.CreateStudent(student));
        }
    }
}
