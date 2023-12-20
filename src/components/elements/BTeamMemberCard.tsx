// "use client";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import {
//   BIcon,
//   BMemberSocial,
//   BParagraph,
//   BTitle,
// } from "@/components/elements";
// import { Button } from "@/components/ui/button";
// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const BTeamMemberCard = ({ data: member, index }: any) => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView();
//   const delay = index * 0.2;

//   useEffect(() => {
//     if (inView) {
//       controls.start({
//         scale: [
//           1, 0.7, 1.2, 0.8, 1.1, 0.9, 1.05, 0.95, 1.02, 0.98, 1.01, 0.99, 1,
//         ],
//         y: 0,
//         opacity: 1,
//         transition: {
//           type: "spring",
//           stiffness: 260,
//           damping: 20,
//           delay: delay,
//           velocity: 1,
//         },
//       });
//     }
//   }, [controls, inView, index, delay]);
//   return (
//     <motion.div
//       className="w-full h-max rounded-2xl overflow-hidden flex flex-col max-w-md"
//       style={{
//         boxShadow:
//           "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
//       }}
//       ref={ref}
//       initial={{ y: 50, opacity: 0 }}
//       animate={controls}
//       whileHover={{
//         scale: 1.05,
//         transition: {
//           duration: 0.25,
//         },
//       }}
//     >
//       <div className="flex items-center justify-center shrink-1 relative">
//         <Image
//           src={member.avatar.src}
//           alt={member.avatar.alt}
//           width={512}
//           height={512}
//           className="aspect-[768/820]"
//         />
//         <Popover>
//           <PopoverTrigger asChild className="absolute top-5 right-5">
//             <Button
//               variant="secondary"
//               className="rounded-full p-3 w-auto h-auto"
//             >
//               <BIcon icon="ShareIcon" className="w-5 h-5" />
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent>
//             <BMemberSocial />
//           </PopoverContent>
//         </Popover>
//       </div>

//       <div className="px-6 py-4 flex flex-col">
//         <BTitle component="h3" size="xs" noAnimation>
//           {member.name}
//         </BTitle>
//         <BParagraph noAnimation className="text-accent" size="sm">
//           {member.title}
//         </BParagraph>
//       </div>
//     </motion.div>
//   );
// };

// export default BTeamMemberCard;

"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  BIcon,
  BMemberSocial,
  BParagraph,
  BTitle,
} from "@/components/elements";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BTeamMemberCard = ({ data: member, index }: any) => {
  return (
    <div
      className="w-full h-max rounded-2xl overflow-hidden flex flex-col max-w-md"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="flex items-center justify-center shrink-1 relative">
        <Image
          src={member.avatar.src}
          alt={member.avatar.alt}
          width={512}
          height={512}
          className="aspect-[768/820]"
        />
        <Popover>
          <PopoverTrigger asChild className="absolute top-5 right-5">
            <Button
              variant="secondary"
              className="rounded-full p-3 w-auto h-auto"
            >
              <BIcon icon="ShareIcon" className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <BMemberSocial />
          </PopoverContent>
        </Popover>
      </div>

      <div className="px-6 py-4 flex flex-col">
        <BTitle component="h3" size="xs">
          {member.name}
        </BTitle>
        <BParagraph className="text-accent" size="sm">
          {member.title}
        </BParagraph>
      </div>
    </div>
  );
};

export default BTeamMemberCard;
