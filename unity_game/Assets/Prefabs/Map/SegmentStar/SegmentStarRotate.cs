using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SegmentStarRotate : MonoBehaviour {
    public float speed = 2;

    private void FixedUpdate() {
        transform.Rotate(new Vector3(0, 1, 0) * speed);
    }
}
