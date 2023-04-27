using AgroAliment.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Infrastructure.Persistence.Contexts
{
    public partial class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Site> Sites { get; set; }
        public virtual DbSet<Domain.Models.Service> Services { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
    }
}