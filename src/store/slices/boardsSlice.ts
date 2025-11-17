import { createSlice } from '@reduxjs/toolkit';
import type { IBoard } from '../../types';

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};
const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: 'board-0',
      lists: [
        {
          listId: 'list-0',
          listName: 'list 1',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'task 1',
              taskDescription: 'Description of task 1',
              taskOwner: 'owner-0',
            },
            {
              taskId: 'task-1',
              taskName: 'task 2',
              taskDescription: 'Description of task 2',
              taskOwner: 'owner-1',
            },
          ],
        },
        {
          listId: 'list-1',
          listName: 'list 2',
          tasks: [
            {
              taskId: 'task-2',
              taskName: 'task 3',
              taskDescription: 'Description of task 3',
              taskOwner: 'owner-2',
            },
          ],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
});

export const boardsReducer = boardSlice.reducer;
