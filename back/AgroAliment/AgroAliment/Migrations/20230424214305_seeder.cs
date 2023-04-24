using System.Security.Cryptography;
using System.Text;
using AgroAliment.Domain.Models;
using FakerDotNet;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AgroAliment.Migrations
{
    /// <inheritdoc />
    public partial class seeder : Migration
    {
        public static string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                var hash = BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
                return hash;
            }
        }
        
          protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Nom" },
                values: new object[,]
                {
                    { 1, "User" },
                    { 2, "Admin" }
              });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "Nom" },
                values: new object[,]
                {
                    { 1, "Comptabilité" },
                    { 2, "Production" },
                    { 3, "Accueil" },
                    { 4, "Informatique" },
                    { 5, "Commercial" }
                });

            migrationBuilder.InsertData(
                table: "Sites",
                columns: new[] { "Id", "Ville" },
                values: new object[,]
                {
                    { 1, "Paris" },
                    { 2, "Nantes" },
                    { 3, "Toulouse" },
                    { 4, "Nice" },
                    { 5, "Lille" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Nom", "Prenom", "PhoneFix", "Phone", "Email", "Password", "ServiceId", "SiteId", "RoleId" },
                values: new object[,]
                {
                    { 1, "Martin", "Jean", "0123456789", "0612345678", "jean.martin@votreprojet.com", HashPassword("test"), 1, 1, 1 },
                    { 2, "Dupont", "Paul", "0234567890", "0623456789", "paul.dupont@votreprojet.com", HashPassword("test1"), 2, 2, 2 },
                    { 3, "Dubois", "Marie", "0345678901", "0634567890", "marie.dubois@votreprojet.com", HashPassword("test2"), 3, 3, 2 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2, 3 });

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2, 3, 4 });

            migrationBuilder.DeleteData(
                table: "Services",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2, 3 });

            migrationBuilder.DeleteData(
                table: "Sites",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2, 3 });
        }
    }
}
