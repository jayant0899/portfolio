"use client";

import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

interface ComponentProps extends React.ComponentProps<"header"> {}

export const SiteHeaderWrapper = (props: ComponentProps) => {
  // State to detect page scrolled
  const [affix, setAffix] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setAffix(latestValue >= 8);
  });

  return <header data-affix={affix} {...props} />;
};
