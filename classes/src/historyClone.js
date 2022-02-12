import { HistoryCloneWithClass } from "./HistoryCloneWithClass.js";
import { HistoryCloneWithDefineProperty } from "./HistoryCloneWithDefineProperty.js";

const historyInstance = new HistoryCloneWithDefineProperty();

historyInstance.pushState({
  data: null,
  title: "",
  url: "https://www.microsoft.com",
});

console.log(historyInstance.state);

const historyInstanceFromClass = new HistoryCloneWithClass();
// calls get
historyInstanceFromClass.state;

// calls set
historyInstanceFromClass.state = "foo"; // do nothing

historyInstanceFromClass.pushState({
  data: null,
  title: "",
  url: "https://www.microsoft.com",
});

// calls get
console.log(historyInstanceFromClass.state);
