import React from "react";
import invert from "invert-color";

class Country {
    constructor(id, d, textCoordinates, color, countryJson = null) {
        this.id = id;
        this.d = d;
        this.textCoordinates = textCoordinates;
        if (countryJson) {
            this.id = countryJson.id;
            this.color = countryJson.color;
            this.defaultColor = countryJson.defaultColor;
            this.isActive = countryJson.isActive;
            this.numberOfTroops = countryJson.numberOfTroops;
            this.occupyingPlayerId = countryJson.occupyingPlayerId;
        } else {
            this.numberOfTroops = 0;
            this.occupyingPlayerId = "";
            this.color = color;
            this.defaultColor = color;
            this.isActive = false;
        }
    }

    getAsJson() {
        var result = {};
        result.color = this.color;
        result.defaultColor = this.defaultColor;
        result.id = this.id;
        result.isActive = this.isActive;
        result.numberOfTroops = this.numberOfTroops;
        result.occupyingPlayerId = this.occupyingPlayerId;
        return result
    }

    getId() {
        return this.id;
    }

    getNumberOfTroops() {
        return this.numberOfTroops;
    }
    setNumberOfTroops(numberOfTroops) {
        this.numberOfTroops = numberOfTroops;
    }

    getOccupyingPlayerId() {
        return this.occupyingPlayerId;
    }
    setOccupyingPlayer(player) {
        this.occupyingPlayerId = player.id;
        this.setColor(player.color);
    }

    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }

    setActiveState(isActive) {
        this.isActive = isActive;
    }
    getActiveState() {
        return this.isActive;
    }

    verifyTroops() {
        if (this.numberOfTroops < 0) {
            this.numberOfTroops = 0;
        }
    }

    setDefaultColor() {
        this.setColor(this.defaultColor);
    }

    incrementDecerementTroops(numOfTroops) {
        this.numberOfTroops += numOfTroops;
        if (numOfTroops < 0) {
            this.numberOfTroops = 0;
        }
    }

    getView() {
        const text = React.createElement("text", {
            x: this.textCoordinates[0],
            y: this.textCoordinates[1],
            fontFamily: "Verdana",
            fontSize: "15",
            fill: "white",
            style: {
                pointerEvents: "none",
                fill: invert(this.color, true),
                userSelect: "none"
            },
            children: this.numberOfTroops,
        });
        const path = React.createElement("path", {
            id: this.id,
            d: this.d,
            stroke: invert(this.color, true),
            strokeMiterlimit: "4.32165",
            style: {
                cursor: "pointer",
                fill: this.isActive ? "#d9b51c" : this.color,
                // opacity: this.isActive ? 0.3 : 1
            },
        });
        const g = React.createElement("g", null, path, text);

        return g;
    }
}



export default Country;
