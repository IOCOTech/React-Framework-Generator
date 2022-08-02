import child_process from "child_process";

function installDependencies(createdProjectPath) {
  console.log("=====Installing dependencies =====");

  console.log("Installing Formik");
  child_process.execSync(
    `cd ${createdProjectPath} && npm i formik`
  );

  console.log("Installing Yup");

  child_process.execSync(
    `cd ${createdProjectPath} && npm i yup`
  );

  console.log("Installing React Router");

  child_process.execSync(
    `cd ${createdProjectPath} && npm i react-router`
  );

  console.log("Installing React Router DOM");

  child_process.execSync(
    `cd ${createdProjectPath} && npm i react-router-dom`
  );


  console.log("Installing Env Cmd");
  child_process.execSync(
    `cd ${createdProjectPath} && npm i env-cmd`
  );
  
  console.log("Installing Axios");

  child_process.execSync(
    `cd ${createdProjectPath} && npm i axios`
  );

  // console.log("Installing SASS");

  // child_process.execSync(
  //   `cd ${createdProjectPath} && npm i node-sass`
  // );

}
export default installDependencies;
