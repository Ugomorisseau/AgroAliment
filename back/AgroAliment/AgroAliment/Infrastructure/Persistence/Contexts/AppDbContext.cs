using System;
using System.Collections.Generic;
using AgroAliment.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Infrastructure.Persistence.Contexts;

public partial class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Domain.Models.Service> Service { get; set; }

    public virtual DbSet<Site> Site { get; set; }

    public virtual DbSet<Users> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Domain.Models.Service>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("service_pkey");

            entity.HasOne(d => d.Site).WithMany(p => p.Service).HasConstraintName("service_site_id_fkey");
        });

        modelBuilder.Entity<Site>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("site_pkey");
        });

        modelBuilder.Entity<Users>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("users_pkey");

            entity.HasOne(d => d.Service).WithMany(p => p.Users).HasConstraintName("users_service_id_fkey");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
