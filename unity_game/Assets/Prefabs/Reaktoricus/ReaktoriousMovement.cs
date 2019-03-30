using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoriousMovement : MonoBehaviour {
    public int confirmationDelay = 1; // in sec
    private float passedAfterMove = 0;
    private string eventToConfirm = "";

    void Start() {
        this.name = "Reaktorious";
    }

    void GameStart() {
        eventToConfirm = "GameStart";
        transform.Rotate(new Vector3(0, 0, 0));
        transform.position = new Vector3(0, 0, 0);
    }

    void TurnLeft() {
        eventToConfirm = "TurnLeft";
        float y = transform.rotation.y - 90;
        transform.Rotate(new Vector3(0, y, 0));
    }

    void TurnRight() {
        eventToConfirm = "TurnRight";
        float y = transform.rotation.y + 90;
        transform.Rotate(new Vector3(0, y, 0));
    }

    void Forward() {
        eventToConfirm = "Forward";
        transform.position += transform.forward;
    }

    void FixedUpdate() {
        passedAfterMove += Time.deltaTime;
        if (!eventToConfirm.Equals("") && passedAfterMove > confirmationDelay) {
            Confirm(eventToConfirm);
            eventToConfirm = "";
        }
    }

    private

    void Confirm(string eventName) {
        try {
            OnConfirmationEvent(eventName + "Done");
        } catch (Exception e) { }
    }
}
