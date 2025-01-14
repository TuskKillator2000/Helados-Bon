from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)


def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host='migueldb.mysql.database.azure.com',  # Cambia según la configuración de tu base de datos
            database='Helados_Bon',
            user='adming',       # Cambia esto a tu usuario de MySQL
            password='MTp070213.',
            ssl_disabled=False  # Cambia esto a tu contraseña de MySQL
        )

        return connection
    except Error as e:
        print(f"Error al conectar con la base de datos: {e}")
        return None


@app.route('/registrar', methods=['POST'])
def registrar():
    try:
        data = request.json

        nombre_cliente = data.get('nombre_cliente')
        correo_cliente = data.get('correo_cliente')
        total_compra = data.get('total_compra')
        productos = data.get('productos', [])

        if not all([nombre_cliente, correo_cliente, total_compra, productos]):
            return jsonify({'error': 'Datos incompletos, revise el formulario.'}), 400

        conn = get_db_connection()
        if conn is None:
            return jsonify({'error': 'Error al conectar con la base de datos.'}), 500

        cursor = conn.cursor()

        # Insertar en la tabla Clientes
        cursor.execute(
            "INSERT INTO Clientes (nombre_cliente, correo_cliente) VALUES (%s, %s)",
            (nombre_cliente, correo_cliente)
        )
        conn.commit()
        cliente_id = cursor.lastrowid  # Obtener el último ID insertado

        # Insertar en la tabla Detalles
        cursor.execute(
            "INSERT INTO Detalles (cliente_id, total_compra) VALUES (%s, %s)",
            (cliente_id, total_compra)
        )
        conn.commit()
        detalle_id = cursor.lastrowid  # Obtener el último ID insertado

        # Aquí puedes insertar en la tabla DetallesProductos si es necesario
        # Ejemplo:
        for producto in productos:
            codigo_producto = producto.get('codigo_producto')
            cantidad = producto.get('cantidad')
            cursor.execute(
                "INSERT INTO DetallesProductos (detalle_id, codigo_producto, cantidad) VALUES (%s, %s, %s)",
                (detalle_id, codigo_producto, cantidad)
            )
        conn.commit()

        return jsonify({'message': 'Registro exitoso', 'cliente_id': cliente_id, 'detalle_id': detalle_id}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    finally:
        if 'conn' in locals() and conn.is_connected():
            cursor.close()
            conn.close()


if __name__ == '__main__':
    app.run(debug=True)
