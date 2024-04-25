'use client';

import { usePostStore } from '@/store/postStore';
import { Post } from '@/types/Post';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';

const PostForm = () => {
  const { addPost, postList } = usePostStore();
  console.log(postList);
  const formik = useFormik<Post>({
    initialValues: {
      content: '',
      id: '',
      lead: '',
      tags: [],
      date: null,
      title: '',
    },
    onSubmit: (values) => {
      const postData = {
        ...values,
        date: new Date(),
        id: uuidv4(),
        tags: ['test', 'test2'],
      };
      addPost(postData);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Tytuł</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        required
      />
      <label htmlFor="lead">Lead</label>
      <textarea
        id="lead"
        name="lead"
        onChange={formik.handleChange}
        value={formik.values.lead}
        required
      />
      <label htmlFor="content">Treść</label>
      <textarea
        id="content"
        name="content"
        onChange={formik.handleChange}
        value={formik.values.content}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
