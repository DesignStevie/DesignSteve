import { useParams } from "react-router-dom";
import './ProjectPage.css';

// singular -> ProjectPage
function ProjectsPage({projectData}) {
    const projectNameFromUrl = useParams().project
    
    const [projectToBeDisplayed] = projectData.filter((project) => projectNameFromUrl === project.link)
    const {name,link, description} = projectToBeDisplayed

    return (
      <>
        {/* project component */}
        <div className="projectpage">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </>
    );
  }
  
  export default ProjectsPage;