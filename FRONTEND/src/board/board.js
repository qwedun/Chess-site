import Figure from "./figures/figure";

class Board {

    static changeTurn(currentTurn, setCurrentTurn) {
        if (currentTurn === 'white') {
            setCurrentTurn('black');
        }
        else {
            setCurrentTurn('white');
        }
    }

    static findKing(board, color) {
        for (let row of board)
            for (let figure of row)
                if (figure.name === 'king' && figure.color === color)
                    return figure;
    }
    static createBoard() {
        const board = [];

        for (let j = 0; j < 8; j++) {
            board.push([]);
            for (let i = 0; i < 8; i++) {
                board[j].push(Figure.addFigures(i, j))

            }
        }
        return board
    }

    static updateBoard(board, color) {

        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                const figure = board[j][i]
                if (figure.canMove) figure.canMove = false;
                if (figure.underAttack) figure.underAttack = false;
                if (figure.kingDefender) figure.kingDefender = false;
                if (figure.underCheck) figure.underCheck = false;
                if (figure.canDefend) figure.canDefend = false;
                if (figure.isAttackingKing) figure.isAttackingKing = false;
                if (figure.underFriendlyAttack) figure.underFriendlyAttack = false;
                if (figure.isDiagonal) figure.isDiagonal = false;
                if (figure.isVertical) figure.isVertical = false;
                if (figure.kingDirection) figure.kingDirection = null;
                if (figure.kingCanMove) figure.kingCanMove = false;
                if (figure.canBeAttacked) figure.canBeAttacked = false;
                if (figure.canBeMoved) figure.canBeMoved = false;

            }
        }



        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                const figure = board[j][i];
                if (figure.name)
                    if (figure.color !== color)
                        figure.checkMoves(board, true)
            }
        }
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                const figure = board[j][i];
                if (figure.color === color) figure.checkMoves?.(board, false)
            }
        }

        return board
    }

    static isKingCanDefend(board) {
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                if (board[j][i].canDefend && board[j][i].canMove)
                    return true
            }
        }
        return false
    }


}

export default Board;

