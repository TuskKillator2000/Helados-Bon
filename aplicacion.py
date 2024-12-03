from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app)


def get_db_connection():
    server = 'Miguel-PC'
    database = 'Helados_Bon'
    username = 'sa'
    password = 'MTp070213.'
    connection_string = (
        f'DRIVER={{ODBC Driver 18 for SQL Server}};'
        f'SERVER={server};DATABASE={database};'
        f'UID={username};PWD={password};'
       
        f'TrustServerCertificate=yes;' 
    )
    return pyodbc.connect(connection_string)

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
        cursor = conn.cursor()

 
        cursor.execute(
            "INSERT INTO Clientes (nombre_cliente, correo_cliente) OUTPUT INSERTED.cliente_id VALUES (?, ?)",
            (nombre_cliente, correo_cliente)
        )
        cliente_id = cursor.fetchone()[0]

        
        cursor.execute(
            "INSERT INTO Detalles (cliente_id, total_compra) OUTPUT INSERTED.detalle_id VALUES (?, ?)",
            (cliente_id, total_compra)
        )
        detalle_id = cursor.fetchone()[0]



        conn.commit()

        return jsonify({'message': 'Registro exitoso', 'cliente_id': cliente_id, 'detalle_id': detalle_id}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)
