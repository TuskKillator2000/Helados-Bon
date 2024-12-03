
create database Helados_Bon

use Helados_Bon


-- Crear tabla Productos

SELECT * from Clientes

-- Crear tabla Clientes
CREATE TABLE Clientes (
    cliente_id INT PRIMARY KEY IDENTITY(1,1),
    nombre_cliente NVARCHAR(100) NOT NULL,
    correo_cliente NVARCHAR(100) NOT NULL
);

-- Crear tabla Detalles (relación de uno a muchos entre Clientes y Compras)
CREATE TABLE Detalles (
    detalle_id INT PRIMARY KEY IDENTITY(1,1),
    cliente_id INT NOT NULL,
    total_compra DECIMAL(10, 2) NOT NULL,
    fecha_compra DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(cliente_id)
);

CREATE TABLE DetallesProductos (
    detalle_producto_id INT PRIMARY KEY IDENTITY(1,1),
    detalle_id INT NOT NULL,
    codigo_producto NVARCHAR(50) NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (detalle_id) REFERENCES Detalles(detalle_id),
    FOREIGN KEY (codigo_producto) REFERENCES Productos(codigo_producto)
);


select * from DetallesProductos




