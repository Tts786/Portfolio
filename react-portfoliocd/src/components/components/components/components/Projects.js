import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects py-5 bg-light">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="your-project-image.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">A brief description of your project goes here.</p>
                <a href="https://github.com/your-github-link" className="btn btn-primary">View on GitHub</a>
              </div>
            </div>
          </div>
          {/* Add more projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
