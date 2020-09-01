using nextApi.Models;
using nextApi.Repositories;
using nextApi.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace nextApi.Services
{
    public class MarkService : IMarkService
    {
        private readonly NextDbContext _context;

        public MarkService(NextDbContext context)
        {
            _context = context;
        }

        public MarkDto AddMark(Mark mark)
        {
            var prof = _context.Profs.FirstOrDefault(x => x.Id == mark.ProfId);
            if (prof == null)
            {
                throw new Exception($"Prof {mark.Id} not found");
            }

            _context.Marks.Add(mark);
            var newId = _context.SaveChanges();
            return new MarkDto(mark, _context.Profs.FirstOrDefault(p => p.Id == mark.ProfId));
        }

        public List<MarkDto> GetAllByStudentId(int studentId)
        {
            var marks = _context.Marks.Where(x => x.StudentId == studentId).ToList();
            var result = new List<MarkDto>();
            marks.ForEach(m =>
            {
                result.Add(new MarkDto(m, _context.Profs.FirstOrDefault(p => p.Id == m.ProfId)));
            });

            return result;
        }
    }
}