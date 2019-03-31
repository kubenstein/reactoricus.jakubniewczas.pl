mergeInto(LibraryManager.library, {
  GetMapCoordinates: function () {
    var mapCoordinates = window.mapCoordinates || "0,0,0";

    var bufferSize = lengthBytesUTF8(mapCoordinates) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(mapCoordinates, buffer, bufferSize);
    return buffer;
  },

  OnConfirmationEvent: function (confirmationEventName) {
    window.OnConfirmationEvent(Pointer_stringify(confirmationEventName));
  }
});
