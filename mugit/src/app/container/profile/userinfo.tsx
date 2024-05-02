"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const tempInfo = {
  isLogined: true,
  nickName: "Lil Nas X",
  profileText: "when the light returns",
  profileImage: "/lil nas x.png",
};

export default function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);
  function clickModal() {
    setIsOpen(!isOpen);
  }
  const [newNickName, setNewNickName] = useState(tempInfo.nickName);
  const [newProfileText, setNewProfileText] = useState(tempInfo.profileText);
  return (
    <div className="flex h-80 flex-wrap content-center justify-center bg-[#f1f609]">
      <div className="flex w-2/3 justify-evenly">
        <Image
          width={150}
          height={150}
          alt="profile image"
          src={tempInfo.profileImage}
          className="h-48 w-48 rounded-full"
          priority
        />
        <div className="">
          <p className="pb-3 text-4xl">{tempInfo.nickName}</p>
          <p className="pb-3 text-xl">{tempInfo.profileText}</p>
          <div className="flex divide-x-2 divide-solid divide-black pb-3">
            <div className="pr-5">
              <p>Followers</p>
              <p className="text-2xl">10</p>
            </div>
            <div className="pl-5">
              <p>Followings</p>
              <p className="text-2xl">20</p>
            </div>
          </div>
          <div>
            <button className="mr-3 rounded border-2 border-black px-2 py-1">
              Follow
            </button>
            <button
              className="rounded border-2 border-black px-2 py-1"
              onClick={clickModal}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={clickModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[40rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-4xl font-bold italic leading-6">
                    Edit Profile
                  </Dialog.Title>
                  <div className="mt-10 flex justify-around">
                    <div>
                      <Image
                        width={150}
                        height={150}
                        alt="profile image"
                        src={tempInfo.profileImage}
                        className="h-48 w-48 rounded-full"
                        priority
                      />
                    </div>
                    <div>
                      <p className="mb-3">Nickname</p>
                      <input
                        type="text"
                        className="mb-3 w-48 rounded border-2 border-solid border-slate-500 p-1 text-lg focus:outline-none"
                        defaultValue={tempInfo.nickName}
                        onChange={(event) => setNewNickName(event.target.value)}
                      />
                      <p className="pb-3">Description</p>
                      <textarea
                        className="h-32 rounded border-2 border-solid border-slate-500 p-1 text-lg focus:outline-none"
                        defaultValue={tempInfo.profileText}
                        onChange={(event) =>
                          setNewProfileText(event.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-10 text-center">
                    <button
                      className="mx-3 rounded border-2 border-slate-500 px-2 py-1"
                      onClick={clickModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded border-2 border-pointblue bg-pointblue px-2 py-1 text-white"
                      onClick={clickModal}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}