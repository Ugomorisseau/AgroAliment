using AgroAliment.Domain.Models;
using AgroAliment.Infrastructure.Persistence.Contexts;
using AgroAliment.Interface;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Service;

public class SiteService : ISiteService
{
    private readonly AppDbContext _context;

    public SiteService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Site>> GetAllSite()
    {
        return await _context.Sites.ToListAsync();
    }
    
}