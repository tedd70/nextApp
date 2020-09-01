using nextApi.Models;
using nextApi.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace nextApi.Services
{
    public class SchoolService : ISchoolService
    {
        private readonly NextDbContext _context;

        public SchoolService(NextDbContext context)
        {
            _context = context;
        }

        public School CreateSchool(School school)
        {
            _context.Schools.Add(school);
            _context.SaveChanges();
            return school;
        }

        public List<School> GetAll()
        {
            return _context.Schools.ToList();
        }
    }
}