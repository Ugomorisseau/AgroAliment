using System.Security.Cryptography;
using System.Text;
using AgroAliment.Domain.Models;
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
                    { 1, "Martin", "Sophie", "0321456789", "0601020304", "sophie.martin@exemple.com", HashPassword("motdepasse1"), 1, 2, 2 },
                    { 2, "Lefebvre", "Pierre", "0187654321", "0645879123", "pierre.lefebvre@exemple.com", HashPassword("motdepasse2"), 2, 1, 2 },
                    { 3, "Dupont", "Julie", "0478563214", "0607080910", "julie.dupont@exemple.com", HashPassword("motdepasse3"), 3, 3, 1 },
                    { 4, "Durand", "Marc", "0234567891", "0678912345", "marc.durand@exemple.com", HashPassword("motdepasse4"), 1, 1, 1 },
                    { 5, "Leroy", "Valérie", "0543219876", "0689741236", "valerie.leroy@exemple.com", HashPassword("motdepasse5"), 2, 3, 1 },
                    { 6, "Garcia", "Manuel", "0765432189", "0612345678", "manuel.garcia@exemple.com", HashPassword("motdepasse6"), 2, 3, 1 },
                    { 7, "Roux", "Nathalie", "0389564213", "0654782319", "nathalie.roux@exemple.com", HashPassword("motdepasse7"), 3, 1, 2 },
                    { 8, "Fournier", "Jean", "0254879632", "0698521473", "jean.fournier@exemple.com", HashPassword("motdepasse8"), 1, 2, 1 },
                    { 9, "Blanc", "Caroline", "0321789564", "0678901234", "caroline.blanc@exemple.com", HashPassword("motdepasse9"), 2, 1, 2 },
                    { 10, "Mercier", "Luc", "0678953214", "0609876543", "luc.mercier@exemple.com", HashPassword("motdepasse10"), 3, 3, 1 },
                    { 11, "Moreau", "Sylvie", "0645891236", "0632147856", "sylvie.moreau@exemple.com", HashPassword("motdepasse11"), 1, 3, 2 },
                    { 12, "Girard", "Alexandre", "0432165897", "0607080910", "alexandre.girard@exemple.com", HashPassword("motdepasse12"), 2, 3, 1 },
                    { 13, "Barbier", "Sophie", "0543217896", "0678912345", "sophie.barbier@exemple.com", HashPassword("motdepasse13"), 3, 1, 2 },
                    { 14, "Perrin", "Pierre", "0358976541", "0698541236", "pierre.perrin@exemple.com", HashPassword("motdepasse14"), 5, 2, 1 },
                    { 15, "David", "Céline", "0234567890", "0601020304", "celine.david@exemple.com", HashPassword("motdepasse15"), 2, 4, 2 },
                    { 16, "Rousseau", "Franck", "0412589632", "0634857392", "franck.rousseau@exemple.com", HashPassword("motdepasse16"), 3, 3, 1 },
                    { 17, "Lecomte", "Elodie", "0678954321", "0625348971", "elodie.lecomte@exemple.com", HashPassword("motdepasse17"), 5, 5, 2 },
                    { 18, "Bourgeois", "Thierry", "0478563210", "0678123456", "thierry.bourgeois@exemple.com", HashPassword("motdepasse18"), 2, 5, 1 },
                    { 19, "Fontaine", "Marie", "0314567890", "0609101112", "marie.fontaine@exemple.com", HashPassword("motdepasse19"), 3, 1, 2 },
                    { 20, "Martin", "Jean", "0123456789", "0612345678", "jean.martin@votreprojet.com", HashPassword("test"), 4, 1, 1 },
                    { 21, "Dupont", "Paul", "0234567890", "0623456789", "paul.dupont@votreprojet.com", HashPassword("test1"), 2, 3, 2 },
                    { 22, "Dubois", "Marie", "0345678901", "0634567890", "marie.dubois@votreprojet.com", HashPassword("test2"), 3, 4, 2 }
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
