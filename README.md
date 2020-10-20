# e-commerce-frontend

Este proyecto hace parte del [proyecto e-commerce](https://github.com/users/davidauza-engineer/projects/1) realizado para la materia Desarrollo de Software en Equipo TSP del Politécnico Grancolombiano.

El presente repositorio contiene un proyecto realizado con React, que sirve como cliente para el proyecto mencionado.

Se implementaron los siguientes módulos:

## Módulo de registro

Se implementaron dos dormularios con las siguientes características:

| Formulario | Características |
-------------|-----------------|
Registro de usuario | Contiene los campos Nombre, Correo electrónico, Contraseña y Repetir Contraseña. Envía un POST request a https://ecommercetsp.herokuapp.com/api/users |
Inicio de sesión | Contiene los campos Correo electrónico y contraseña. Envía un POST request a https://ecommercetsp.herokuapp.com/api/authenticate |

## Módulo de Sesiones

Se implemento el control de acceso, como lo son las rutas publicas y privadas:

| Acceso | Características |
-------------|-----------------|
Rutas Publicas | Contienen las rutas para los componentes "Registro" y "Login" |
Rutas Privadas | Contiene el acceso a la aplicación, para acceder a esta ruta es necesario el token proporcionado por BE |

## Módulo Home
Es la vista inicial de la aplicacion despues de hacer Login, en esta vista se encuentran los productos proporcionados por BE