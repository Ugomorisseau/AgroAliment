using System.ComponentModel.DataAnnotations;

namespace AgroAliment.Domain.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; } 
        public string Nom { get; set; } 
        public string Prenom { get; set; } 
        public string PhoneFix { get; set; } 
        public string Phone { get; set; } 
        public string Email { get; set; } 
        public string Password { get; set; } 

        // Foreign keys
        public int ServiceId { get; set; }
        public int SiteId { get; set; }
        public int RoleId { get; set; }

        public Service? Service { get; set; } 
        public Site? Site { get; set; } 
        public Role? Role { get; set; } 
    }

    public class LoginModel
    {
        public string Email { get; set; } 
        public string Password { get; set; } 
    }
}