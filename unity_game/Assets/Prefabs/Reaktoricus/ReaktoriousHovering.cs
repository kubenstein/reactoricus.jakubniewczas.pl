using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReaktoriousHovering : MonoBehaviour {
    public float speed = 0.1f;
    public float amplitude = 0.1f;
    public float initialY;
    private bool up = true;

    void Awake() {
        initialY = transform.position.y;
    }

    void Update() {
        Vector3 position = transform.position;
        if (position.y > initialY + amplitude) up = !up;
        if (position.y < initialY-amplitude) up = !up;
        position.y += Time.deltaTime * speed * (up ? 1 : -1);
        transform.position = position;
    }
}
