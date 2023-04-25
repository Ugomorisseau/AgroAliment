using AgroAliment.Domain.Models;

namespace AgroAliment.Interface;

public interface IUserService
{
    Task<List<Users>> GetAllUsers();
    Task<Users> GetUserById(int id);
    Task<Users> AddUser(Users users);
    Task ModifyUser(Users users);
    Task DeleteUser(int id);
    Task<IEnumerable<Users>> GetUserByName(string name);





}