type Project = {
  id: number;
  title: string;
  description: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Django CMS",
    description: "Content Management System (CMS) developed with Django",
    projectUrl: "https://github.com/alonsocsr/is2-e02",
  },
  {
    id: 2,
    title: "Mechanical Workshop Backend in Java EE",
    description:
      "Backend API built with JEE / Wildfly that exposes REST services",
    projectUrl: "https://github.com/maiavillalba/backend-1F",
  },
  {
    id: 3,
    title: "E-Commerce Backend in Java EE",
    description: "E-commerce backend in Java EE / WildFly, with PostgreSQL",
    projectUrl: "https://github.com/FabrizioCano/backend_1P",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        {projects.length === 0 ? (
          <p className="projects__empty">No projects to show yet!.</p>
        ) : (
          <div className="projects__grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>
                <a className="project-card__link" href={project.projectUrl}>
                  View project
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;
