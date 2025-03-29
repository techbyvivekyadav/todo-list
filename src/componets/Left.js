import React from 'react'

const Left = (props) => {   
    return (
        <>
            <div className='left-section cen'>

                {(props.mylist.length<=0) ? 
                <div className='no-list'>
                    <h1>No any Data here</h1>
                </div>
                :
                <div className='todo-list'>   
                    {
                        props.mylist.map((item) => {   
                            
                            return (<div className='box' key={item.sno}>
                                <h3>{item.title}</h3>
                                <span>{item.disc}</span>
                                <div className='button'>
                                    <button id='delete' onClick={()=>{props.deleteItem(item)}}>Delete</button>
                                    <button id='complited' onClick={()=>{props.completeItem(item.sno)}}>Complited</button>
                                </div>
                            </div>)  
                        })
                    }
                </div>
                }
            </div>
        </>
    )
}

export default Left
