import React from "react";

const DetailKucing = ({ details }) => {
  if (!details) {
    return <div>Detail not available</div>;
  }

  return (
    <div className="col-span-1 bg-greyLighter p-4 space-y-4">
      <h1 className="text-secondary text-xl font-semibold font-Satoshi-Regulerbold">
        {details.name}
      </h1>
      <p className="mt-4 text-base font-light font-Satoshi-Light">
        {details.longDetails}
      </p>

      <div className="mt-4 w-full text-base font-light font-Satoshi-Light">
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          <span className="text-base font-light font-Satoshi-Light">
            Tersedia
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.available}
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            Warna Bulu
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.color}
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            Jenis Bulu
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.type}
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            Gender
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.gender}
          </span>
          <span className="text-base font-light font-Satoshi-Light">Berat</span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.weight}
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            Tanggal Lahir
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.born}
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            Vaksinasi
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.vacsinated}
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            Kepribadian
          </span>
          <span className="text-base font-light font-Satoshi-Light">
            : {details.personality}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailKucing;
