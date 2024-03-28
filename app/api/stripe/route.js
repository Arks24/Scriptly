import Stripe from 'stripe'
import {NextResponse} from 'next/server'
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const host = process.env.NEXT_PUBLIC_HOST;

export async function POST(req,res) {
  const  body  = await req.json()
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: "Skryptly Subscription",
                description:`${body?.amount ===14?' Monthly Subscription':' Yearly Subscription' }`,

              },
              unit_amount: body?.amount * 100 || 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        cancel_url: `${window.location.origin}`,
        success_url: `${window.location.origin}/home`,
      });
    return  NextResponse.json({ sessionId: session.id },{status:200})
    } catch (err) {
      return NextResponse.json({ error: "Error checkout session" },{status:500})
    }
  
}