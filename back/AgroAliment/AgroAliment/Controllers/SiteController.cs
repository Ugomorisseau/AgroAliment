using AgroAliment.Domain.Models;
using AgroAliment.Infrastructure.Persistence.Contexts;
using AgroAliment.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AgroAliment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SiteController : ControllerBase
{
    private readonly AppDbContext _context;

    private readonly ISiteService _siteService;

    // private readonly IAuthService _authService;
    private readonly IConfiguration _config;

    public SiteController(AppDbContext context, ISiteService siteService,
        IConfiguration config)
    {
        _context = context;
        _siteService = siteService;
        // _authService = authService;
        _config = config;
    }

    [HttpGet("GetSites")]
    public async Task<ActionResult<IEnumerable<Site>>> GetSites()
    {
        var result = await _siteService.GetAllSite();
        return Ok(result);
    }
    
    [HttpGet("search/{search}")]
    public async Task<IActionResult> FindName(string search)
    {
        var result = await _siteService.FindSite(search);
        return Ok(result);
    }
    
    [HttpPost("AddSite")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<Domain.Models.Service>> AddSite([FromBody] Site site)
    {
        if (site == null)
        {
            return BadRequest();
        }

        await _siteService.AddSite(site);

        return CreatedAtAction(nameof(GetSites), new { id = site.Id }, site);
    }
}