// import express from "express";
// import initializeAgent from "../agent";

// const router = express.Router();

// // Endpoint to interact with the agent
// router.post("/chat", async (req, res) => {
//   try {
//     const { message } = req.body;
//     const { agent, config } = await initializeAgent();

//     const stream = await agent.stream({ messages: [new HumanMessage(message)] }, config);

//     let response = "";
//     for await (const chunk of stream) {
//       if ("agent" in chunk) {
//         response += chunk.agent.messages[0].content;
//       } else if ("tools" in chunk) {
//         response += chunk.tools.messages[0].content;
//       }
//     }

//     res.json({ response });
//   } catch (error) {
//     console.error("Agent error:", error);
//     res.status(500).json({ error: "Failed to process request" });
//   }
// });

// export default router;
