using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoricusCollectStar : MonoBehaviour {
    public int Left = 0;

    public void Restart() {
        Left = GameObject.FindGameObjectsWithTag("star").Length;
    }

    private void OnTriggerEnter(Collider other) {
        if (other.tag.Equals("star")) {
            other.gameObject.SetActive(false);
            Left -= 1;
            if (Left == 0) {
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
