using nextApi.Models;
using System.Collections.Generic;

namespace nextApi.Services
{
    public interface ISchoolService
    {
        List<School> GetAll();
        School CreateSchool(School school);
    }
}