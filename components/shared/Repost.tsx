"use client";
import Image from "next/image";
import { createThread } from "@/lib/actions/thread.actions";
import { usePathname, useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

interface Props {
  text: string;
  author: string;
}

function Repost({ text, author }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { organization } = useOrganization();
  if (author !== undefined) {
    var finalAuthor = JSON.parse(author);
  }

  const handleRepostEvent = async () => {
    await createThread({
      text: text,
      author: finalAuthor,
      communityId: organization ? organization.id : null,
      path: pathname,
    });
    router.push("/");
  };

  return (
    <button onClick={handleRepostEvent}>
      <Image
        src="/assets/repost.svg"
        alt="heart"
        width={24}
        height={24}
        className="cursor-pointer object-contain"
      />
    </button>
  );
}

export default Repost;
