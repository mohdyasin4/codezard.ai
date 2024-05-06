import React from "react";
import styles from "@/styles/Services.module.scss";
import { ChevronRight, Megaphone } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface Service {
  [x: string]: any;
  text: string;
  iconColor: string;
  iconSize: number;
  backgroundColor: string;
  dialogContent?: React.ReactNode;
  alertContent?: React.ReactNode;
  onclick?: () => void;
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div className="mt-8 flex-col grid grid-cols-2 gap-4 items-center">
      {services.map((service, index) => (
        <React.Fragment key={index}>
          {service.dialogContent && ( // Only render DialogTrigger if dialogContent exists
            <Dialog>
              <DialogTrigger asChild>
                <div className={styles.card}>
                  <div className="flex items-center">
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: service.backgroundColor }}
                    >
                      <service.icon
                        color={service.iconColor}
                        size={service.iconSize}
                      />
                    </div>
                    <h3 className="font-bold text-lg p-4 justify-end">
                      {service.text}
                    </h3>
                  </div>
                  <ChevronRight color="#6a6a6a" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[925px]">
                {service.dialogContent}
              </DialogContent>
            </Dialog>
          )}
          {service.alertContent && ( // Only render AlertDialogTrigger if alertContent exists
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className={styles.card}>
                  <div className="flex items-center">
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: service.backgroundColor }}
                    >
                      <service.icon
                        color={service.iconColor}
                        size={service.iconSize}
                      />
                    </div>
                    <h3 className="font-bold text-lg p-4 justify-end">
                      {service.text}
                    </h3>
                  </div>
                  <ChevronRight color="#6a6a6a" />
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex flex-row items-center"><Megaphone size={24} className="mr-2"/> New Feature Coming Soon!</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                We're working hard to bring you an exciting new feature. Stay tuned for updates and be the first to experience it when it arrives!
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {!service.dialogContent && !service.alertContent && ( // Render service without any trigger if both dialogContent and alertContent don't exist
            <div className={styles.card}>
              <div className="flex items-center">
                <div
                  className={styles.icon}
                  style={{ backgroundColor: service.backgroundColor }}
                >
                  <service.icon
                    color={service.iconColor}
                    size={service.iconSize}
                  />
                </div>
                <h3 className="font-bold text-lg p-4 justify-end">
                  {service.text}
                </h3>
              </div>
              <ChevronRight color="#6a6a6a" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Services;
