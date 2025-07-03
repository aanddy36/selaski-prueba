# PRUEBA TÉCNICA SELASKI - ANDRÉS DEL CHIARO

## Setup base de datos

Para poder correr este proyecto localmente, se necesita (1) tener MySQL instalado, (2) crear la DB 'prueba_andres_selaski' en MySQL, (3) crear la variable de ambiente DB_URL y (4) crear la migración de Prisma para generar las tablas y el cliente.

Paso a paso sería:

1. Instalar MySQL desde https://www.mysql.com/downloads/ en caso de no tenerlo
2. Ingresar al servidor MySQL desde la CLI proporcionada por MySQL llamada "MySQL 8.0 CLI"
3. Con el comando 'CREATE DATABASE prueba_andres_selaski' creamos la DB localmente.
4. Ahora, en nuestro proyecto deberemos crear el archivo .env, y dentro colocar la variable DATABASE_URL. Esta seguirá el patrón DATABASE_URL="mysql://USUARIO:CONTRASEÑA@HOST:PUERTO/NOMBRE_BASE" que podemos encontrar en .env.example. 

Con ya tener creada nuestra DB localmente, ya podemos seguir con el siguiente paso.


## Correr el proyecto localmente


Para correr el proyecto, debemos clonar el repo con: 

```bash
cd control-transaccional
```

Luego debemos instalar las dependencias con 

```bash
npm install
```

Creamos el archivo .env y agregamos el URL de nuestra DB siguiendo el ejemplo de .env.example.

Luego generamos la estructuta de tablas en nuestra DB local y generamos el cliente de prisma con:

```bash
npx prisma migrate dev --name crear_tablas
```

Por último, corremos el proyecto con el comando :

```bash
npm run start
```

Los endpoints los podremos probar en Postman o Thunderclient. Ej: http://localhost:3000/users

