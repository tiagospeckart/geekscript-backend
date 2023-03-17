# geekstore-backend

This repository is the final project for the Gama Academy Web Development course, featuring a minimum viable product (MVP) of a backend server that manages a REST API for an e-commerce platform.

![GitHub repo size](https://img.shields.io/github/repo-size/tiagospeckart/geekstore-backend?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/tiagospeckart/geekstore-backend?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/tiagospeckart/geekstore-backend?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/tiagospeckart/geekstore-backend?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/tiagospeckart/geekstore-backend?style=for-the-badge)

## Tech Stack

- **Node.js**
- **Express**
- **Sequelize ORM**
- **Typescript**

## Frontend Repository

### [geek-script-front](https://github.com/GabrielGameDev/geek-script-front)

## Installation

1. Create your own `.env` file according to `example.env`
2. Dowload packages `npm i`
3. Build `npm run build`
4. Test server `npm run dev`

### Recreating the database

1. Delete `dist` folder
2. `npm run build`
3. `npm run dbrebuild`

### Starter admin account

- email **admin@admin.com**
- pass **admin123**

## API Documentation

### From deployed server

**Temporarily online only for demonstration purposes**

https://geekscript-backend-production.up.railway.app/api-docs/

### From SwaggerHub

https://app.swaggerhub.com/apis-docs/tiagospeckart/geek_script/1.2.1

### Running locally

1. Run server with `npm run dev`
2. Acess URL `{host}:{port}/api-docs` 

For ease of use, I *strongly* recommend the **Swagger Viewer** VS Code Extension. 

To start it:
Open the `swagger.json` file (at `src/api-docs`) and either:
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
