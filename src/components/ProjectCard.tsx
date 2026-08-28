
interface ProjectCardProps {
  title: string;
  description: string;
  gradientClass: string;
  animationDelay?: string;
}

const ProjectCard = ({ title, description, gradientClass, animationDelay = "0s" }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Project Image/Gradient */}
      <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
        <div 
          className={`absolute inset-0 ${gradientClass} animate-pulse-slow`}
          style={{ animationDelay }}
        />
        <div className="absolute inset-0 grain-texture" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>
      
      {/* Project Info */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
