import { CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import AddSource from "../AddSource/AddSource";
import { useLocation } from "react-router-dom";
import AddBanner from "../AddBanner/AddBanner";

export default function AdminPanelHeader() {
  const location = useLocation();

  const routes = {
    admin: location.pathname.startsWith("/admin/sources"),
    advert: location.pathname.startsWith("/admin/advert"),
    statistics: location.pathname.startsWith("/admin/statistics"),
  };

  return (
    <div className="border-b pt-6 pr-10 pb-4 pl-6 border-gray-400">
      <div className="container max-h-[72px] mx-auto flex justify-between">
        <a href="/" className="font-medium text-base flex items-center">
          Data Sources
        </a>
        {routes.admin && (
          <AddSource
            trigger={
              <Button
                variant="default"
                className="py-1.5 px-2.5 text-sm medium bg-[#2175FE] bg-[linear-gradient(220deg,rgba(42,87,252,1)_30%,rgba(150,72,246)_125%)]"
              >
                <CirclePlus />
                Add Source
              </Button>
            }
          />
        )}

        {routes.advert && (
          <AddBanner
            trigger={
              <Button
                variant="default"
                className="py-1.5 px-2.5 text-sm medium bg-[#2175FE] bg-[linear-gradient(220deg,rgba(42,87,252,1)_30%,rgba(150,72,246)_125%)]"
              >
                <CirclePlus />
                Add Banner
              </Button>
            }
          />
        )}
      </div>
    </div>
  );
}
