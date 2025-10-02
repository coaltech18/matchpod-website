"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & MotionProps;
export const MotionDiv = motion.div as React.FC<Props>;


