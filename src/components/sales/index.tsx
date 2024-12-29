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

const customers = [
  { name: "Thalles Rafael", email: "thallesrafael@email.com", gender: "boy" },
  { name: "Maria Clara", email: "mariaclara@email.com", gender: "girl" },
  { name: "José Silva", email: "jose@email.com", gender: "boy" },
  { name: "Ana Costa", email: "anacosta@email.com", gender: "girl" },
  { name: "Lucas Oliveira", email: "lucas@email.com", gender: "boy" },
  { name: "Juliana Pereira", email: "juliana@email.com", gender: "girl" },
  { name: "Carlos Eduardo", email: "carlos@email.com", gender: "boy" },
  { name: "Fernanda Lima", email: "fernanda@email.com", gender: "girl" },
];

export default function Sales() {

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const firstrInitial = nameParts[0].charAt(0).toUpperCase();
    const secondInitial = nameParts[1].charAt(0).toUpperCase();

    return firstrInitial + secondInitial
  }

  return (
    <Card className="w-full md:w-1/2 ">
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
        <ScrollArea className="h-[339px] w-full rounded-md  p-4">
          {customers.map((cliente) =>
          (<article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={"https://avatar.iran.liara.run/public/" + cliente.gender} />
              <AvatarFallback>{getInitials(cliente.name)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                {cliente.name}
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                {cliente.email}
              </span>
            </div>
          </article>
          ))}
         
         
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
