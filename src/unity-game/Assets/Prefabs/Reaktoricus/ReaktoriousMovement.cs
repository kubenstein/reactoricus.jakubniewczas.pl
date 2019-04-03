using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoriousMovement : MonoBehaviour {
    public float moveSpeed = 0.05f;
    public GameObject boxDetectorGameObject;
    private ReaktoriousStayingOnSegmentsDetection boxDetector;
    private ReaktoricusCollectStar starCollector;
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
        float x = 0;
        float y = 0;
        Vector3 forward = new Vector3(0, 0, 1);
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
        if (steps.Count > 0) {
            Step currentStep = steps[0];

            HandleGameStart(currentStep);
            HandleTurning(currentStep);
            HandleMovingForward(currentStep);
            HandleFallingOutside(currentStep);

            HandleHittingGround(currentStep);
            HandleReachedDestination(currentStep);
            HandleFinishGameSuccess(currentStep);

            if (currentStep.completed) {
               if (!outOfMap) SyncWith(currentStep);
                steps.RemoveAt(0);
            }
        }
    }


    // private

    void HandleFallingOutside(Step step) {
        if (outOfMap && transform.position.y > 0) {
            transform.position += new Vector3(0, -1, 0) * moveSpeed;
        }
    }

    void HandleHittingGround(Step step) {
        if (transform.position.y <= 0) {
            Fail(step.name);
            step.completed = true;
        }
    }

    void HandleGameStart(Step step) {
        if (step.name.Equals("GameStart")) {
            outOfMap = false;
            MapGenerator.EnableAllStars();
            starCollector.Restart();
            transform.rotation = Quaternion.LookRotation(step.forward);
            transform.position = new Vector3(step.x, 1, step.y); // y is z
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
                Confirm(step.name);
                step.completed = true;
            } else {
                outOfMap = true;
            }
        }
    }

    void HandleFinishGameSuccess(Step step) {
        if (starCollector.Left <= 0) {
            FinishGame();
            step.completed = true;
        }
    }

    // utils

    void SyncWith(Step step) {
        transform.rotation = Quaternion.LookRotation(step.forward);
        transform.position = new Vector3(step.x, transform.position.y, step.y); // y is z
    }

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


    void FinishGame() {
        try {
            WebBinding.OnEvent("GameFinished");
        } catch (Exception e) { }
    }
}

class Step {
    public string name;
    public float x;
    public float y;
    public Vector3 forward;
    public bool completed;

    public Step(string name, float x, float y, Vector3 forward) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.forward = forward;
        completed = false;
    }
}
