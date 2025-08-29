import { useState } from 'react';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
  certificateImage?: string;
}

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "April,2025",
      description: "modern JavaScript (ES6+), including DOM manipulation, asynchronous programming, and building interactive, dynamic web applications.",
      skills: ["HTML5", "CSS3", "Responsive Design", "CSS Grid", "Flexbox"],
      credentialUrl: "#",
      certificateImage: "\src\assets\js_img.png"
    },
    {
      id: 2,
      title: "Git for Developers",
      issuer: "Coursera Project Network",
      date: "August,2025",
      description: "In-depth study of JavaScript fundamentals, ES6 features, algorithms, data structures, and problem-solving techniques.",
      skills: ["JavaScript", "ES6", "Algorithms", "Data Structures"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "GitHub Actions",
      issuer: "Duke University",
      date: "June,2025",
      description: "Practical experience with React, Redux, Bootstrap, jQuery, and SASS for building modern web applications.",
      skills: ["React", "Redux", "Bootstrap", "jQuery", "SASS"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Data Scirnce Methodology",
      issuer: "IBM",
      date: "June,2025",
      description: "Foundation course covering web development basics, client-server architecture, and modern development tools.",
      skills: ["Web Development", "Client-Server", "HTTP", "Web APIs"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Tools For Data science",
      issuer: "IBM",
      date: "June,2025",
      description: "Version control mastery including Git workflows, branching strategies, collaboration, and GitHub best practices.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      date: "June,2025",
      description: "Comprehensive database design principles, SQL querying, normalization, and database optimization techniques.",
      skills: ["SQL", "Database Design", "MySQL", "Data Modeling"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      title: "What is Data science ?",
      issuer: "IBM",
      date: "June,2025",
      description: "Complete Python programming course covering fundamentals, object-oriented programming, and popular libraries.",
      skills: ["Python", "OOP", "Data Analysis", "Automation"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "RPA Basics and introduction to UiPath",
      issuer: "UiPath",
      date: "August,2025",
      description: "Introduction to cloud computing concepts, AWS services, and cloud architecture principles.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      title: "Cybersecurity Basics",
      issuer: "Cisco",
      date: "2022",
      description: "Essential cybersecurity concepts, threat identification, and basic security practices for web applications.",
      skills: ["Cybersecurity", "Network Security", "Risk Assessment", "HTTPS"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    },
    {
      id: 10,
      title: "UI/UX Design Principles",
      issuer: "Adobe",
      date: "2022",
      description: "Design fundamentals, user experience research, prototyping, and modern design tools and methodologies.",
      skills: ["UI Design", "UX Research", "Prototyping", "Adobe XD", "Figma"],
      credentialUrl: "#",
      certificateImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    }
  ];

  const CertificationModal = ({ cert, onClose }: { cert: Certification; onClose: () => void }) => (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <Award className="text-primary" size={24} />
            <h3 className="text-2xl font-bold text-foreground">{cert.title}</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium">{cert.issuer}</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{cert.date}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">{cert.description}</p>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Skills Covered:</h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Image Display */}
          {cert.certificateImage && (
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Certificate Image:</h4>
              <div className="border border-border rounded-xl overflow-hidden bg-muted/30">
                <img 
                  src={cert.certificateImage} 
                  alt={`${cert.title} Certificate`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}

          {cert.credentialUrl && (
            <Button className="btn-hero w-full">
              <ExternalLink size={16} className="mr-2" />
              View Credential
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-primary)] hover:scale-105 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg line-clamp-2">{cert.title}</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-muted-foreground">
                  <p className="font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2">{cert.description}</p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <CertificationModal 
            cert={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;