CREATE TABLE productos(
    id INT AUTO_INCREMENTAL PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    precio DECIMAL NOT NULL
);

INSERT INTO productos(nombre, precio) VALUES
('teclado', 20),
('raton', 15),
('monitor', 250)