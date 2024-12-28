import { CircleDollarSign, DollarSign, DollarSignIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

export default function Sales() {
  return (
    <Card className="flex-1 max-h-xs">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle>Ultimos Clientes</CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>
          Ultimos clientes nas ultimas 24 horas.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md  p-4">
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Thalles Rafael
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                thallesrafael@email.com
              </span>
            </div>
          </article>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
