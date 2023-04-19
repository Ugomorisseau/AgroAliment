using AgroAliment.Domain.Models;
using AgroAliment.Infrastructure.Persistence.Contexts;
using AgroAliment.Interface;
using AgroAliment.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace AgroAliment.Controllers;

[ApiController]
[Route("api/[controller]")]

public class UserController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IUserService _userService;

    public UserController(AppDbContext context, IUserService userService)
    {
        _context = context;
        _userService = userService;
    }


    

    // public Users GetById(string id)
    // {
    // }
    
    [HttpGet("GetUsers")]
    public async Task<ActionResult<List<Users>>> GetUsers()
    {
        return await _userService.GetUsers();
    }

}