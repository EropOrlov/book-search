import { v4 as uuidv4 } from 'uuid';


export const createBookWithId = (book,source)=>{
return {...book,
  isFav:false,
  source,
  id:uuidv4()
}
}