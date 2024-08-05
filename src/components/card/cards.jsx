import React from "react";

const Cards = () => {
  return (
    <>
      <div className="w-[310px] h-[310px] rounded-[12px] ml-[50px] border">
        <div className="mt-[30px]">
          <div className="flex justify-between">
            <div>
              <img
                className="w-[48px] h-[48px] ml-[30px] rounded-md "
                src="https://avatars.mds.yandex.net/i?id=775a3e534887537b8c1487d59fa6dbcec538e687-10088009-images-thumbs&n=13"
                alt=""
              />
            </div>
            <div>icon point</div>
          </div>
          <div className="flex flex-col p-[10px] mt-[20px] border-solid-[1px] border-black gap-5">
            <div>
              <h3>Graphic Designer</h3>
            </div>
            <div>
              <span>Posted time:</span>
            </div>
            <div>
              <div>icon</div>
              <div>
                <span>12 candidates</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Cards;
