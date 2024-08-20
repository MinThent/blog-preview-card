import React from "react";

export default function BlogPreviewCard(props) {
  const {
    imgUrl,
    altText,
    topic,
    publishedDate,
    heading,
    headingContent,
    avatar,
    avatarName,
  } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-1 bg-white shadow-[7px_7px_1px_rgba(0,0,0,1)] p-2 border border-black rounded-2xl w-80">
      <div className="p-3">
        <img className="rounded-xl max-w-full h-auto" src={imgUrl} alt={altText} />
      </div>
      <div className="px-3">
        <div className="py-2 pb-3">
        <p className="inline-block bg-[#f4d04e] px-3 py-1 rounded-md font-bold text-sm">{topic}</p>
        </div>
        <p className="text-sm">{publishedDate}</p>
        <div className="py-3">
          <h4 className="pb-2 font-extrabold text-xl">{heading}</h4>
          <p className="font-normal text-gray-500 text-sm">{headingContent}</p>
        </div>
        <div className="flex flex-row items-center gap-3 py-3">
          <div>
            <img className="w-7 h-7" src={avatar} alt="avatar" />
          </div>
          <p className="font-bold">{avatarName}</p>
        </div>
      </div>
    </div>
  );
}
