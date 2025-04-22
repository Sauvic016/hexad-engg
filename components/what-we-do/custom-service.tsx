"use client";
import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";

export default function CustomService() {
  return (
    <motion.div className="flex  justify-center ">
      <div className="p-6 mt-6 border border-blue-100 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Looking for a Custom Solution?</h3>
        <p className="text-blue-800 mb-4">
          We specialize in tailoring plant engineering systems to meet your unique industry needs.
        </p>
        <Link
          href="/contact"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition"
        >
          Talk to Us
        </Link>
      </div>
    </motion.div>
  );
}
