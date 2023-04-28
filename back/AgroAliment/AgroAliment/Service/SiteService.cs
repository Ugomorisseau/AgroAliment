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
    
    public async Task<IEnumerable<Site>> FindSite(string search)
    {
        if (System.Text.RegularExpressions.Regex.IsMatch(search, "^[0-9]+$"))
        {
            return null!;
        }

        var searchValue = search.ToLower();
        var site = _context.Sites.Where(x =>
                x.Ville.ToLower().StartsWith(searchValue))
            .ToListAsync();

        return await site;
    }
}