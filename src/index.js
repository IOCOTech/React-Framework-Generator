import inquirer from "inquirer";
import "dotenv/config";
import createReactJs from "./createReactJs.js";
import installDependencies from "./installDependencies.js";
import projectPath from "./projectPath.js";
import cloneRepo from "./cloneRepo.js";
import configureProject from "./configureProject.js";

var createdProjectPath = "";

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
      choices: ["MUI", "esLint", "Prettier", "SCSS", "none"],
    },
  ])
  .then(({ path, createProject, addDependencies }) => {
    const [isValidPath, pathName] = projectPath(path);

    return [isValidPath, pathName, createProject, addDependencies];
  })

  .then(([isValidPath, pathName, createProject, addDependencies]) => {
    if (isValidPath) {
      const isCreated = createReactJs(pathName, createProject);
      if (isCreated) {
        createdProjectPath = `${pathName}/${createProject}`;

        const isInstalled = installDependencies(
          addDependencies,
          createdProjectPath
        );
        if (isInstalled) {
          return cloneRepo(createdProjectPath, process.env.REPO);
        }
      }
    }
  })
  .then((isCloned) => {
    if (isCloned) {
      configureProject(createdProjectPath);
    }
  })
  .catch((error) => {
    console.error(error);
  });
