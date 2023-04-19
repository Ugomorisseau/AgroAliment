using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Domain.Models;

[Table("users")]
public partial class Users
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("nom")]
    [StringLength(255)]
    public string Nom { get; set; } = null!;

    [Column("prenom")]
    [StringLength(255)]
    public string Prenom { get; set; } = null!;

    [Column("email")]
    [StringLength(255)]
    public string Email { get; set; } = null!;

    [Column("phonefix")]
    [StringLength(255)]
    public string Phonefix { get; set; } = null!;

    [Column("phone")]
    [StringLength(255)]
    public string Phone { get; set; } = null!;

    [Column("service_id")]
    public int? ServiceId { get; set; }

    [Column("isadmin")]
    public bool? Isadmin { get; set; }

    [Column("password")]
    [StringLength(255)]
    public string Password { get; set; } = null!;

    [ForeignKey("ServiceId")]
    [InverseProperty("Users")]
    public virtual Service? Service { get; set; }
}
