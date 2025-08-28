import { TaskService } from "../../../services/index.js";

const getColumnTaskController = async (req, res) => {
  try {
    const params = req.validated.params;
    const columnId = params.columnId;

    const taskService = new TaskService();

    const tasks = await taskService.getColumnTasks(columnId);

    res.status(200).json({
      message: "Successfully fetched the tasks!!",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the tasks for column!!",
    });
  }
  return;
};

export { getColumnTaskController };
