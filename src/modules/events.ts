import EventEmitter from "events";

export const events = (): void => {
  const customEmitter = new EventEmitter();
  customEmitter.on("response", () => {
    console.log("data received");
  });
  customEmitter.emit("response");
};
events();
