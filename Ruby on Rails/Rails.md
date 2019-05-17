# MVC architecture

## Controller
- ActionController
- gets request
- interacts to view and model
- handles decisions
- makes data available as instance variables 
- contains several actions/def
- controlls rendering and redirection

## Model
- ActiveRecord
- object requested
- where logic happens
- handles data, relationships, validations and business logic
- interacts with db
- Instances
  - kinds of object

## View
- ActionView
- ERb - embedded Ruby 
- view request in a template
- responsible with presentation

## Folders
convention > configuration
```
App
helpers - modules
mailers- emails
bin - ruby scripts
config - 
database.yml - db setup
routes.rb - app handle incoming web request
lib - reusable code library
log 
public - error messages
test 
tmp - temporary files
vendor - assets needed by 3rd party gems
gemfile - prepackaged codes
rakefile - locate and note tasks in cmd line
```

# Creating a Ruby App
1. create app
2. run server
3. create models
4. push migration
5. create controllers

## Create a new Rails app 
```
$ rails new app_name
$ cd app_name
```

### Check Ruby and Rails versions
```
$ ruby -v
$ rails -v
```

### installing dependencies from an existing project
```
$ bundle install
$ rails db:migrate db:seed
```

## run rails server
```
$rails s
```

## Creating models
```
$ rails generate model [modelName] [tableName:dataType] [tableName:dataType]
$ rails generate model Post title:string body:text
```
- model name is always singular and capitalized
- tableName:dataType
- creates migration file, (app/models/post.rb), test files
- models inherit from ActiveRecord::Base
- corresponding db name is plural and lowercase
- object of app

### Model Dataypes


## push migration to database
```
$ rake db:migrate
```
- pushes migration to db
- creates table and db
- creates/update schema.rb (do not disturb)

## Creating controllers
```
$ rails generate controller [controllerName] [action] [action]
$ rails generate controller Posts index new show destroy
```
- creates controllers in app directory
- controller name is plural and capitalized
- interacts with app
- actions are defined
- creates routes
- creates views defined by the action
- creates tests
- creates assets and stylesheets
- controllers inherit from ApplicationController
- ApplicationController inherits from ActionController::Base

## Routes
routes.rb
- how app receives incoming requests
- how renders vies and works with the controller
- http request
-- get - requests info
-- post - send 
-- patch/put - update
-- delete - destroy
```
$ rake routes
```
- shows routes created
- routes corresponds to a controller, action in that controller, and view corresponding to that action
- VERBS can be used for methods

# Adding resources in routes
- creates all routes for diff actions that will be adding to app
1. create Doc Model and Controller
```
$ rails generate model Doc title:string content:text
$ rake db:migrate
$ rails generate controller Docs
```
2. list routes
` $ rake route`

3. create actions based on teh newly listes routes
open `docs_controllers.db`
actions: index, show, new, create, edit, update, destroy
```
def action
end
```

4. create use private methods following DRY
actions: find_doc, doc_params
- helps in reducing redundancies

# Updating Database and adding associations
run migration commands
`rails generate migration [action] [tableName:dataType]`
go to models


# Resources
- https://www.udemy.com/8-beautiful-ruby-on-rails-apps-in-30-days/learn/v4/content