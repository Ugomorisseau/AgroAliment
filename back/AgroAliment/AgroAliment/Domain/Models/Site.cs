using System.ComponentModel.DataAnnotations;

namespace AgroAliment.Domain.Models
{
    // Classe représentant un site
    public class Site
    {
        [Key]
        public int Id { get; set; } 
        public string Ville { get; set; } 
        public ICollection<Users>? Users { get; set; }
    }
}