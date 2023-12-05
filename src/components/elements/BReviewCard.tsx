import { BParagraph, BTitle } from "@/components/elements";
import { Quote } from "lucide-react";
import Image from "next/image";

const BReviewCard = ({ data: review }: any) => {
  return (
    <div className="relative flex flex-col items-start gap-7">
      <div className="absolute top-0 left-0">
        <Quote className="w-5 h-5 transform scale-x-[-1]"></Quote>
      </div>
      <BParagraph
        size="xl"
        className="italic font-medium line-clamp-4 pl-7 cursor-pointer"
      >
        {review.content}
      </BParagraph>
      <div className="flex flex-row items-center gap-4">
        <div>
          <Image
            src={review.avatar.src}
            alt={review.avatar.alt}
            width={54}
            height={54}
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <div>
          <BTitle noAnimation size="sm">
            {review.author}
          </BTitle>
          <BParagraph noAnimation size="default">
            {review.designation}
          </BParagraph>
        </div>
      </div>
    </div>
  );
};

export default BReviewCard;
