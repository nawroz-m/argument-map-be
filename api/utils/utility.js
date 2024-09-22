import HTTPStatus from "http-status";

// Create a common success respnse for JSON
const createSuccessResponseJson = (data) => {
  const successRespons = {
    success: true,
    data: data,
  };
  return successRespons;
};

// JSON Response
const sendJSONResponse = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};

// Success response
export const successResponse = (res, data) => {
  const code = HTTPStatus.OK;
  const response = createSuccessResponseJson(data);
  return sendJSONResponse(res, code, response);
};

//Error Response
const createErrorResponseJSON = (error) => {
  const errorResponse = {
    error: error,
  };
  return errorResponse;
};

// Success response
export const badRequestResponse = (res, error) => {
  const data = {
    message: error,
  };
  code = HTTPStatus.BAD_REQUEST;

  response = createErrorResponseJSON(data);

  return sendJSONResponse(res, code, response);
};
