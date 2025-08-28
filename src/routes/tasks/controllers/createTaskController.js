import { TaskService } from "./../../../services/index.js";

const createTaskController = async (req, res) => {
  const body = req.validated.body;
  const params = req.validated.params;

  const columnId = params.columnId;

  try {
    const taskService = new TaskService();

    const task = await taskService.createTask(columnId, body);

    res.status(201).json({
      message: "Task created!!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while creating the task!!",
    });
  }
  return;
};

export { createTaskController };
