import Square from "./Square";

export default function Board(props){
    return <div>
        {
        props.values.map((rowValues, rowIndex)=>{
            
            let row = rowValues.map((value, columnIndex)=>{
            return <Square value={value} 
                    key={rowIndex + '-' + columnIndex }
                    boardClick={props.appClick}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                />
            });

            return <div key={'row'+rowIndex}>{row}</div>
        })
        }
      
    </div>
}