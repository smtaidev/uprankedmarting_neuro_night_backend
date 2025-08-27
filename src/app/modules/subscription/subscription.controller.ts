import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SubscriptionServices } from "./subscription.service";

const createSubscription = catchAsync(async (req, res) => {
  const { planId, organizationId } = req.body;

  const result = await SubscriptionServices.createSubscription(organizationId, planId);

  sendResponse(res, {
    statusCode: status.CREATED,
    message: "Subscription created successfully.",
    data: result,
  });
});

const getAllSubscription = catchAsync(async (req, res) => {
  const results = await SubscriptionServices.getAllSubscription(req.query);
  sendResponse(res, {
    statusCode: status.OK,
    message: "Subscriptions retrieved successfully",
    meta: results.meta,
    data: results.data,
  });
});

const getSingleSubscription = catchAsync(async (req, res) => {
  const result = await SubscriptionServices.getSingleSubscription(req.params.subscriptionId);
  sendResponse(res, {
    statusCode: status.OK,
    message: "Subscription retrieved successfully",
    data: result,
  });
});

const getMySubscription = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const result = await SubscriptionServices.getMySubscription(userId);

  sendResponse(res, {
    statusCode: status.OK,
    message: "Subscription retrieved successfully.",
    data: result,
  });
});

const updateSubscription = catchAsync(async (req, res) => {
  const { subscriptionId } = req.params;

  const result = await SubscriptionServices.updateSubscription(subscriptionId, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    message: "Subscription updated successfully.",
    data: result,
  });
});

const deleteSubscription = catchAsync(async (req, res) => {
  const result = await SubscriptionServices.deleteSubscription(req.params.subscriptionId);

  sendResponse(res, {
    statusCode: status.OK,
    message: "Subscription deleted successfully.",
    data: result,
  });
});

const handleStripeWebhook = catchAsync(async (req, res) => {
  const result = await SubscriptionServices.HandleStripeWebhook(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    message: "Webhook event triggered successfully",
    data: result,
  });
});

export const SubscriptionController = {
  createSubscription,
  getAllSubscription,
  getMySubscription,
  handleStripeWebhook,
  getSingleSubscription,
  updateSubscription,
  deleteSubscription,
};


// import status from "http-status";
// import catchAsync from "../../utils/catchAsync";
// import { SubscriptionServices } from "./subscription.service";
// import sendResponse from "../../utils/sendResponse";
// // import catchAsync from "../../utils/catchAsync";
// // import sendResponse from "../../utils/sendResponse";
// // import { SubscriptionServices } from "./subscription.service";

// const createSubscription = catchAsync(async (req, res) => {
//   const userId = req.user.id;
//   const { planId } = req.body;

//   const result = await SubscriptionServices.createSubscription(userId, planId);

//   sendResponse(res, {
//     statusCode: status.CREATED,
//     message: "Subscription Created successfully.",
//     data: result,
//   });
// });

// const getAllSubscription = catchAsync(async (req, res) => {
//   const results = await SubscriptionServices.getAllSubscription(req.query);
//   sendResponse(res, {
//     statusCode: status.OK,
//     message: "Subscriptions retrieved successfully",
//     meta: results.meta,
//     data: results.data,
//   });
// });

// const getSingleSubscription = catchAsync(async (req, res) => {
//   const result = await SubscriptionServices.getSingleSubscription(
//     req.params.subscriptionId
//   );
//   sendResponse(res, {
//     statusCode: status.OK,
//     message: "Subscription retrieved successfully",
//     data: result,
//   });
// });

// const getMySubscription = catchAsync(async (req, res) => {
//   const userId = req.user.id;

//   const result = await SubscriptionServices.getMySubscription(userId);

//   sendResponse(res, {
//     statusCode: status.OK,
//     message: "Subscription retrieved successfully.",
//     data: result,
//   });
// });

// const updateSubscription = catchAsync(async (req, res) => {
//   const { subscriptionId } = req.params;

//   const result = await SubscriptionServices.updateSubscription(
//     subscriptionId,
//     req.body
//   );
//   sendResponse(res, {
//     statusCode: status.OK,
//     message: "Subscription updated successfully.",
//     data: result,
//   });
// });

// const deleteSubscription = catchAsync(async (req, res) => {
//   const result = await SubscriptionServices.deleteSubscription(
//     req.params.subscriptionId
//   );

//   sendResponse(res, {
//     statusCode: status.OK,
//     message: "Subscription deleted successfully.",
//     data: result,
//   });
// });

// const handleStripeWebhook = catchAsync(async (req, res) => {
//   const result = await SubscriptionServices.HandleStripeWebhook(req.body);

//   sendResponse(res, {
//     statusCode: status.OK,
//     message: "Webhook event trigger successfully",
//     data: result,
//   });
// });

// export const SubscriptionController = {
//   createSubscription,
//   getAllSubscription,
//   getMySubscription,
//   handleStripeWebhook,
//   getSingleSubscription,
//   updateSubscription,
//   deleteSubscription,
// };