let opsys = process.platform;

function formatPath(path) {
  if (opsys == "win32" || opsys == "win64") {
    return path.replace("/", "\\");
  } else {
    return path;
  }
}

export default formatPath;
