"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: "product" | "plant";
}

export default function ServiceCard({ icon, title, description, className, variant = "product" }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300",
        variant === "product" ? "bg-gradient-to-br from-white to-blue-50" : "bg-gradient-to-br from-white to-gray-50",
        className
      )}
    >
      <div className="flex items-start">
        <div className={cn("flex-shrink-0 mr-5 p-3 rounded-lg", "bg-blue-50")}>{icon}</div>
        <div>
          <h3 className={cn("text-lg font-semibold mb-2", "text-blue-800")}>{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
