##Setup
0. Install nodeJS and npm
1. Install GastbyJS using npm
`npm install -g gatsby-cli`
check by `gatsby --help`

##Creating a Gatsby Site
1. Create a new Gatsby project titled "hello-world" using the starter code from a repository
```
gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```
Omitting the URL at the end will automaticall generate a  site based on default starter
```
gatsby new [SITE_DIRECTORY_NAME]
gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
```
2. Go to project folder
`cd hello-world`
3. Start development server
`gatsby develop`
4. View Site locally, type on your browser
`http://localhost:8000`

##Familiarizing with Gatsby Pages
projectname
└─.cache
└─node_modules
└─public
└─src
 └─pages
    └─index.js
└─.gitnore
└─LICENSE
└─package-lock.json
└─README.md

Gastby uses React framework

###index.js
- landing page



#Sources
https://www.gatsbyjs.org/tutorial/