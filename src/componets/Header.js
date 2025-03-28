import React from 'react'

const Header = (props) => {
  return (
    <>
        <div className='header'>
            <div className='container'>
                <h2>My Todo List</h2>
                <div className='my-total-list'>
                    <span>Add New List -</span>
                    <span>{props.totalList}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
