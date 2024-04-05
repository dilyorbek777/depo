import React from "react";

export default function Page({
  params,
}: {
  params: {
    username: string;
  };
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1>Dev : {params.username}</h1>
    </div>
  );
}
