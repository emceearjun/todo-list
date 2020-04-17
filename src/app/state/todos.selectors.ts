import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectFeature = (state: any) => state.todos;

export const selectAllTodos = createSelector(
  selectFeature,
  (state: AppState) => state.todos
);

export const selectLoading = createSelector(
  selectFeature,
  (state: AppState) => state.loading
);

export const selectLoaded = createSelector(
  selectFeature,
  (state: AppState) => state.loading
);

export const selectError = createSelector(
  selectFeature,
  (state: AppState) => state.error
);
