export const PriceRateProfile = () => {

  const inputClass = "p-1 bg-gray-50 border border-gray-300 rounded";

  return (
    <div className="w-fit min-h-screen block ml-auto mr-auto
      p-4 my-4 rounded-md bg-[#F8F8FF] border-2 outline-gray-100 shadow-lg
    ">
      <h1 className="font-semibold text-2xl pb-5 p-2">Price Rate Profile</h1>
      <div className="flex flex-col gap-5">
        <section className="min-w-[1000px] flex gap-44 flex-row border-2 rounded-xl p-5">
          <div className="flex flex-row gap-3">
            <p>Event</p>
            <p className="underline">test</p>
          </div>
          <div className="flex flex-row gap-3">
            <p>Venue</p>
            <p className="underline">test</p>
          </div>
        </section>
        <section className="min-w-[1000px] flex flex-row justify-between border-2 rounded-xl p-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-x-5 items-center">
              <p>Active</p>
              <input type="checkbox" />
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="w-32">Price rate name</p>
              <input type="text" className={inputClass} />
            </div>
            <div  className="flex flex-row items-center gap-3">
              <p className="w-32">Description</p>
              <textarea className="p-1 h-20 max-h-96 bg-gray-50 border border-gray-300 rounded" />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-fit">
            <div className="grid grid-flow-col w-[35rem] justify-start items-center gap-x-2">
              <p className="w-40">Performances from</p>
              <input type="date" className={inputClass} />
              <p>to:</p>
              <input type="date" className={inputClass} />
            </div>
            <div className="grid grid-flow-col w-[35rem] justify-start items-center gap-x-2">
              <p className="w-40">Bookings from</p>
              <input type="date" className={inputClass} />
              <p>to:</p>
              <input type="date" className={inputClass} />
            </div>
            <div className="grid grid-flow-col gap-x-5">
              <div className="grid grid-rows-3 gap-y-3">
                <span />
                <div>Time (matinee)</div>
                <div>Time (evening)</div>
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Mon</p>
                <input type="checkbox" className="h-5 w-5" />
                <input type="checkbox" className="h-5 w-5" />
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Tue</p>
                <input type="checkbox" className="h-5 w-5" />
                <input type="checkbox" className="h-5 w-5" />
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Wed</p>
                <input type="checkbox" className="h-5 w-5" />
                <input type="checkbox" className="h-5 w-5" />
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Thu</p>
                <input type="checkbox" className="h-5 w-5" />
                <input type="checkbox" className="h-5 w-5" />
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Fri</p>
                <input type="checkbox" className="h-5 w-5" />
                <input type="checkbox" className="h-5 w-5" />
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Sat</p>
                <input type="checkbox" className="h-5 w-5" />
                <input type="checkbox" className="h-5 w-5" />
              </div>
              <div className="grid grid-rows-3 justify-center gap-y-3">
                <p>Sun</p>
                <input type="checkbox" className="h-5 w-5" />
                <input type="checkbox" className="h-5 w-5" />
              </div>

            </div>
          </div>
        </section>
        <section  className="min-w-[1000px] flex flex-col border-2 rounded-xl p-5 gap-y-5" >
          <div className="w-[30rem] flex flex-row items-center">
            <p className="w-40">Commission</p>
            <div className="flex flex-row items-center">
              <input type="text" className={inputClass + " w-24"} />
              <p className="ml-3">%</p>
            </div>
          </div>
          <div className="w-[30rem] flex flex-row items-center">
            <p className="w-40">Minimum seats</p>
            <input type="text" className={inputClass + " w-24"} />
          </div>
          <div className="w-[30rem] flex flex-row items-center">
            <p className="w-40">Prior days:</p>
            <div className="w-72 flex flex-row justify-between items-center">
              <input type="text" className={inputClass + " w-24"} />
              <p className="">Hours</p>
              <input type="text" className={inputClass + " w-24"} />
            </div>
          </div>
          <div className="w-[30rem] flex flex-row items-center">
            <p className="w-40">Valid seat blocks:</p>
            <input type="text" className={inputClass + " w-72"} />
          </div>
        </section>
      </div>
    </div>
  )
}