import React from "react";

const rules = () => {
  return (
    <>
      <h2 className="mb-4">Important</h2>
      <ul className="text-sm">
        <li>
          Only certain game modes are tracked - check the Tournament Overview
          for which ones apply to this tournament.
        </li>
        <li>Only games played after you join the tournament are counted.</li>
        <li>
          Smurfing (creating new account to compete with) will result in an
          immediate and permanent ban from Repeat.gg and all winnings will be
          forfeited.
        </li>
        <li>
          If you have any feedback on the scoring/tournaments please talk to us
          directly on Discord as we would love to hear from you.
        </li>
        <li>
          Winners of digital prizes have 14 days after the tournament ends to
          claim the prize.
        </li>
        <li>
          Winners of physical prizes have 7 days after the tournament ends to
          claim the prize.
        </li>
      </ul>
    </>
  );
};

export default rules;
