// Interface Implementation
class DeploymentStrategy {
    deploy(map, playerTurnDecider, selectedCountryId, troopsGiver, cardsDeck, alert, callback) {
        throw new Error("Deploy method unimplemented in Deployment Strategy");
    }
}

// Strategy 1: Initial Troops Deployment When Game Starts
export class InitialDeployment extends DeploymentStrategy {
    deploy(map, playerTurnDecider, selectedCountryId, troopsGiver, cardsDeck, alert, callback) {
        if (map.deployTroop(selectedCountryId, playerTurnDecider.getPlayerWithTurn(), 1, true)) {
            playerTurnDecider.endTurnForPlayer(false);
            if (!map.doPlayersHaveTroops()) {
                const currentPlayer = playerTurnDecider.getPlayerWithTurn();
                troopsGiver.giveTroopsToPlayer(currentPlayer);
                if (cardsDeck.shuffleCards() === "CARDS_SHUFFLED") {
                    alert.success("Cards Shuffled!");
                } else {
                    alert.error("Card could not be shuffled");
                }
                callback({ initialSetupPhase: false, turnsPhase: true });
                return true;
            }
        }
    }
}

// Strategy 2: Troops Deployment When Player Turn Starts
export class TurnsDeployment extends DeploymentStrategy {
    deploy(map, playerTurnDecider, selectedCountryId, troopsGiver, cardsDeck, alert, callback) {
        const deploymentResult = map.deployTroop(selectedCountryId, playerTurnDecider.getPlayerWithTurn(), 1, true);
        if (playerTurnDecider.getCurrentPlayerInfo().getRemainingTroops() === 0) {
            callback({ cardsTrade: false });
            if (playerTurnDecider.getCurrentPlayerInfo().getCards().length > 5) {
                callback({ showCards: true });
                return;
            }
            callback({ turnsPhase: false, attackOrSkipTurnPhase: true, countryToAttackOrManeuverTo: "" });
        }
    }
}
