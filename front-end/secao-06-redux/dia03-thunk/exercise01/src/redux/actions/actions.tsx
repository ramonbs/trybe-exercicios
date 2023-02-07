import { Dispatch } from 'react';

export const searchBegin = () => (
    { type: 'SEARCH_BEGIN' }
  );
  
  export const searchSuccess = (character: object) => (
    { type: 'SEARCH_SUCCESS', character }
  );
  
  export const searchFailure = (error: unknown) => (
    { type: 'SEARCH_ERROR', error }
  );
  
  export function thunkCharacter(name: string) {
    return async (dispatch: Dispatch<any>) => {
      try {
        dispatch(searchBegin());
        const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
        const data = await response.json();
        dispatch(searchSuccess(data))
      } catch (error) {
        dispatch(searchFailure(error))
      }
    };
  };