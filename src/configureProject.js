import child_process from "child_process";
import formatPath from "./common.js";

let opsys = process.platform;
let copyCMD = "";
let deleteFolderCMD = "";
let deleteFileCMD = "";

if (opsys == "win32" || opsys == "win64") {
  copyCMD = "copy";
  deleteFolderCMD = "rd /s /q";
  deleteFileCMD = "del /s /q"
} else {
  copyCMD = "cp";
  deleteFolderCMD = "rm";
  deleteFileCMD = "rm -r"
}

function configureProject(createdProjectPath) {
  console.log("===== Configure framework =====");

  console.log("Formating path");

  const frameWorkPath = formatPath(`${createdProjectPath}/React-Framework`);

  const frameWorkSRC = formatPath(`${createdProjectPath}/src`);

  console.log("Copy src from framework");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} src ${createdProjectPath}`
  );

  console.log("Copy vscode ext");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} .vscode ${createdProjectPath}
    `
  );

  console.log("Copy public ");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} public ${createdProjectPath}`
  );

  console.log("Copy tsconfig.json");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} tsconfig.json ${createdProjectPath}
      `
  );

  console.log("Copy .eslintignore");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD}.eslintignore ${createdProjectPath}
      `
  );

  console.log("Copy .eslintrc");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} .eslintrc ${createdProjectPath}
      `
  );

  console.log("Copy .prettierrc");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} .prettierrc ${createdProjectPath}`
  );

  console.log("Copy .versionrc.json");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} .versionrc.json ${createdProjectPath}
      `
  );

  console.log("Copy README CHANGELOG LICENSE");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} README.md ${createdProjectPath}`
  );

  console.log("Copy CHANGELOG");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} CHANGELOG.md ${createdProjectPath}`
  );

  console.log("Copy LICENSE");
  child_process.execSync(
    `cd ${frameWorkPath} && ${copyCMD} LICENSE.md ${createdProjectPath}`
  );

  console.log("Deleting framework");
  child_process.execSync(
    `cd ${createdProjectPath} && ${deleteFolderCMD} React-Framework`
  );

  console.log("Deleting App.css");
  child_process.execSync(
    `cd ${createdProjectPath}/src && ${deleteFileCMD} App.css`
  );

  console.log("Deleting index.css");
  child_process.execSync(
    `cd ${frameWorkSRC} && ${deleteFileCMD} index.css`
  );

  console.log("Deleting App.test.tsx");
  child_process.execSync(
    `cd ${frameWorkSRC} && ${deleteFileCMD} App.test.tsx`
  );

  console.log("Deleting logo.svg");
  child_process.execSync(
    `cd ${frameWorkSRC} && ${deleteFileCMD} logo.svg`
  );

  console.log("Done!");

  return createdProjectPath
}

export default configureProject;
