import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { quizResultsTable } from "@workspace/db/schema";
import { SubmitQuizResultBody, SubmitQuizResultResponse, GetQuizResultsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/quiz/results", async (req, res) => {
  try {
    const rows = await db.select().from(quizResultsTable).orderBy(quizResultsTable.completedAt);
    const data = GetQuizResultsResponse.parse(rows);
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to get quiz results");
    res.status(500).json({ error: "Failed to get quiz results" });
  }
});

router.post("/quiz/results", async (req, res) => {
  try {
    const body = SubmitQuizResultBody.parse(req.body);
    const inserted = await db
      .insert(quizResultsTable)
      .values({
        quizId: body.quizId,
        quizName: body.quizName,
        score: body.score,
        totalQuestions: body.totalQuestions,
      })
      .returning();

    const data = SubmitQuizResultResponse.parse(inserted[0]);
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to submit quiz result");
    res.status(500).json({ error: "Failed to submit quiz result" });
  }
});

export default router;
