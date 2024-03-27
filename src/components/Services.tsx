// services.tsx
import React from "react";
import styles from "@/styles/Services.module.scss";
import { ChevronRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

interface Service {
  text: string;
  iconColor: string;
  iconSize: number;
  backgroundColor: string;
  dialogContent?: React.ReactNode;
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div className=" mt-8 flex-col grid grid-cols-2 gap-4 items-center">
      {services.map((service, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className={styles.card}>
              <div className="flex items-center">
                <div
                  className={styles.icon}
                  style={{ backgroundColor: service.backgroundColor }}
                >
                  <service.icon color={service.iconColor} size={service.iconSize} />
                </div>
                <h3 className="font-bold text-lg p-4 justify-end">
                  {service.text}
                </h3>
              </div>
              <ChevronRight color="#6a6a6a"/>
            </div>
          </DialogTrigger>
          {service.dialogContent && (
            <DialogContent className="sm:max-w-[925px]">
              {service.dialogContent}
            </DialogContent>
          )}
        </Dialog>
      ))}
    </div>
  );
};

export default Services;
