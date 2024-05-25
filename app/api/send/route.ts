// re_MdPWmoAc_LN72wvYCp7DBMMYCucK2miza

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from:'Acme <onboarding@resend.dev>',
        to: ['enmanuelrondon54@gmail.com'],
        subject: 'Ing-Enmanuel',
        react:EmailTemplate({
          firstName:dataForm.username,
          message:dataForm.message,
          email:dataForm.email
        }),
        text:'Ing-Enmanuel'
      })
      return Response.json(data)
    }
    catch (error) {
      return Response.json({error})
    }
  } catch (error) {
    return Response.json({ error });
  }
}
