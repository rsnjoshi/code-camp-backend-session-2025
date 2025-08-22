import { TaskService } from "../../../services/index.js";

const getAllTaskController = async (req, res) => {
  try {
    const taskService = new TaskService();

    const tasks = await taskService.getAllTasks();

    res.status(200).json({
      message: "Successfully fetched all the tasks!!",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the tasks!!",
    });
  }
  return;
};

export { getAllTaskController };
