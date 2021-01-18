class PlayerTurnDecider {
    constructor(players, isGameSaved) {
        this.players = players;
        this.indexOfPlayerWithTurn = 0;
        if (isGameSaved) {
            this.indexOfPlayerWithTurn = this.players.findIndex(player => player.isPlayerTurn == true);
        }
    }

    getPlayerWithTurn() {
        this.players[this.indexOfPlayerWithTurn].setIsPlayerTurn(true);
        return this.players[this.indexOfPlayerWithTurn];
    }

    endTurnForPlayer(shouldValidatePlayerTroops) {
        console.log("whyy", shouldValidatePlayerTroops)
        if (shouldValidatePlayerTroops && this.players[this.indexOfPlayerWithTurn].getRemainingTroops() !== 0) {
            return false;
        }
        this.players[this.indexOfPlayerWithTurn].setIsPlayerTurn(false);
        this.indexOfPlayerWithTurn = (this.indexOfPlayerWithTurn + 1) % this.players.length;
        this.players[this.indexOfPlayerWithTurn].setIsPlayerTurn(true);
        return true;
    }

    getNextPlayer() {
        this.endTurnForPlayer();
        return this.getPlayerWithTurn();
    }

    getCurrentPlayerInfo() {
        return this.players[this.indexOfPlayerWithTurn];
    }
}
export default PlayerTurnDecider;
