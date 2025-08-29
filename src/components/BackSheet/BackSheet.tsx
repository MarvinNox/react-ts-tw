import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChartPie, LogOut, Server, TrendingUp } from "lucide-react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function BackSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Open Side menu</Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[linear-gradient(323deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)80%,rgba(19,68,133,1)100%)] border-none w-[268px] [&>button:first-of-type]:hidden"
      >
        <SheetHeader className="border-b border-gray-500 p-6">
          <SheetTitle className="flex text-white gap-2 text-xl items-center font-normal">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0547 0.88916C20.8308 0.88917 22.1531 1.11014 23.1094 1.40283C24.4116 1.80145 25.2257 2.88915 25.8057 3.81885C27.2097 6.06917 28.1504 6.70047 28.8848 7.14209C29.2638 7.36995 29.7151 7.61335 30.1329 7.99756C30.5678 8.39758 30.9515 8.92884 31.3282 9.7417C31.8462 10.8602 31.9968 12.5546 32.0001 14.2856C32.0034 16.0515 31.8507 17.9853 31.6866 19.6587C31.4933 21.6281 29.8153 23.1107 27.8419 23.1108H24.5733L24.501 23.1079C24.1433 23.0717 23.8644 22.7706 23.8643 22.4048C23.8643 22.0389 24.1433 21.7379 24.501 21.7017L24.5733 21.6978H27.8419C29.0984 21.6976 30.1536 20.7534 30.2745 19.521C30.4374 17.8604 30.5843 15.9828 30.5811 14.2886C30.5779 12.5597 30.4152 11.1452 30.0391 10.3335C29.7198 9.64444 29.4358 9.28015 29.17 9.03564C28.887 8.77542 28.6035 8.62424 28.1524 8.35303C27.2261 7.79606 26.1223 7.00541 24.5997 4.56494C24.0374 3.66386 23.46 2.98928 22.6934 2.75439C21.9943 2.54041 21.0043 2.35492 19.6553 2.31201L19.0547 2.30322H12.9444C11.284 2.30325 10.1056 2.50985 9.30669 2.75439C8.53988 2.98921 7.96183 3.66359 7.39947 4.56494C5.87684 7.00541 4.77398 7.79606 3.84771 8.35303C3.39648 8.62435 3.11218 8.77536 2.82915 9.03564C2.56339 9.28014 2.2792 9.64472 1.96001 10.3335C1.584 11.1452 1.42225 12.5599 1.419 14.2886C1.41582 15.9828 1.56272 17.8604 1.72564 19.521C1.84656 20.7535 2.90165 21.6977 4.15826 21.6978H7.42583L7.49908 21.7017C7.85665 21.7381 8.1358 22.039 8.1358 22.4048C8.13568 22.7705 7.8566 23.0715 7.49908 23.1079L7.42583 23.1108H4.15826C2.18471 23.1108 0.5068 21.6282 0.31353 19.6587C0.149359 17.9853 -0.0032666 16.0515 5.31794e-05 14.2856C0.00332123 12.5545 0.153805 10.8602 0.671928 9.7417C1.04865 8.92873 1.43227 8.3976 1.86724 7.99756C2.285 7.61338 2.73538 7.36994 3.11431 7.14209C3.84875 6.70046 4.79014 6.06961 6.19439 3.81885C6.7744 2.88922 7.58773 1.80146 8.8897 1.40283C9.84607 1.11009 11.1682 0.889184 12.9444 0.88916H19.0547ZM22.6768 17.7808C23.0625 17.7133 23.4299 17.9699 23.4981 18.354C23.5661 18.7383 23.3087 19.1045 22.9229 19.1724C17.4551 20.1334 11.298 19.5745 8.88677 19.1743C8.50028 19.1102 8.23845 18.7458 8.30279 18.3608C8.36719 17.976 8.7328 17.7159 9.11919 17.7798C11.4386 18.1648 17.423 18.7042 22.6768 17.7808ZM5.31353 11.479C5.27493 10.5315 6.45265 10.145 7.3858 10.314L8.6397 10.5405C9.66641 10.7265 11.0895 11.1105 10.8565 12.1274C10.7843 12.4421 10.5258 12.7071 9.98833 12.7837C8.24205 13.0322 5.37638 13.0088 5.31353 11.479ZM24.5186 10.314C25.4517 10.1451 26.6295 10.5315 26.5909 11.479C26.528 13.0088 23.6624 13.0322 21.9161 12.7837C21.3785 12.7072 21.1202 12.4421 21.0479 12.1274C20.8149 11.1104 22.238 10.7265 23.2647 10.5405L24.5186 10.314Z"
                fill="white"
              />
            </svg>
            Cochefy
          </SheetTitle>
        </SheetHeader>
        <ul className="px-4 py-6 flex flex-col gap-2">
          <li className="font-semibold text-base px-4 py-3 rounded-[8px] bg-[var(--context-background-fill-overlay-white-tertiary-bg-fill-overlay-w-tertiary)] hover:bg-gray-500/50">
            <a href="/admin/sources" className="flex gap-3">
              <Server />
              Data Sources
            </a>
          </li>
          <li className="font-semibold text-base px-4 py-3 rounded-[8px] hover:bg-gray-500/50">
            <a href="/admin/advert" className="flex gap-3">
              <TrendingUp />
              Advertising
            </a>
          </li>
          <li className="font-semibold text-base px-4 py-3 rounded-[8px] hover:bg-gray-500/50">
            <a href="/admin/statistics" className="flex gap-3">
              <ChartPie />
              Statistics
            </a>
          </li>
        </ul>
        <SheetFooter className="">
          <div className="flex gap-2 pt-1.5 pb-6 items-center">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="text-blue-700">NS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-base">Name Surname</p>
              <p className="font-normal text-xs text-gray-200">
                example@email.com
              </p>
            </div>
          </div>
          <Separator className="bg-gray-400/60" />
          <Button
            variant="ghost"
            className="font-medium text-base justify-start hover:text-white hover:bg-gray-400/10 px-2.5 py-2"
          >
            <LogOut />
            Log out
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
