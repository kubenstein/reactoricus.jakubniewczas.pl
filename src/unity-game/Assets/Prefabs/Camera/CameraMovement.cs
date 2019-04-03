using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMovement : MonoBehaviour {
    public float speed = 1;
    private GameObject target;
    private Vector3 offset;

    void Update() {
        if (!target) {
            target = GameObject.FindGameObjectsWithTag("reaktoricus")[0];
            offset = transform.position - target.transform.position;
        }

        transform.position = Vector3.Lerp(
            transform.position,
            target.transform.position + offset,
            Time.deltaTime * speed);
    }
}
