document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const tasksToday = document.getElementById("tasksToday");
  const printTasksButton = document.getElementById("printTasks");
  const manageTasksButton = document.getElementById("manageTasks");
  const backToTodayButton = document.getElementById("backToToday");
  const tasksTitle = document.getElementById("tasksTitle");

  // Função para formatar a data como dd/mm/yyyy diretamente a partir da string
  function formatDate(dateStr) {
    const dateParts = dateStr.split("-");
    const day = dateParts[2]; // O terceiro elemento é o dia
    const month = dateParts[1]; // O segundo elemento é o mês
    const year = dateParts[0]; // O primeiro elemento é o ano
    return `${day}/${month}/${year}`;
  }

  // Função para obter a data de hoje formatada como dd/mm/yyyy
  function getTodayFormatted() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Janeiro é 0!
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = document.getElementById("task").value;
    const date = document.getElementById("date").value;
    const formattedDate = formatDate(date);

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ task, date: formattedDate, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskForm.reset();
    displayTasksForToday();
  });

  // Função para exibir as tarefas do dia de hoje
  function displayTasksForToday() {
    const today = getTodayFormatted(); // Data de hoje formatada
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const todayTasks = tasks.filter((t) => t.date === today); // Filtrando tarefas do dia atual

    tasksToday.innerHTML = "";

    if (todayTasks.length > 0) {
      todayTasks.forEach((t, index) => {
        let li = document.createElement("li");

        // Checkbox para marcar tarefa como concluída
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = t.completed;
        checkbox.addEventListener("change", function () {
          t.completed = this.checked;
          tasks[index] = t;
          localStorage.setItem("tasks", JSON.stringify(tasks));
          displayTasksForToday();
        });

        // Título da tarefa
        let taskTitle = document.createElement("span");
        taskTitle.textContent = t.task;
        if (t.completed) {
          taskTitle.classList.add("completed");
        }

        // Botão para excluir a tarefa
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
          tasks.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          displayTasksForToday();
        });

        li.appendChild(checkbox);
        li.appendChild(taskTitle);
        li.appendChild(deleteButton);
        tasksToday.appendChild(li);
      });
    } else {
      tasksToday.innerHTML = "<li>Sem tarefas para hoje.</li>";
    }
  }

  function displayAllTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasksToday.innerHTML = "";
    tasksTitle.textContent = "Todas as Tarefas";
    tasks.forEach((t, index) => {
      let li = document.createElement("li");

      // Checkbox para marcar tarefa como concluída
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = t.completed;
      checkbox.addEventListener("change", function () {
        t.completed = this.checked;
        tasks[index] = t;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayAllTasks();
      });

      // Título da tarefa
      let taskTitle = document.createElement("span");
      taskTitle.textContent = `${t.task} - ${t.date}`;
      if (t.completed) {
        taskTitle.classList.add("completed");
      }

      // Botão para excluir a tarefa
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.classList.add("delete");
      deleteButton.addEventListener("click", function () {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayAllTasks();
      });

      li.appendChild(checkbox);
      li.appendChild(taskTitle);
      li.appendChild(deleteButton);
      tasksToday.appendChild(li);
    });

    manageTasksButton.style.display = "none";
    backToTodayButton.style.display = "inline-block";
  }

  // Função para imprimir as tarefas
  printTasksButton.addEventListener("click", function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const completedTasks = tasks.filter((t) => t.completed);
    const pendingTasks = tasks.filter((t) => !t.completed);

    let content = "Tarefas Concluídas:\n";
    completedTasks.forEach(
      (t) => (content += `- ${t.task} (Data: ${t.date})\n`)
    );

    content += "\nTarefas Pendentes:\n";
    pendingTasks.forEach((t) => (content += `- ${t.task} (Data: ${t.date})\n`));

    printContent(content);
  });

  // Função auxiliar para imprimir conteúdo
  function printContent(content) {
    let printWindow = window.open("", "", "height=400,width=600");
    printWindow.document.write("<pre>" + content + "</pre>");
    printWindow.document.close();
    printWindow.print();
  }

  manageTasksButton.addEventListener("click", displayAllTasks);
  backToTodayButton.addEventListener("click", function () {
    tasksTitle.textContent = "Tarefas do Dia";
    displayTasksForToday();
    manageTasksButton.style.display = "inline-block";
    backToTodayButton.style.display = "none";
  });

  displayTasksForToday();
});
