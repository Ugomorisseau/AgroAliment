using System.Security.Claims;
using AgroAliment.Domain.Models;

namespace AgroAliment.Interface;

public interface IAuthService
{
    Task<Users> Auth(string email, string password);
    string GenerateToken(string secure, List<Claim> claims);
}