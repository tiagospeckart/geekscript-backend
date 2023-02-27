# geekstore-backend

Final project of [Gama Academy](https://www.gama.academy/) Webdevelopment course. It's a MVP of a backend server that manages a REST API for an ecommerce. The second half of the project is: **todo**

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

Link -> todo

## Installation

1. Dowload packages `npm i`
2. Build `npm run build`
3. Test server `npm run dev`

### Create Database

1. Create your own `.env` file according to your preferred settings
2. After Build: run `npx sequelize db:create`
3. Run `npx sequelize db:migrate` to create generate tables
4. Run `npx sequelize db:seed:all` to populate database with test data
5. Starter admin account: email **admin@admin.com**, pass **admin123**

## API Documentation

### Running locally

1. Run server with `npm run dev`
2. Acess URL `localhost:5000/swagger` 

For ease of use, I *really* recommend the **Swagger Viewer** VS Code Extension. 

To start:
Open the swagger file (at /api-docs) and either:
- Press F1 -> Run the Command `Preview Swagger` 
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
