import { props, createAction } from '@ngrx/store';

export const assignHolidayToFriend = createAction(
  '[gift-giving] assign holiday to friend',
  props<{ friendId: string; holidayId: string }>()
);
