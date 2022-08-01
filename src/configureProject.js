import child_process from "child_process";

function configureProject(createdProjectPath) {
  console.log("===== Configure framework =====");

  console.log("Copy src from framework");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
     cp -r src ${createdProjectPath}
    `
  );
  // TODO: inject scripts to existing pkj.son
  // console.log("Copy package json script");
  // child_process.execSync(
  //   `
  //       cd React-Framework
  //       cp -r package.json ${path}
  //       `
  // );

  console.log("Copy tsconfig.json");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r tsconfig.json ${createdProjectPath}
      `
  );

  console.log("Copy README");
  child_process.execSync(
    `cd ${createdProjectPath}/React-Framework
       cp -r README.md ${createdProjectPath}
      `
  );

  console.log("Deleting framework");
  child_process.execSync(
    `cd ${createdProjectPath}
       rm -r React-Framework
      `
  );

  console.log("Done!")
}

export default configureProject;
