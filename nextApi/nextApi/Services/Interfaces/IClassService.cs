using nextApi.Models;
using System.Collections.Generic;

namespace nextApi.Controllers
{
    public interface IClassService
    {
        List<Class> GetAllBySchoolId(int schoolId);
    }
}