// get the arguments
var args = process.argv.slice(2);

if (args.length > 1) {
    console.log ("too many args");
}
else {
    args = parseInt(args[0]);
    var returnVal = 0;
    for (i = 0; i < args; i += 6) {
        returnVal += i;
    }
    console.log (returnVal);
}