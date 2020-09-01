using nextApi.Controllers;
using nextApi.Models;
using nextApi.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace nextApi.Services
{
    public class ClassService : IClassService
    {
        private readonly NextDbContext _context;

        public ClassService(NextDbContext context)
        {
            _context = context;
        }

        public List<Class> GetAllBySchoolId(int schoolId)
        {
            return _context.Classes.Where(x => x.SchoolId == schoolId).ToList();
        }
    }
}