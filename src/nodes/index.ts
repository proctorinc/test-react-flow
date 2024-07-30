import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
  {
    id: "a",
    type: "position-logger",
    position: { x: -200, y: 100 },
    data: { label: "Income" },
  },
  {
    id: "b",
    type: "position-logger",
    position: { x: -200, y: -100 },
    data: { label: "Expenses" },
  },
  {
    id: "c",
    type: "position-logger",
    position: { x: 0, y: 0 },
    data: { label: "Budget" },
  },
  {
    id: "d",
    type: "position-logger",
    position: { x: 200, y: 0 },
    data: { label: "Savings" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
