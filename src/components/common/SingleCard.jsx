import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
const SingleCard = ({ data = [], buttonText }) => {

  return (
    <div className='flex flex-col'>
      <div className="max-w-[100%] bg-white rounded-2xl border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image */}



        <div className='p-5'>
          <img
            src={data?.img || null}
            alt="Package"
            className="w-full min-h-48 object-cover"
          />
        </div>
        {/* Content */}
        <div className="p-5">
          {/* Package Name */}
          {data.title ?
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {data?.title || null}
            </h2>
            : null
          }

          {/* Phone Number */}
          {data.mobileNo ?
            <div className="flex items-center text-gray-700 mb-3">
              <FiPhoneCall className="text-gray-500 mr-2" size={18} />
              <span className="text-webPara font-medium">{data?.mobileNo || null}</span>
            </div>
            : null}

          {/* Shop Details */}
          <div className="mb-4">
            <p className={`text-webPara ${data?.subtitle ? " pb-1" : ""} `}>{data?.subtitle || null}</p>
            <p className="text-webPara text-sm">{data?.shop || null}</p>
          </div>

          {/* Call Now Button */}
          <button className="w-full bg-webprimary hover:bg-[#005f8d] text-white font-semibold py-2 rounded-lg transition-colors">
            {buttonText ? buttonText : "Call Now"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
