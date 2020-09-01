using Microsoft.AspNetCore.Mvc;
using nextApi.Models;
using nextApi.Services.Interfaces;

namespace nextApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MarkController : ControllerBase
    {
        private IMarkService _markService;
        public MarkController(IMarkService markService)
        {
            _markService = markService;
        }

        [HttpGet]
        public IActionResult GetAllByStudentId(int studentId)
        {
            return Ok(_markService.GetAllByStudentId(studentId));
        }


        [HttpPost]
        public IActionResult AddMark(Mark mark)
        {
            return Ok(_markService.AddMark(mark));
        }
    }
}
