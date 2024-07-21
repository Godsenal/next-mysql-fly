"use server";
import { connectDB } from "@/db";
import { posts } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createPostSchema = createInsertSchema(posts);

export async function createPost(formData: FormData) {
  const rawFormData = {
    title: formData.get("title") ?? "",
    description: formData.get("description") ?? "",
  };

  const post = await createPostSchema.parseAsync(rawFormData);

  const result = await connectDB().insert(posts).values(post);

  revalidatePath("/");
  redirect("/");
}
