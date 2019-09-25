import { createReducer } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface AuthState {
  userName: string;
  isAdmin: boolean;
}

const initialState: AuthState = {
  userName: 'Nate',
  isAdmin: false
};

export function reducer(state: AuthState = initialState, action: Action) {
  return reducerFunction(state, action);
}
