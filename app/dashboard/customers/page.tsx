import { redirect } from "next/navigation";

export default function CustomersPage() {
  redirect("/dashboard/customers/customers-list");
}
