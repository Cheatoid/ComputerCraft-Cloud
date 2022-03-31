declare type AlarmEventDelegate =
  /**
   * @param id The ID of the alarm that finished.
   */
  (this: void, id: number) => void;
declare type CharEventDelegate =
  /**
   * @param char The string representing the character that was pressed.
   */
  (this: void, char: string) => void;
declare type ComputerCommandEventDelegate =
  /**
   * @param args The arguments passed to the command.
   */
  (this: void, ...args: string[]) => void;
declare type DiskEventDelegate =
  /**
   * @param side The side of the disk drive that had a disk inserted.
   */
  (this: void, side: ComputerSide) => void;
declare type DiskEjectEventDelegate =
  /**
   * @param side The side of the disk drive that had a disk removed.
   */
  (this: void, side: ComputerSide) => void;
declare type HttpCheckEventDelegate =
  /**
   * @param url The URL requested to be checked.
   * @param success Whether the check succeeded.
   * @param errorReason If the check failed, a reason explaining why the check failed.
   */
  (this: void, url: string, success: boolean, errorReason?: string) => void;
declare type HttpFailureEventDelegate =
  /**
   * @param url The URL of the site requested.
   * @param reason An error describing the failure.
   * @param handle A response handle if the connection succeeded, but the server's response indicated failure.
   */
  (this: void, url: string, reason: string, handle?: HttpResponse) => void;
declare type HttpSuccessEventDelegate =
  /**
   * @param url The URL of the site requested.
   * @param handle The handle of the response.
   */
  (this: void, url: string, handle: HttpResponse) => void;
declare type KeyEventDelegate =
  /**
   * @param keyCode The numerical key value of the key pressed.
   * @param hold Whether the key event was generated while holding the key (`true`), rather than pressing it the first time (`false`).
   */
  (this: void, keyCode: number, hold: boolean) => void;
declare type KeyUpEventDelegate =
  /**
   * @param keyCode The numerical key value of the key released.
   */
  (this: void, keyCode: number) => void;
declare type ModemMessageEventDelegate =
  /**
   * @param side The side of the modem that received the message.
   * @param channel The channel that the message was sent on.
   * @param replyChannel The reply channel set by the sender.
   * @param message The message as sent by the sender.
   * @param distance The distance between the sender and the receiver, in blocks.
   */
  (this: void, side: ComputerSide, channel: number, replyChannel: number, message: any, distance: number) => void;
declare type MonitorResizeEventDelegate =
  /**
   * @param side The side or network ID of the monitor that resized.
   */
  (this: void, side: ComputerSide) => void;
declare type MonitorTouchEventDelegate =
  /**
   * @param side The side or network ID of the monitor that was touched.
   * @param x The X-coordinate of the touch, in characters.
   * @param y The Y-coordinate of the touch, in characters.
   */
  (this: void, side: ComputerSide, x: number, y: number) => void;
declare type MouseClickEventDelegate =
  /**
   * @param button The mouse button that was clicked.
   * @param x The X-coordinate of the click, in characters.
   * @param y The Y-coordinate of the click, in characters.
   */
  (this: void, button: MouseButton, x: number, y: number) => void;
declare type MouseDragEventDelegate =
  /**
   * @param button The mouse button that is being pressed.
   * @param x The X-coordinate of the mouse, in characters.
   * @param y The Y-coordinate of the mouse, in characters.
   */
  (this: void, button: MouseButton, x: number, y: number) => void;
declare type MouseScrollEventDelegate =
  /**
   * @param direction The direction of the scroll. (-1 = up, 1 = down)
   * @param x The X-coordinate of the mouse when scrolling, in characters.
   * @param y The Y-coordinate of the mouse when scrolling, in characters.
   */
  (this: void, direction: MouseScrollDirection, x: number, y: number) => void;
declare type MouseUpEventDelegate =
  /**
   * @param button The mouse button that was released.
   * @param x The X-coordinate of the mouse, in characters.
   * @param y The Y-coordinate of the mouse, in characters.
   */
  (this: void, button: MouseButton, x: number, y: number) => void;
declare type PasteEventDelegate =
  /**
   * @param text The text that was pasted.
   */
  (this: void, text: string) => void;
declare type PeripheralEventDelegate =
  /**
   * @param side The side the peripheral was attached to.
   */
  (this: void, side: ComputerSide) => void;
declare type PeripheralDetachEventDelegate =
  /**
   * @param side The side the peripheral was detached from.
   */
  (this: void, side: ComputerSide) => void;
declare type RednetMessageEventDelegate =
  /**
   * @param id The computer ID of the sender.
   * @param message The message sent.
   * @param protocol The protocol of the message, if provided.
   */
  (this: void, id: number, message: any, protocol?: string) => void;
declare type RedstoneEventDelegate = (this: void) => void;
declare type SpeakerAudioEmptyEventDelegate =
  /**
   * @param name The name of the speaker which is available to play more audio.
   */
  (this: void, name: string) => void;
declare type TaskCompleteEventDelegate =
  /**
   * @param id The ID of the task that completed.
   * @param success Whether the task succeeded.
   * @param args If the task failed, this will only contain an error message explaining the failure.
   * Otherwise, if the task succeeded, this will be any parameters returned from the task.
   */
  // (this: void, id: number, ...args: [false, string] | [true, any[]]) => void;
  (this: void, id: number, success: boolean, ...args: any[]) => void;
declare type TermResizeEventDelegate = (this: void) => void;
declare type TerminateEventDelegate = (this: void) => void;
declare type TimerEventDelegate =
  /**
   * @param id The ID of the timer that finished.
   */
  (this: void, id: number) => void;
declare type TurtleInventoryEventDelegate = (this: void) => void;
declare type TurtleResponseEventDelegate =
  /**
   * @param id The callback ID.
   * @param success Whether the command succeeded.
   * @param errorReason If the command failed, an error message explaining the failure. (This is not present if the command succeeded.)
   */
  (this: void, id: number, success: boolean, errorReason?: string) => void;
declare type WebSocketClosedEventDelegate =
  /**
   * @param url The URL of the WebSocket that was closed.
   */
  (this: void, url: string) => void;
declare type WebSocketFailureEventDelegate =
  /**
   * @param url The URL of the site requested.
   * @param reason An error describing the failure.
   */
  (this: void, url: string, reason: string) => void;
declare type WebSocketMessageEventDelegate =
  /**
   * @param url The URL of the WebSocket.
   * @param message The contents of the message.
   * @param binary Whether this is a binary message.
   */
  (this: void, url: string, message: string, binary: boolean) => void;
declare type WebSocketSuccessEventDelegate =
  /**
   * @param url The URL of the site.
   * @param handle The handle of the WebSocket.
   */
  (this: void, url: string, handle: WebSocket) => void;
declare type Events = {
  alarm: AlarmEventDelegate;
  char: CharEventDelegate;
  computer_command: ComputerCommandEventDelegate;
  disk: DiskEventDelegate;
  disk_eject: DiskEjectEventDelegate;
  http_check: HttpCheckEventDelegate;
  http_failure: HttpFailureEventDelegate;
  http_success: HttpSuccessEventDelegate;
  key: KeyEventDelegate;
  key_up: KeyUpEventDelegate;
  modem_message: ModemMessageEventDelegate;
  monitor_resize: MonitorResizeEventDelegate;
  monitor_touch: MonitorTouchEventDelegate;
  mouse_click: MouseClickEventDelegate;
  mouse_drag: MouseDragEventDelegate;
  mouse_scroll: MouseScrollEventDelegate;
  mouse_up: MouseUpEventDelegate;
  paste: PasteEventDelegate;
  peripheral: PeripheralEventDelegate;
  peripheral_detach: PeripheralDetachEventDelegate;
  rednet_message: RednetMessageEventDelegate;
  redstone: RedstoneEventDelegate;
  speaker_audio_empty: SpeakerAudioEmptyEventDelegate;
  task_complete: TaskCompleteEventDelegate;
  term_resize: TermResizeEventDelegate;
  terminate: TerminateEventDelegate; // Special case
  timer: TimerEventDelegate;
  turtle_inventory: TurtleInventoryEventDelegate;
  turtle_response: TurtleResponseEventDelegate; // Undocumented/Internal
  websocket_closed: WebSocketClosedEventDelegate;
  websocket_failure: WebSocketFailureEventDelegate;
  websocket_message: WebSocketMessageEventDelegate;
  websocket_success: WebSocketSuccessEventDelegate;
};
