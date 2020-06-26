import { Nullable } from '../../../types/global';

type FieldType = string | number;
export type FieldFormat =
  | FieldType
  | ((
      arg0: {
        [key: string]: any;
      },
      arg1: Nullable<{
        [key: string]: any;
      }>
    ) => FieldType);
export type EventFormat = {
  action: FieldFormat;
  label: FieldFormat;
  category: FieldFormat;
  value?: FieldFormat;
  condition?: boolean | ((arg0: { [key: string]: any }) => boolean);
};

export type EventFormats = {
  [key: string]: EventFormat;
};
