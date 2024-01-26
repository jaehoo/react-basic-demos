

const suqareStyle = {
    height: "100px",
    width: "100px"
}


export default function Square(props) {

    function squareClick(){

        if(props.value === "-"){
            props.boardClick(props.rowIndex, props.columnIndex)
        }

        
    }

    return <button style={suqareStyle} 
        onClick={ squareClick } 
        className={props.value === "-"? "clickable": "noclickable"}
    >{props.value}</button>
}