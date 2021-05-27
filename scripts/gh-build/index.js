const exec = require("child_process").exec;
const fs = require('fs');

exec("ng build", function(err, stdout, stderr) {
    if (err) {
        console.log(err);
    }
    console.log(stdout);

    fs.copyFile("apps/web/src/index.html","docs/404.html",(err) => {
    if (err) {
        console.log("Error Found:", err);
    }
    else {
        console.log("Build complete. \n");
    }
    });
});


