using AgroAliment.Domain.Models;

namespace AgroAliment.Interface;

public interface ISiteService
{
    Task<List<Site>> GetAllSite();
    Task<IEnumerable<Site>> FindSite(string search);

}