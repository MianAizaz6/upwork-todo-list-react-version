import * as actions from '../actioniCreators/actionsType'

const bugs = [
  {
    id:1,
    title:'Remove backgroundto adjustment listing tile',
    resolve:false
  },
  {
    id:2,
    title:'Add some padding from right side',
    resolve:false
  },
  {
    id:3,
    title:'Fix the dropdown issue of city filter',
    resolve:false
  },
];

const bugReducer = (state = bugs, action) => {
  
  switch(action.type){
    case actions.ADD_BUG :
      return [
        ...state, 
        action.payload
      ]
      case actions.DELETE_BUG:
        const deletedBug = state.filter(bug => bug.id !== action.payload)
        console.log('===', deletedBug)
      return deletedBug
      case actions.RESOLVE_BUG:
        const updatedBugsArray = state.map((bug) => {
          if(action.payload === bug.id){
            return {...bug, resolved:true}
          }
          return bug
        });
          return updatedBugsArray
      default: return state
  }

}

export default bugReducer