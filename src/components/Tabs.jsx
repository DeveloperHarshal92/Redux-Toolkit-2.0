import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTabs);

  const tabs = ["photos", "videos"];

  return (
    <div className="flex gap-10 p-10">
      {tabs.map((ele, idx) => {
        return (
          <>
            <button
              key={idx}
              onClick={() => {
                dispatch(setActiveTabs(ele));
              }}
              className={`${activeTab == ele ? "bg-emerald-600" : "bg-gray-600 "} px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
            >
              {ele}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Tabs;
