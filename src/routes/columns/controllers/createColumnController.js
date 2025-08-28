import { ColumnService } from "./../../../services/index.js";

const createColumnController = async (req, res) => {
  const body = req.validated.body;
  const params = req.validated.params;

  const userId = params.userId;

  try {
    const columnService = new ColumnService();

    const column = await columnService.createColumn(userId, body);

    res.status(201).json({
      message: "Column created!!",
      data: column,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while creating the column!!",
    });
  }
  return;
};

export { createColumnController };
