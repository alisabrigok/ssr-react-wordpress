# Wordpress + React + SSR Using Next.js

To run the project:

- [Download, install and run Docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

Then from your terminal, with:

- `docker-compose up -d`

every necessary WordPress files and configurations will be installed and finally with:  

- `docker exec -it wp-headless /bin/bash`

Docker container start running. In this screen, respectively;

- `yarn install`
- `cd frontend`
- `yarn install`

run them and hit below command:

- `yarn start`

Voila! Frontend is also running.

*Wordpress Dashboard:* http://localhost:8080/wp-admin
*Frontend:* http://localhost:3000
