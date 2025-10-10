import * as z from "zod";

export const formSchema = z.object({
  // business pas obligatoire donc literal
  business: z.union([
    z.string().min(1, {error: "Le nom de l'entreprise est trop court."}).max(200, {error: "Le nom de l'entreprise est trop long."}).trim(),
    z.literal("")
  ]),
  lastname: z.string().min(2, {error: "Le nom est trop court."}).max(200, {error: "Le nom est trop long."}).trim(),
   // firstname pas obligatoire donc literal
  firstname: z.union([
    z.string().min(2, {error: "Le prénom est trop court."}).max(200, {error: "Le prénom est trop long."}).trim().optional(),
    z.literal(""),
  ]),
  email: z.email({error:"Le format de l'email est incorrect."}),
  message: z.string().min(1, {error: "Le message est trop court."}).trim(),
})