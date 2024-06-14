import { useState } from 'react';
import './App.css';
import BugTile from './components/BugTile';
import { connect } from 'react-redux';
import { addBug, deleteBug, resolveBug } from './Store/actioniCreators/actionCreators'



function App(props) {
  const { addNewBug, BugsList, deleteCurrentBug, resolveCurrentBug } = props
  const defaultData = { id: null, title: '', resolved: false }
  const [currentBug, setCurrentBug] = useState(defaultData);
  const [enableButton, setEnableButton] = useState(true);

  const onChangeTitle = (name, e) => {
    setEnableButton(false)
    let newObj = { ...defaultData, title: e, id: BugsList.length + 1 };
    setCurrentBug(newObj);
  }

  const adddBugHandler = () => {
    addNewBug(currentBug);
    setCurrentBug(defaultData);
    setEnableButton(true)
  }
  return (
    <div className="App bg-[#2a2a] text-[58px] h-[100vh] w-[100vw] pt-[30px] scrollbar-thumb-white scrollbar-w-[0px] scrollbar-track-white overflow-y-scroll  ">
      <div className='container bg-[#dddd] w-[50vw] h-[15vh] rounded-[10px] shadow-md m-auto'>
        <div className='container flex justify-between p-[25px_40px]'>
          <input className={`rounded-[10px] w-[30vw] h-[50px] text-[14px] p-[0px_10px]`} type='text' name='title' value={currentBug.title} onChange={(e) => onChangeTitle('title', e.target.value)} />
          <button className='bg-[#110d42] text-[white] rounded-[10px] h-[50px] p-[5px_30px] text-[20px]' onClick={adddBugHandler} disabled={enableButton}>Add New Task</button>
        </div>
      </div>
      {
        BugsList && BugsList.length > 0 ? BugsList.map((bug, key) => {
          return (
            <BugTile bug={bug} key={bug.id} deleteCurrentBug={deleteCurrentBug} resolveCurrentBug={resolveCurrentBug} />
          )
        }) : <p className='text-[30px] text-black bg-[#dddd] w-[50vw] m-auto rounded-[10px] shadow-md mt-[20px] p-[20px_20px]'>No todos availble in this sprint.....</p>
      }

    </div>
  );
}


function mapStateToProps(state) {
  return {
    BugsList: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addNewBug: (bug) => dispatch(addBug(bug)),
    deleteCurrentBug: (id) => dispatch(deleteBug(id)),
    resolveCurrentBug: (id) => dispatch(resolveBug(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
