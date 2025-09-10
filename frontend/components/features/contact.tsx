"use client";

import * as React from "react";
import { contactItems } from "@/constants/contact";

interface Contact7Props {
  title?: string;
  description?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Get in touch with our support team or visit our office.",
}: Contact7Props) => {
  const pastelColors = [
    "bg-pink-50 text-pink-600",
    "bg-green-50 text-green-600",
    "bg-yellow-50 text-yellow-600",
    "bg-purple-50 text-purple-600",
  ];

  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-gray-800 md:text-4xl">
            {title}
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            {description}
          </p>
        </div>

        {/* Contact Items */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item, index) => {
            const color = pastelColors[index % pastelColors.length];
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${color}`}
                >
                  {item.icon}
                </span>
                <p className="mb-2 text-lg font-semibold text-gray-800">
                  {item.label}
                </p>
                <p className="text-gray-400 mb-3">{item.description}</p>
                {item.link && item.linkLabel && (
                  <a
                    href={item.link}
                    className="font-semibold text-gray-600 hover:text-gray-800 hover:underline"
                  >
                    {item.linkLabel}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
