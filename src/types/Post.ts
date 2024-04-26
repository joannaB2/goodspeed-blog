export interface Post {
  title: string;
  lead: string;
  id: string;
  content: string;
  date: Date;
  tags: string;
}

export const emptyListAuthor = 'Jeszcze nie masz żadnych postów';
export const emptyListReader =
  'Autor jeszcze nie dodał żadnych postów, wpadnij później';
