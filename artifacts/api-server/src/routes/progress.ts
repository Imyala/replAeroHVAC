import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { progressTable } from "@workspace/db/schema";
import { SaveProgressBody, SaveProgressResponse, GetProgressResponse } from "@workspace/api-zod";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/progress", async (req, res) => {
  try {
    const rows = await db.select().from(progressTable);
    const data = GetProgressResponse.parse(rows);
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to get progress");
    res.status(500).json({ error: "Failed to get progress" });
  }
});

router.post("/progress", async (req, res) => {
  try {
    const body = SaveProgressBody.parse(req.body);
    const existing = await db
      .select()
      .from(progressTable)
      .where(eq(progressTable.moduleId, body.moduleId))
      .limit(1);

    let row;
    if (existing.length > 0) {
      const updated = await db
        .update(progressTable)
        .set({
          moduleName: body.moduleName,
          completed: body.completed,
          completedAt: body.completed ? new Date() : null,
          score: body.score ?? null,
        })
        .where(eq(progressTable.moduleId, body.moduleId))
        .returning();
      row = updated[0];
    } else {
      const inserted = await db
        .insert(progressTable)
        .values({
          moduleId: body.moduleId,
          moduleName: body.moduleName,
          completed: body.completed,
          completedAt: body.completed ? new Date() : null,
          score: body.score ?? null,
        })
        .returning();
      row = inserted[0];
    }

    const data = SaveProgressResponse.parse(row);
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to save progress");
    res.status(500).json({ error: "Failed to save progress" });
  }
});

export default router;
