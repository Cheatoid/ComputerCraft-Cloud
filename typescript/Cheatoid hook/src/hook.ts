/// <reference path="./hook.d.ts" />

const hooks = new LuaTable();

/**
 * The `alarm` event is fired when an alarm started with `os.setAlarm` completes.
 * @link https://tweaked.cc/event/alarm.html
 */
export function add(this: void, eventName: "alarm", id: string, callback: AlarmEventDelegate): void;

/**
 * The `char` event is fired when a character is _typed_ on the keyboard.
 * @link https://tweaked.cc/event/char.html
 */
export function add(this: void, eventName: "char", id: string, callback: CharEventDelegate): void;

/**
 * The `computer_command` event is fired when the `/computercraft queue` command is run for the current computer.
 * @link https://tweaked.cc/event/computer_command.html
 */
export function add(this: void, eventName: "computer_command", id: string, callback: ComputerCommandEventDelegate): void;

/**
 * The `disk` event is fired when a disk is inserted into an adjacent or networked disk drive.
 * @link https://tweaked.cc/event/disk.html
 */
export function add(this: void, eventName: "disk", id: string, callback: DiskEventDelegate): void;

/**
 * The `disk_eject` event is fired when a disk is removed from an adjacent or networked disk drive.
 * @link https://tweaked.cc/event/disk_eject.html
 */
export function add(this: void, eventName: "disk_eject", id: string, callback: DiskEjectEventDelegate): void;

/**
 * The `http_check` event is fired when a URL check finishes.
 * @link https://tweaked.cc/event/http_check.html
 */
export function add(this: void, eventName: "http_check", id: string, callback: HttpCheckEventDelegate): void;

/**
 * The `http_failure` event is fired when an HTTP request fails.
 * @link https://tweaked.cc/event/http_failure.html
 */
export function add(this: void, eventName: "http_failure", id: string, callback: HttpFailureEventDelegate): void;

/**
 * The `http_success` event is fired when an HTTP request returns successfully.
 * @link https://tweaked.cc/event/http_success.html
 */
export function add(this: void, eventName: "http_success", id: string, callback: HttpSuccessEventDelegate): void;

/**
 * The `key` event is fired when any key is pressed while the terminal is focused.
 * @link https://tweaked.cc/event/key.html
 */
export function add(this: void, eventName: "key", id: string, callback: KeyEventDelegate): void;

/**
 * The `key_up` event is fired whenever a key is released (or the terminal is closed while a key was being pressed).
 * @link https://tweaked.cc/event/key_up.html
 */
export function add(this: void, eventName: "key_up", id: string, callback: KeyUpEventDelegate): void;

/**
 * The `modem_message` event is fired when a message is received on an open channel on any modem.
 * @link https://tweaked.cc/event/modem_message.html
 */
export function add(this: void, eventName: "modem_message", id: string, callback: ModemMessageEventDelegate): void;

/**
 * The `monitor_resize` event is fired when an adjacent or networked monitor's size is changed.
 * @link https://tweaked.cc/event/monitor_resize.html
 */
export function add(this: void, eventName: "monitor_resize", id: string, callback: MonitorResizeEventDelegate): void;

/**
 * The `monitor_touch` event is fired when an adjacent or networked Advanced Monitor is right-clicked.
 * @link https://tweaked.cc/event/monitor_touch.html
 */
export function add(this: void, eventName: "monitor_touch", id: string, callback: MonitorTouchEventDelegate): void;

/**
 * The `mouse_click` event is fired when the terminal is clicked with a mouse. This event is only fired on advanced computers (including advanced turtles and pocket computers).
 * @link https://tweaked.cc/event/mouse_click.html
 */
export function add(this: void, eventName: "mouse_click", id: string, callback: MouseClickEventDelegate): void;

/**
 * The `mouse_drag` event is fired every time the mouse is moved while a mouse button is being held.
 * @link https://tweaked.cc/event/mouse_drag.html
 */
export function add(this: void, eventName: "mouse_drag", id: string, callback: MouseDragEventDelegate): void;

/**
 * The `mouse_scroll` event is fired when a mouse wheel is scrolled in the terminal.
 * @link https://tweaked.cc/event/mouse_scroll.html
 */
export function add(this: void, eventName: "mouse_scroll", id: string, callback: MouseScrollEventDelegate): void;

/**
 * The `mouse_up` event is fired when a mouse button is released or a held mouse leaves the computer's terminal.
 * @link https://tweaked.cc/event/mouse_up.html
 */
export function add(this: void, eventName: "mouse_up", id: string, callback: MouseUpEventDelegate): void;

/**
 * The `paste` event is fired when text is pasted into the computer through Ctrl+V (or ⌘V on Mac).
 * @link https://tweaked.cc/event/paste.html
 */
export function add(this: void, eventName: "paste", id: string, callback: PasteEventDelegate): void;

/**
 * The `peripheral` event is fired when a peripheral is attached on a side or to a modem.
 * @link https://tweaked.cc/event/peripheral.html
 */
export function add(this: void, eventName: "peripheral", id: string, callback: PeripheralEventDelegate): void;

/**
 * The `peripheral_detach` event is fired when a peripheral is detached from a side or from a modem.
 * @link https://tweaked.cc/event/peripheral_detach.html
 */
export function add(this: void, eventName: "peripheral_detach", id: string, callback: PeripheralDetachEventDelegate): void;

/**
 * The `rednet_message` event is fired when a message is sent over Rednet.
 * @link https://tweaked.cc/event/rednet_message.html
 */
export function add(this: void, eventName: "rednet_message", id: string, callback: RednetMessageEventDelegate): void;

/**
 * The `redstone` event is fired whenever any redstone inputs on the computer change.
 * @link https://tweaked.cc/event/redstone.html
 */
export function add(this: void, eventName: "redstone", id: string, callback: RedstoneEventDelegate): void;

/**
 * The `speaker_audio_empty` event is fired once enough audio has played, and the backlog has been reduced.
 * @link https://tweaked.cc/event/speaker_audio_empty.html
 */
export function add(this: void, eventName: "speaker_audio_empty", id: string, callback: SpeakerAudioEmptyEventDelegate): void;

/**
 * The `task_complete` event is fired when an asynchronous task completes.
 * This is usually handled inside the function call that queued the task; however, functions such as `commands.execAsync` return immediately so the user can wait for completion.
 * @link https://tweaked.cc/event/task_complete.html
 */
export function add(this: void, eventName: "task_complete", id: string, callback: TaskCompleteEventDelegate): void;

/**
 * The `term_resize` event is fired when the main terminal is resized.
 * @link https://tweaked.cc/event/term_resize.html
 */
export function add(this: void, eventName: "term_resize", id: string, callback: TermResizeEventDelegate): void;

/**
 * The `terminate` event is fired when Ctrl+T (or ⌘T on Mac) is held down.
 * @link https://tweaked.cc/event/terminate.html
 */
export function add(this: void, eventName: "terminate", id: string, callback: TerminateEventDelegate): void;

/**
 * The `timer` event is fired when a timer started with `os.startTimer` completes.
 * @link https://tweaked.cc/event/timer.html
 */
export function add(this: void, eventName: "timer", id: string, callback: TimerEventDelegate): void;

/**
 * The `turtle_inventory` event is fired when a turtle's inventory is changed.
 * @link https://tweaked.cc/event/turtle_inventory.html
 */
export function add(this: void, eventName: "turtle_inventory", id: string, callback: TurtleInventoryEventDelegate): void;

/**
 * The `turtle_response` event is fired when a turtle command is completed.
 */
export function add(this: void, eventName: "turtle_response", id: string, callback: TurtleResponseEventDelegate): void;

/**
 * The `websocket_closed` event is fired when an open WebSocket connection is closed.
 * @link https://tweaked.cc/event/websocket_closed.html
 */
export function add(this: void, eventName: "websocket_closed", id: string, callback: WebSocketClosedEventDelegate): void;

/**
 * The `websocket_failure` event is fired when a WebSocket connection request fails.
 * @link https://tweaked.cc/event/websocket_failure.html
 */
export function add(this: void, eventName: "websocket_failure", id: string, callback: WebSocketFailureEventDelegate): void;

/**
 * The `websocket_message` event is fired when a message is received on an open WebSocket connection.
 * @link https://tweaked.cc/event/websocket_message.html
 */
export function add(this: void, eventName: "websocket_message", id: string, callback: WebSocketMessageEventDelegate): void;

/**
 * The `websocket_success` event is fired when a WebSocket connection request returns successfully.
 * @link https://tweaked.cc/event/websocket_success.html
 */
export function add(this: void, eventName: "websocket_success", id: string, callback: WebSocketSuccessEventDelegate): void;

/**
 * Insert (or replace an existing) hook.
 * @param eventName Name of the custom event.
 * @param id Unique identifier for this hook.
 * @param callback Function to be invoked whenever the specified event occurs.
 */
export function add(this: void, eventName: string, id: string, callback: (this: void, ...args: any[]) => void): void;

/**
 * Insert (or replace an existing) hook.
 * @template TEvent The type of event.
 * @param eventName Name of the event.
 * @param id Unique identifier for this hook.
 * @param callback Function to be invoked whenever the specified event occurs.
 */
export function add<TEvent extends keyof Events>(this: void, eventName: TEvent, id: string, callback: Events[TEvent]): void {
  const e = <LuaTable<string, Events[TEvent]>>(hooks.get(eventName) || {});
  hooks.set(eventName, e);
  e[id] = callback;
}

/**
 * The `alarm` event is fired when an alarm started with `os.setAlarm` completes.
 * @link https://tweaked.cc/event/alarm.html
 */
export function remove(this: void, eventName: "alarm", id: string): void;

/**
 * The `char` event is fired when a character is _typed_ on the keyboard.
 * @link https://tweaked.cc/event/char.html
 */
export function remove(this: void, eventName: "char", id: string): void;

/**
 * The `computer_command` event is fired when the `/computercraft queue` command is run for the current computer.
 * @link https://tweaked.cc/event/computer_command.html
 */
export function remove(this: void, eventName: "computer_command", id: string): void;

/**
 * The `disk` event is fired when a disk is inserted into an adjacent or networked disk drive.
 * @link https://tweaked.cc/event/disk.html
 */
export function remove(this: void, eventName: "disk", id: string): void;

/**
 * The `disk_eject` event is fired when a disk is removed from an adjacent or networked disk drive.
 * @link https://tweaked.cc/event/disk_eject.html
 */
export function remove(this: void, eventName: "disk_eject", id: string): void;

/**
 * The `http_check` event is fired when a URL check finishes.
 * @link https://tweaked.cc/event/http_check.html
 */
export function remove(this: void, eventName: "http_check", id: string): void;

/**
 * The `http_failure` event is fired when an HTTP request fails.
 * @link https://tweaked.cc/event/http_failure.html
 */
export function remove(this: void, eventName: "http_failure", id: string): void;

/**
 * The `http_success` event is fired when an HTTP request returns successfully.
 * @link https://tweaked.cc/event/http_success.html
 */
export function remove(this: void, eventName: "http_success", id: string): void;

/**
 * The `key` event is fired when any key is pressed while the terminal is focused.
 * @link https://tweaked.cc/event/key.html
 */
export function remove(this: void, eventName: "key", id: string): void;

/**
 * The `key_up` event is fired whenever a key is released (or the terminal is closed while a key was being pressed).
 * @link https://tweaked.cc/event/key_up.html
 */
export function remove(this: void, eventName: "key_up", id: string): void;

/**
 * The `modem_message` event is fired when a message is received on an open channel on any modem.
 * @link https://tweaked.cc/event/modem_message.html
 */
export function remove(this: void, eventName: "modem_message", id: string): void;

/**
 * The `monitor_resize` event is fired when an adjacent or networked monitor's size is changed.
 * @link https://tweaked.cc/event/monitor_resize.html
 */
export function remove(this: void, eventName: "monitor_resize", id: string): void;

/**
 * The `monitor_touch` event is fired when an adjacent or networked Advanced Monitor is right-clicked.
 * @link https://tweaked.cc/event/monitor_touch.html
 */
export function remove(this: void, eventName: "monitor_touch", id: string): void;

/**
 * The `mouse_click` event is fired when the terminal is clicked with a mouse. This event is only fired on advanced computers (including advanced turtles and pocket computers).
 * @link https://tweaked.cc/event/mouse_click.html
 */
export function remove(this: void, eventName: "mouse_click", id: string): void;

/**
 * The `mouse_drag` event is fired every time the mouse is moved while a mouse button is being held.
 * @link https://tweaked.cc/event/mouse_drag.html
 */
export function remove(this: void, eventName: "mouse_drag", id: string): void;

/**
 * The `mouse_scroll` event is fired when a mouse wheel is scrolled in the terminal.
 * @link https://tweaked.cc/event/mouse_scroll.html
 */
export function remove(this: void, eventName: "mouse_scroll", id: string): void;

/**
 * The `mouse_up` event is fired when a mouse button is released or a held mouse leaves the computer's terminal.
 * @link https://tweaked.cc/event/mouse_up.html
 */
export function remove(this: void, eventName: "mouse_up", id: string): void;

/**
 * The `paste` event is fired when text is pasted into the computer through Ctrl+V (or ⌘V on Mac).
 * @link https://tweaked.cc/event/paste.html
 */
export function remove(this: void, eventName: "paste", id: string): void;

/**
 * The `peripheral` event is fired when a peripheral is attached on a side or to a modem.
 * @link https://tweaked.cc/event/peripheral.html
 */
export function remove(this: void, eventName: "peripheral", id: string): void;

/**
 * The `peripheral_detach` event is fired when a peripheral is detached from a side or from a modem.
 * @link https://tweaked.cc/event/peripheral_detach.html
 */
export function remove(this: void, eventName: "peripheral_detach", id: string): void;

/**
 * The `rednet_message` event is fired when a message is sent over Rednet.
 * @link https://tweaked.cc/event/rednet_message.html
 */
export function remove(this: void, eventName: "rednet_message", id: string): void;

/**
 * The `redstone` event is fired whenever any redstone inputs on the computer change.
 * @link https://tweaked.cc/event/redstone.html
 */
export function remove(this: void, eventName: "redstone", id: string): void;

/**
 * The `speaker_audio_empty` event is fired once enough audio has played, and the backlog has been reduced.
 * @link https://tweaked.cc/event/speaker_audio_empty.html
 */
export function remove(this: void, eventName: "speaker_audio_empty", id: string): void;

/**
 * The `task_complete` event is fired when an asynchronous task completes.
 * This is usually handled inside the function call that queued the task; however, functions such as `commands.execAsync` return immediately so the user can wait for completion.
 * @link https://tweaked.cc/event/task_complete.html
 */
export function remove(this: void, eventName: "task_complete", id: string): void;

/**
 * The `term_resize` event is fired when the main terminal is resized.
 * @link https://tweaked.cc/event/term_resize.html
 */
export function remove(this: void, eventName: "term_resize", id: string): void;

/**
 * The `terminate` event is fired when Ctrl+T (or ⌘T on Mac) is held down.
 * @link https://tweaked.cc/event/terminate.html
 */
export function remove(this: void, eventName: "terminate", id: string): void;

/**
 * The `timer` event is fired when a timer started with `os.startTimer` completes.
 * @link https://tweaked.cc/event/timer.html
 */
export function remove(this: void, eventName: "timer", id: string): void;

/**
 * The `turtle_inventory` event is fired when a turtle's inventory is changed.
 * @link https://tweaked.cc/event/turtle_inventory.html
 */
export function remove(this: void, eventName: "turtle_inventory", id: string): void;

/**
 * The `turtle_response` event is fired when a turtle command is completed.
 */
export function remove(this: void, eventName: "turtle_response", id: string): void;

/**
 * The `websocket_closed` event is fired when an open WebSocket connection is closed.
 * @link https://tweaked.cc/event/websocket_closed.html
 */
export function remove(this: void, eventName: "websocket_closed", id: string): void;

/**
 * The `websocket_failure` event is fired when a WebSocket connection request fails.
 * @link https://tweaked.cc/event/websocket_failure.html
 */
export function remove(this: void, eventName: "websocket_failure", id: string): void;

/**
 * The `websocket_message` event is fired when a message is received on an open WebSocket connection.
 * @link https://tweaked.cc/event/websocket_message.html
 */
export function remove(this: void, eventName: "websocket_message", id: string): void;

/**
 * The `websocket_success` event is fired when a WebSocket connection request returns successfully.
 * @link https://tweaked.cc/event/websocket_success.html
 */
export function remove(this: void, eventName: "websocket_success", id: string): void;

/**
 * Remove an existing hook (if found).
 * @param eventName Name of the custom event.
 * @param id Unique identifier of the hook to be removed.
 */
export function remove(this: void, eventName: string, id: string): void;

/**
 * Remove an existing hook (if found).
 * @template TEvent The type of event.
 * @param eventName Name of the event.
 * @param id Unique identifier of the hook to be removed.
 */
export function remove<TEvent extends keyof Events>(this: void, eventName: TEvent, id: string): void {
  const e = <LuaTable<string, Events[TEvent]> | null>hooks.get(eventName);
  if (e) {
    e[id] = null;
  }
}

const [tostring, string_sub, coroutine_yield] = [_G.tostring, string.sub, coroutine.yield /* os.pullEventRaw */];

/**
 * The `alarm` event is fired when an alarm started with `os.setAlarm` completes.
 * @link https://tweaked.cc/event/alarm.html
 */
export function single(this: void, eventName: "alarm", callback: AlarmEventDelegate): void;

/**
 * The `char` event is fired when a character is _typed_ on the keyboard.
 * @link https://tweaked.cc/event/char.html
 */
export function single(this: void, eventName: "char", callback: CharEventDelegate): void;

/**
 * The `computer_command` event is fired when the `/computercraft queue` command is run for the current computer.
 * @link https://tweaked.cc/event/computer_command.html
 */
export function single(this: void, eventName: "computer_command", callback: ComputerCommandEventDelegate): void;

/**
 * The `disk` event is fired when a disk is inserted into an adjacent or networked disk drive.
 * @link https://tweaked.cc/event/disk.html
 */
export function single(this: void, eventName: "disk", callback: DiskEventDelegate): void;

/**
 * The `disk_eject` event is fired when a disk is removed from an adjacent or networked disk drive.
 * @link https://tweaked.cc/event/disk_eject.html
 */
export function single(this: void, eventName: "disk_eject", callback: DiskEjectEventDelegate): void;

/**
 * The `http_check` event is fired when a URL check finishes.
 * @link https://tweaked.cc/event/http_check.html
 */
export function single(this: void, eventName: "http_check", callback: HttpCheckEventDelegate): void;

/**
 * The `http_failure` event is fired when an HTTP request fails.
 * @link https://tweaked.cc/event/http_failure.html
 */
export function single(this: void, eventName: "http_failure", callback: HttpFailureEventDelegate): void;

/**
 * The `http_success` event is fired when an HTTP request returns successfully.
 * @link https://tweaked.cc/event/http_success.html
 */
export function single(this: void, eventName: "http_success", callback: HttpSuccessEventDelegate): void;

/**
 * The `key` event is fired when any key is pressed while the terminal is focused.
 * @link https://tweaked.cc/event/key.html
 */
export function single(this: void, eventName: "key", callback: KeyEventDelegate): void;

/**
 * The `key_up` event is fired whenever a key is released (or the terminal is closed while a key was being pressed).
 * @link https://tweaked.cc/event/key_up.html
 */
export function single(this: void, eventName: "key_up", callback: KeyUpEventDelegate): void;

/**
 * The `modem_message` event is fired when a message is received on an open channel on any modem.
 * @link https://tweaked.cc/event/modem_message.html
 */
export function single(this: void, eventName: "modem_message", callback: ModemMessageEventDelegate): void;

/**
 * The `monitor_resize` event is fired when an adjacent or networked monitor's size is changed.
 * @link https://tweaked.cc/event/monitor_resize.html
 */
export function single(this: void, eventName: "monitor_resize", callback: MonitorResizeEventDelegate): void;

/**
 * The `monitor_touch` event is fired when an adjacent or networked Advanced Monitor is right-clicked.
 * @link https://tweaked.cc/event/monitor_touch.html
 */
export function single(this: void, eventName: "monitor_touch", callback: MonitorTouchEventDelegate): void;

/**
 * The `mouse_click` event is fired when the terminal is clicked with a mouse. This event is only fired on advanced computers (including advanced turtles and pocket computers).
 * @link https://tweaked.cc/event/mouse_click.html
 */
export function single(this: void, eventName: "mouse_click", callback: MouseClickEventDelegate): void;

/**
 * The `mouse_drag` event is fired every time the mouse is moved while a mouse button is being held.
 * @link https://tweaked.cc/event/mouse_drag.html
 */
export function single(this: void, eventName: "mouse_drag", callback: MouseDragEventDelegate): void;

/**
 * The `mouse_scroll` event is fired when a mouse wheel is scrolled in the terminal.
 * @link https://tweaked.cc/event/mouse_scroll.html
 */
export function single(this: void, eventName: "mouse_scroll", callback: MouseScrollEventDelegate): void;

/**
 * The `mouse_up` event is fired when a mouse button is released or a held mouse leaves the computer's terminal.
 * @link https://tweaked.cc/event/mouse_up.html
 */
export function single(this: void, eventName: "mouse_up", callback: MouseUpEventDelegate): void;

/**
 * The `paste` event is fired when text is pasted into the computer through Ctrl+V (or ⌘V on Mac).
 * @link https://tweaked.cc/event/paste.html
 */
export function single(this: void, eventName: "paste", callback: PasteEventDelegate): void;

/**
 * The `peripheral` event is fired when a peripheral is attached on a side or to a modem.
 * @link https://tweaked.cc/event/peripheral.html
 */
export function single(this: void, eventName: "peripheral", callback: PeripheralEventDelegate): void;

/**
 * The `peripheral_detach` event is fired when a peripheral is detached from a side or from a modem.
 * @link https://tweaked.cc/event/peripheral_detach.html
 */
export function single(this: void, eventName: "peripheral_detach", callback: PeripheralDetachEventDelegate): void;

/**
 * The `rednet_message` event is fired when a message is sent over Rednet.
 * @link https://tweaked.cc/event/rednet_message.html
 */
export function single(this: void, eventName: "rednet_message", callback: RednetMessageEventDelegate): void;

/**
 * The `redstone` event is fired whenever any redstone inputs on the computer change.
 * @link https://tweaked.cc/event/redstone.html
 */
export function single(this: void, eventName: "redstone", callback: RedstoneEventDelegate): void;

/**
 * The `speaker_audio_empty` event is fired once enough audio has played, and the backlog has been reduced.
 * @link https://tweaked.cc/event/speaker_audio_empty.html
 */
export function single(this: void, eventName: "speaker_audio_empty", callback: SpeakerAudioEmptyEventDelegate): void;

/**
 * The `task_complete` event is fired when an asynchronous task completes.
 * This is usually handled inside the function call that queued the task; however, functions such as `commands.execAsync` return immediately so the user can wait for completion.
 * @link https://tweaked.cc/event/task_complete.html
 */
export function single(this: void, eventName: "task_complete", callback: TaskCompleteEventDelegate): void;

/**
 * The `term_resize` event is fired when the main terminal is resized.
 * @link https://tweaked.cc/event/term_resize.html
 */
export function single(this: void, eventName: "term_resize", callback: TermResizeEventDelegate): void;

/**
 * The `terminate` event is fired when Ctrl+T (or ⌘T on Mac) is held down.
 * @link https://tweaked.cc/event/terminate.html
 */
export function single(this: void, eventName: "terminate", callback: TerminateEventDelegate): void;

/**
 * The `timer` event is fired when a timer started with `os.startTimer` completes.
 * @link https://tweaked.cc/event/timer.html
 */
export function single(this: void, eventName: "timer", callback: TimerEventDelegate): void;

/**
 * The `turtle_inventory` event is fired when a turtle's inventory is changed.
 * @link https://tweaked.cc/event/turtle_inventory.html
 */
export function single(this: void, eventName: "turtle_inventory", callback: TurtleInventoryEventDelegate): void;

/**
 * The `turtle_response` event is fired when a turtle command is completed.
 */
export function single(this: void, eventName: "turtle_response", callback: TurtleResponseEventDelegate): void;

/**
 * The `websocket_closed` event is fired when an open WebSocket connection is closed.
 * @link https://tweaked.cc/event/websocket_closed.html
 */
export function single(this: void, eventName: "websocket_closed", callback: WebSocketClosedEventDelegate): void;

/**
 * The `websocket_failure` event is fired when a WebSocket connection request fails.
 * @link https://tweaked.cc/event/websocket_failure.html
 */
export function single(this: void, eventName: "websocket_failure", callback: WebSocketFailureEventDelegate): void;

/**
 * The `websocket_message` event is fired when a message is received on an open WebSocket connection.
 * @link https://tweaked.cc/event/websocket_message.html
 */
export function single(this: void, eventName: "websocket_message", callback: WebSocketMessageEventDelegate): void;

/**
 * The `websocket_success` event is fired when a WebSocket connection request returns successfully.
 * @link https://tweaked.cc/event/websocket_success.html
 */
export function single(this: void, eventName: "websocket_success", callback: WebSocketSuccessEventDelegate): void;

/**
 * Create a once hook (fire-and-forget).
 * @param eventName Name of the custom event.
 * @param callback Function to be invoked once the specified event occurs.
 */
export function single(this: void, eventName: string, callback: (this: void, ...args: any[]) => void): void;

/**
 * Create a once hook (fire-and-forget).
 * @template TEvent The type of event.
 * @param eventName Name of the event.
 * @param callback Function to be invoked once the specified event occurs.
 */
export function single<TEvent extends keyof Events>(this: void, eventName: TEvent, callback: Events[TEvent]): void {
  // Simpler:
  // parallel.waitForAll(() => (<(this: void, ...args: any[]) => void>callback)(...coroutine_yield(eventName)));
  // Complex:
  const id = `singlehook: ${string_sub(tostring({}), 8)}`; // string.format("singlehook: %p", {});
  add(eventName, id, (...args: any[]) => {
    remove(eventName, id);
    (<(this: void, ...args: any[]) => void>callback)(...args);
  });
}

/**
 * For internal use only. Dirty bit, not particularly type-safe.
 * @param eventName Name of the event to be fired.
 * @param args Arguments to be passed to hook handlers.
 */
function call(this: void, eventName: string, ...args: any[]): void {
  // TODO: Maybe inline this whole function into the event loop below, as it is the only usage.
  const e = <LuaTable<string, (this: void, ...args: any[]) => void>>hooks.get(eventName);
  if (e) {
    for (const [_, callback] of e) {
      // Decided against using pcall, so any errors will be propagated (instead of swallowed).
      callback(...args);
    }
  }
}

//assert(coroutine.running() == null, "must be loaded on the top-level coroutine");
const callerSource = debug.getinfo(2).source;
let running = false;

/**
 * Bootstrapper.
 */
export function run(this: void): void {
  if (running) error("hook is already running", 2);
  running = true;
  parallel.waitForAny(() => {
    // Run the event loop.
    while (true) {
      call(coroutine_yield()[0]);
    }
  }, () => {
    if (callerSource == "@bios.lua") {
      os.run({}, term.isColor() && settings.get("bios.use_multishell") ? "rom/programs/advanced/multishell.lua" : "rom/programs/shell.lua");
      os.run({}, "rom/programs/shutdown.lua");
    } else {
      shell.run(multishell ? "multishell" : "shell");
    }
  });
}
