function HistoryCloneWithDefineProperty() {
  var state = {
    data: null,
    title: "",
    url: "https://www.google.com",
  };

  Object.defineProperty(this, "state", {
    get() {
      return state;
    },
  });

  this.pushState = function (stateObj) {
    state = stateObj;
  };
}

export { HistoryCloneWithDefineProperty };
