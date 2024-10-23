const fs = require('fs');
const os = require('os');

fs.readFile("sample.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else if (data) {
        console.log(data);
    }
})

fs.writeFile('output.txt', ("Hostname:" + os.hostname() + "\nPlatform: " + os.platform() + "\nCPUs: " + os.cpus()), (err) => {
    if (err) {
    console.error('Error writing file:', err);
    } else {
    console.log('Data written to output.txt');
    }
    });

console.log("Hostname: " + os.hostname());
console.log("OS Type: " + os.type());
console.log("CPU cores: " + os.cpus());
