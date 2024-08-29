const { exec } = require("child_process");
const fs = require("fs");

// Extract PHP variable from command-line arguments
const phpVariables = JSON.parse(process.argv[2]); // Parse PHP variables from command line

const filePath = phpVariables.root; // Path to your JavaScript file


// Read the content of the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Modify the content as needed
  let updatedData = data
  .replace(/(primary:\s*["'])([^"']*)(["'])/, `$1${phpVariables.primary}$3`)
  .replace(/(secondary:\s*["'])([^"']*)(["'])/, `$1${phpVariables.secondary}$3`);

  // Write the updated content back to the file
  fs.writeFile(filePath, updatedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Values updated successfully!");
  });
  // Execute npm run build command
  exec(phpVariables.npmrun, (err, stdout, stderr) => {
    if (err) {
      console.error("Error executing npm run build:", err);
      return;
    }
    console.log(stdout);
    console.error(stderr);
  });
});
