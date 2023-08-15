"use client";
import { addLikeToThread, removeLikeFromThread } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  threadId: string;
  userId: string;
  isLiked: Boolean;
}

function Like({ threadId, userId, isLiked }: Props) {
  const pathname = usePathname();
  const finalThreadId = JSON.parse(threadId);
  if (userId != undefined) {
    var finalUserId = JSON.parse(userId);
  }
  const handleLikeEvent = async () => {
    if (isLiked === false) {
      await addLikeToThread(finalThreadId, finalUserId, pathname);
    }
    else{
        await removeLikeFromThread(finalThreadId, finalUserId, pathname);
    }
  };

  return (
    <button onClick={handleLikeEvent}>
      {isLiked ? (
        <Image
          src="/assets/heart-filled.svg"
          alt="heart"
          width={24}
          height={24}
          className="cursor-pointer object-contain"
        />
      ) : (
        <Image
          src="/assets/heart-gray.svg"
          alt="heart"
          width={24}
          height={24}
          className="cursor-pointer object-contain"
        />
      )}
    </button>
  );
}

export default Like;
