
import rxupdate from 'immutability-helper';

module.exports = function(state, action) {
  if ( typeof state === 'undefined' ) {
    return {
      errors: [],
      currentTabId: undefined,
      nextTabId: undefined,
      admin: {
        isOpen: false,
        isEditingTab: false
      },
      clientHeight: undefined,
      clientWidth: undefined,
      orientation: 'landscape'
    };
  }

  switch (action.type) {
    case 'SET_DIMENSIONS':
      return rxupdate(state, {
        clientHeight: {$set: action.height},
        clientWidth: {$set: action.width}
      })
    case 'SET_OUT_OF_ROTATION_TAB':
      return rxupdate(state, {
        outOfScheduleTabId: { $set: action.tabId },
        nextTabId: { $set: undefined },
        transitionDirection: { $set: undefined }
      })
    default:
      return state
  }
}
