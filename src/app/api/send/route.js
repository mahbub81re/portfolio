// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_T2smzjf1_KENVHhGWd5pWVijEhT8xn1i7");
export const dynamic = "force-dynamic";
export async function POST(req) {
  return NextResponse.json({req})
  // try {
  //   const da = req.json();
    
  //   const {email , message , sub} = da;
  //   console.log(email)
  // //   const data = await resend.emails.send({
  // //     from: "Mahbub <mollahmahbub81@gmail.com>",
  // //     to: "mollahmahbub81@gmail.com",
  // //     subject:"sub",
  // //     react: (
  // //       <>
  // //         <p>{message}</p>
  // //       </>
  // //     ),
  // //   });
  // //  console.log(data)
  //   return NextResponse.json(email);
  // } catch (error) {
  //   return NextResponse.json({ error });
  // }
}
