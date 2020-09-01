using System.Collections.Generic;

namespace nextApi.Models
{
    public class MarkDto : Mark
    {
        public MarkDto()
        {

        }
        public MarkDto(Mark mark, Prof prof)
        {
            this.Prof = prof;
            this.Id = mark.Id;
            this.ProfId = mark.ProfId;
            this.StudentId = mark.StudentId;
            this.Value = mark.Value;
        }
        public Prof Prof { get; set; }
    }
}