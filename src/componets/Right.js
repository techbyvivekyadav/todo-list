import React, { useState } from 'react'

const Right = (props) => {
    const [title, setTitle] = useState('');
    const [disc, setDisc] = useState('');
    
    return (
        <>
            <div className='right-section cen'>
                <div className='form'>
                    <div>
                        <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Enter your title' className='text-design' />
                        <textarea type='text' value={disc} onChange={(e) => { setDisc(e.target.value) }} placeholder='Enter your discription here.' className='text-design' rows={5} cols={50} />
                        <button onClick={() => { props.addNewList(title, disc) }} className='sm-btn'>Sumbit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Right
