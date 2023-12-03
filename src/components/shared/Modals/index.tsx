import React, { ReactNode, useState } from "react";

export default function Modal({
  title,
  children,
}: Readonly<{
  readonly title: string;
  readonly children: ReactNode;
}>) {
  return (
    <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
      <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
        {/* title */}
        <div className="tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-[--ifm-color-primary-lightest] tw-outline-none focus:tw-outline-none">
          <div className="tw-rounded-t-lg tw-p-5 tw-bg-[--ifm-color-primary-darkest]">
            <h3 className="text-4xl font-semibold tw-mb-0 tw-text-white">{title}</h3>
          </div>
          {/* children */}
          {children}
        </div>
      </div>
    </div>
  );
}
