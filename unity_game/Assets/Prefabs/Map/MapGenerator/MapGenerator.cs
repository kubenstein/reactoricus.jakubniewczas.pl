using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MapGenerator : MonoBehaviour {
    public Transform[] segmentsPrefabs;
    public Transform starPrefab;

    void Start() {
        CreateSegment(0, 0, false);
        CreateSegment(1, 0, true);
        CreateSegment(1, 1, false);
    }


    private

    void CreateSegment(int x, int y, bool withStar) {
        Vector3 position = new Vector3(x, 0, y);
        InstantiateSegment(position);
        if (withStar) InstantiateStar(position);
    }

    void InstantiateSegment(Vector3 position) {
        Instantiate(RandomSegment(), position, Quaternion.identity);
    }

    void InstantiateStar(Vector3 position) {
        Vector3 starPosition = new Vector3(position.x, 1, position.z);
        Instantiate(starPrefab, starPosition, Quaternion.identity);
    }

    Transform RandomSegment() {
        return segmentsPrefabs[Random.Range(0, segmentsPrefabs.Length)];
    }
}