import React from 'react';

const AmbassadorsTable = () => {
  // Dummy data for ambassadors
  

  
   
  
   
  
   
   
  
  
  
  
  
  


  const ambassadors = [
    { id: 1, name: 'Junaid Hanif', referralCode: 'HACK-JUN-39', institute: 'International Islamic University Islamabad ' },
    { id: 2, name: 'Muhammad Abdullah Nasir Khan', referralCode: 'HACK-NAS-45', institute: 'Namal University Mianwali' },
    { id: 3, name: 'Abu Bakar',referralCode: ' HACK-ABK-30', institute: 'Namal University Mianwali' },
    { id: 4, name: 'Muhammad Hammad Azam ', referralCode: 'HACK-MHA-15 ', institute: 'University of agriculture peshawar' },
    { id: 5, name: 'Alishba Maqsood ',referralCode: 'HACK-AMD-64', institute: 'Bahria university karachi campus' },
    { id: 6, name: 'Abdul Ahad', referralCode: ' HACK-AHD-12', institute: 'Foundation university Rawalpindi' },
    { id: 7, name: 'Saqib Yousaf ',referralCode: '  HACK-SQY-23', institute: 'Agriculture university Peshawar' },
    { id: 8, name: 'Aamna Zaheer',referralCode: '  HACK-AZR-24', institute: 'University of Engineering and Technology Taxila' },
    { id: 9, name: 'Muhammad Ahmad ', referralCode: 'HACK-MDA-56', institute: 'University of Engineering and Technology Taxila' },
    { id: 10, name: 'Arslan Khalid ',referralCode: 'HACK-ARS-73', institute: 'COMSATS University Islamabad, Wah Campus' },
    { id:11, name: 'Hamza Anjum Kiani ',  referralCode: 'comecswah', institute: 'COMSATS University Islamabad, Wah Campus' },
    { id: 12, name: 'Kabsha Farooq ', referralCode: 'HACK-KAB-07', institute: 'University of Engineering and Technology Taxila' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      <div className="overflow-x-auto border-2 border-black rounded-lg">
        <table className="min-w-full border bg-white border-gray-900 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-poorple to-daBrown font-poppins text-white text-2xl">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">Ambassador Code</th>
              <th className="px-6 py-3 text-left text-sm font-medium  uppercase tracking-wider">Institute</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ambassadors.map((ambassador) => (
              <tr key={ambassador.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ambassador.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {ambassador.referralCode}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ambassador.institute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmbassadorsTable;