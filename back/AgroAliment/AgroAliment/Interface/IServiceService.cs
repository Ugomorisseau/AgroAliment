namespace AgroAliment.Interface;

public interface IServiceService
{
    Task<List<Domain.Models.Service>> GetAllService();
    Task<IEnumerable<Domain.Models.Service>> FindService(string search);
    Task<Domain.Models.Service> AddService(Domain.Models.Service services);


}