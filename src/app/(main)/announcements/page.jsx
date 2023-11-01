import Announcement from "@/components/announcements/Announcement";
import Container from "@/components/shared/Container";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="h-full w-full py-4 px-2 flex flex-col gap-y-4">
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
      </div>
    </Container>
  );
};

export default page;
