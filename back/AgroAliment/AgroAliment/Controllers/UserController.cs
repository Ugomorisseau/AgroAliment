﻿using AgroAliment.Domain.Models;
using AgroAliment.Interface;
using Microsoft.AspNetCore.Mvc;

namespace AgroAliment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IUserService _userService;
    // private readonly IAuthService _authService;
    private readonly IConfiguration _config;

    public UserController(AppDbContext context, IUserService userService,
        IConfiguration config)
    {
        _context = context;
        _userService = userService;
        // _authService = authService;
        _config = config;
    }

    [HttpGet("GetUsers")]
    public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
    {
        var result = await _userService.GetAllUsers();
        return Ok(result);
    }
}