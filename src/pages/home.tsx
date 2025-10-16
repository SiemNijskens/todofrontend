import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../App";
import type { TaskSummaryDTO } from "../types";
import { useState } from "react";

const HomePage = () => {

   const [showDetails, setShowDetails] = useState(false)
    const [task, setTask] = useState<TaskSummaryDTO>()

      const {
        data: tasks,
        isLoading,
        error,
    } = useQuery<TaskSummaryDTO[]>({
        queryKey: ["tasks"],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/task`);
            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }
            return response.json();
        },
    });

    if (isLoading) {
        return <div>Loading tasks...</div>;
    }

    if (error) {
        return <div style={{ color: "red" }}>Error: {error.message}</div>;
    }

  return (
        <div>
            {tasks && tasks.length > 0 ? (
                <ul>
                    {tasks.map((task: TaskSummaryDTO) => (
                        <li key={task.id} onClick={() => {
                        }}
                        >
                            {task.task}
                            <input type='button' value='details' onClick={() => {
                                setTask(task)
                                setShowDetails(true)
                            }} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default HomePage;