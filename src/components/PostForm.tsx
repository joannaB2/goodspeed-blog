'use client';

import { usePostStore } from '@/store/postStore';
import { Post } from '@/types/Post';
import { Box } from '@radix-ui/themes';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const PostForm = () => {
  const { addPost } = usePostStore();

  const router = useRouter();
  const formik = useFormik<Post>({
    initialValues: {
      content: '',
      id: '',
      lead: '',
      tags: '',
      date: null,
      title: '',
    },
    onSubmit: (values) => {
      const postData = {
        ...values,
        date: new Date(),
        id: uuidv4(),
      };
      addPost(postData);
      toast.success('Pomyślnie dodano post');
      formik.resetForm();
      setTimeout(() => router.push('/'), 2000);
    },
  });
  return (
    <Box className="mt-4 rounded border border-solid border-slate-800 p-4">
      <form onSubmit={formik.handleSubmit}>
        <Box className="flex flex-col space-y-6">
          <Box className="flex flex-col">
            <label className="mb-2 flex" htmlFor="title">
              Tytuł
            </label>
            <input
              className="flex h-10 w-full rounded p-1"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              required
            />
          </Box>
          <Box className="flex flex-col">
            <label className="mb-2 flex" htmlFor="tags">
              Tagi (wpisz po przecinku)
            </label>
            <input
              className="flex h-10 w-full rounded p-1"
              id="tags"
              name="tags"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.tags}
              required
            />
          </Box>
          <Box className=" flex flex-col">
            <label htmlFor="lead" className="mb-2 flex">
              Lead
            </label>
            <textarea
              id="lead"
              className="flex w-full rounded p-1"
              name="lead"
              onChange={formik.handleChange}
              value={formik.values.lead}
              rows={5}
              required
            />
          </Box>
          <Box className="flex flex-col">
            <label htmlFor="content" className="mb-2 flex">
              Treść
            </label>
            <textarea
              className="flex w-full rounded p-1"
              id="content"
              name="content"
              rows={10}
              onChange={formik.handleChange}
              value={formik.values.content}
            />
          </Box>
          <div className="flex flex-row justify-between">
            <Link
              className="flex rounded border border-solid border-violet-500 p-2 text-violet-500"
              type="button"
              href={'/'}
            >
              Anuluj
            </Link>
            <button className="flex rounded bg-violet-500 p-2" type="submit">
              Dodaj post
            </button>
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default PostForm;
