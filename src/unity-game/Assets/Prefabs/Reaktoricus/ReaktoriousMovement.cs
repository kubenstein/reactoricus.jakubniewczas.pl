using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoriousMovement : MonoBehaviour {
    public float moveSpeed = 0.05f;
    public GameObject boxDetectorGameObject;
    private ReaktoriousStayingOnSegmentsDetection boxDetector;
    private ReaktoricusCollectStar starCollector;
    private int currentStepIndex = 1; // initial loop running prevention until GameStart is called
    private bool outOfMap;
    private List<Step> steps = new List<Step>();

    void Start() {
        this.name = "Reaktorious";
    }

    void Awake() {
        boxDetector = boxDetectorGameObject.GetComponent<ReaktoriousStayingOnSegmentsDetection>();
        starCollector = gameObject.GetComponent<ReaktoricusCollectStar>();
    }

    void GameStart() {
        steps = new List<Step>();
        outOfMap = false;
        currentStepIndex = 0;
        float x = 0;
        float y = 0;
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

        Step step = new Step("TurnRight", previousStep.x, previousStep.y, newForward);
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
        if (currentStepIndex < steps.Count) {
            Step currentStep = steps[currentStepIndex];

            HandleGameStart(currentStep);
            if (starCollector.Left > 0) {
                HandleTurning(currentStep);
                HandleMovingForward(currentStep);
                HandleReachedDestination(currentStep);
                HandleOutside(currentStep);
            }
        }
    }


    // private

    void HandleOutside(Step step) {
        if (outOfMap) {
            if (transform.position.y > 0) {
                transform.position += new Vector3(0, -1, 0) * moveSpeed;
            } else {
                steps = new List<Step>();
                Fail(step.name);
            }
        }
    }

    void HandleGameStart(Step step) {
        if (step.name.Equals("GameStart")) {
            MapGenerator.EnableAllStars();
            starCollector.Restart();
            transform.eulerAngles = new Vector3(0, 0, 0);
            transform.position = new Vector3(0, 1, 0);
        }
    }

    void HandleTurning(Step step) {
        if (step.name.Equals("TurnLeft") || step.name.Equals("TurnRight")) {
            Vector3 newForward = Vector3.RotateTowards(transform.forward, step.forward, moveSpeed, 0.0f);
            transform.rotation = Quaternion.LookRotation(newForward);
        }
    }

    void HandleMovingForward(Step step) {
        if (step.name.Equals("Forward")) {
            transform.position += step.forward * moveSpeed;
        }
    }

    void HandleReachedDestination(Step step) {
        if (ReachedDestination(step)) {
            if (boxDetector.OnTopOfSegment) {
                currentStepIndex++;
                Confirm(step.name);
            } else {
                outOfMap = true;
            }
        }
    }

    // utils

    bool ReachedDestination(Step step) {
        return Mathf.Abs(step.x - transform.position.x) < 0.01f
            && Mathf.Abs(step.y - transform.position.z) < 0.01f
            && Vector3.Distance(step.forward, transform.forward) < 0.01f;
    }

    void Confirm(string eventName) {
        try {
            WebBinding.OnEvent(eventName + "Done");
        } catch (Exception e) { }
    }

    void Fail(string eventName) {
        try {
            WebBinding.OnEvent(eventName + "Fail");
        } catch (Exception e) { }
    }
}

class Step {
    public string name;
    public float x;
    public float y;
    public Vector3 forward;
    public bool outsideMap;

    public Step(string name, float x, float y, Vector3 forward) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.forward = forward;
    }
}
