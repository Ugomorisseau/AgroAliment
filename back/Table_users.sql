INSERT INTO users (nom, prenom, password, email, phoneFix, phone, isAdmin, service_id)
SELECT 
    'Nom' || generate_series(1, 40),
    'Prenom' || generate_series(1, 40),
    MD5(CAST(RANDOM() AS TEXT)) AS password,
    'email' || generate_series(1, 40) || '@example.com',
    '01' || floor(random() * 100000000) AS phoneFix,
    '06' || floor(random() * 100000000) AS phone,
    (random() < 0.5) AS isAdmin,
    service.id
FROM 
    service;
	
	
	
	
dotnet ef dbcontext scaffold "Server=localhost:5432;Database=AgroAliment;User=postgres;Password=umorisseau;" "Npgsql.EntityFrameworkCore.PostgreSQL" -o ./Domain/Models --data-annotations --force --no-pluralize --no-onconfiguring --context AppDbContext --context-dir ./Infrastructure/Persistence/Contexts