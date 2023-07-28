import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function DashboardPage() {
  return (
    <div className="flex justify-end">
        <UserButton appearance={{variables: {colorSuccess: "green"}, baseTheme: dark}} afterSignOutUrl="/"/>
    </div>
  )
}
