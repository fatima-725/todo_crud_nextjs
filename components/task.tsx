"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LucideDelete } from "lucide-react";
import { getAll } from "@/actions/getLorem";
import { useEffect, useState } from "react";
import { Lorem } from "@prisma/client";
import { deleteEntry } from "@/actions/deleteLorem";
import { updateEntry } from "@/actions/updateLorem";

type LoremEntry = {
  id?: string;
  name?: string;
  isCompleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

function Display() {
  const [e, setE] = useState<LoremEntry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const fetchedEntries = await getAll();
        if (fetchedEntries) {
          setE(fetchedEntries);
        } else {
          console.error("No entries found");
        }
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  const onDelete = async (id: string) => {
    const d = await deleteEntry(id);
  };

  const update = async (id: string, name: string) => {
    const u = await updateEntry(id, name);
  };

  return (
    <div>
      <div className="container h-screen w-screen bg-yellow-200  justify-center ">
        {/* task */}
        <div className=" px-28 gap-4 flex flex-col">
          {e.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-6 gap-2 bg-white border border-black mt-4 rounded-md"
            >
              <p>{item.name}</p>
              <div className="flex items-center justify-between ">
                <Button
                  variant={"destructive"}
                  onClick={() => item.id && update(item.id, "updated")}
                >
                  Update
                </Button>
                <Button onClick={() => item.id && onDelete(item.id)}>
                  <LucideDelete />
                </Button>
              </div>
            </div>
          ))}

          {/* <div className="flex flex-col p-6 gap-2 bg-white border border-black mt-4 rounded-md">
            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
            <div className="flex items-center justify-between ">
              <Button variant={"destructive"}>Click me</Button>
              <Button>
                <LucideDelete />
              </Button>
            </div>
          </div>
          <div className="flex flex-col p-6 gap-2 bg-white border border-black mt-4 rounded-md">
            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
            <div className="flex items-center justify-between ">
              <Button variant={"destructive"}>Click me</Button>
              <Button>
                <LucideDelete />
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Display;
