﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AgroAliment.Domain.Models;

[Table("site")]
public partial class Site
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("ville")]
    [StringLength(100)]
    public string Ville { get; set; } = null!;

    [InverseProperty("Site")]
    public virtual ICollection<Service> Service { get; set; } = new List<Service>();
}