virtual machine
image - specific versions


benefit:
* no prob in environment variables esp setting up


A. Docker Image
B. Docker Container - one instance of image that was run


commands
type: --help
prune - remove all unused images


command
image
advance:
service
stack
swarm
"you have to figure it out in one week"




docker file


type:
docker image


docker pull ruby: latest


hub.docker.com
* for specific images


pull docker image
type:
docker pull ruby:2.4.3


keyword FROM
* calls base image


images can be remove


type:
docker container
docker container ls


id - image - command used - created time - up time - ports exposed - name


create container
docker run - dit ruby:2.4.3
d - 
i - interactive
t - 


output: string
docker container id <- copy this


type:
docker exec -it (id) /bin/bash
output:
root@(id)


think of it as a virtual box
you can build docker image in a docker image etc


type:
root@(id):/ irb


terminate
type:
docker kill (id)


note: can gg your mem and storage


Docker File


type:
docker build
output:
runs docker file




CCNA SHIT IS REAL
port 9292 is not exposed
publish port in your computer and to expose








// docker image
/ creating base image


FROM ruby:2.4.3  // call base image


// install node
// install postgress
// notify tools


//copy ssh keys - private repo needed in gem file


//chmod


// install bundler


// add gemfile
// add gemfile lock


workdir //workdir 
copy // add to directory, invalidates caching


// if i have previous dockeri mages with some gemfile
//copies cache




-----
// bundle check - checks if my bago


// add - copy
//


//expose port 3000 - ruby , 5432 - postgres, pythin 8000 - gives access docker container palabas
// if not declares, bulag ung vbox


//entrypoint - command it runs once u run the docker image, rails - default - ["bundle", "exec", "rails", "server"] or flexibility: ["bin/bash"]