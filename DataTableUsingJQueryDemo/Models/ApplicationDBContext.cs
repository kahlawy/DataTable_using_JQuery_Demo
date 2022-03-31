using Microsoft.EntityFrameworkCore;

namespace DataTableUsingJQueryDemo.Models
{
    public class ApplicationDBContext : DbContext
    {
        private readonly DbContextOptions<ApplicationDBContext> _context;

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> context) : base(context)
        {
           _context = context;
        }

        public DbSet<Customer> Cutomers { get; set; }
    }
}
