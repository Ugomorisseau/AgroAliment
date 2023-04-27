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

        public virtual Service? Service { get; set; } 
        public virtual Site? Site { get; set; } 
        public Role? Role { get; set; } 
    }

    public class LoginModel
    {
        public string Email { get; set; } 
        public string Password { get; set; } 
    }

    public class UserViewModel
    {
        public int Id { get; set; } 
        public string Nom { get; set; } 
        public string Prenom { get; set; } 
        public string PhoneFix { get; set; } 
        public string Phone { get; set; } 
        public string Email { get; set; }
        
        // Foreign keys
        public int ServiceId { get; set; }
        public int SiteId { get; set; }
        public int RoleId { get; set; }
        
        public UserViewModel(Users user)
        {
            Id = user.Id;
            Nom = user.Nom;
            Prenom = user.Prenom;
            PhoneFix = user.PhoneFix;
            Phone = user.Phone;
            Email = user.Email;
            ServiceId = user.ServiceId;
            SiteId = user.SiteId;
            RoleId = user.RoleId;
        }
    }
}