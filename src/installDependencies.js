import child_process from "child_process";

function installDependencies(dependency, createdProjectPath) {
  console.log("=====Installing dependencies =====");
  dependency.map((dep) => {
    switch (dep.toLowerCase()) {
      case "mui":
        console.log("Installing MUI");

        child_process.execSync(
          `cd ${createdProjectPath} && npm i @mui/material @emotion/react @emotion/styled`
        );
        break;
      case "eslint":
        console.log("Installing esLint");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i eslint --save-dev`
        );

        console.log("Installing TS esLint-Plugin");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i @typescript-eslint/eslint-plugin --save-dev`
        );

        console.log("Installing TS esLint/Parse");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i @typescript-eslint/parser --save-dev`
        );
        break;
      case "prettier":
        console.log("Installing Prettier");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i prettier --save-dev`
        );
        break;

      case "scss":
        console.log("Installing SASS/SCSS");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i @types/node-sass --save-dev`
        );
        break;

      default:
        break;
    }

    console.log("Completed");
  });
  return true
}
export default installDependencies;
