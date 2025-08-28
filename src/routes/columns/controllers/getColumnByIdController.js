import { ColumnService } from "../../../services/index.js";

const getColumnByIdController = async (req, res) => {
  try {
    const params = req.validated.params;
    const columnId = params.columnId;

    const columnService = new ColumnService();

    const column = await columnService.getColumnById(columnId);

    if (!column) {
      res.status(404).json({
        message: "Column not found!!",
      });
      return;
    }

    res.status(200).json({
      message: "Successfully fetched the column!!",
      data: column,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the columns!!",
    });
  }
  return;
};

export { getColumnByIdController };
