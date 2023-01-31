import { useState } from 'react'

import ChildrenProp from 'models/ChildrenProp'

export default function ({ children }: ChildrenProp) {
  const username = 'ruslan'
  const email = 'ruslan@kortechs.io'
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedule ', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Setting', src: 'Setting' },
  ]

  return (
    <div className="flex bg-black-300">
      <div
        className={` ${
          open ? 'w-72 rounded-none' : 'w-20 rounded-20'
        } bg-default-900 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-12 w-7 border-default-600
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg] h-20'
            }`}
          />
          <div
            className={`text-white origin-left font-medium duration-200 ${
              !open && 'scale-0'
            }`}
          >
            <h1 className={'font-bold'}>{username}</h1>
            <h6 className={'font-thin'}>{email}</h6>
          </div>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen flex-1 p-7 bg-black-300">{children}</div>
    </div>
  )
}
