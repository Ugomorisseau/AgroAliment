using System.ComponentModel.DataAnnotations;

namespace AgroAliment.Domain.Models
{
    public class Service
    {
        [Key]
        public int Id { get; set; }
        public string Nom { get; set; }
        public ICollection<Users>? Users { get; set; }
    }
    
}