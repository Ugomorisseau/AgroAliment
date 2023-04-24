using AgroAliment.Domain.Models;
using AgroAliment.Interface;

namespace Api;

public class AuthService
{
    private readonly IConfiguration _config;
    private readonly AppDbContext _context;

    public AuthService(IConfiguration config, AppDbContext context)
    {
        _config = config;
        _context = context;
    }
    
    // // public async Task<Users> Auth(string email, string password)
    // // {
    // //     var user = await _context.Users.Where(s => s.Email == email).SingleOrDefaultAsync();
    // //
    // //     if (user == null)
    // //     {
    // //         return null;
    // //     }
    // //
    // //     if (!BCrypt.Net.BCrypt.Verify(password, user.Password))
    // //     {
    // //         return null;
    // //     }
    // //
    // //     return user;
    // // }
    //
    // public Users Auth(string email, string password)
    // {
    //     var user = _context.Users
    //         .FirstOrDefault(u => u.Email == email.ToLower());
    //
    //     if (user == null)
    //         return null;
    //
    //     return user;
    // }
    //
    // // Fonction qui va générer le token
    // public string GenerateToken(string secure, List<Claim> claims)
    // {
    //     var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secure));
    //     var tokenDesc = new SecurityTokenDescriptor
    //     {
    //         Issuer = _config["Jwt:Issuer"],
    //         Audience = _config["Jwt:Audience"],
    //         Subject = new ClaimsIdentity(claims),
    //         Expires = DateTime.UtcNow.AddMinutes(Convert.ToDouble(_config["Jwt:Expiry"])),
    //         SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
    //     };
    //
    //     var tokenHandler = new JwtSecurityTokenHandler();
    //     var securityToken = tokenHandler.CreateToken(tokenDesc);
    //     return tokenHandler.WriteToken(securityToken);
    // }
}