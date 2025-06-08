// scripts/ashra-mcp.js

process.stdin.on("data", async (data) => {
  try {
    const input = JSON.parse(data.toString());
    const { args = {} } = input;

    const userInput = args.text || "No input provided.";
    const result = {
      message: `Ashra Echo: "${userInput}"`
    };

    process.stdout.write(JSON.stringify(result) + "\n");
  } catch (error) {
    process.stderr.write("Error in MCP Tool: " + error.message + "\n");
  }
});