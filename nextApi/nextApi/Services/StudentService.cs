using nextApi.Models;
using nextApi.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace nextApi.Services
{
    public class StudentService : IStudentService
    {
        private readonly NextDbContext _context;

        public StudentService(NextDbContext context)
        {
            _context = context;
        }
        public List<Student> GetAll()
        {
            return _context.Students.ToList();
        }

        public List<Student> GetAllByClassId(int classId)
        {
            return _context.Students.Where(x => x.ClassId == classId).ToList();
        }
    }
}