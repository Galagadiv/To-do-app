import {TaskType} from "@/types/TaskType";
import {error} from "console";
import {NextResponse} from "next/server";

export let store: TaskType[] = [];

export async function GET() {
  return NextResponse.json({data: store});
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body) {
    return NextResponse.json({error: "Request failed"}, {status: 401});
  }

  const task: TaskType = {...body, createdAt: new Date().toISOString()};
  store.push(task);

  return NextResponse.json({data: task}, {status: 201});
}
