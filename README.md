1. Instalar MySQL desde https://www.mysql.com/downloads/
2. Ingresar al servidor MySQL desde la CLI proporcionada por MySQL llamada "MySQL 8.0 CLI"
3. Crearemos la DB manualmente dado que MySQL no permite que la creemos al migrar en Prisma.
4. Con el comando 'CREATE DATABASE prueba_andres_selaski'
5. Ahora, en nuestro proyecto deberemos crear el archivo .env, y dentro colocar la variable DATABASE_URL.
6. Esta seguirá el patrón DATABASE_URL="mysql://USUARIO:CONTRASEÑA@HOST:PUERTO/NOMBRE_BASE". 
7. Siguiendo este valor "mysql://USUARIO:CONTRASEÑA@localhost:3306/prueba_andres_selaski" solo deberá cambiar el nombre de usuario y contraseña.
8. Una vez creada la db 'prueba_andres_selaski' localmente, y asignada la variable de ambiente DATABSE_URL, desde nuestro editor de código podemos crear las tablas y el cliente de prisma con el comando 'npx prisma migrate dev --name crear_tablas'.
