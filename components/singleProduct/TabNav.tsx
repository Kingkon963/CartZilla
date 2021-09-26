import * as React from "react";
import { FC, useState, useEffect } from "react";

import keyGen from "../../utils/genKey";

interface TabNavProps {
  titles: string[] | FC[];
  components: FC[];
}

const TabNav: FC<TabNavProps> = ({ titles, components }) => {
  const [active, setActive] = useState(0);
  let ActiveComponent = null;

  if (active < components.length) ActiveComponent = components[active];
  return (
    <div className="h-full">
      <div className="flex items-stretch gap-7 px-5 border-b">
        {titles.map((title, _idx) => {
          const isActive = (): boolean => active === _idx;
          return (
            <span
              className={`${
                isActive() ? "border-b border-primary text-primary" : ""
              } h-16 flex items-center cursor-pointer`}
              key={keyGen()}
              onClick={() => setActive(_idx)}
            >
              {title}
            </span>
          );
        })}
      </div>
      <div>{ActiveComponent && <ActiveComponent />}</div>
    </div>
  );
};

export default TabNav;
