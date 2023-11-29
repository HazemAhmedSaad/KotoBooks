  function changeFavorites(books) {
    return {
      type: "SET_FAVORITES",
      payload: books,
    };
  }
  function changeCounter(newCount) {
    return {
      type: "SET_COUNTER",
      payload: newCount,
    };
  }
export {changeFavorites, changeCounter}