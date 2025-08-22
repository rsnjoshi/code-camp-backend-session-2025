import { TaskService } from "../../../services/index.js";

const getTaskByIdController = async (req, res) => {
  try {
    const params = req.params;
    const taskId = params.taskId;

    const taskService = new TaskService();

    const task = await taskService.getTaskById(taskId);

    if (!task) {
      res.status(404).json({
        message: "Task not found!!",
      });
      return;
    }

    res.status(200).json({
      message: "Successfully fetched the task!!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the tasks!!",
    });
  }
  return;
};

export { getTaskByIdController };
