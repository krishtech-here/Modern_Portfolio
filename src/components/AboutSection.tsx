import { useState, useEffect } from 'react';
import { Code, Database, Figma, GitBranch, Globe, Smartphone, Terminal, Zap } from 'lucide-react';

const AboutSection = () => {
  const [skillsInView, setSkillsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills-container');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  const languages = [
    { name: 'HTML', level: 90, icon: Globe },
    { name: 'CSS', level: 85, icon: Code },
    { name: 'JavaScript', level: 80, icon: Zap },
    { name: 'React.js', level: 70, icon: Code },
    { name: 'PHP', level: 75, icon: Database },
    { name: 'SQL', level: 80, icon: Database }
  ];

  const tools = [
    { name: 'Git & GitHub', level: 85, icon: GitBranch },
    { name: 'Figma', level: 80, icon: Figma },
    { name: 'VS Code', level: 95, icon: Code },
    { name: 'Terminal', level: 75, icon: Terminal },
    { name: 'Firebase', level: 70, icon: Database },
    { name: 'XAMPP', level: 80, icon: Database }
  ];

  const SkillBar = ({ skill, delay }: { skill: typeof languages[0], delay: number }) => (
    <div className="mb-6" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon size={20} className="text-primary" />
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-muted-foreground text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className={`skill-bar h-full rounded-full transition-all duration-1000 ease-out ${
            skillsInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            width: skillsInView ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative web solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Photo */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30 animate-glow-pulse"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border bg-card">
                <img 
                  src="/lovable-uploads/ecab94f4-81ce-410f-9ae6-5dd7522459e0.png"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Professional Introduction */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Building the Future, One Line of Code at a Time
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated web developer with a passion for creating beautiful, functional, and user-friendly applications. 
              My journey in web development started with curiosity and has evolved into a deep commitment to mastering modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of clean code, intuitive design, and continuous learning. Whether it's building responsive 
              websites, developing dynamic web applications, or exploring new frameworks, I approach every project with enthusiasm 
              and attention to detail.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <Smartphone size={16} className="text-primary" />
                <span className="text-sm font-medium">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <Code size={16} className="text-primary" />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <Zap size={16} className="text-primary" />
                <span className="text-sm font-medium">Performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills-container" className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Code className="text-primary" size={24} />
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Terminal className="text-primary" size={24} />
              Tools & Technologies
            </h3>
            <div className="space-y-6">
              {tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 100 + 300} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;