using AgroAliment.Domain.Models;
using AgroAliment.Interface;
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
}