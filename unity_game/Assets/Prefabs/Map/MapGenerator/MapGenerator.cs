using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MapGenerator : MonoBehaviour {
    public Transform[] segmentsPrefabs;
    public Transform starPrefab;
    public Transform playerPrefab;

    void Start() {
        MapCoordinationsProvider mcp = new MapCoordinationsProvider();

        foreach(MapCoordinates coordinates in mcp.MapCoordinates()) { 
            CreateSegment(coordinates.x, coordinates.y, coordinates.withStar);
        }

        CreatePlayer();
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

    void CreatePlayer() {
        Vector3 playerPosition = new Vector3(0, 1, 0);
        Instantiate(playerPrefab, playerPosition, Quaternion.identity);
    }

    Transform RandomSegment() {
        return segmentsPrefabs[Random.Range(0, segmentsPrefabs.Length)];
    }
}