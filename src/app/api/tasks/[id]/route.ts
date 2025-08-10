import {NextResponse} from "next/server";
import {store} from "../route";

export async function PATCH(_: Request, {params}: {params: {id: string}}) {
  const id = params.id;
  const body = await _.json();

  const idx = store.findIndex((t) => t.id === id);
  if (idx === -1)
    return NextResponse.json({error: "Task not found"}, {status: 404});

  store[idx] = {...store[idx], ...body};

  return NextResponse.json({data: store[idx]}, {status: 201});
}

export async function DELETE(_: Request, {params}: {params: {id: string}}) {
  const id = params.id;

  const idx = store.findIndex((t) => t.id === id);
  if (idx === -1)
    return NextResponse.json({error: "Task not found"}, {status: 404});

  store = store.filter((el) => el.id !== id);

  return NextResponse.json({ok: true});
}
