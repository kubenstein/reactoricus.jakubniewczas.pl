using System;
using System.Collections.Generic;

public class MapCoordinationsProvider {
    public List<MapCoordinates> MapCoordinates() {
        List<MapCoordinates> coordinates = new List<MapCoordinates>();

        string mapCoordinates;
        try {
            mapCoordinates = WebBinding.GetMapCoordinates();
        } catch(Exception e) {
            mapCoordinates = "0,0,0|1,0,1|1,1,0|1,2,0|1,3,0";
        }
        string[] segmentsTxt = mapCoordinates.Split('|');
        foreach (string segmentTxt in segmentsTxt) {
            string[] segmentInfo = segmentTxt.Split(',');
            int x = int.Parse(segmentInfo[0]);
            int y = int.Parse(segmentInfo[1]);
            bool withStar = segmentInfo[2].Equals("1");
            coordinates.Add(new MapCoordinates(x, y, withStar));
        }
        return coordinates;
    }
}

public class MapCoordinates {
    public int x;
    public int y;
    public bool withStar;

    public MapCoordinates(int x, int y, bool withStar) {
        this.x = x;
        this.y = y;
        this.withStar = withStar;
    }
}