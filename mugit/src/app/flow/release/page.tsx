import Description from "@/app/components/Description";
import IconCamera from "@/app/assets/icon/IconCamera";
import MyRadioGroup from "@/app/container/note/RadioGroup";

import dynamic from "next/dynamic";
const WavesurferComp = dynamic(() => import("@/app/components/wavesurfer"), {
  ssr: false,
});

export default function NotePage() {
  return (
    <main className="relative flex min-h-[90%] w-full flex-col px-52 py-10">
      <h1 className="relative border-b-2 border-solid border-gray-300 pl-5 text-5xl font-bold italic">
        Release Note
      </h1>
      <Description target="release" />

      <div className="mt-4 flex w-full">
        {/* 사진 올리는 부분임 */}
        <div className="flex w-3/12 flex-col items-center ">
          <div className="relative h-60 w-60 bg-purple-100">
            사진임
            <div className="absolute bottom-2 left-6 flex h-8 w-48 items-center justify-center gap-2 rounded-lg bg-gray-300 hover:bg-[#c8cace] hover:shadow">
              <IconCamera />
              Upload Image
            </div>
          </div>
        </div>

        {/* 파일 가져오는 부분임 */}
        <div className="flex w-9/12 flex-col">
          <h2 className=" text-lg">Note Name</h2>
          <input
            type="text"
            className="h-8 w-full rounded-lg border-2 border-solid border-gray-300 border-b-gray-200 px-4"
          />

          <h2 className="mt-4 text-lg">Flow Name</h2>
          <input
            type="text"
            className="h-8 w-full rounded-lg border-2 border-solid border-gray-300 border-b-gray-200 px-4"
          />

          <h2 className="mt-4 text-lg">Tags</h2>
          <input
            type="text"
            className="mb-6 h-8 w-1/2 rounded-lg border-2 border-solid border-gray-300 border-b-gray-200 px-4"
          />

          <WavesurferComp musicname="Burkinelectric.mp3" />

          <h2 className="mt-6 text-lg">Record Messages</h2>
          <div className="my-2 min-h-56 w-full rounded-lg border-2 border-solid border-gray-300"></div>

          <h2 className="mt-4 text-lg">Description</h2>
          <textarea
            placeholder="Describe your Note"
            className="h-52 w-full rounded-lg border-2 border-solid border-gray-300 border-b-gray-200 p-4"
          />

          <div className="mt-5 flex w-full justify-end gap-x-3">
            <button className="rounded-lg border-2 border-solid bg-gray-100 px-10 py-3 text-gray-600">
              Cancel
            </button>
            <button className="rounded-lg bg-pointblue px-10 py-3 text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}