﻿using AgroAliment.Domain.Models;
using AgroAliment.Infrastructure.Persistence.Contexts;
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

    public async Task<IEnumerable<Users>> GetAllUsers()
    {
        return await _context.Users.ToListAsync();
    }

    // public async Task<IEnumerable<Users>> ListAsync() =>
    //     await _context.Users
    //         .ToListAsync();

    public async Task<Users> GetUserById(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<Users> AddUser(Users users)
    {
        users.Password = BCrypt.Net.BCrypt.HashPassword(users.Password);
        _context.Users.Add(users);
        await _context.SaveChangesAsync();
        return users;
    }

    public async Task ModifyUser(Users users)
    {
        var elem = await _context.Users.FindAsync(users.Id);
        if (elem != null)
        {
            if (users.Password != elem.Password)
            {
                users.Password = BCrypt.Net.BCrypt.HashPassword(users.Password);
            }

            elem.Nom = users.Nom;
            elem.Prenom = users.Prenom;
            elem.PhoneFix = users.PhoneFix;
            elem.Phone = users.Phone;
            elem.Email = users.Email;
            elem.Password = users.Password;
            await _context.SaveChangesAsync();
        }
    }

    public async Task DeleteUser(int id)
    {
        var users = await _context.Users.FindAsync(id);
        if (users != null)
        {
            _context.Users.Remove(users);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<IEnumerable<Users>> GetUserByName(string name)
    {
        return await _context.Users.Where(s => s.Nom.Contains(name)).ToListAsync();
    }

    public async Task<IEnumerable<Users>> FindName(string search)
    {
        if (System.Text.RegularExpressions.Regex.IsMatch(search, "^[0-9]+$"))
        {
            return null!;
        }

        var searchValue = search.ToLower();
        var user = _context.Users.Where(x =>
                x.Prenom.ToLower().StartsWith(searchValue) ||
                x.Nom.ToLower().StartsWith(searchValue) ||
                x.Email.ToLower().StartsWith(searchValue) ||
                x.Service.Nom.ToLower().StartsWith(searchValue) ||
                x.Site.Ville.ToLower().StartsWith(searchValue))
            .ToListAsync();

        return await user;
    }
}