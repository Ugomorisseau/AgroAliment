using AgroAliment.Domain.Models;
using AgroAliment.Interface;

namespace AgroAliment.Service;

public class UserService : IUserService
{
    private readonly AppDbContext _context;

    public UserService(AppDbContext context)
    {
        _context = context;
    }
    
    // public async Task<List<Users>> GetUsers()
    // {
    //     // return await _context.Users.ToListAsync();
    // }
}