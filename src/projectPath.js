import child_process from "child_process";
import fs from "fs";

function projectPath(pathName) {
  console.log("Validating path...");

  const isValidPath = fs.existsSync(pathName);

  if (!isValidPath) {
    console.log("Validating is invalid");
  }

  return [isValidPath,pathName];
}
export default projectPath;
