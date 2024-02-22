//Single Component for the square in board

export default function Square({ value, onSquareClick }) {

    return <>
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    </>
}