import inquirer from "inquirer";
import "dotenv/config";
import createReactJs from "./createReactJs.js";
import installDevDependencies from "./installDevDependencies.js";
import projectPath from "./projectPath.js";
import cloneRepo from "./cloneRepo.js";
import configureProject from "./configureProject.js";
import installDependencies from "./installDependencies.js";
import handlePackageJson from "./handlePackageJson.js";

inquirer
  .prompt([
    {
      type: "input",
      name: "path",
      message: "What is the path to create the project?🤔",
      default: "path",
    },
    {
      type: "input",
      name: "createProject",
      message: "What is the project name?🤔",
      default: "name",
    },
    {
      type: "checkbox",
      name: "addDependencies",
      message: "Please choose dependencies to install 📦",
      choices: ["MUI", "esLint", "Prettier","JEST", "none"],
    },
  ])
  .then(({ path, createProject, addDependencies }) => {
    const [isValidPath, pathName] = projectPath(path);

    return [isValidPath, pathName, createProject, addDependencies];
  })

  .then(([isValidPath, pathName, createProject, addDependencies]) => {
    if (isValidPath) {
      const [isCreated, path] = createReactJs(pathName, createProject);
      if (isCreated) {

        installDependencies(path)

        const isInstalled = installDevDependencies(
          addDependencies,
          path
        );
        if (isInstalled) {
          return cloneRepo(path, process.env.REPO);
        }
      }
    }
  })
  .then(([isCloned,createdProjectPath]) => {
    if (isCloned) {
      return configureProject(createdProjectPath);
    }
  })
  .then((createdProjectPath) =>{
    handlePackageJson(createdProjectPath)
  })
  .catch((error) => {
    console.error(error);
  });
