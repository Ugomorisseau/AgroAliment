namespace AgroAliment.Interface;

public interface IServiceService
{
    Task<List<Domain.Models.Service>> GetAllService();
}