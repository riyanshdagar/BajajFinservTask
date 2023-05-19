fetch("bajaj.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); // Verify if data is properly fetched

    // Iterate over the employees array and create HTML elements to display the data
    data.employees.forEach(employee => {
      const employeeDiv = document.createElement("div");
      employeeDiv.classList.add("employee");

      const name = document.createElement("h2");
      name.textContent = employee.name;
      employeeDiv.appendChild(name);

      const age = document.createElement("p");
      age.textContent = `Age: ${employee.age}`;
      employeeDiv.appendChild(age);

      const designation = document.createElement("p");
      designation.textContent = `Designation: ${employee.designation}`;
      employeeDiv.appendChild(designation);

      const skills = document.createElement("p");
      skills.textContent = `Skills: ${employee.skills.join(", ")}`;
      employeeDiv.appendChild(skills);

      const projects = document.createElement("div");
      projects.classList.add("projects");

      if (employee.projects) {
        employee.projects.forEach(project => {
          const projectDiv = document.createElement("div");
          projectDiv.classList.add("project");

          const projectName = document.createElement("h3");
          projectName.textContent = `Project: ${project.name}`;
          projectDiv.appendChild(projectName);

          const projectDescription = document.createElement("p");
          projectDescription.textContent = `Description: ${project.description || "N/A"}`;
          projectDiv.appendChild(projectDescription);

          const team = document.createElement("p");
          team.textContent = `Team: ${project.team.map(member => member.name || "N/A").join(", ")}`;
          projectDiv.appendChild(team);

          const tasks = document.createElement("ul");
          tasks.classList.add("tasks");

          if (project.tasks) {
            project.tasks.forEach(task => {
              const taskItem = document.createElement("li");
              taskItem.textContent = `Task ${task.id}: ${task.name} (${task.status || "N/A"})`;
              tasks.appendChild(taskItem);
            });
          } else {
            const noTasks = document.createElement("li");
            noTasks.textContent = "No tasks found.";
            tasks.appendChild(noTasks);
          }

          projectDiv.appendChild(tasks);
          projects.appendChild(projectDiv);
        });
      } else {
        const noProjects = document.createElement("p");
        noProjects.textContent = "No projects found.";
        projects.appendChild(noProjects);
      }

      employeeDiv.appendChild(projects);
      document.getElementById("dataContainer").appendChild(employeeDiv);
    });
  })
  .catch(error => console.error(error));
