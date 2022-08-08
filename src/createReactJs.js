import child_process from "child_process";
import formatPath from "./common.js";

function createReactJs(pathName, createProject) {
  console.log("===== Creating project...=====")
  child_process.execSync(
    `cd ${pathName} && npx create-react-app ${createProject.toLowerCase()} --template typescript`
  );
  
  let path = `${pathName}/${createProject}`
  let formatedPath = formatPath(path)
  console.log(`Project create at ${formatedPath}`)

  return [true, formatedPath]
}
export default createReactJs;
