using AgroAliment.Domain.Models;
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
    
}