using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoricusCollectStar : MonoBehaviour {
    private void OnTriggerEnter(Collider other) {
        if (other.tag.Equals("star")) {
            Destroy(other.gameObject);
        }
    }
}
