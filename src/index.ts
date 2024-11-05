import readline from "node:readline";

readline.emitKeypressEvents(process.stdin);

// 禁用掉内置的一些键盘事件处理 比如ctrl+c退出进程
process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
  console.log("dyk---", str, key);

  // 单独处理ctrl+c退出进程
  if (key.sequence === "\u0003") {
    process.exit();
  }
});
