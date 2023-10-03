// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_T2smzjf1_KENVHhGWd5pWVijEhT8xn1i7');
export const dynamic = "force-dynamic";
export async function POST(req) {
  try {
    const data= await  req.json()
    const {email , message , subject} = data;
    console.log(email)
    console.log(message)
    console.log(subject)
    const resData=resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mollahmahbub81@gmail.com',
      subject: subject,
      html: '<p> '+email+ " "+message+'</p>'
    });
    if(resData){
      return NextResponse.json({success:true});
    }
    
  } catch (error) {
    return NextResponse.json({ error });
  }
}