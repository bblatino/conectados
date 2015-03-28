Conectados
==========

Application for the Community 

## Installation 

Require install Node.js. 
* [Install node.js](http://nodejs.org/download/) (require node.js version >= 0.10.x)

* Clone the project.

```bash
git clone https://github.com/ceoaliongroo/conectados.git
```
__Note:__ It's recommended do it with ssh keypair, to avoid to asking the user and the password constantlly. ([Mas información](https://help.github.com/articles/which-remote-url-should-i-use/))

* Install dependencies as global modules, open de the terminal and write::

```bash
npm install -g grunt grunt-cli yo
```

```bash
gem install bundler
```
__Nota:__ Execute as ``sudo`` if you need permission to install.

```
touch Gemfile
```

* Install libraries of the project.

```bash
cd conectados
npm install
bower install
```

## Demo 
 
* Configure the client application:
```
cp config.example.json config.json
```

* Execute demo site:

```
grunt serve
```

## Technical general description of the project

 The application web:
 
* It's programmed with [AngularJS](https://www.angularjs.org/).
* Follow the design specification of [Google Design](http://www.google.com/design/)
* Use the library [Angular Material](https://material.angularjs.org/#/) witch contain components in angularjs 
flollowing the Google Design specifications.

## Questions

Write a mail to [soporte@bblatinamerica.org](mailto:soporte@bblatinamerica.org)
