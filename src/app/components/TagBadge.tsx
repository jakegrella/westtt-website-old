import { Tag } from '@/payload-types';

const TagBadge = ({ tag, className = '' }: { tag: Tag; className?: string }) => {
  return (
    <span className={`px-2 py-1 text-sm rounded border border-foreground ${className}`}>
      {tag.name}
    </span>
  );
};

export default TagBadge;
