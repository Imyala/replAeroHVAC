import { useSaveProgress, useGetProgress } from "@workspace/api-client-react";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface ProgressButtonProps {
  moduleId: string;
  moduleName: string;
  className?: string;
}

export function ProgressButton({ moduleId, moduleName, className }: ProgressButtonProps) {
  const queryClient = useQueryClient();
  const { data: progressList } = useGetProgress();
  const { mutate: saveProgress, isPending } = useSaveProgress();
  
  const isCompleted = progressList?.some(p => p.moduleId === moduleId && p.completed);

  const handleMarkComplete = () => {
    if (isCompleted || isPending) return;
    saveProgress({
      data: {
        moduleId,
        moduleName,
        completed: true,
      }
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["/api/progress"] });
      }
    });
  };

  return (
    <button
      onClick={handleMarkComplete}
      disabled={isCompleted || isPending}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border",
        isCompleted 
          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 cursor-default" 
          : "bg-card hover:bg-primary/10 text-foreground border-white/10 hover:border-primary/30",
        className
      )}
    >
      {isCompleted ? (
        <>
          <CheckCircle className="w-4 h-4" />
          Completed
        </>
      ) : (
        <>
          <Circle className="w-4 h-4" />
          {isPending ? "Saving..." : "Mark as Complete"}
        </>
      )}
    </button>
  );
}
