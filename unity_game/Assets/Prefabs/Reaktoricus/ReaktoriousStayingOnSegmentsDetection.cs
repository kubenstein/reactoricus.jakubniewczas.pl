using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoriousStayingOnSegmentsDetection : MonoBehaviour {
    public bool OnTopOfSegment = true;

    private void OnTriggerExit(Collider other) {
        if (other.tag.Equals("box")) {
            OnTopOfSegment = false;
        }
    }

    private void OnTriggerEnter(Collider other) {
        if (other.tag.Equals("box")) {
            OnTopOfSegment = true;
        }
    }
}
