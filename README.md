# PRUEBA TÉCNICA SELASKI - ANDRÉS DEL CHIARO

## Configuración de la base de datos

Para poder correr este proyecto localmente, se necesita (1) tener MySQL instalado, (2) crear la DB 'prueba_andres_selaski' en MySQL, (3) crear la variable de ambiente DB_URL y (4) crear la migración de Prisma para generar las tablas y el cliente.

Paso a paso sería:

1. Instala MySQL si aún no lo tienes: [Descargar MySQL](https://www.mysql.com/downloads/)
2. Accede a tu servidor MySQL desde la CLI (por ejemplo: **MySQL 8.0 Command Line Client**).
3. Ejecuta el siguiente comando para crear la base de datos:

   ```sql
   CREATE DATABASE prueba_andres_selaski;
   ```

4. En el proyecto, crea un archivo .env en la raíz y define la variable DATABASE_URL con este formato:

   ```bash
   DATABASE_URL="mysql://USUARIO:CONTRASEÑA@HOST:PUERTO/prueba_andres_selaski"
   ```

Puedes guiarte por el archivo .env.example.

## Correr el proyecto localmente

Para correr el proyecto, debemos clonar el repo con:

```bash
git clone https://github.com/aanddy36/selaski-prueba.git
cd selaski-prueba
```

Instala las dependencias con

```bash
npm install
```

Crea las tablas en la base de datos y genera el cliente Prisma:

```bash
npx prisma migrate dev --name crear_tablas
```

Por último, corremos el proyecto con el comando :

```bash
npm run start
```

Los endpoints los podremos probar en Postman o Thunderclient.

Ejemplo:

```bash
GET http://localhost:3000/users
```