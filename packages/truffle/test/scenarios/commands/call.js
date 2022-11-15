const CommandRunner = require("../commandRunner");
const Server = require("../server");
const MemoryLogger = require("../MemoryLogger");
const assert = require("assert");
const path = require("path");
const sandbox = require("../sandbox");

describe("truffle call", () => {
  let config;
  const logger = new MemoryLogger();
  const project = path.join(__dirname, "../../sources/call");

  before(async () => await Server.start());
  after(async () => await Server.stop());

  beforeEach(async () => {
    config = await sandbox.create(project);
    config.network = "development";
    config.logger = logger;
  });

  describe("when runs with basic contract", () => {
    it("returns error message and error code from a revert function", async () => {
        const networkName = config.network;
        await CommandRunner.runInREPL({
            inputCommands: ["migrate", 
                            "call Sample bad"],
            config,
            executableCommand: "console",
            executableArgs: `--network ${networkName}`,
            displayHost: networkName
        });
        const output = logger.contents();
        const expectedValue1 = "Error Message: VM Exception while processing transaction: revert You are a failure";
        const expectedValue2 = "Error Code: -32000";
        assert(
          output.includes(expectedValue1),
          `Expected "${expectedValue1}" in output`
        );
        assert(
            output.includes(expectedValue2),
            `Expected "${expectedValue2}" in output`
        );
    }).timeout(90000);

    it("returns the set value of the variable in the contract", async () => {
        const networkName = config.network;
        await CommandRunner.runInREPL({
            inputCommands: ["migrate", 
                            "const s = await Sample.deployed()", 
                            "s.setValue(100)", 
                            "call Sample getValue"],
            config,
            executableCommand: "console",
            executableArgs: `--network ${networkName}`,
            displayHost: networkName
        });
        const output = logger.contents();
        const expectedValue = "100";
        assert(
            output.includes(expectedValue),
            `Expected "${expectedValue}" in output`
        );
    }).timeout(90000);

    it("checks if the function overloading works", async () => {
        const networkName = config.network;
        await CommandRunner.runInREPL({
            inputCommands: ["migrate", 
                            "const s = await Sample.deployed()", 
                            "s.setValue(200)", 
                            "call Sample getValue 10"],
            config,
            executableCommand: "console",
            executableArgs: `--network ${networkName}`,
            displayHost: networkName
        });
        const output = logger.contents();
        const expectedValue = "210";
        assert(
            output.includes(expectedValue),
            `Expected "${expectedValue}" in output`
        );
    }).timeout(90000);
    
    it("checks if the function signature works", async () => {
        const networkName = config.network;
        await CommandRunner.runInREPL({
            inputCommands: ["migrate", 
                            "const s = await Sample.deployed()", 
                            "s.setValue(300)", 
                            "call Sample getValue(uint256) 10"],
            config,
            executableCommand: "console",
            executableArgs: `--network ${networkName}`,
            displayHost: networkName
        });
        const output = logger.contents();
        const expectedValue = "310";
        assert(
            output.includes(expectedValue),
            `Expected "${expectedValue}" in output`
        );
    }).timeout(90000);  
  });
});
