# geekstore-backend

Final project of [Gama Academy](https://www.gama.academy/) Webdevelopment course. It's a MVP of a backend server that manages a REST API for an ecommerce.

![GitHub repo size](https://img.shields.io/github/repo-size/tiagospeckart/geekstore-backend?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/tiagospeckart/geekstore-backend?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/tiagospeckart/geekstore-backend?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/tiagospeckart/geekstore-backend?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/tiagospeckart/geekstore-backend?style=for-the-badge)

## Stacks

- **Node.js**
- **Express**
- **Sequelize ORM**
- **Typescript**

## Frontend Repo

[geek-script-front](https://github.com/GabrielGameDev/geek-script-front)

## Installation

1. Create your own `.env` file according to `example.env`
2. Dowload packages `npm i`
3. Build `npm run build`
4. Test server `npm run dev`

### Create Database

- Run `npm run dbbuild`

Starter admin account: email **admin@admin.com**, pass **admin123**
#### Recreating the database

1. Delete `dist` folder
2. `npm run build`
3. `npm run dbrebuild`
## API Documentation

[SwaggerHub](https://app.swaggerhub.com/apis-docs/tiagospeckart/geek_script/1.0.8)
### Running locally

1. Run server with `npm run dev`
2. Acess URL `localhost:{ENV.APP_PORT}/api-docs` 

For ease of use, I *strongly* recommend the **Swagger Viewer** VS Code Extension. 

To start it:
Open the `swagger.json` file (at /api-docs) and either:
- Press F1 -> Run `Preview Swagger` 
- Press Shift + Alt + P
- Right click file in explorer panel and click `Preview Swagger`

## Project Team

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/tiagospeckart">
        <img src="https://avatars.githubusercontent.com/u/75458110?v=4" width="100px;" alt="Foto de Tiago Martins no GitHub"/><br>
        <sub>
          <b>Tiago M. Speckart</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/tcalmeida">
        <img src="https://avatars.githubusercontent.com/u/113650703?v=4" width="100px;" alt="Foto de Thiago Almeida"/><br>
        <sub>
          <b>Thiago Almeida</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
