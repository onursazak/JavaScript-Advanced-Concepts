class HistoryCloneWithClass {
  #state = {
    data: null,
    title: "",
    url: "https://www.google.com",
  };

  get state() {
    return this.#state;
  }

  set state(value) {
    return;
    // this.#state = value;
  }

  pushState(stateObj) {
    this.#state = stateObj;
  }
}

export { HistoryCloneWithClass };
