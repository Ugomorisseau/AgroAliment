using AgroAliment.Domain.Models;

namespace AgroAliment.Interface;

public interface IUserService
{
    Task<List<Users>> GetUsers();
}