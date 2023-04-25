﻿using AgroAliment.Domain.Models;
using AgroAliment.Interface;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Service;

public class UserService : IUserService
{
    private readonly AppDbContext _context;

    public UserService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Users>> GetAllUsers()
    {
        return await _context.Users.ToListAsync();
    }
}