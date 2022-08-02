import child_process from "child_process";

function configureProject(createdProjectPath) {
  console.log("===== Configure framework =====");

  console.log("Copy src from framework");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
     cp -r src ${createdProjectPath}
    `
  );

  console.log("Copy vscode ext");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
     cp -r .vscode ${createdProjectPath}
    `
  );

  console.log("Copy public ");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
     cp -r public ${createdProjectPath}
    `
  );

  console.log("Copy tsconfig.json");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r tsconfig.json ${createdProjectPath}
      `
  );

  console.log("Copy .eslintignore");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r .eslintignore ${createdProjectPath}
      `
  );

  console.log("Copy .eslintrc");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r .eslintrc ${createdProjectPath}
      `
  );

  console.log("Copy .prettierrc");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r .prettierrc ${createdProjectPath}
      `
  );

  console.log("Copy .versionrc.json");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r .versionrc.json ${createdProjectPath}
      `
  );

  console.log("Copy README CHANGELOG LICENSE");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r README.md CHANGELOG.md LICENSE.md ${createdProjectPath}
      `
  );

  console.log("Deleting framework");
  child_process.execSync(
    `cd ${createdProjectPath}
       rm -r React-Framework
      `
  );

  console.log("Deleting App.css");
  child_process.execSync(
    `cd ${createdProjectPath}/src
       rm -r App.css
      `
  );

  console.log("Deleting index.css");
  child_process.execSync(
    `cd ${createdProjectPath}/src
       rm -r index.css
      `
  );

  console.log("Deleting App.test.tsx");
  child_process.execSync(
    `cd ${createdProjectPath}/src
       rm -r App.test.tsx
      `
  );

  console.log("Deleting logo.svg");
  child_process.execSync(
    `cd ${createdProjectPath}/src
       rm -r logo.svg
      `
  );

  console.log("Done!");
}

export default configureProject;
