import { createFileRoute } from "@tanstack/react-router";
import { Observatory } from "@/components/observatory";

export const Route = createFileRoute("/")({ component: Observatory });
