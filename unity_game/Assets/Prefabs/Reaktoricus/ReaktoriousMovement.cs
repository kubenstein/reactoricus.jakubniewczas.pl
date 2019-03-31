using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoriousMovement : MonoBehaviour {
    public float moveSpeed = 0.05f;
    private List<Step> steps = new List<Step>();

    void Start() {
        this.name = "Reaktorious";
    }

    void GameStart() {
        float x = transform.position.x;
        float y = transform.position.z; // y is z
        Vector3 forward = transform.forward;
        Step step = new Step("GameStart", x, y, forward);
        steps.Add(step);
    }

    void TurnLeft() {
        Step previousStep = steps[steps.Count - 1];
        Vector3 newForward = Quaternion.AngleAxis(-90, Vector3.up) * previousStep.forward;

        Step step = new Step("TurnLeft", previousStep.x, previousStep.y, newForward);
        steps.Add(step);
    }

    void TurnRight() {
        Step previousStep = steps[steps.Count - 1];
        Vector3 newForward = Quaternion.AngleAxis(90, Vector3.up) * previousStep.forward;

        Step step = new Step("TurnLeft", previousStep.x, previousStep.y, newForward);
        steps.Add(step);
    }

    void Forward() {
        Step previousStep = steps[steps.Count - 1];
        Vector3 position = new Vector3(previousStep.x, 0, previousStep.y);
        position += previousStep.forward;
        float x = position.x;
        float y = position.z; // y is z

        Step step = new Step("Forward", x, y, previousStep.forward);
        steps.Add(step);
    }

    void FixedUpdate() {
        if (steps.Count > 0) {
            Step currentStep = steps[0];

            if (currentStep.name.Equals("GameStart")) {
                transform.eulerAngles = new Vector3(0, 0, 0);
                transform.position = new Vector3(0, 1, 0);
            }

            if (currentStep.name.Equals("TurnLeft") || currentStep.name.Equals("TurnRight")) {
                Vector3 newForward = Vector3.RotateTowards(transform.forward, currentStep.forward, moveSpeed, 0.0f);
                transform.rotation = Quaternion.LookRotation(newForward);
            }

            if (currentStep.name.Equals("Forward")) {
                transform.position += currentStep.forward * moveSpeed;
            }

            if (ReachedDestination(currentStep)) { 
                Confirm(currentStep.name);
                steps.RemoveAt(0);
            }
        }
    }


    // private 

    bool ReachedDestination(Step step) {
        return Mathf.Approximately(step.x, transform.position.x)
            && Mathf.Approximately(step.y, transform.position.z)
            && Vector3.Distance(step.forward, transform.forward) < 0.01f;
    }

    void Confirm(string eventName) {
        try {
            WebBinding.OnConfirmationEvent(eventName + "Done");
        } catch (Exception e) { }
    }
}

class Step {
    public string name;
    public float x;
    public float y;
    public Vector3 forward;

    public Step(string name, float x, float y, Vector3 forward) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.forward = forward;
    }
}
