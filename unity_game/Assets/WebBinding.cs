using System;
using UnityEngine;
using System.Runtime.InteropServices;

public class WebBinding : MonoBehaviour {
    [DllImport("__Internal")]
    public static extern void OnConfirmationEvent(string confirmationEventName);

    [DllImport("__Internal")]
    public static extern string GetMapCoordinates();
}
