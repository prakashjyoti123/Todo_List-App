

function List(props){
    return (<div>
        {
            props.itemList.map(itemObj=>{
                return <div> <p>{itemObj.item}</p>
                <button>*</button>
                </div>
            })
        }
    </div>
    )
}

export default List;