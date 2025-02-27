import appDispatcher from '../dispatcher';
import cons from '../state/cons';

export function toggleSystemTheme() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_SYSTEM_THEME,
  });
}

export function toggleMarkdown() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_MARKDOWN,
  });
}

export function toggleGreentext() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_GREENTEXT,
  });
}

export function togglePeopleDrawer() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_PEOPLE_DRAWER,
  });
}

export function toggleMembershipEvents() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_MEMBERSHIP_EVENT,
  });
}

export function toggleNickAvatarEvents() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_NICKAVATAR_EVENT,
  });
}

export function toggleNotifications() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_NOTIFICATIONS,
  });
}

export function toggleNotificationSounds() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_NOTIFICATION_SOUNDS,
  });
}

export function toggleTypingNotifications() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_TYPING_NOTIFICATIONS,
  });
}

export function toggleReadReceipts() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_READ_RECEIPTS,
  });
}

export function toggleTime12() {
  appDispatcher.dispatch({
    type: cons.actions.settings.TOGGLE_TIME12,
  });
}
