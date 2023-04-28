using AgroAliment.Domain.Models;
using AgroAliment.Infrastructure.Persistence.Contexts;
using AgroAliment.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AgroAliment.Controllers;


    [ApiController]
    [Route("api/[controller]")]
    public class ServiceController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IServiceService _service;
        // private readonly IAuthService _authService;
        private readonly IConfiguration _config;

        public ServiceController(AppDbContext context, IServiceService service,
            IConfiguration config)
        {
            _context = context;
            _service = service;
            _config = config;
        }

        [HttpGet("GetServices")]
        public async Task<ActionResult<IEnumerable<Domain.Models.Service>>> GetServices()
        {
            var result = await _service.GetAllService();
            return Ok(result);
        }
        
        [HttpGet("search/{search}")]
        public async Task<IActionResult> FindName(string search)
        {
            var result = await _service.FindService(search);
            return Ok(result);
        }
        
        [HttpPost("AddService")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Domain.Models.Service>> AddService([FromBody] Domain.Models.Service service)
        {
            if (service == null)
            {
                return BadRequest();
            }

            await _service.AddService(service);

            return CreatedAtAction(nameof(GetServices), new { id = service.Id }, service);
        }
}