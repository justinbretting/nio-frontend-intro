
export default {
  // Some example code from another application
  nextTab() {
    // complex actions enabled via redux-thunk
    return (dispatch, getState) => {
      let state = getState();
      let tabIds = state.schedules[state.ui.activeScheduleId].tabIds;
      let nextIdx = tabIds.indexOf(state.ui.currentTabId) + 1;

      if ( nextIdx === tabIds.length ) {
        dispatch(this.checkNext());
        nextIdx = 0;
      }

      let nextId = tabIds[nextIdx];

      dispatch(this.updateCurrentTabIndex(nextIdx, nextId));
    }
  },
  setOutOfRotationTab(tabId) {
    return { type: 'SET_OUT_OF_ROTATION_TAB', tabId }
  },
}
