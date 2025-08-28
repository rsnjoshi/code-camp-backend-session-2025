import { TaskService } from "../../../services/index.js";

const deleteTaskController = async (req, res) => {
  try {
    const params = req.validated.params;

    const taskId = params.taskId;

    const taskService = new TaskService();

    await taskService.deleteTask(taskId);

    res.status(200).json({
      message: `Successfully deleted the task with task id: ${taskId}!!`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong while deleting the task with task id: ${taskId}!!`,
    });
  }
  return;
};

export { deleteTaskController };
