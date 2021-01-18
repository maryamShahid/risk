import Board from "./board/Board";

class Game {
    boardInstance = Board;
    getInstance() {
        return this.boardInstance;
    };
}

export default Game;
