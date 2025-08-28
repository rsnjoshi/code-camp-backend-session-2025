import { ColumnService } from "../../../services/index.js";

const getUserColumnController = async (req, res) => {
  try {
    const params = req.validated.params;
    const userId = params.userId;

    const columnService = new ColumnService();

    const columns = await columnService.getUserColumns(userId);

    res.status(200).json({
      message: "Successfully fetched the columns!!",
      data: columns,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the columns for user!!",
    });
  }
  return;
};

export { getUserColumnController };
