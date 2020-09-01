using nextApi.Models;
using System.Collections.Generic;

namespace nextApi.Services
{
    public interface IStudentService
    {
        public List<Student> GetAll();
        public List<Student> GetAllByClassId(int classId);
    }
}