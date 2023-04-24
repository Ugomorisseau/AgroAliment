INSERT INTO users (nom, prenom, password, email, phoneFix, phone, isAdmin, service_id)
SELECT 
    'Nom' || generate_series(1, 40),
    'Prenom' || generate_series(1, 40),
    bcrypt(CAST(RANDOM() AS TEXT)) AS password,
    'email' || generate_series(1, 40) || '@example.com',
    '01' || floor(random() * 100000000) AS phoneFix,
    '06' || floor(random() * 100000000) AS phone,
    (random() < 0.5) AS isAdmin,
    service.id
FROM 
    service;
	
	
	
	
