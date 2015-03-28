Conectados
==========

Aplicación para Comunidad, creada para 

## Instalación 

Necesita instalar Node.js. 
* [Instalar node.js](http://nodejs.org/download/) (require node.js version >= 0.10.x)

* Clonar el proyecto.

```bash
git clone https://github.com/ceoaliongroo/conectados.git
```
__Nota:__ Es recomendado realizarlo con ssh keypair, para evitar que solicite el usuario y la clave 
constantemente. ([Mas información](https://help.github.com/articles/which-remote-url-should-i-use/))

* Instalar dependencias como modulos globales, abrir el terminal y escribir:

```bash
npm install -g grunt grunt-cli yo
```

```bash
gem install bundler
```
__Nota:__ Ejecutar como ``sudo`` si necesita permisos para instalar.

```
touch Gemfile
```

* Instalar librerias del proyecto.

```bash
cd conectados
npm install
bower install
```

## Demo 
 
* Configurar la aplicación cliente:
```
cp config.example.json config.json
```

* Ejecutar el sitio demo:

```
grunt serve
```

## Descripción técnica en general del proyecto

 La aplicación web:
 
* Esta programada con [AngularJS](https://www.angularjs.org/).
* Sigue las especificaciones de diseno de [Google Design](http://www.google.com/design/)
* Usa la librería [Angular Material](https://material.angularjs.org/#/) la cual contiene componentes en angularjs 
siguiendo las especificaciones de Google Design.

## Preguntas

Escribir un correo a [soporte@bblatinamerica.org](mailto:soporte@bblatinamerica.org)
