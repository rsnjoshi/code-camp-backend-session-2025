import { ColumnService } from "../../../services/index.js";

const updateColumnController = async (req, res) => {
  try {
    const params = req.validated.params;
    const body = req.validated.body;

    const columnId = params.columnId;

    const columnService = new ColumnService();

    const column = await columnService.updateColumn(columnId, body);

    res.status(200).json({
      message: "Successfully updated the column!!",
      data: column,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong while updating the column with column id: ${columnId}!!`,
    });
  }
  return;
};

export { updateColumnController };
