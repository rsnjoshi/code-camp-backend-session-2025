import { ColumnService } from "../../../services/index.js";

const deleteColumnController = async (req, res) => {
  try {
    const params = req.validated.params;

    const columnId = params.columnId;

    const columnService = new ColumnService();

    await columnService.deleteColumn(columnId);

    res.status(200).json({
      message: `Successfully deleted the column with column id: ${columnId}!!`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong while deleting the column with column id: ${columnId}!!`,
    });
  }
  return;
};

export { deleteColumnController };
