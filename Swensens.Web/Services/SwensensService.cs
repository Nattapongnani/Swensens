using Microsoft.EntityFrameworkCore;
using Swensens.Web.Data;
using Swensens.Web.Models;

namespace Swensens.Web.Services
{
    public class SwensensService : ISwensensService
    {
        private readonly AppDbContext _context;

        public SwensensService(AppDbContext context)
        {
            _context = context;
        }
    }
}
