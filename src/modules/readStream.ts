import { createReadStream } from "fs";
const streamData = (): void => {
  //   const stream = createReadStream("./big.txt");
  const stream = createReadStream("./big.txt", {
    highWaterMark: 9000,
    encoding: "utf-8"
  });

  stream.on("data", (result) => {
    console.log(result);
  });
};
streamData();
export default streamData;
