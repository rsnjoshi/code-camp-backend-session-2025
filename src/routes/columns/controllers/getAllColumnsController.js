import { ColumnService } from "../../../services/index.js";

const getAllColumnsController = async (req, res) => {
  try {
    const columnService = new ColumnService();

    const columns = await columnService.getAllColumns();

    res.status(200).json({
      message: "Successfully fetched all the columns!!",
      data: columns,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the columns!!",
    });
  }
  return;
};

export { getAllColumnsController };
