using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoricusCollectStar : MonoBehaviour {
    private int starsCount = 0;

    private void Awake() {
        starsCount = GameObject.FindGameObjectsWithTag("star").Length;
    }

    private void OnTriggerEnter(Collider other) {
        if (other.tag.Equals("star")) {
            Destroy(other.gameObject);
            starsCount -= 1;
            if (starsCount == 0) {
                FinishGame();
            }
        }
    }

    void FinishGame() {
        try {
            WebBinding.OnEvent("GameFinished");
        } catch (Exception e) { }
    }
}
