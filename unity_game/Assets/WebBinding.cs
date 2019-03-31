using System;
using UnityEngine;
using System.Runtime.InteropServices;

public class WebBinding : MonoBehaviour {
    [DllImport("__Internal")]
    public static extern void OnEvent(string eventName);

    [DllImport("__Internal")]
    public static extern string GetMapCoordinates();
}
