# PostgreSQL

## Usage

### Installation

`docker pull postgres:tag`

tags: latest, 11

### Creating a Volume 

Create a volume for persistent data

`mkdir`

### Running the Container

`docker run --rm   --name ca-postgres -e POSTGRES_USER=cadev -e POSTGRES_PASSWORD=catchall2019 -d -p 5432:5432 -v $home/xyza.rivera/volumes/postgres:/var/lib/postgresql/data  postgres:11`

### Running PSQL

`$ docker run --rm -t -i --link ca-postgres:pg postgres:11 bash`
`root@79f4e2d1a395:/# psql -h $PG_PORT_5432_TCP_ADDR -p $PG_PORT_5432_TCP_PORT -d postgres -U cadev --password`

## Sources

- https://hub.docker.com/_/postgres
- https://docs.docker.com/engine/examples/postgresql_service/
- https://mukulrathi.com/docker-postgres-flask/
- https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198

- https://www.freecodecamp.org/news/docker-development-workflow-a-guide-with-flask-and-postgres-db1a1843044a/
- https://vsupalov.com/flask-docker-compose-development-dependencies/ 
- https://vsupalov.com/flask-sqlalchemy-postgres/
- https://medium.com/@dushan14/create-a-web-application-with-python-flask-postgresql-and-deploy-on-heroku-243d548335cc
- https://realpython.com/flask-by-example-part-1-project-setup/

https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers/?source=post_page---------------------------
