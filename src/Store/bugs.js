

// ActionTypes
// const SHOW_BUGS = "showBugs";
const ADD_BUG = "addBug";
const DELETE_BUG = "deleteBug";
const RESOLVE_BUG = 'resolveBug';

const bugs = [
  {
    id:1,
    title:'Remove background adjustment listing tile',
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

// const initialState = bugs;

// ActionCreaters
// const showBugs = () => {

// }

export const addBug = (bug) => {
  return {
    type:ADD_BUG,
    payload:bug
  }
}

export const deleteBug = (id) => {
  console.log('===bugId', id);
  console.log('===', bugs)
  return {
    type:DELETE_BUG,
    payload:id
  }
}

export const resolveBug = (id) => {
 return{
  type:RESOLVE_BUG,
  payload:id
 }

}


// Reducer
const bugReducer = (state = bugs, action) => {
  
    switch(action.type){
      case ADD_BUG :
        return [
          ...state, 
          action.payload
        ]
        case DELETE_BUG:
          const deletedBug = state.filter(bug => bug.id !== action.payload)
        return deletedBug
        case RESOLVE_BUG:
          const updatedBugsArray = state.map((bug) => {
            if(action.payload === bug.id){
              return {...bug, resolved:true}
            }
            return bug
          });
          console.log('===resolvedBug', updatedBugsArray)
            return updatedBugsArray
        default: return state
    }
  
}

export default bugReducer







