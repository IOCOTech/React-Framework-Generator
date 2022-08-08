import child_process from "child_process";

function cloneRepo(createdProjectPath, repo) {
    console.log("===== Cloning React-Framework =====")
    child_process.execSync(
        `cd ${createdProjectPath} && git clone ${repo}`
      );

    return [true, createdProjectPath]
  };

  export default cloneRepo

