import React from 'react'

const BugTile = ({ bug, noData, deleteCurrentBug, resolveCurrentBug }) => {
  return (
    <div className='container bg-[#dddd] w-[50vw] h-[10vh] rounded-[10px] shadow-md mx-auto my-[15px]'  key={bug.id}>
      <div className='container flex justify-between p-[10px_20px] items-center'>
        <div className='h-[30px] w-[30px] bg-[#110d42] text-[16px] rounded-[3px] p-[2px_5px] text-center text-white'>
          {bug.id}
        </div>
        <div className='w-[60%]'>
          <p className='text-[20px]'>{bug.title || noData}</p>
        </div>
        <button onClick={() => resolveCurrentBug(bug.id)} className='bg-[#110d42] text-[white] rounded-[10px] h-[50px] p-[0px_30px] text-[20px]' >{bug.resolved ? 'completed' : 'Mark Complete'}</button>
        <button onClick={() => deleteCurrentBug(bug.id)} className='bg-[#110d42] text-[white] h-[30px] w-[30px] rounded-[50%] text-[12px]'>X</button>
      </div>
    </div>
  )
}

export default BugTile