import child_process from "child_process";

function createReactJs(pathName, createProject) {
  console.log("===== Creating project...=====")
  child_process.execSync(
    `cd ${pathName} && npx create-react-app ${createProject.toLowerCase()} --template typescript`
  );

  console.log(`Project create at ${pathName}/${createProject}`)

  return true
}
export default createReactJs;
