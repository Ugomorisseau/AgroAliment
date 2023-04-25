using System.Security.Claims;
using AgroAliment.Domain.Models;
using AgroAliment.Interface;
using Microsoft.AspNetCore.Authorization;
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

    public UserController(AppDbContext context, IUserService userService,
        IConfiguration config, IAuthService authService)
    {
        _context = context;
        _userService = userService;
        _authService = authService;
        _config = config;
    }

    [HttpGet("GetUsers")]
    public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
    {
        var result = await _userService.GetAllUsers();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Users>> GetUserById(int id)
    {
        var user = await _userService.GetUserById(id);

        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }

    [HttpPost("Login")]
    public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
    {
        var user = await _authService.Login(loginModel.Email, loginModel.Password);
        if (user != null)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role?.Nom ?? "User")
            };
            var token = _authService.GenerateToken(_config["Jwt:Key"], claims);
            return Ok(token);
        }

        return Unauthorized();
    }


    [HttpPost]
    [Authorize(Roles = "Administrateur")]
    public async Task<ActionResult<Users>> AddUser([FromBody] Users user)
    {
        if (user == null)
        {
            return BadRequest();
        }

        await _userService.AddUser(user);

        return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Administrateur")]
    public async Task<IActionResult> ModifyUser(int id, [FromBody] Users user)
    {
        if (user == null || id != user.Id)
        {
            return BadRequest();
        }

        try
        {
            await _userService.ModifyUser(user);
        }
        catch (KeyNotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Administrateur")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _userService.GetUserById(id);

        if (user == null)
        {
            return NotFound();
        }

        try
        {
            await _userService.DeleteUser(id);
        }
        catch (KeyNotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpGet("name/{nom}")]
    public async Task<ActionResult<IEnumerable<Users>>> GetUserByName(string name)
    {
        var user = await _userService.GetUserByName(name);
        return Ok(user);
    }
}