import { connectDB } from "@/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await connectDB().query.posts.findMany();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Link href="/new">New Post</Link>
    </div>
  );
}
