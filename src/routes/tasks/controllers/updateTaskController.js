import { TaskService } from "../../../services/index.js";

const updateTaskController = async (req, res) => {
  try {
    const params = req.validated.params;
    const body = req.validated.body;

    const taskId = params.taskId;

    const taskService = new TaskService();

    const task = await taskService.updateTask(taskId, body);

    res.status(200).json({
      message: "Successfully updated the task!!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong while updating the task with task id: ${taskId}!!`,
    });
  }
  return;
};

export { updateTaskController };
