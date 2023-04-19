﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Domain.Models;

[Table("service")]
public partial class Service
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("nom")]
    [StringLength(255)]
    public string Nom { get; set; } = null!;

    [Column("site_id")]
    public int? SiteId { get; set; }

    [ForeignKey("SiteId")]
    [InverseProperty("Service")]
    public virtual Site? Site { get; set; }

    [InverseProperty("Service")]
    public virtual ICollection<Users> Users { get; set; } = new List<Users>();
}
