<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">


# Instructions dev environment

1. Clone project
2. Rename ``` env.template ``` into ``` .env ```
3. Execute
 ```
yarn install
 ```
4. Mount the image
```
docker compose up -d (-d for detach but it's not mandatory)
```

5. Mount nest backend
```
yarn start:dev
```

6. Vist the graphql api
```
localhost:3000/graphql
```