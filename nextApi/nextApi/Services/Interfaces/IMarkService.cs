using nextApi.Models;
using System.Collections.Generic;

namespace nextApi.Services.Interfaces
{
    public interface IMarkService
    {
        public List<MarkDto> GetAllByStudentId(int studentId);
        public MarkDto AddMark(Mark mark);
    }
}