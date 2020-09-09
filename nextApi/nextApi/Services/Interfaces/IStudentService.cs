using nextApi.Models;
using System.Collections.Generic;

namespace nextApi.Services.Interfaces
{
    public interface IStudentService
    {
        public List<Student> GetAll();
        public List<Student> GetAllByClassId(int classId);
        Student CreateStudent(Student student);
    }
}