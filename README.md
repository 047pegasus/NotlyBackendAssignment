<div align="center">
<h1 align="center">
  <img src="https://socialify.git.ci/047pegasus/NotlyBackendAssignment/image?description=1&descriptionEditable=A%20simple%20Note%20taking%20app%20with%20Node%20JS%2C%20Typescript%20and%20MongoDB.&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Floating%20Cogs&pulls=1&stargazers=1&theme=Dark" alt="NotlyBackendAssignment" width="640" height="320" />
<br>Notly Backend</h1>
<h3>◦ A Note Taking Application's Backend written in Typescript 🚀</h3>


<p align="center">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express JS" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />  
  
</p>
<img src="https://img.shields.io/github/license/047pegasus/NotlyBackendAssignment?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/047pegasus/NotlyBackendAssignment?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/047pegasus/NotlyBackendAssignment?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/047pegasus/NotlyBackendAssignment?style&color=5D6D7E" alt="GitHub top language" />
</div>
<br/>


---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview
Notly's backend is a simple to use note taking application's CRUD support backend, all written in Typescript NodeJS and with the help of a NoSQL DB (here Mongo DB).

---

## 📂 Repository Structure

```sh
└── NotlyBackendAssignment/
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── controllers/
        ├── models/
        ├── routes/
        ├── utils/
        ├── index.ts
```

## 🚀 Getting Started & 🔧 Installation

Clone the repository with the follwoing command.
```bash
git clone https://github.com/047pegasus/NotlyBackendAssignment
```

Firstly install all dependencies to run the dev environment correctly.

```bash
npm install --save-dev
# or
yarn install
# or
pnpm install
# or
bun install
```
Make sure that the local MongoDB instance is healthy and running before-hand itself on port 27017 (default Mongo Port) or make adjustments respectively in src/index.ts file.

Then run the project with the following command arrays to complie and run the project successfully:
```bash
npx tsc
npm run dev
```

Open [http://localhost:7777](http://localhost:7777) with your browser to see the result.

You can start editing the page by modifying `src/index.ts`. The page wont auto-updates as you edit the file, instead you need to hot reload it with something like Nodemon or simple kill and restart the server.

## 🛣 Roadmap

> - [ ] `ℹ️ Task 1: Implement user authentication and authorization using JWT.`
> - [ ] `ℹ️ Task 2: Add functionality for rate limiting of endpoints.`
> - [ ] `ℹ️ Task 3: Enhance the sub-operations in the API as well as the Backend to offer more categories in storing the note in HTML format specifically.`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ https://www.mongodb.com/`
`- ℹ️ https://www.mongodb.com/try/download/community`
`- ℹ️ https://www.mongodb.com/try/download/compass`
`- ℹ️ https://www.mongodb.com/try/download/shell`



---
