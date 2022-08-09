import React from "react";

const overview = () => {
  return (
    <>
      <p className="mb-8">
        Embark on an epic adventure full of whimsy, wonder, and high-powered
        weaponry! Roll your own multiclass hero then shoot, loot, slash, and
        cast on a quest to stop the Dragon Lord.
      </p>
      <div className="text-sm mb-12 grid grid-cols-2">
        <div className="border-l-2 border-l-[#ffffff16] pl-4">
          <p className="text-light">Format</p>
          <p>Knockout</p>
        </div>
        <div className="border-l-2 border-l-[#ffffff16] pl-4">
          <p className="text-light">Tournament type</p>
          <p>Solo-Duo-Squad</p>
        </div>
      </div>
      <h3 className="mb-4">BioShock Remastered</h3>
      <p className="opacity-70 text-sm">
        Explore the undersea city of Rapture, a haven for society`&apos;`s
        greatest minds that has devolved into a dystopian nightmare wrought by
        one man`&apos;`s hubris. Amidst the waterlogged ruins, a new ecosystem
        has emerged, where deranged Splicers hunt down the Little Sisters who
        would be helpless without their hulking Big Daddy guardians. Your only
        hopes for survival are quick thinking, reclaimed weaponry, and
        superhuman powers granted by DNA-altering Plasmids. To defeat
        Rapture`&apos;`s mutated monsters, you must become one.
      </p>
      <p className="opacity-70 text-sm">Also includes:</p>
      <li className="opacity-70 text-sm">
        Museum of Orphaned Concepts - Take a tour through BioShock`&apos;`s
        beginnings across multiple exhibits in this virtual museum, from early
        concept art to full in-game models.
      </li>
      <li className="opacity-70 text-sm">
        Challenge Rooms - Test your combat skills and puzzle-solving prowess
        with this noncanonical series of trials.
      </li>
    </>
  );
};

export default overview;
