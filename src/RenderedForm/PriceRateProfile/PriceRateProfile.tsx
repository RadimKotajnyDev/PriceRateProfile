export const PriceRateProfile = () => {

  const inputClass = " bg-gray-50 border border-gray-300 rounded";
  const buttonClass = "border-black border rounded\n" +
    "             bg-gray-200 hover:bg-gray-300 transition duration-200\n" +
    "             delay-50 px-2 py-1 w-fit"

  const tdClass = "border border-black"

  return (
    <div className="w-fit min-h-screen block ml-auto mr-auto
      p-4 my-4 rounded-md bg-[#F8F8FF] border-2 outline-gray-100 shadow-lg
    ">
      <h1 className="font-semibold text-2xl pb-5 p-2">Price Rate Profile</h1>
      <div className="flex flex-col gap-5">
        <section className="min-w-[1100px] flex gap-44 flex-row border-2 rounded-xl p-5">
          <div className="flex flex-row gap-3">
            <p>Event</p>
            <p className="underline">test</p>
          </div>
          <div className="flex flex-row gap-3">
            <p>Venue</p>
            <p className="underline">test</p>
          </div>
        </section>
        <section className="min-w-[1100px] flex flex-row border-2 rounded-xl p-5">
          <div className="flex flex-col gap-y-5 w-[30rem]">
            <div className="flex flex-row items-center">
              <p className="w-40">Active</p>
              <input type="checkbox"/>
            </div>
            <div className="flex flex-row items-center">
              <p className="w-40">Price rate name</p>
              <input type="text" className={inputClass}/>
            </div>
            <div className="flex flex-row items-center">
              <p className="w-40">Description</p>
              <textarea className="p-1 h-20 max-h-96 bg-gray-50 border border-gray-300 rounded"/>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-fit">
            <div className="grid grid-flow-col w-[35rem] justify-start items-center gap-x-2">
              <p className="w-40">Performances from</p>
              <input type="date" className={inputClass}/>
              <p>to:</p>
              <input type="date" className={inputClass}/>
            </div>
            <div className="grid grid-flow-col w-[35rem] justify-start items-center gap-x-2">
              <p className="w-40">Bookings from</p>
              <input type="date" className={inputClass}/>
              <p>to:</p>
              <input type="date" className={inputClass}/>
            </div>
            <div className="grid grid-flow-col gap-x-5">
              <div className="grid grid-rows-3 gap-y-3">
                <span/>
                <div>Time (matinee)</div>
                <div>Time (evening)</div>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Mon</p>
                <input type="checkbox" className="h-5 w-5"/>
                <input type="checkbox" className="h-5 w-5"/>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Tue</p>
                <input type="checkbox" className="h-5 w-5"/>
                <input type="checkbox" className="h-5 w-5"/>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Wed</p>
                <input type="checkbox" className="h-5 w-5"/>
                <input type="checkbox" className="h-5 w-5"/>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Thu</p>
                <input type="checkbox" className="h-5 w-5"/>
                <input type="checkbox" className="h-5 w-5"/>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Fri</p>
                <input type="checkbox" className="h-5 w-5"/>
                <input type="checkbox" className="h-5 w-5"/>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Sat</p>
                <input type="checkbox" className="h-5 w-5"/>
                <input type="checkbox" className="h-5 w-5"/>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Sun</p>
                <input type="checkbox" className="h-5 w-5"/>
                <input type="checkbox" className="h-5 w-5"/>
              </div>
            </div>
          </div>
        </section>
        <section className="min-w-[1100px] flex flex-row border-2 rounded-xl p-5">
          <div className="flex flex-col gap-y-5 w-[30rem]">
            <div className=" flex flex-row items-center">
              <p className="w-40">Commission</p>
              <div className="flex flex-row items-center">
                <input type="text" className={inputClass + " w-24"}/>
                <p className="ml-3">%</p>
              </div>
            </div>
            <div className=" flex flex-row items-center">
              <p className="w-40">Minimum seats</p>
              <input type="text" className={inputClass + " w-24"}/>
            </div>
            <div className=" flex flex-row items-center">
              <p className="w-40">Prior days:</p>
              <div className="w-72 flex flex-row justify-between items-center">
                <input type="text" className={inputClass + " w-24"}/>
                <p className="">Hours</p>
                <input type="text" className={inputClass + " w-24"}/>
              </div>
            </div>
            <div className=" flex flex-row items-center">
              <p className="w-40">Valid seat blocks:</p>
              <input type="text" className={inputClass + " w-72"}/>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row items-center">
              <p className="w-40">API Offer Code:</p>
              <input type="text" className={inputClass}/>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <p className="w-40">Online Use:</p>
                <input type="checkbox"/>
              </div>
            </div>
          </div>
        </section>
        <section className="min-w-[1100px] flex flex-row border-2 rounded-xl p-5 gap-x-10">
          <div className="flex flex-col">
            <p>Price Bands:</p>
            <table className="border-collapse border border-black text-center my-10">
              <thead>
                <tr>
                  <td className="border border-black bg-gray-200">Face Value</td>
                  <td className="border border-black bg-gray-200">Purchase Price</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>
                    <input type="number" className="text-center" value="32.50"></input>
                  </td>
                  <td className={tdClass}>
                    <input type="number" className="text-center" value="32.50"></input>
                  </td>
                </tr>
                <tr>
                  <td className={tdClass}>
                    <input type="number" className="text-center" value="40"></input>
                  </td>
                  <td className={tdClass}>
                    <input type="number" className="text-center" value="40"></input>
                  </td>
                </tr>
                <tr>
                  <td className={tdClass}>
                    <input type="number" className="text-center" value="55.50"></input>
                  </td>
                  <td className={tdClass}>
                    <input type="number" className="text-center" value="55.50"></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" className={buttonClass}>Add price band</button>
          </div>
          <div className="flex flex-col">
            <p>Price groups:</p>
            <table className="border-collapse border border-black text-center my-10">
              <thead>
              <tr>
                <td className="border border-black bg-gray-200">Price Group</td>
                <td className="border border-black bg-gray-200">Price Group Name</td>
                <td className="border border-black bg-gray-200">Sell Net</td>
                <td className="border border-black bg-gray-200">Sell Commissionable</td>
              </tr>
              </thead>
              <tbody>
                  <tr>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="10"/>
                    </td>
                    <td className={tdClass}>
                      <input type="text" className={inputClass} value="Tour Operators"/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="00.00"/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="00.00"/>
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="5"/>
                    </td>
                    <td className={tdClass}>
                      <input type="text" className={inputClass} value="Wholesalers UK"/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="00.00"/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="00.00"/>
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="1"/>
                    </td>
                    <td className={tdClass}>
                      <input type="text" className={inputClass} value="OTA's"/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="00.00"/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value="00.00"/>
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value=""/>
                    </td>
                    <td className={tdClass}>
                      <input type="text" className={inputClass} value=""/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value=""/>
                    </td>
                    <td className={tdClass}>
                      <input type="number" className={inputClass} value=""/>
                    </td>
                  </tr>
              </tbody>
            </table>
            <button type="button" className={buttonClass}>Add price group for selected price band</button>
          </div>
        </section>
        <section className="min-w-[1100px] flex flex-row border-2 rounded-xl p-5 gap-x-10">
          <div className="flex flex-col">
            <p>Exclusion dates:</p>
            <table className="border-collapse border border-black text-center my-10">
              <thead>
              <tr>
                <td className="border border-black bg-gray-200">Time/(Eve/mat)</td>
                <td className="border border-black bg-gray-200">Date from</td>
                <td className="border border-black bg-gray-200">Date to</td>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>
                    <input type="text" className={inputClass} value="Mat"/>
                  </td>
                  <td className={tdClass}>
                    <input type="date" className={inputClass} value=""/>
                  </td>
                  <td className={tdClass}>
                    <input type="date" className={inputClass} value=""/>
                  </td>
                </tr>
                <tr>
                  <td className={tdClass}>
                    <input type="time" className={inputClass} value="15:30"/>
                  </td>
                  <td className={tdClass}>
                    <input type="date" className={inputClass} value=""/>
                  </td>
                  <td className={tdClass}>
                    <input type="date" className={inputClass} value=""/>
                  </td>
                </tr>
                <tr>
                  <td className={tdClass}>
                    <input type="time" className={inputClass} value="19:30"/>
                  </td>
                  <td className={tdClass}>
                    <input type="date" className={inputClass} value=""/>
                  </td>
                  <td className={tdClass}>
                    <input type="date" className={inputClass} value=""/>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" className={buttonClass}>Add exclusion date</button>
          </div>
        </section>

      </div>
    </div>
  )
}

