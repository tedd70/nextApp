using nextApi.Models;
using System.Collections.Generic;

namespace nextApi.Services.Interfaces
{
    public interface IClassService
    {
        List<Class> GetAllBySchoolId(int schoolId);
    }
}