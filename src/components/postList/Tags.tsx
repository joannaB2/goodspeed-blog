interface TagsProps {
  tags: string;
}

const Tags = ({ tags }: TagsProps) => (
  <div className="text-violet-300">
    {tags.split(',').map((tag) => ` #${tag}`)}
  </div>
);

export default Tags;
