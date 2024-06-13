import { asyncHandler } from "./asyncHandler.js";
import ApiError from "./ApiError.js";
import ApiResponse from "./ApiResponse.js";
import { sendingMail } from "./sendMail.js";
import { DevCoverLetter, DevHeadline, DevResumePath, MLCoverLetter, MLHeadline, MLResumePath } from "./constants.js";

const MLSendMail = asyncHandler(async (req, res) => {
  try {
    const {
      recEmail,
      date,
      EName,
      companyName,
      companyAddress,
      specificPosition,
      foundWhere,
      aboutCompany,
    } = req.body;

    sendingMail(
      recEmail,
      MLHeadline,
      "",
      MLCoverLetter(
        date,
        EName,
        companyName,
        companyAddress,
        specificPosition,
        foundWhere,
        aboutCompany
      ),
      MLResumePath
    );
    res.status(200).json(new ApiResponse(200,{mail: MLCoverLetter(
        date,
        EName,
        companyName,
        companyAddress,
        specificPosition,
        foundWhere,
        aboutCompany
      )}, "Mail sent successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

const DevSendMail = asyncHandler(async (req, res) => {
    try {
      const {
        recEmail,
        date,
        EName,
        companyName,
        companyAddress,
        specificPosition,
        foundWhere,
        aboutCompany,
      } = req.body;
  
      sendingMail(
        recEmail,
        DevHeadline,
        "",
        DevCoverLetter(
          date,
          EName,
          companyName,
          companyAddress,
          specificPosition,
          foundWhere,
          aboutCompany
        ),
        DevResumePath
      );
      res.status(200).json(new ApiResponse(200,
        {mail: DevCoverLetter(
            date,
            EName,
            companyName,
            companyAddress,
            specificPosition,
            foundWhere,
            aboutCompany
          )}
         ,"Mail sent successfully"));
    } catch (error) {
      throw new ApiError(500, error.message);
    }
});

export { MLSendMail, DevSendMail };
