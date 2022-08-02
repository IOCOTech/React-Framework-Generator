import path from "path";
import fs from "fs";

let packageJSONPath = "";

function handlePackageJson(createdProjectPath) {
  const isValidPath = fs.existsSync(createdProjectPath);

  if (isValidPath) {
    packageJSONPath = path.join(createdProjectPath, "package.json");

    console.log("Reading Package JSON Script");

    var packageJSON = JSON.parse(fs.readFileSync(packageJSONPath, "utf8"));

    packageJSON.scripts = {
      start: "env-cmd -e development react-scripts start",
      build: "env-cmd -e production react-scripts build",
      browsersync:
        "browser-sync start --proxy=localhost:3000 --port=3001 --watch=true --notify=true --log-level='info' --log-file-changes=true  --files=.",
      test: "react-scripts test",
      eject: "react-scripts eject",
      watch: "tsc --watch",
      format: 'prettier --ignore-path .gitignore --write "**/*.+(js|ts|json)"',
      "lint:check": "eslint --ignore-path .eslintignore --ext .ts,.tsx .",
      "lint:fix": "npm run lint:check -- --fix && npm run format",
      "pre-commit": "lint-staged",
      "install:clean":
        "rm -rf node_modules/ && rm -rf package-lock.json && npm install && npm start",
      release: "standard-version",
      "release:minor": "standard-version --release-as minor",
      "release:patch": "standard-version --release-as patch",
      "release:major": "standard-version --release-as major",
    };

    packageJSON.lintstaged = {
      "*.{js,json,css,scss,html,md}": ["npm run lint:fix"],
    };

    packageJSON.eslintConfig = {
      extends: ["react-app", "react-app/jest"],
    };

    console.log("Writting Package JSON Scripts");
    fs.writeFileSync(
      packageJSONPath,
      JSON.stringify(packageJSON, null, 2),
      "utf8"
    );
  }
}

export default handlePackageJson;
