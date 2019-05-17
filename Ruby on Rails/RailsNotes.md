#

## Create Static Page
1. create controller with index action
```
rails generate controller welcome index
```

### To set static page as landing page/root page
> routes.rb
```
Rails.application.routes.draw do
  get 'welcome/index'
  
  root 'welcome#index'
end
```

## Adding resources in routes
- creates all routes for diff actions that will be adding to app
1. create Doc Model and Controller
```
rails generate model Doc title:string content:text
rake db:migrate
rails generate controller Docs
```
2. list routes
`rake route`

3. create actions based on teh newly listes routes
open `docs_controllers.db`
actions: index, show, new, create, edit, update, destroy
```
def action
end
```

4. create private methods
actions: find_doc, doc_params
- helps in reducing redundancies