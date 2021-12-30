export interface Writer {
  id: number;
  name: string;
  image: string;
  type: USER_TYPE;
}

export type USER_TYPE = 'Instructor' | 'Student';
