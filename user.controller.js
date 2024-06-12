import { asyncHandler } from "./asyncHandler.js";
import ApiError from "./ApiError.js";
import ApiResponse from "./ApiResponse.js";
import { sendingMail } from "./sendMail.js";
import { DevCoverLetter, MLCoverLetter } from "./constants.js";

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
      "ML applicant with work in XAI, GANs and DL",
      "",
      MLCoverLetter(
        date,
        EName,
        companyName,
        companyAddress,
        specificPosition,
        foundWhere,
        aboutCompany
      )
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
        "Full Stack Developer versed in Industry Leading Technologies",
        "",
        DevCoverLetter(
          date,
          EName,
          companyName,
          companyAddress,
          specificPosition,
          foundWhere,
          aboutCompany
        )
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
