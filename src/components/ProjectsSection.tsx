import { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1Preview from '@/assets/project1-preview.jpg';
import project2Preview from '@/assets/project2-preview.jpg';
import project3Preview from '@/assets/project3-preview.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  role: string;
  images: string[];
  githubUrl: string;
  liveUrl: string;
  preview: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Portfolio Website",
      description: "A responsive portfolio website built with React and modern design principles",
      longDescription: "This project showcases a fully responsive portfolio website designed with modern UI/UX principles. It features smooth animations, dark theme, and optimized performance across all devices. The site includes dynamic content management and interactive elements that enhance user experience.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Fully responsive design",
        "Smooth scroll animations",
        "Dark/light theme toggle",
        "Interactive project showcase",
        "Contact form integration",
        "SEO optimized"
      ],
      role: "Full-stack Developer & Designer",
      images: [project1Preview, project1Preview, project1Preview],
      githubUrl: "#",
      liveUrl: "#",
      preview: project1Preview
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "A comprehensive dashboard for data visualization and analytics",
      longDescription: "Built a powerful analytics dashboard that provides real-time data visualization and insights. The application features interactive charts, data filtering, and export capabilities. It handles large datasets efficiently and provides a seamless user experience for data analysis.",
      techStack: ["React", "Chart.js", "Firebase", "Material-UI"],
      features: [
        "Real-time data updates",
        "Interactive charts and graphs",
        "Data filtering and search",
        "Export functionality",
        "User authentication",
        "Responsive design"
      ],
      role: "Frontend Developer",
      images: [project2Preview, project2Preview, project2Preview],
      githubUrl: "#",
      liveUrl: "#",
      preview: project2Preview
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce website with modern shopping experience",
      longDescription: "Developed a complete e-commerce solution with user authentication, product management, shopping cart, and payment integration. The platform provides a smooth shopping experience with advanced search, filtering, and recommendation features.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      features: [
        "User authentication & profiles",
        "Product catalog with search",
        "Shopping cart & wishlist",
        "Payment processing",
        "Order tracking",
        "Admin dashboard"
      ],
      role: "Full-stack Developer",
      images: [project3Preview, project3Preview, project3Preview],
      githubUrl: "#",
      liveUrl: "#",
      preview: project3Preview
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div 
          className="bg-card border border-border rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-64 object-cover"
            />
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Project Overview</h4>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">My Role</h4>
                <p className="text-muted-foreground">{project.role}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button className="btn-hero flex-1">
              <Github size={16} className="mr-2" />
              View Code
            </Button>
            <Button variant="outline" className="btn-ghost flex-1">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my passion for creating innovative web solutions and user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden lg:h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-10"></div>
                  <img 
                    src={project.preview} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20"></div>
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button size="sm" className="btn-hero">
                      <ExternalLink size={14} className="mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="btn-ghost">
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;