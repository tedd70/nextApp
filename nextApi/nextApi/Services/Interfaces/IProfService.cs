using nextApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextApi.Services.Interfaces
{
    public interface IProfService
    {
        List<Prof> GetAll();
    }
}
