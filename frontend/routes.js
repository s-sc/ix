import React from "react";

import { TasksListView } from "tasks/TasksListView";
import { TaskLogView } from "task_log/TaskLogView";
import { TaskCreateView } from "tasks/TaskCreateView";
//import {AgentDetailView} from "agents/AgentDetailView";
import { AgentsListView } from "agents/AgentsListView";
//import { UserSettingsView } from 'users/UserSettingsView';
//import { AdminSettingsView } from 'admin/AdminSettingsView';

export const routes = [
  { path: "/tasks", element: <TasksListView /> },
  { path: "/tasks/chat", element: <TaskLogView /> },
  {
    path: "/tasks/chat/:id",
    element: <TaskLogView />,
  },
  { path: "/agents", element: <AgentsListView /> },
  //{ path: "/agents/:id", element: <AgentDetailView /> },
  { path: "*", element: <TaskCreateView /> },
];

export default routes;
