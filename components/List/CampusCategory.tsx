import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { MdCheck } from "react-icons/md";
import { HiSelector } from "react-icons/hi";

const campus = [
  { name: "Semua Kampus", value: "all-campus" },
  { name: "-- Semua Kampus di Jawa Timur", value: "jawa-timur" },
  { name: "Universitas Negeri Malang", value: "universitas-negeri-malang" },
  { name: "Universitas Brawijya", value: "universitas-brawijaya" },
  { name: "Universitas Surabaya", value: "universitas-surabaya" },
  { name: "Universitas Airlangga", value: "universitas-airlangga" },
];

const category = [
  { name: "Semua Kategory", value: "all-category" },
  { name: "Forsa - Alumni SMANGAT", value: "forsa" },
  { name: "Passing Grade", value: "passing-grade" },
  { name: "Jurusan", value: "jurusan" },
  { name: "Biaya Hidup", value: "biaya-hidup" },
  { name: "Biaya Kuliah", value: "biaya-kuliah" },
];
export default function CampusList() {
  const [campusSelected, setCampusSelected] = useState(campus[0]);
  const [categorySelected, setCategorySelected] = useState(category[0]);

  return (
    <div className="font-dinamit-light text-label-small text-black flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-1 md:space-x-2">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 w-full">
        <div className="w-full">
          <Listbox value={categorySelected} onChange={setCategorySelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-black cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-black focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-black text-label-small lg:text-label-large">
                <span className="block truncate">{categorySelected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <HiSelector
                    className="w-5 h-5 text-black"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full mt-1 overflow-auto  bg-white max-h-60 border border-black  focus:outline-none text-label-small lg:text-label-large z-20">
                  {category.map((item, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `${active ? "text-white bg-black" : "text-black"}
                          cursor-default select-none relative py-2 px-2`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {item.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-white" : "text-black"
                              }
                                absolute inset-y-0 right-0 flex items-center pl-3`}
                            >
                              <MdCheck className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="text-label-medium lg:text-label-large">in</div>
        <div className="w-full">
          <Listbox value={campusSelected} onChange={setCampusSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-black cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-black focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-black text-label-small lg:text-label-large">
                <span className="block truncate">{campusSelected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <HiSelector
                    className="w-5 h-5 text-black"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full mt-1 overflow-auto  bg-white max-h-60 border border-black  focus:outline-none text-label-small lg:text-label-large">
                  {campus.map((item, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `${active ? "text-white bg-black" : "text-black"}
                          cursor-default select-none relative py-2 px-2`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {item.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-white" : "text-black"
                              }
                                absolute inset-y-0 right-0 flex items-center pl-3`}
                            >
                              <MdCheck className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <a
        href={`/berita/${categorySelected.value}-${campusSelected.value}`}
        className="text-label-medium lg:text-label-large px-4 py-2 bg-black text-white border-black border"
      >
        Cari
      </a>
    </div>
  );
}
