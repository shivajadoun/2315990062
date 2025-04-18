export default function ProjectFilter() {
    const categories = ["All", "Fullstack", "Frontend", "Backend"]
    const tags = ["React", "Next.js", "Spring Boot", "MySQL", "MongoDB"]
  
    return (
      <div>
        <div>
          <h3>Category</h3>
          {categories.map((cat) => (
            <button key={cat}>{cat}</button>
          ))}
        </div>
        <div>
          <h3>Tags</h3>
          {tags.map((tag) => (
            <button key={tag}>{tag}</button>
          ))}
        </div>
        <button>Create Project</button>
      </div>
    )
  }