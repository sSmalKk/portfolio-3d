
import { ArrowRight } from "lucide-react";

interface BlogPostProps {
  date: string;
  title: string;
  description: string;
  emoji: string;
}

const BlogPost = ({ date, title, description, emoji }: BlogPostProps) => {
  return (
    <article className="group cursor-pointer py-8 border-b border-white/20 last:border-b-0">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <time className="text-white/60 text-sm font-mono tracking-wider mb-4 block">
            {date}
          </time>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-white/90 transition-colors">
            {title} {emoji}
          </h3>
          
          <p className="text-white/70 leading-relaxed font-light">
            {description}
          </p>
        </div>
        
        <div className="ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <ArrowRight size={20} className="text-white" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
