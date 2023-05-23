# PokeAPI Prueba Técnica
![](https://img.shields.io/badge/Code_Backend-Python-informational?style=flat&logo=python&color=4b8bbe)
![](https://img.shields.io/badge/Framework-Django_REST-informational?style=flat&logo=django&color=ff1709)
![](https://img.shields.io/badge/Code_FrontEnd-JavaScript-informational?style=flat&logo=javascript&color=%23F7DF1E)
![](https://img.shields.io/badge/Framework-VueJS-informational?style=flat&logo=vuedotjs&color=%234FC08D)

Consumo de la API de Pokemon [(Documentación API)](https://pokeapi.co) mediante el framework progresivo VueJS e implementación de un sistema de autenticación por medio de Django Rest Framework.
<br>
<div align="center">
  <img src="https://github.com/shincapie16/pokeapi-prueba/blob/master/imagenes/portada.png" width="700" height="500"/>
</div>

## Configuración Inicial

- Clonar el siguiente repositorio
```
git clone https://github.com/shincapie16/pokeapi-prueba.git
```
<b>NOTA:</b> Se deben estar corriendo tanto el back como el front para activar el sistema de autenticación 
### Configuración Backend
- Dirigirse a la carpeta en donde se encuentra el BackEnd del proyecto
  ```
  cd prueba_env
  ```

- Crear el entorno virtual (Si no está creado) y activarlo
  - Windows:
  ```
  py -m venv env //Creación
  .\env\Scripts\activate //Opcional
  ```

- Instalar las dependencias necesarias
  ```
  pip install -r requirements.txt
  ```
- Dirigirse a la carpeta del proyecto de Django Rest
  ```
  cd pokemon_back
  ```
- Crear el superusuario para tener acceso al panel de administración
 ```
  python manage.py createsuperuser
  ```
- Ejecución del Back del Proyecto
 ```
  python manage.py runserver
  ```

### Configuración Frontend
- Dirigirse a la carpeta raíz
- Dirigirse a la carpeta en donde se encuentra el Frontend del proyecto
  ```
  cd pokemon_front
  ```
 - Instalar todas las depedencias requeridas (en este caso de utilizó axios para realizar solicitudes HTTP, vue y vuex para el manejo de estados del usuario y vue-router para manejar el enrutamiento del proyecto)
 ```
  npm install
  ```
-Ejecutar el servidor Local:
 ```
  npm run serve
  ```
  
## Vistas Principales
### Login y Registro:
Se realizó un sistema de autenticación en donde el usuario puede registrarse e iniciar sesión simultáneamente, también está la funcionalidad de iniciar sesión directamente. En ambos casos se genera un token que maneja la autenticación del usuario en su navegador posteriormente el usuario es redireccionado a la página principal y ya tiene los permisos para ver cada pokemon a detalle.
<table>
  <tr>
    <td><img src="https://github.com/shincapie16/pokeapi-prueba/blob/master/imagenes/login.png" width="500" height="500"/></td>
    <td><img src="https://github.com/shincapie16/pokeapi-prueba/blob/master/imagenes/registro.png" width="500" height="500"/></td>
  </tr>
</table>

### Vista detalle Pokemón
Una vez el usuario esté autenticado podrá ver las habilidades de cada pokemón, también tendrá la opción de regresar y ver todos los pokemones nuevamente.

<img src="https://github.com/shincapie16/pokeapi-prueba/blob/master/imagenes/pokedetail.png" width="500" height="500"/>

### Inicio
Es la página principal del proyecto, en donde el usuario podrá registrarse/iniciar sesión o cerrar sesión según sea el caso pertinente, además aquí podrá acceder a cada pokemón siempre y cuando tenga una sesión iniciada:

<img src="https://github.com/shincapie16/pokeapi-prueba/blob/master/imagenes/portada.png" width="700" height="500"/>
