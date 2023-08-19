"use client";
import {
  addLikeToThread,
  countNoOfLikes,
  removeLikeFromThread,
} from "@/lib/actions/thread.actions";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  threadId: string;
  userId: string;
  isLiked: Boolean;
  numberOfLikes: number;
}

function Like({ threadId, userId, isLiked, numberOfLikes }: Props) {
  const pathname = usePathname();
  const finalThreadId = JSON.parse(threadId);
  if (userId != undefined) {
    var finalUserId = JSON.parse(userId);
  }
  const handleLikeEvent = async () => {
    if (isLiked === false) {
      await addLikeToThread(finalThreadId, finalUserId, pathname);
    } else {
      await removeLikeFromThread(finalThreadId, finalUserId, pathname);
    }
    numberOfLikes = await countNoOfLikes(finalThreadId);
  };

  return (
    <button className="flex flex-col justify-center items-center" onClick={handleLikeEvent}>
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
      {numberOfLikes !== 0 && <p className=" text-tiny-medium text-gray-1">{numberOfLikes} {numberOfLikes===1 ? "like" : "likes"}</p>}
    </button>
  );
}

export default Like;
