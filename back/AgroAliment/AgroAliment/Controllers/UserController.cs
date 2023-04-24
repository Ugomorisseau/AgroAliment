using AgroAliment.Domain.Models;
using AgroAliment.Interface;
using Microsoft.AspNetCore.Mvc;

namespace AgroAliment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IUserService _userService;
    private readonly IAuthService _authService;
    private readonly IConfiguration _config;

    public UserController(AppDbContext context, IUserService userService, IAuthService authService,
        IConfiguration config)
    {
        _context = context;
        _userService = userService;
        _authService = authService;
        _config = config;
    }

    // [HttpGet("GetUsers")]
    // public async Task<ActionResult<List<Users>>> GetUsers() => await _userService.GetUsers();
    //
    // [HttpPost("LoginWeb")]
    // // public async Task<IActionResult> LoginWeb([FromBody] UserLogin userLogin)
    // // {
    // // }
}