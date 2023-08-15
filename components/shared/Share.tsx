"use client";
import { EmailShareButton, EmailIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { LinkedinShareButton, LinkedinIcon } from "next-share";
import { TelegramShareButton, TelegramIcon } from "next-share";

function Share({ id }: { id: string }) {
  return (
    <div className="flex justify-around mt-4 m-auto">
      <div className="flex flex-col gap-2 justify-center items-center">
        <WhatsappShareButton
          url={`https://threads-clone-eosin.vercel.app/thread/${id}`}
          title={"Hey Guys, Please visit my new Post on Thread!!"}
          separator=": "
        >
          <WhatsappIcon size={50} round />
        </WhatsappShareButton>
        <h1 className="hidden xs:block text-green-400">Whatsapp</h1>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <EmailShareButton
          url={`https://threads-clone-eosin.vercel.app/thread/${id}`}
          subject={"Posted a new thread"}
        >
          <EmailIcon size={50} round />
        </EmailShareButton>
        <h1 className="hidden xs:block text-gray-400 ">Email</h1>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <LinkedinShareButton
          url={`https://threads-clone-eosin.vercel.app/thread/${id}`}
        >
          <LinkedinIcon size={50} round />
        </LinkedinShareButton>
        <h1 className="hidden xs:block text-blue ">Linkedin</h1>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <TelegramShareButton
          url={"https://threads-clone-eosin.vercel.app/thread/${id}"}
          title={"Hey Guys, Please visit my new Post on Thread!!"}
        >
          <TelegramIcon size={50} round />
        </TelegramShareButton>
        <h1 className="hidden xs:block text-cyan-300 ">Telegram</h1>
      </div>
    </div>
  );
}

export default Share;
