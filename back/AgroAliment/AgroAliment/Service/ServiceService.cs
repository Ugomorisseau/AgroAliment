using AgroAliment.Domain.Models;
using AgroAliment.Infrastructure.Persistence.Contexts;
using AgroAliment.Interface;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Service;

public class ServiceService : IServiceService
{
    private readonly AppDbContext _context;

    public ServiceService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Domain.Models.Service>> GetAllService()
    {
        return await _context.Services.ToListAsync();
    }
    
    public async Task<IEnumerable<Domain.Models.Service>> FindService(string search)
    {
        if (System.Text.RegularExpressions.Regex.IsMatch(search, "^[0-9]+$"))
        {
            return null!;
        }

        var searchValue = search.ToLower();
        var service = _context.Services.Where(x =>
                x.Nom.ToLower().StartsWith(searchValue))
            .ToListAsync();

        return await service;
    }
    
}