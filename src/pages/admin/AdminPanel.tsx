import { BackSheet } from "@/components/BackSheet/BackSheet";
import EditSource from "@/components/EditSource/EditSource";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownUp, Globe, Pencil, ShieldCheck, ShieldX } from "lucide-react";

const sources = [
  {
    source: "Source-name-1",
    type: "Type",
    status: true,
  },
  {
    source: "Source-name-1",
    type: "Type",
    status: true,
  },
  {
    source: "Source-name-1",
    type: "Type",
    status: true,
  },
  {
    source: "Source-name-1",
    type: "Type",
    status: true,
  },
  {
    source: "Source-name-1",
    type: "Type",
    status: false,
  },
  {
    source: "Source-name-1",
    type: "Type",
    status: true,
  },
  {
    source: "Source-name-1",
    type: "Type",
    status: false,
  },
];

export default function AdminPanel() {
  return (
    <>
      <BackSheet />
      <Table className="mt-5">
        <TableHeader>
          <TableRow className="bg-gray-400 border-b ">
            <TableHead className="h-5 w-[284px] rounded-tl-[8px] border-gray-500 border-r pr-4 py-1">
              <span className="flex items-center gap-1 text-xs text-gray-800">
                Name <ArrowDownUp size={14} />
              </span>
            </TableHead>
            <TableHead className="h-5 w-[180px] border-gray-500 border-r pr-4 py-1">
              <span className="text-gray-800 text-xs">Type</span>
            </TableHead>
            <TableHead className="h-5 w-[140px] border-gray-500 border-r pr-4 py-1">
              <span className="flex items-center gap-1 text-xs text-gray-800">
                Status <ArrowDownUp size={14} />
              </span>
            </TableHead>
            <TableHead className="h-5 w-[240px] border-gray-500 border-r pr-4 py-1">
              <span className="flex items-center gap-1 text-xs text-gray-800">
                Last Sync
                <ArrowDownUp size={14} />
              </span>
            </TableHead>
            <TableHead className="h-5 w-[264px] rounded-tr-[8px] border-l pr-4 py-1">
              <span className="text-gray-800 text-xs">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-l border-r border-b">
          {sources.map((source, i) => (
            <TableRow
              key={source.source}
              className={i % 2 ? "bg-gray-500" : "bg-gray-600"}
            >
              <TableCell>{source.source}</TableCell>
              <TableCell>{source.type}</TableCell>
              <TableCell>
                {source.status ? (
                  <div className="flex items-center gap-2 px-2 py-1 rounded-xl w-[70px] bg-green-100 text-black">
                    <ShieldCheck className="text-green-500" />
                    <span>On</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-2 py-1 rounded-xl w-[70px] bg-red-100 text-black">
                    <ShieldX className="text-red-500" />
                    <span>Off</span>
                  </div>
                )}
              </TableCell>
              <TableCell>{new Date(Date.now()).toLocaleString()}</TableCell>
              <TableCell className="flex gap-2">
                <EditSource
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
                  className="text-blue-500 hover:text-blue-600 bg-[var(--context-background-fill-brand-blue-tertiary-bg-fill-brand-tertiary)]"
                >
                  <Globe />
                  Test Connection
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
