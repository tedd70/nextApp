using nextApi.Models;
using nextApi.Repositories;
using nextApi.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextApi.Services
{
    public class ProfService : IProfService
    {
        private readonly NextDbContext _context;

        public ProfService(NextDbContext context)
        {
            _context = context;
        }

        public List<Prof> GetAll()
        {
            return _context.Profs.ToList();
        }
    }
}
