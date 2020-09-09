using nextApi.Models;
using nextApi.Repositories;
using nextApi.Services.Interfaces;
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
        public Student CreateStudent(Student student)
        {
            var existingStudent = _context.Students.FirstOrDefault(x => x.Id == student.Id);
            if (existingStudent == null)
            {
                _context.Students.Add(student);
            }
            else
            {
                existingStudent.Name = student.Name;
                _context.Students.Update(existingStudent);
            }
            _context.SaveChanges();
            return student;
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