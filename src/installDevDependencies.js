import child_process from "child_process";

function installDevDependencies(dependency, createdProjectPath) {
  console.log("=====Installing dev dependencies =====");
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

        console.log("Installing Lint Staged");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i lint-staged --save-dev`
        );
        break;
      case "prettier":
        console.log("Installing Prettier");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i prettier eslint-config-prettier --save-dev`
        );
        break;

      case "jest":
        console.log("Installing JEST");
        child_process.execSync(
          `cd ${createdProjectPath} && npm i jest --save-dev`
        );
        break;

      default:
        break;
    }

    console.log("Completed");
  });
  return true
}
export default installDevDependencies;
