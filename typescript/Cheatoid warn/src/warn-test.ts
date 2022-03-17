import warn = require("./warn");

warn.enable(); // or, warn(true);
warn(["hello ", colors.magenta, `computer #${os.getComputerID()}`], null, colors.gray, colors.yellow);
warn(false); // or, warn.disable();
warn([colors.red, "should not", colors.orange, " see this ", colors.yellow, "warning"]);
