import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { GiCookie } from "react-icons/gi";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Cookies() {
  const data = [
    {
      title: "cookies",
      Description: "cookies Contest",
    },
    {
      title: "duration",
      Description: "1 Year",
    },
    {
      title: "the description",
      Description:
        "Les cookies nécessaires sont cruciaux pour les fonctions de base du site Web et celui-ci ne fonctionnera pas comme prévu sans eux.Ces cookies ne stockent aucune donnée personnellement identifiable.",
    },
  ];
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-fit ">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black/50 p-1 z-[999] rounded-full fixed bottom-10 left-8"
      >
        <GiCookie className="text-4xl text-yellow-500 " />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed  inset-0 flex overflow-y-hidden w-full items-center justify-center p-4     ">
          <DialogPanel className="lg:w-[50vw] space-y-4 overflow-y-hidden border bg-white p-12">
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Disclosure>
              <DisclosureButton className="py-2 flex gap-5 items-start ">
                <span>
                  <IoIosArrowDown />
                </span>{" "}
                <div className="text-start space-y-3">
                  <p> Is team pricing available?</p>
                  <p>
                    Les cookies nécessaires sont cruciaux pour les fonctions de
                    base du site Web et celui-ci ne fonctionnera pas comme prévu
                    sans eux.Ces cookies ne stockent aucune donnée
                    personnellement identifiable.
                  </p>
                </div>
              </DisclosureButton>
              <DisclosurePanel className="text-white rounded-md bg-gray-400 p-1">
                {data.map((d, i) => (
                  <div key={i} className="flex items-start mb-2">
                    <h4 className="text-xs w-1/6">{d.title}</h4>
                    <p className="w-full text-sm">{d.Description}</p>
                  </div>
                ))}
              </DisclosurePanel>
            </Disclosure>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default Cookies;
