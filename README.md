EasyBoni
=========

This version is a Single Page Application with PHP backend. See also other versions:

- Java with JSF, JAX-RS, Spring IoC, JPA: <https://github.com/marian-r/easy-boni-jsf>
- ASP.NET MVC with Entity Framework: <https://github.com/marian-r/easy-boni-aspnet>
- Ruby on Rails: <https://github.com/marian-r/easy-boni-rails>

What is it?
-----------

Student meals system in Slovenia gives students a wide range of restaurants around the country
in which they can choose special menus for discounted prices. All the restaurants are listed on
the official website [www.studentska-prehrana.si](https://www.studentska-prehrana.si/).

The aim of EasyBoni web application is to provide information about the restaurants
involved in the student meals system in a more usable and user-friendly way than the official website.

The main features of the application are the following:

- Display restaurants on a map
- Search among restaurants
- Filter by offered services i.e. vegetarian meals, meals suitable for celaic disease, access for disabled, ...
- Rating of restaurants

Coming soon:

- User comments
- Filter by special categories of restaurants i.e. Asian, Mexican, Indian, ...

The data about the restaurants are provided by [bonar.si](https://github.com/mrfoto/bonar) which offers REST API.
This website has a crawler for the official student meals website and performs updates every day.

About technologies
------------------

This is a Single Page Application developed using Backbone.js with PHP back-end build upon Nette Framework.

### Front-end

- Backbone.js
- Require.js
- JQuery 2.1
- Bootstrap 3.3
- LoDash (Underscore.js) templates
- Google Maps API v3

### Back-end

- Nette Framework 2.2
- Nette Database layer
- MySQL and PostgreSQL support
- Composer

Cloud hosting
-------------

The application is deployed on Heroku public cloud platform with the following URL:

<https://easy-boni.herokuapp.com/>

It uses multi buildpack which gives the ability to use both PHP buildpack for backend and Node.js buildpack for Bower install.

How to run the project
----------------------

### Prerequisites:

- Webserver with PHP >= 5.3, make sure it meets the [requirements of Nette Framework](http://doc.nette.org/en/2.2/requirements)
- MySQL or PostgreSQL
- Composer
- Node.js

### Steps to run the application:

1. **Prepare the database**

    - Create MySQL or PostgreSQL database with name ```easy_boni```.
    - Create database config file ```backend/config/credentials.neon``` according to ```credentials.neon.example``` file.

2. **Install dependencies**

    - Open terminal in the root directory.
    - Run command to install PHP dependencies:
        
            composer install
        
    - Run command to install Bower:
        
            npm update
        
    - Run command to install Bower dependencies: 
        
            node_modules/.bin/bower install
 
3. **Run the application** 
    
    Open browser and run the application ```http://localhost/<path_to_app>/app/```.
