var opsys = process.platform;

function formatPath(path) {
  if (opsys == "win32" || opsys == "win64") {
    path = path.replace("/", "\\");
  } else {
    return path;
  }
}

export default formatPath;
