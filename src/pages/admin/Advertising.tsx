import { BackSheet } from "@/components/BackSheet/BackSheet";
import EditAdvert from "@/components/EditAdvert/EditAdvert";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownUp, Pencil, Trash } from "lucide-react";

const sources = [
  {
    preview: "/AD21-02.png",
    title: "Spring Sale 2025",
    activeFrom: "Apr 10, 2025",
    activeTo: "Jun 15, 2025",
    state: true,
  },
  {
    preview: "/AD21-02-1.png",
    title: "Summer Promotions",
    activeFrom: "Apr 10, 2025",
    activeTo: "Jun 15, 2025",
    state: false,
  },
  {
    preview: "/AD21-02-2.png",
    title: "Exclusive Offers",
    activeFrom: "Apr 10, 2025",
    activeTo: "Jun 15, 2025",
    state: true,
  },
  {
    preview: "/AD21-02-3.png",
    title: "Limited Time Discounts",
    activeFrom: "Apr 10, 2025",
    activeTo: "Jun 15, 2025",
    state: false,
  },
  {
    preview: "/AD21-02-4.png",
    title: "New Arrivals Alert",
    activeFrom: "Apr 10, 2025",
    activeTo: "Jun 15, 2025",
    state: true,
  },
];

export default function Advertising() {
  return (
    <>
      <BackSheet />
      <Table className="mt-5">
        <TableHeader>
          <TableRow className="bg-gray-400 border-b ">
            <TableHead className="h-5 w-[284px] rounded-tl-[8px] border-gray-500 border-r pr-4 py-1">
              <span className="flex items-center gap-1 text-xs text-gray-800">
                Preview
              </span>
            </TableHead>
            <TableHead className="h-5 w-[180px] border-gray-500 border-r pr-4 py-1">
              <span className="text-gray-800 text-xs">Title</span>
            </TableHead>
            <TableHead className="h-5 w-[140px] border-gray-500 border-r pr-4 py-1">
              <span className="flex items-center gap-1 text-xs text-gray-800">
                Active from <ArrowDownUp size={14} />
              </span>
            </TableHead>
            <TableHead className="h-5 w-[240px] border-gray-500 border-r pr-4 py-1">
              <span className="flex items-center gap-1 text-xs text-gray-800">
                Active to
                <ArrowDownUp size={14} />
              </span>
            </TableHead>
            <TableHead className="h-5 w-[264px] rounded-tr-[8px] border-l pr-4 py-1">
              <span className="text-gray-800 text-xs">State</span>
            </TableHead>
            <TableHead className="h-5 w-[264px] rounded-tr-[8px] border-l pr-4 py-1">
              <span className="text-gray-800 text-xs">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-l border-r border-b">
          {sources.map((source, i) => (
            <TableRow
              key={source.title}
              className={i % 2 ? "bg-gray-500" : "bg-gray-600"}
            >
              <TableCell>
                <img src={source.preview} alt="" />
              </TableCell>
              <TableCell>{source.title}</TableCell>
              <TableCell>{source.activeFrom}</TableCell>
              <TableCell>{source.activeTo}</TableCell>
              <TableCell>
                {source.state ? (
                  <div className="flex items-center gap-2 px-2 py-1 text-gray-200">
                    <Switch
                      checked={source.state}
                      className="data-[state=checked]:bg-blue-600"
                    />
                    <span>On</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-2 py-1 text-gray-200">
                    <Switch className="data-[state=checked]:bg-blue-600" />
                    <span>Off</span>
                  </div>
                )}
              </TableCell>
              <TableCell className="">
                <EditAdvert
                  trigger={
                    <Button
                      variant="outline"
                      className="text-blue-500 hover:text-blue-600 bg-[var(--context-background-fill-brand-blue-tertiary-bg-fill-brand-tertiary)]"
                    >
                      <Pencil />
                      Edit
                    </Button>
                  }
                />
                <Button
                  variant="outline"
                  className="ml-2 text-red-600 hover:text-red-800 bg-[var(--context-background-fill-brand-blue-tertiary-bg-fill-brand-tertiary)]"
                >
                  <Trash />
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
