import React, { ReactNode, useState } from "react";

export default function Modal({
  title,
  children,
}: Readonly<{
  readonly title: string;
  readonly children: ReactNode;
}>) {
  return (
    <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-[200] tw-outline-none focus:tw-outline-none tw-bg-black/40">
      <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
        {/* title */}
        <div className="tw-rounded-xl tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white dark:tw-bg-gray-900 tw-outline-none focus:tw-outline-none tw-overflow-hidden">
          <div className="tw-p-5 tw-bg-[--ifm-color-primary-darkest]">
            <h3 className="tw-text-2xl tw-font-semibold tw-mb-0 tw-text-white">{title}</h3>
          </div>
          {/* children */}
          {children}
        </div>
      </div>
    </div>
  );
}
